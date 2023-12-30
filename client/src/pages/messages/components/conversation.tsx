import { Avatar } from '@material-tailwind/react';
import { format } from 'date-fns';
import { FC, useEffect, useState } from 'react';
import PROFILE_PHOTO from '../../../assets/14_messages/profile photo.jpg';
import { Conversation as ConversationType, User } from '../../../types';
import api from '../../../utils/api';

interface ConversationProps {
  currentUser: User | null;
  conversation: ConversationType;
}

const Conversation: FC<ConversationProps> = ({ conversation, currentUser }) => {
  const [user, setUser] = useState<User | null>(null);
  useEffect(() => {
    const friendId = conversation?.members?.find((m) => m !== currentUser?._id);

    const getUser = async () => {
      try {
        const res = await api(`/users/${friendId}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [currentUser, conversation]);
  return (
    <div>
      <div className='border-b border-[#EDECF1] p-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar
              variant='circular'
              size='sm'
              alt='avatar'
              className='border border-gray-900'
              src={PROFILE_PHOTO}
            />

            <div className='flex flex-col'>
              <h2 className='text-[20px] font-semibold'>
                {user && user?.firstName} {user && user?.lastName}
              </h2>
              <p>Subject: AV Requirements</p>
            </div>
          </div>
          <p>
            {conversation.createdAt
              ? format(new Date(conversation.createdAt as Date), 'MMM dd')
              : 'Invalid Date'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
