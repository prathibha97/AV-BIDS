import EVENTDETAILS_03 from '../../../assets/13_event_details_page/Rectangle 3759.png';
import EVENTDETAILS_02 from '../../../assets/13_event_details_page/carbon_time.png';
import EVENTDETAILS_01 from '../../../assets/13_event_details_page/exclamation-circle.png';

import SPAM_ICON from '../../../assets/13_event_details_page/spam.png';

import { Button, Textarea } from '@material-tailwind/react';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Event, UserWithReviewWithEvent } from '../../../types';
import api from '../../../utils/api';
import Attachments from './components/attachments';
import EventInfo from './components/event-info';
import EventPlanner from './components/event-planner';
import OtherEvents from './components/other-events';

export function Index() {
  const { id } = useParams();
  //@ts-ignore
  const [event, setEvent] = useState<Event>({});
  const [userEvents, setUserEvents] = useState<Event[]>([]);
  //@ts-ignore
  const [planner, setPlanner] = useState<UserWithReviewWithEvent>({});
  const [loading, setLoading] = useState(false);

  const fetchEventDetails = async () => {
    try {
      setLoading(true);
      const { data } = await api.get(`/events/${id}`);
      setEvent(data);
    } catch (error) {
      console.error('Error fetching event details:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchUserEvents = async (createdBy: string | undefined) => {
    try {
      setLoading(true);
      if (createdBy) {
        const { data } = await api.get(`/events/user/${createdBy}`);
        setUserEvents(data);
      }
    } catch (error) {
      console.error('Error fetching user events:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchEventPlanner = async (createdBy: string | undefined) => {
    try {
      setLoading(true);
      if (createdBy) {
        const { data } = await api.get(`/users/${createdBy}`);
        setPlanner(data);
      }
    } catch (error) {
      console.error('Error fetching planner info:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, []);

  useEffect(() => {
    fetchUserEvents(event?.createdBy);
  }, [event?.createdBy]);

  useEffect(() => {
    fetchEventPlanner(event?.createdBy);
  }, [event?.createdBy]);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <div className='mx-auto mb-8'>
      <div className='grid lg:grid-cols-3 gap-4 content-center'>
        <div className='col-span-2 flex justify-center items-center px-8'>
          <section>
            <div>
              <div className='bg-[#FFE8E8] p-4 rounded-lg mb-4'>
                <div className='flex items-center gap-2'>
                  <img
                    src={EVENTDETAILS_01}
                    alt='aad'
                    className='object-scale-down w-[34px]'
                  />
                  <p className='text-[20px] text-[#C31717]'>
                    This event has expired
                  </p>
                </div>
              </div>

              <div>
                <h2 className='text-primary text-[40px] mb-4'>
                  {event?.title}
                </h2>
              </div>
              <div className='flex mb-4 gap-8'>
                <div className='flex items-center gap-2'>
                  <img
                    src={EVENTDETAILS_02}
                    alt='aad'
                    className='object-scale-down w-[32px]'
                  />
                  <p className='text-[18px]'>
                    Posted on{' '}
                    {event?.createdAt
                      ? format(new Date(event.createdAt), 'M/dd/yyyy')
                      : 'N/A'}
                  </p>
                </div>

                <div className='flex items-center gap-2'>
                  <img
                    src={EVENTDETAILS_02}
                    alt='aad'
                    className='object-scale-down w-[32px]'
                  />
                  <p className='text-[18px]'>
                    Updated on{' '}
                    {event?.createdAt
                      ? format(new Date(event.updatedAt), 'M/dd/yyyy')
                      : 'N/A'}
                  </p>
                </div>
              </div>
              <div className='mb-6'>
                <img
                  src={EVENTDETAILS_03}
                  alt='aad'
                  className='object-scale-down'
                />
              </div>
              <div className='bg-[#F3F1FB] p-6 mb-16 rounded-lg'>
                <h2 className='text-[22px] mb-4'>Description</h2>
                <div dangerouslySetInnerHTML={{ __html: event.description }} />
              </div>
              <div>
                <h2 className='text-[22px] mb-4'>
                  Submit a question about the event
                </h2>
                <p className='text-[20px] mb-2'>Description</p>
                <div className='rounded-lg'>
                  <div className='mb-6'>
                    <Textarea label='Description' className='bg-[#f1eefc]' />
                  </div>

                  <div className='flex justify-end mb-16'>
                    <Button
                      variant='filled'
                      color='indigo'
                      size='sm'
                      className='rounded-full w-30 py-3 px-6 mt-4  bg-primary font-poppins'
                    >
                      <span className='text-white'>Submit</span>
                    </Button>
                  </div>
                </div>
              </div>
              <OtherEvents events={userEvents} />
            </div>
          </section>
        </div>
        <div className='flex justify-center items-center'>
          <section>
            <div className='mb-4'>
              <Button
                variant='filled'
                color='indigo'
                size='sm'
                className='rounded-full w-full py-4 mt-4 px-8 bg-primary font-poppins'
              >
                <span className='text-white'>Submit Proposal</span>
              </Button>

              <Button
                variant='outlined'
                size='sm'
                className='rounded-full w-full py-4 mt-4 px-8 font-poppins'
              >
                <span className=' text-black'>Save Event</span>
              </Button>
            </div>

            <div className='flex items-center gap-3 mb-6 '>
              <img
                src={SPAM_ICON}
                alt='aad'
                className='object-scale-down w-[24px]'
              />
              <p className='text-[18px] underline'>Flag as spam</p>
            </div>
            <EventInfo event={event} />
            <Attachments event={event} />
            <EventPlanner planner={planner} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default Index;
