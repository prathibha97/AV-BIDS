import { Avatar } from '@material-tailwind/react';
import { format } from 'date-fns';
import { FC } from 'react';
import { User } from '../../../types';
import { cn } from '../../../utils/utils';

interface MessageProps {
  own?: boolean;
  message: any;
  user?: User | null;
}

const Message: FC<MessageProps> = ({ own, message, user }) => {
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
          <p className='text-[#888888]'>
            {format(new Date(message.createdAt), 'MMM d, yyyy')}
          </p>
        </div>

        <div className={messageBodyClasses}>
          <p>{message.text}</p>
        </div>
      </div>

      <Avatar
        variant='circular'
        size='sm'
        alt='avatar'
        className='border border-gray-900 self-start'
        src={
          own
            ? `https://av-bids-bucket.s3.ap-south-1.amazonaws.com/${user?.imageUrl}`
            : 'https://image.pngaaa.com/569/2189569-middle.png'
        }
      />
    </div>
  );
};

export default Message;
