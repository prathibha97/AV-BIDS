import { Button, Spinner } from '@material-tailwind/react';
import { FC } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import EVENTDETAILS_03 from '../../../../assets/13_event_details_page/Rectangle 3759.png';
import EVENTDETAILS_04 from '../../../../assets/13_event_details_page/location.png';
import { Event } from '../../../../types';

interface OtherEventsProps {
  events: Event[];
  loading: boolean;
}

const OtherEvents: FC<OtherEventsProps> = ({ events ,loading}) => {
  const navigate = useNavigate();
  const { id } = useParams();

  const filteredEvents = events.filter((event) => event._id !== id);
  const limitedEvents = filteredEvents.slice(0, 3);

  return (
    <div>
      {loading ? (
        <div className='flex items-center justify-center h-full'>
          <Spinner />
        </div>
      ) : (
        <>
          <h2 className='text-[20px] mb-4'>Other events by this client</h2>

          {limitedEvents.length > 0 ? (
            limitedEvents?.map((event) => (
              <div key={event._id} className='mb-6'>
                <div
                  className='flex items-center bg-[#fff] gap-8 p-3 rounded-lg hover:cursor-pointer'
                  onClick={() => {
                    navigate(`/events/${event._id}`);
                    window.location.reload();
                  }}
                >
                  <div>
                    <img
                      src={EVENTDETAILS_03}
                      alt='Event Poster'
                      className='object-scale-down w-[181px] h-[121px]'
                    />
                  </div>

                  <div>
                    <h2 className='text-[20px]'>{event.title}</h2>

                    <div className='flex gap-36'>
                      <p className='text-[18px]'>
                        Event Date: {event.eventStartDate} -{' '}
                        {event.eventEndDate}
                      </p>
                      <p className='text-[18px]'>{event.eventBudget}</p>
                    </div>

                    <div className='flex items-center gap-16 mt-4'>
                      <div className='flex gap-2 items-center'>
                        <img
                          src={EVENTDETAILS_04}
                          alt='Location Icon'
                          className='object-scale-down w-[20px]'
                        />
                        <p className='text-[16px] text-[#9381FF]'>
                          {event.address.city}, {event.address.state}
                        </p>
                      </div>
                      <p className='text-[16px]'>
                        {event.eventCategory}, {event.eventSubCategory}
                      </p>
                      <Button
                        variant='filled'
                        color='green'
                        size='sm'
                        className='rounded-full w-30 py-2 px-3 bg-[#B5F9C4] font-poppins'
                      >
                        <p className='text-[#178751] font-semibold'>
                          {event.eventType}
                        </p>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className='mb-10 text-gray-500'>
              There are no other events by this client
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default OtherEvents;
