import { FC, useState } from 'react';
import Stepper from './Stepper';
import Page01 from './page01';
import Page02 from './page02';

interface BillingNewUserProps {}

const BillingNewUser: FC<BillingNewUserProps> = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className='container mx-auto'>
      <Stepper currentStep={step} />
      <div>
        {step === 1 && <Page01 onNext={handleNext} />}
        {step === 2 && <Page02 onNext={handleNext} onPrev={handlePrev} />}
        {/* {step === 3 && <Page03 onNext={handleNext} onPrev={handlePrev} />} */}
        {/* {step === 3 && <Page04 onPrev={handlePrev} />} */}
      </div>
    </div>
  );
};

export default BillingNewUser;
