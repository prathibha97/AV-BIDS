import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from '@material-tailwind/react';
import { format } from 'date-fns';
import { useEffect, useRef, useState } from 'react';
import { MdLens, MdNotifications } from 'react-icons/md';
import { Socket, io } from 'socket.io-client';
import { useGetCurrentUser } from '../app/hooks/useUser';
import { Notification } from '../types';
import api from '../utils/api';

const NotificationBell = () => {
  const [unreadCount, setUnreadCount] = useState(0);
  const [userNotifications, setUserNotifications] = useState<Notification[]>(
    []
  );

  const socket = useRef<Socket | null>(null);
  const user = useGetCurrentUser();

  useEffect(() => {
    socket.current = io('ws://www.avbids.com:5005');
    socket.current.emit('addUser', user?._id);

    socket.current.on('eventUpdated', (data) => {
      // Handle real-time update for new notifications
      setUserNotifications((prevNotifications) => [...prevNotifications, data]);
      setUnreadCount((prevCount) => prevCount + 1);
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
        const { data } = await api.get(`/notifications/${user?._id}`);
        setUnreadCount(data.length);
        setUserNotifications(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserNotifications();
  }, [user?._id]);

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
        <div className='bg-[#334434] cursor-pointer'>
          <div className='bg-[#F3F1FB]'>
            {userNotifications.length > 0 ? (
              userNotifications.map((notification) => (
                <div key={notification._id}>
                  <div className='flex items-center justify-between mb-1'>
                    <div className='flex items-center gap-1'>
                      {/* <p className='text-[#000] text-[14px] font-medium'>
                        {format(new Date(notification.createdAt), 'MMM d, yyyy')}
                      </p> */}
                      <MdLens className='text-[6px]' />
                    </div>
                  </div>
                  <p className='text-[#000] text-[16px] font-medium mb-1'>
                    {notification.message}
                  </p>
                </div>
              ))
            ) : (
              <p>No new notifications</p>
            )}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default NotificationBell;
