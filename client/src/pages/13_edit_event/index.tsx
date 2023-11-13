import { Button } from '@material-tailwind/react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  EventFormFormValues,
  EventFormSchema,
} from '../../utils/validations/event-form-validation';
import StepFive from './components/step-five';
import StepFour from './components/step-four';
import StepOne from './components/step-one';
import StepSeven from './components/step-seven';
import StepSix from './components/step-six';
import StepThree from './components/step-three';
import StepTwo from './components/step-two';

interface Requirement {
  label: string;
  count: number;
}

export function Index() {
  const [currentStep, setCurrentStep] = useState(1);

  const { register, control } =
    useForm<EventFormFormValues>({
      resolver: zodResolver(EventFormSchema),
    });
const [formData, setFormData] = useState({});


  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

const onSubmit = () => {
  // formData contains all the form data from all steps
  console.log(formData);
};

const updateFormData = (
  field: string,
  value: number | Requirement[] | Requirement
) => {
  setFormData((prevData) => ({
    ...prevData,
    // @ts-ignore
    [field]: Array.isArray(prevData[field])
      ? // @ts-ignore
        value.map((req: Requirement) => ({ ...req }))
      : value,
  }));
};



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

        {currentStep === 1 && (
          <StepOne
            register={register}
            control={control}
            updateFormData={setFormData}
          />
        )}
        {currentStep === 2 && (
          <StepTwo
            // @ts-ignore
            formData={formData}
            updateStepTwoData={(field: any, value: any) => {
              setFormData({
                ...formData,
                [field]: value,
              });
            }}
          />
        )}
        {currentStep === 3 && (
          <StepThree
            formData={formData}
            updateStepTwoData={(field: any, value: any) => {
              setFormData({
                ...formData,
                [field]: value,
              });
            }}
          />
        )}
        {currentStep === 4 && (
          <StepFour
            formData={formData}
            updateStepTwoData={(field: any, value: any) => {
              setFormData({
                ...formData,
                [field]: value,
              });
            }}
          />
        )}
        {currentStep === 5 && (
          <StepFive
            formData={formData}
            updateStepTwoData={(field: any, value: any) => {
              setFormData({
                ...formData,
                [field]: value,
              });
            }}
          />
        )}
        {currentStep === 6 && (
          <StepSix
            formData={formData}
            updateStepTwoData={(field: any, value: any) => {
              setFormData({
                ...formData,
                [field]: value,
              });
            }}
          />
        )}
        {currentStep === 7 && (
          <StepSeven formData={formData} updateFormData={updateFormData} />
        )}

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
                type='button'
                onClick={onSubmit}
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
