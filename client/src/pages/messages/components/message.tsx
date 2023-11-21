import { Avatar } from '@material-tailwind/react';
import { FC } from 'react';
import PROFILE_PHOTO from '../../../assets/14_messages/profile photo.jpg';
import { cn } from '../../../utils/utils';
import { format } from 'date-fns';

interface MessageProps {
  own?: boolean;
  message: any
}

const Message: FC<MessageProps> = ({ own ,message}) => {
  const messageContainerClasses = cn(
    'flex gap-3',
    own ? 'flex justify-end items-end' : 'flex items-start'
  );

  const messageBodyClasses = cn(
    'bg-[#F3F1FB] p-4 rounded-tl-none rounded-tr-md rounded-br-md rounded-bl-md max-w-[300px] text-white',
    own
      ? 'bg-[#8645FF] rounded-tl-md rounded-tr-none rounded-br-md rounded-bl-md'
      : 'text-[#353535]'
  );

  return (
    <div className={messageContainerClasses}>
      <div>
        <div className='flex items-center gap-3'>
          <p className='text-[#888888]'>{format(new Date(message.createdAt), 'MMM d, yyyy')}</p>
        </div>

        <div className={messageBodyClasses}>
          <p>
            {message.text}
          </p>
        </div>
      </div>

      <Avatar
        variant='circular'
        size='sm'
        alt='avatar'
        className='border border-gray-900 self-start'
        src={PROFILE_PHOTO}
      />
    </div>
  );
};

export default Message;
