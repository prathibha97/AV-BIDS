import { Button } from '@material-tailwind/react';

import { differenceInDays, parseISO } from 'date-fns';
import { FC } from 'react';
import EVENTS_01 from '../../../assets/09_events/events01.png';
import EVENTS_02 from '../../../assets/09_events/location.png';
import SAVE_ICON from '../../../assets/09_events/save-icon.png';
import { Event } from '../../../types';
import api from '../../../utils/api';

interface EventListingCardProps {
  event: Event;
}

const EventListingCard: FC<EventListingCardProps> = ({ event }) => {
  const handleSaveEvent = async () => {
    try {
      await api.post(`/events/save/${event._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const proposalDueDate = parseISO(event.proposalDueDate);
  const currentDate = new Date();

  const daysLeft = differenceInDays(proposalDueDate, currentDate);
  return (
    <div className='mb-6'>
      <div className='flex items-center justify-center bg-[#fff] drop-shadow-lg gap-8 p-8 rounded-lg mx-4'>
        <div>
          <div className='flex items-center gap-4'>
            <div>
              <img src={EVENTS_01} alt='aad' className='w-[73px]' />
            </div>

            <div>
              <div className='flex items-center justify-end'>
                <h2 className='text-[18px] mb-1'>{event.title}</h2>
              </div>

              {/* <div className="flexx gap-36">
                  <p className="text-[16px] mb-1">
                    Event Date: 10/10/2023 - 10/15/2023
                  </p>
                  <p className="text-[16px]">$70,000 - $150,000</p>
                </div> */}

              <div className='flex gap-1 items-center mb-1'>
                <img
                  src={EVENTS_02}
                  alt='aad'
                  className='object-scale-down w-[20px]'
                />
                <p className='text-[16px] text-[#9381FF]'>
                  {event?.address?.city}, {event?.address?.state}
                </p>
              </div>

              <p className='text-[16px] mb-1'>
                {event.eventCategory}, {event.eventSubCategory}
              </p>
            </div>
          </div>

          <div className='flex items-center gap-16 mt-4'>
            {/* <div className="flex gap-1 items-center mb-1">
                <img
                  src={EVENTS_02}
                  alt="aad"
                  className="object-scale-down w-[20px]"
                />
                <p className="text-[16px] text-[#9381FF]">Phoenix, Arizona</p>
              </div>

              <p className="text-[16px] mb-1">Corporate, General Meeting</p> */}

            <div className='flex gap-36'>
              <p className='text-[16px] mb-1'>
                Event Date: {event.eventStartDate} - {event.eventEndDate}
              </p>
              <p className='text-[16px] mb-1'>{event.eventBudget}</p>
            </div>
            <div className='bg-[#E4FFEA] rounded-full w-24 mb-4'>
              <p className='text-[#178751] text-[14px] text-center font-semibold px-2 py-1'>
                {event.eventType}
              </p>
            </div>
          </div>
        </div>

        <div className=''>
          <div className='flex justify-end' onClick={() => handleSaveEvent()}>
            <img src={SAVE_ICON} alt='aad' className='w-[23px]' />
          </div>

          <Button
            variant='filled'
            color='indigo'
            size='sm'
            className='rounded-md w-36 py-4 mt-4 px-8 bg-primary font-poppins'
          >
            <span className='text-white normal-case'>Apply Now</span>
          </Button>
          <p className='text-[16px] mt-4 text-center'>
            {daysLeft > 0
              ? `${daysLeft} days left to apply`
              : 'Application closed'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventListingCard;
