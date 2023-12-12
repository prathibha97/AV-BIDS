import { FC } from 'react';
import {
  setPlan,
  setSubscription,
} from '../../../app/features/stripe/stripeSlice';
import { useAppDispatch } from '../../../app/hooks';
import { useGetCurrentUser } from '../../../app/hooks/useUser';
import { StripePrice } from '../../../types';
import api from '../../../utils/api';

interface PaymentPlanCardProps {
  src: string;
  plan: StripePrice;
  price: number;
  priceId: string;
  onNext: () => void;
}

const PaymentPlanCard: FC<PaymentPlanCardProps> = ({
  src,
  plan,
  price,
  onNext,
  priceId,
}) => {
  const user = useGetCurrentUser();
  const dispatch = useAppDispatch();

  const createSubscription = async () => {
    try {
      const { data } = await api.post('/stripe/create-subscription', {
        priceId,
        email: user?.email,
      });
      dispatch(setSubscription(data));
      dispatch(setPlan(plan));
      onNext();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-center bg-[#f3f1fb] border border-[#8645ff] '>
      <div className=''>
        <div className='flex items-center justify-center'>
          <img
            src={src}
            alt='card-pic'
            className='object-scale-down w-[80px] my-8'
          />
        </div>

        <p className='text-[18px] font-medium text-primary_font_color mb-2 text-center'>
          {plan.product.name}
        </p>

        <p className='mb-6'>
          <span className='font-semibold text-18px text-primary_font_color mr-1 text-center'>
            ${price}
          </span>
          / {plan.recurring.interval === 'year' ? 'yearly' : 'monthly'}
        </p>

        <div
          className='bg-[#8645ff] w-max text-[#fff] font-medium px-5 py-1.5 rounded-2xl mb-8 cursor-pointer'
          onClick={() => createSubscription()}
        >
          Subscribe
        </div>
      </div>
    </div>
  );
};

export default PaymentPlanCard;
