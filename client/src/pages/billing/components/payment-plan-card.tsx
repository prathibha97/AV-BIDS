import { FC } from 'react';
import api from '../../../utils/api';
import { useGetCurrentUser } from '../../../app/hooks/useUser';

interface PaymentPlanCardProps {
  src: string;
  plan: string;
  price: number;
  priceId: string;
  onNext: () => void;
}

const PaymentPlanCard: FC<PaymentPlanCardProps> = ({
  src,
  plan,
  price,
  onNext,
  priceId
}) => {
  const user = useGetCurrentUser()

  const createSubscription = async () => {
    try {
      const { data } = await api.post('/stripe/create-subscription', {
        priceId,
        email: user?.email,
      });
      console.log(data);
      onNext();
    } catch (error) {
      console.log(error);
    }

    // setSubscriptionData({ subscriptionId, clientSecret });
  }

  
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
          {plan}
        </p>

        <p className='mb-6'>
          <span className='font-semibold text-18px text-primary_font_color mr-1 text-center'>
            ${price}
          </span>
          /{' '}
          {plan === 'Annual subscription for Standard Plan'
            ? 'year'
            : 'monthly'}
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
