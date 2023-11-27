import { FC } from 'react'

interface CurrentPlanProps {
  
}

const CurrentPlan: FC<CurrentPlanProps> = () => {
  return (
    <section className='bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6'>
      <div className='grid grid-cols-2 gap-4'>
        <div>
          <div>
            <h2 className='text-[18px] font-semibold mb-3'>
              Current Plan (Standard)
            </h2>

            <p className='text-14 text-[#353535]'>
              Full access to the AV Bids site and two company users are
              included.
            </p>
          </div>
        </div>

        <div>
          <div>
            <h2 className='text-purple_two text-[20px] mb-2'>$399</h2>
            <h2 className='text-[14px] text-[#000] mb-2'>Monthly Plan</h2>
            <p className='text-[#353535] mb-3'>
              Your subscription renews July 12th, 2023
            </p>

            <p className='text-purple_two text-[14px] underline'>
              Cancel Current Plan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentPlan