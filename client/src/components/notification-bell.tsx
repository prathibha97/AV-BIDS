import {
  Button,
  Popover,
  PopoverContent,
  PopoverHandler,
  Spinner,
} from '@material-tailwind/react';
import { useEffect, useRef, useState } from 'react';
import { MdNotifications } from 'react-icons/md';
import { Socket, io } from 'socket.io-client';
import { useGetCurrentUser } from '../app/hooks/useUser';
import { Notification } from '../types';
import api from '../utils/api';
import NotificationItem from './NotificationItem';

const NotificationBell = () => {
  const [userNotifications, setUserNotifications] = useState<Notification[]>(
    []
  );
  const [loading, setLoading] = useState(false);

  const socket = useRef<Socket | null>(null);
  const user = useGetCurrentUser();

  useEffect(() => {
    socket.current = io('ws://localhost:5005');
    socket.current.emit('addUser', user?._id);

    socket.current.on('eventUpdated', (data) => {
      // Handle real-time update for new notifications
      setUserNotifications((prevNotifications) => [...prevNotifications, data]);
    });

    return () => {
      // Cleanup function to close the socket connection
      socket.current?.disconnect();
    };
  }, [user?._id]);

  useEffect(() => {
    // Fetch user notifications on initial load
    const fetchUserNotifications = async () => {
      try {
        const { data } = await api.get(`/notifications/user/${user?._id}`);
        setUserNotifications(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserNotifications();
  }, [user?._id]);

  const unreadCount = userNotifications?.filter(
    (notification) => !notification.isRead
  ).length;

  const handleClearNotifications = async () => {
    setLoading(true);
    try {
      await api.delete(`/notifications/user/${user?._id}`);
      const { data } = await api.get(`/notifications/user/${user?._id}`);
      setUserNotifications(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Popover placement='top-end'>
      <PopoverHandler>
        <div className='relative'>
          {unreadCount > 0 && (
            <span className='bg-red-500 text-white rounded-full px-2 py-0.5 absolute top-0 right-0 -mt-1 -mr-1 text-[12px]'>
              {unreadCount}
            </span>
          )}
          <MdNotifications className='text-[35px] text-black' />
        </div>
      </PopoverHandler>
      <PopoverContent>
        <div className='flex flex-col w-full space-y-3 max-h-[450px]'>
          <div className='overflow-y-auto'>
            {userNotifications.length > 0 ? (
              userNotifications.map((notification) => (
                <NotificationItem
                  key={notification._id}
                  user={user}
                  notification={notification}
                  setUserNotifications={setUserNotifications}
                />
              ))
            ) : (
              <p className='text-center text-gray-600'>No new notifications</p>
            )}
          </div>
          {userNotifications.length > 0 && (
            <Button onClick={handleClearNotifications} className='bg-primary'>
              <div className='flex items-center justify-center gap-3'>
                {loading && <Spinner className='w-4 h-4' />}
                <span>Clear All</span>
              </div>
            </Button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationBell;
