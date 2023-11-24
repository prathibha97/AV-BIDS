import { FC } from 'react';
import { Event } from '../../../../types';

interface EventInfoProps {
  event: Event | null;
}

const EventInfo: FC<EventInfoProps> = ({ event }) => {

  return (
    <div className='grid grid-cols-2 gap-4 bg-[#F3F1FB] p-6 rounded-lg'>
      {renderInfo('Event Type', event?.eventType!)}
      {renderInfo('Budget', event?.eventBudget!)}
      {renderInfo('Event Category', event?.eventCategory!)}
      {renderInfo('Location', `${event?.address?.city}, ${event?.address?.state}`)}
      {renderInfo('Sub Category', event?.eventSubCategory!)}
      {renderInfo('Proposals Due', 'August 24, 2023')}
    </div>
  );
};

const renderInfo = (label: string, value: string) => (
  <div key={label}>
    <div>
      <h2 className='text-[18px]'>{label}</h2>
      <p className='text-[18px]'>{value}</p>
    </div>
  </div>
);

export default EventInfo;

