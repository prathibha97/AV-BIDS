import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import { StripeSubscription } from '../../../types';
import api from '../../../utils/api';

interface CurrentPlanProps {}

const CurrentPlan: FC<CurrentPlanProps> = () => {
  const [currentPlan, setCurrentPlan] = useState<StripeSubscription | null>(
    null
  );
  const subscriptionId = useAppSelector(
    (state: RootState) => state.stripe?.subscription?.subscriptionId
  );

  useEffect(() => {
    const fetchPlan = async () => {
      const { data } = await api.get(
        `/stripe/retrieve-subscription?subscriptionId=${subscriptionId}`
      );
      return setCurrentPlan(data);
    };
    fetchPlan();
  }, [subscriptionId]);

  console.log(currentPlan);
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
            <h2 className='text-purple_two text-[20px] mb-2'>
              {/* @ts-ignore */}
              ${currentPlan?.plan.amount_decimal / 100}
            </h2>
            <h2 className='text-[14px] text-[#000] mb-2'>
              {/* @ts-ignore */}
              {currentPlan?.plan.interval === 'month'
                ? 'Monthly'
                : 'Annual'}{' '}
              Plan
            </h2>
            <p className='text-[#353535] mb-3'>
              Your subscription renews{' '}
              {new Date(
                // @ts-ignore
                currentPlan?.current_period_end * 1000
              ).toLocaleDateString()}
            </p>

            <p className='text-purple_two text-[14px] underline'>
              Cancel Current Plan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentPlan;
