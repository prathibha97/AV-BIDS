import { FC } from 'react';
import REFRESH_ICON from '../../../assets/14_messages/refresh.png';

const ConversationFilter: FC = () => {
  return (
    <div className='border-b border-[#EDECF1] p-4'>
      <div className='flex items-start justify-between gap-4'>
        <div className='flex items-center gap-4'>
          <p className='text-base font-medium text-gray-700'>All</p>
          <p className='text-base font-medium text-gray-700'>Unread (1)</p>
        </div>

        <img
          src={REFRESH_ICON}
          alt='refresh'
          className='object-contain w-4 h-4 text-gray-500'
        />
      </div>
    </div>
  );
};

export default ConversationFilter;
