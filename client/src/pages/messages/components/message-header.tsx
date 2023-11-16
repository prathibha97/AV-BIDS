import { Avatar } from '@material-tailwind/react';
import PROFILE_PHOTO from '../../../assets/14_messages/profile photo.jpg';
import { FC } from 'react'

interface MessageHeaderProps {
  
}

const MessageHeader: FC<MessageHeaderProps> = ({}) => {
  return (
    <div className='border-b border-[#EDECF1] row-span-1 p-4 '>
      <div className='flex items-center gap-4'>
        <Avatar
          variant='circular'
          size='sm'
          alt='avatar'
          className='border border-gray-900'
          src={PROFILE_PHOTO}
        />

        <div className='flex flex-col'>
          <h2 className='text-[20px] font-semibold'>Holden Cox</h2>
          <p>ACME AV</p>
          <p>Subject: AV Requirements</p>
        </div>
      </div>
    </div>
  );
}

export default MessageHeader