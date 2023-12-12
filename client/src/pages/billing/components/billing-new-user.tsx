import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { FC, useEffect, useState } from 'react';
import {
  decrementStep,
  incrementStep,
} from '../../../app/features/steps/stepsSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import api from '../../../utils/api';
import Stepper from './Stepper';
import Page01 from './page01';
import Page02 from './page02';

interface BillingNewUserProps {}

const BillingNewUser: FC<BillingNewUserProps> = () => {
  const dispatch = useAppDispatch();
  const currentStep = useAppSelector(
    (state: RootState) => state.step.currentStep
  );

  const [stripePromise, setStripePromise] = useState(null);

  const clientSecret = useAppSelector(
    (state: RootState) => state.stripe.subscription?.clientSecret
  );

  useEffect(() => {
    api.get('stripe/config').then(async (r) => {
      // @ts-ignore
      setStripePromise(loadStripe(r.data.publishableKey));
    });
  }, []);

  const handleNext = () => {
    dispatch(incrementStep());
  };

  const handlePrev = () => {
    dispatch(decrementStep());
  };

  return (
    <div className='container mx-auto'>
      <Stepper currentStep={currentStep} />
      <div>
        {currentStep === 1 && <Page01 onNext={handleNext} />}
        {currentStep === 2 && (
          <Elements
            stripe={stripePromise}
            options={{ clientSecret: clientSecret }}
          >
            <Page02
              onNext={handleNext}
              onPrev={handlePrev}

            />
          </Elements>
        )}
        {/* {step === 3 && <Page03 onNext={handleNext} onPrev={handlePrev} />} */}
        {/* {step === 3 && <Page04 onPrev={handlePrev} />} */}
      </div>
    </div>
  );
};

export default BillingNewUser;
