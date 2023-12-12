import { Button, Spinner } from '@material-tailwind/react';
import React, { useState } from 'react';
import { useGetCurrentUser } from '../../app/hooks/useUser';
import Subscribed from '../../assets/17_billing/subscribed.png';
import api from '../../utils/api';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setUser } from '../../app/features/user/userSlice';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../app/store';
import { clearAll } from '../../app/features/stripe/stripeSlice';
interface SuccessPageProps {}

const SuccessPage: React.FC<SuccessPageProps> = () => {
  const [loading, setLoading] = useState(false);
  const user = useGetCurrentUser();
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const subscriptionId = useAppSelector(
    (state: RootState) => state.stripe?.subscription?.subscriptionId
  );

  const productId = useAppSelector(
    (state: RootState) => state.stripe?.plan?.product?.id
  );

  const priceId = useAppSelector(
    (state: RootState) => state.stripe?.plan?.id
  );


  const updateUserSubscription = async () => {
    setLoading(true);
    try {
      const { data } = await api.put(`/users/${user?._id}`, {
        subscription: {
          plan: 'PREMIUM',
          startDate: new Date(),
          subscriptionId,
          productId,
          priceId,
          customerId: user?.subscription.customerId
        },
      });
      localStorage.setItem('userInfo', JSON.stringify(data.user));
      dispatch(setUser(data.user));
      dispatch(clearAll());
      navigate('/billing');

    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <div className='flex items-center justify-center'>
        <section className='bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6 flex flex-col items-center justify-center'>
          <p className='text-[#29a56f] text-[35px] text-center mb-4'>
            Success!
          </p>

          <div className='flex items-center justify-center'>
            <img
              src={Subscribed}
              alt='aad'
              className='object-scale-down mb-8'
            />
          </div>

          <p className='text-[#8645ff] text-[35px] text-center'>
            You are now Subscribed!
          </p>
          <Button
            onClick={() => updateUserSubscription()}
            className='bg-primary normal-case'
          >
            <div className='flex items-center'>
              {loading && <Spinner className='mr-3 h-4 w-4' />}
              Click to continue
            </div>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default SuccessPage;
