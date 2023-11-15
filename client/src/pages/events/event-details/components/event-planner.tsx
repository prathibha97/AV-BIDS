import { FC } from 'react'
import STAR_ICON from '../../../../assets/13_event_details_page/Star.png';
import STAR_OUTLINE from '../../../../assets/13_event_details_page/star-outline.png';


interface EventPlannerProps {
  
}

const EventPlanner: FC<EventPlannerProps> = ({}) => {
  return (
    <div className='bg-[#F3F1FB] mt-8 p-6 rounded-lg'>
      <h2 className='text-[22px] mb-6'>About the event planner</h2>
      <div className='flex items-center gap-4'>
        <div className='flex items-center'>
          <img
            src={STAR_ICON}
            alt='aad'
            className='object-scale-down w-[26px]'
          />
          <img
            src={STAR_ICON}
            alt='aad'
            className='object-scale-down w-[26px]'
          />
          <img
            src={STAR_ICON}
            alt='aad'
            className='object-scale-down w-[26px]'
          />
          <img
            src={STAR_ICON}
            alt='aad'
            className='object-scale-down w-[26px]'
          />
          <img
            src={STAR_OUTLINE}
            alt='aad'
            className='object-scale-down w-[26px]'
          />
        </div>
        <div>
          <p className='text-18px'>4.59 of 99 reviews</p>
        </div>
      </div>

      <div className='flex items-center gap-12 mt-4'>
        <div>
          <h2 className='text-[18px]'>United States</h2>
          <p className='text-[18px]'>United States</p>
        </div>

        <div>
          <h2 className='text-[18px]'>85 Events Posted</h2>
          <p className='text-[18px]'>2 currently listed</p>
        </div>
      </div>
      <p className='text-[18px] mt-6'>Member since 03/19/2023 </p>
    </div>
  );
}

export default EventPlanner