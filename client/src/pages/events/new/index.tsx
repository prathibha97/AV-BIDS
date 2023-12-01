import { Button, Step, Stepper } from '@material-tailwind/react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useGetCurrentUser } from '../../../app/hooks/useUser';
import api from '../../../utils/api';
import {
  EventFormFormValues,
  EventFormSchema,
} from '../../../utils/validations/event-form-validation';
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
  const navigate = useNavigate();

  const { register, control } = useForm<EventFormFormValues>({
    resolver: zodResolver(EventFormSchema),
  });
  const [formData, setFormData] = useState({});

  const user = useGetCurrentUser();

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const onSubmit = async () => {
    try {
      await api.post('/events', {
        ...formData,
        createdBy: user && user._id,
      });
      navigate('/events/my-events');
    } catch (error) {
      console.log(error);
    }
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

  /////////////////////////////////////////////////////////

  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  //////////////////////////////////////////////////////

  return (
    <div className='container mx-auto mb-8'>
      <section className='bg-white px-8 py-8 rounded-xl drop-shadow-md'>
        <h2 className='text-[20px] font-semibold mb-6'>Post New Event</h2>

        <div className='flex justify-center mb-10'>
          <div>
            <div>
              {/* <Stepper /> */}

              <div className='mx-12 mb-4'>
                <Stepper
                  activeStep={activeStep}
                  isLastStep={(value) => setIsLastStep(value)}
                  isFirstStep={(value) => setIsFirstStep(value)}
                >
                  <Step
                    onClick={() => setActiveStep(0)}
                    className='!bg-[#42D27A]'
                  >
                    <span>1</span>
                  </Step>

                  <Step
                    onClick={() => setActiveStep(1)}
                    className={activeStep === 1 ? 'active-step' : ''}
                  >
                    <span>2</span>
                  </Step>
                </Stepper>

                <div className='w-full flex justify-between'></div>

                <style>
                  {`.active-step {
          background-color: #42D27A; /* Change this to the desired color */
        }`}
                </style>
              </div>
            </div>

            <div className='flex items-center justify-between gap-16'>
              <div>
                <p className='font-medium text-[16px]'>Update Information </p>
              </div>

              <div>
                <p className='text-[16px] font-medium '>Update Settings</p>
              </div>
            </div>
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
              onClick={() => navigate('/events/my-events')}
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
                onClick={() => {
                  handlePrev();
                  handlePrevStep();
                }}
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
                onClick={() => {
                  handleNext();
                  handleNextStep();
                }}
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
