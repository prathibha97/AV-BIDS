import { Button } from '@material-tailwind/react';

import { useState } from 'react';
import StepFive from './components/step-five';
import StepFour from './components/step-four';
import StepOne from './components/step-one';
import StepSeven from './components/step-seven';
import StepSix from './components/step-six';
import StepThree from './components/step-three';
import StepTwo from './components/step-two';

export function Index() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleSubmit = () => {};

  return (
    <div className='container mx-auto mb-8'>
      <section className='bg-white px-8 py-8 rounded-xl drop-shadow-md'>
        <h2 className='text-[20px] font-semibold mb-6'>Edit Event</h2>

        <div className='grid grid-cols-2 mb-8'>
          <div className='flex flex-col items-center gap-2'>
            <div className='flex  items-center justify-center rounded-full w-10 h-10 bg-[#42D27A] text-white'>
              <p>1</p>
            </div>

            <p className='font-medium text-[16px]'>Update Information</p>
          </div>
          <div className='flex flex-col items-center gap-2'>
            <div className='flex  items-center justify-center rounded-full w-10 h-10 bg-[#42D27A] text-white'>
              <p>2</p>
            </div>
            <p className='text-[16px] font-medium '>Equipment Requirements</p>
          </div>
        </div>

        {currentStep === 1 && <StepOne />}
        {currentStep === 2 && <StepTwo />}
        {currentStep === 3 && <StepThree />}
        {currentStep === 4 && <StepFour />}
        {currentStep === 5 && <StepFive />}
        {currentStep === 6 && <StepSix />}
        {currentStep === 7 && <StepSeven />}

        <div className='flex items-center justify-between mt-6'>
          <div>
            <Button
              variant='outlined'
              size='sm'
              className='rounded-full  py-3 px-6 mt-4 bg-[#EBEBEB] font-poppins normal-case border-none w-[135px]'
              onClick={() => setCurrentStep(1)}
            >
              <span className='text-black'>Cancel</span>
            </Button>
          </div>

          <div>
            <Button
              variant='outlined'
              color='indigo'
              size='sm'
              className='rounded-full  py-3 px-6 mt-4  font-poppins normal-case border-primary w-[135px] mr-6'
            >
              <span className='text-primary '>Save as Draft</span>
            </Button>

            {currentStep > 1 && (
              <Button
                variant='outlined'
                size='sm'
                className='rounded-full py-3 px-6 mt-4 bg-[#EBEBEB] font-poppins normal-case border-none w-[135px] mr-4'
                onClick={handlePrevStep}
              >
                <span className='text-black'>Previous</span>
              </Button>
            )}

            {currentStep < 7 ? (
              <Button
                variant='filled'
                color='indigo'
                size='sm'
                className='rounded-full py-3 px-6 mt-4 font-poppins normal-case bg-primary w-[135px]'
                onClick={handleNextStep}
              >
                <span className='text-white'>Next</span>
              </Button>
            ) : (
              <Button
                variant='filled'
                color='indigo'
                size='sm'
                className='rounded-full py-3 px-6 mt-4 font-poppins normal-case bg-primary w-[135px]'
                onClick={handleSubmit}
              >
                <span className='text-white'>Submit</span>
              </Button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Index;
