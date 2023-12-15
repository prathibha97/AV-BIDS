import { IconButton, ListItem } from '@material-tailwind/react';
import { formatDistance } from 'date-fns';
import { FC } from 'react';
import { MdCheckCircle } from 'react-icons/md';
import { Notification, User } from '../types';
import api from '../utils/api';

interface NotificationItemProps {
  user:User | null;
  notification: Notification;
  setUserNotifications: React.Dispatch<React.SetStateAction<Notification[]>>;
}

const NotificationItem: FC<NotificationItemProps> = ({
  user,
  notification,
  setUserNotifications,
}) => {
  const timeAgo =
    notification.createdAt &&
    formatDistance(new Date(notification.createdAt), new Date(), {
      addSuffix: true,
    });

  const handleMarkAsRead = async () => {
    try {
      await api.put(`/notifications/${notification._id}`);
      const { data } = await api.get(`/notifications/user/${user?._id}`);
      setUserNotifications(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ListItem className='flex items-center gap-3 p-4 bg-[#f3f1fb] shadow-sm rounded-md transition duration-300 hover:shadow-md mb-2'>
      {notification?.isRead === false && (
        <IconButton
          size='sm'
          className='bg-[#8644ff]'
          onClick={handleMarkAsRead}
        >
          <MdCheckCircle className='w-4 h-4' />
        </IconButton>
      )}
      <div className='flex-1'>
        <p className='text-[#333] text-lg font-semibold mb-1'>
          {notification.message}
        </p>
        <span className='text-[#666] text-sm'>{timeAgo}</span>
      </div>
    </ListItem>
  );
};

export default NotificationItem;
