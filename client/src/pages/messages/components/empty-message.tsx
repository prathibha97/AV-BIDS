import EMPTY_MESSAGE from '../../../assets/14_messages_empty/messages-empty.png';

const EmptyMessage = () => {
  return (
    <div className='h-[600px] flex items-center justify-center'>
      <div>
        <div className='flex items-center justify-center mb-3'>
          <img
            src={EMPTY_MESSAGE}
            alt='aad'
            className='object-contain W-[90px]'
          />
        </div>

        <h2 className='font-semibold text-[22px] text-center mb-3'>
          Welcome to messages
        </h2>
        <p className='text-center'>
          When an av provider needs more information, it will show up here
        </p>
      </div>
    </div>
  );
};

export default EmptyMessage;
