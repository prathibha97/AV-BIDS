import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import api from '../../../utils/api';
import Stepper from './Stepper';
import Page01 from './page01';
import Page02 from './page02';

function BillingNewUser() {
  const [step, setStep] = useState(1);
  const [stripePromise, setStripePromise] = useState(null);
  const clientSecret = useAppSelector(
    (state: RootState) => state.stripe.subscription?.clientSecret
  );

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  useEffect(() => {
    api.get('stripe/config').then(async (r) => {
      // @ts-ignore
      setStripePromise(loadStripe(r.data.publishableKey));
    });
  }, []);

  return (
    <div className='container mx-auto'>
      <Stepper currentStep={step} />
      <div>
        {step === 1 && <Page01 onNext={handleNext} />}
        {step === 2 && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <Page02 onNext={handleNext} onPrev={handlePrev} />
          </Elements>
        )}
        {/* {step === 3 && <Page03 onNext={handleNext} onPrev={handlePrev} />} */}
        {/* {step === 3 && <Page04 onPrev={handlePrev} />} */}
      </div>
    </div>
  );
}

export default BillingNewUser;
