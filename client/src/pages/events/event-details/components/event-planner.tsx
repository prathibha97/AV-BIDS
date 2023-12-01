import { FC } from 'react';
import { UserWithReviewWithEvent } from '../../../../types';

interface EventPlannerProps {
  planner: UserWithReviewWithEvent | null;
}

const EventPlanner: FC<EventPlannerProps> = ({ planner }) => {
  // Calculate the average rating
  // const averageRating =
  //   planner &&
  //   planner?.reviews?.reduce((sum, review) => sum + review.rating, 0) /
  //     planner?.reviews?.length;

  const currentDate = new Date();

  const activeEventsCount =
    (planner &&
      planner.events?.filter((event) => {
        const eventStartDate = new Date(event.eventStartDate);
        const eventEndDate = new Date(event.eventEndDate);

        return currentDate <= eventStartDate && currentDate <= eventEndDate;
      }).length) ||
    0;

  return (
    <div className='bg-[#F3F1FB] mt-8 p-6 rounded-lg'>
      <h2 className='text-[20px] mb-6'>About the event planner</h2>

      <div className='flex items-center gap-12 mt-4'>
        {/* TODO: update address dynamically */}
        <div className='text-red-500'>
          <h2 className='text-[16px]'>United States</h2>
          <p className='text-[16px]'>Arizona</p>
        </div>

        <div>
          <h2 className='text-[18px]'>{`${planner?.events?.length} Events Posted`}</h2>
          <p className='text-[18px]'>
            {`${activeEventsCount} currently listed`}
          </p>
        </div>
      </div>
      <p className='text-[18px] mt-6'>
        {planner && planner.createdAt
          ? `Member since ${new Date(planner.createdAt).toLocaleDateString()}`
          : 'Member since N/A'}
      </p>
    </div>
  );
};

export default EventPlanner;
