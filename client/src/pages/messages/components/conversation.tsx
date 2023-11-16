import { Avatar } from '@material-tailwind/react';
import { FC, useEffect, useState } from 'react';
import PROFILE_PHOTO from '../../../assets/14_messages/profile photo.jpg';
import { User } from '../../../types';
import api from '../../../utils/api';

interface ConversationProps {
  messagesAvailable: boolean;
  currentUser: User;
  conversation: any;
}

const Conversation: FC<ConversationProps> = ({
  messagesAvailable,
  conversation,
  currentUser,
}) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    // @ts-ignore
    const friendId = conversation.members.find((m) => m !== currentUser._id);

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
        {messagesAvailable ? (
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
                  {/* @ts-ignore */}
                  {user && user.firstName} {user && user.lastName}
                </h2>
                <p>Subject: AV Requirements</p>
              </div>
            </div>
            <p>May 9</p>
          </div>
        ) : (
          <div className='flex items-center justify-center mt-4'>
            <h2 className='text-[17px] font-semibold'>You have no messages</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Conversation;
