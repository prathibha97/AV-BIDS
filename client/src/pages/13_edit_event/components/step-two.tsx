import { FC, useState } from 'react';
import { UseFormRegister, UseFormReturn } from 'react-hook-form';
import Counter from '../../../components/counter';
import { EventFormFormValues } from '../../../utils/validations/event-form-validation';

interface StepTwoProps {
  control: UseFormReturn<any>['control'];
  register: UseFormRegister<EventFormFormValues>;
  updateFormData: any;
  formData: any;
  updateStepTwoData:any;
}

const StepTwo: FC<StepTwoProps> = ({
  control,
  register,
  updateFormData,
  formData,
  updateStepTwoData
}) => {
  const [rooms, setRooms] = useState(formData.roomCount || 0);
  const [generalSessions, setGeneralSessions] = useState(
    formData.generalSessionCount || 0
  );
  const [breakoutSessions, setBreakoutSessions] = useState(
    formData.breakoutSessionCount || 0
  );
  const [presenters, setPresenters] = useState(formData.presenterCount || 0);


const handleAdjust = (field: string, value: number) => {
  console.log(`field: ${field}, value: ${value}`);
  switch (field) {
    case 'roomCount':
      setRooms((prevRooms: number) => {
        const updatedValue = Math.max(0, prevRooms + value);
        return updatedValue;
      });
      break;
    case 'generalSessionCount':
      setGeneralSessions((prevGeneralSessions: any) => {
        const updatedValue = Math.max(0, prevGeneralSessions + value);
        return updatedValue;
      });
      break;
    case 'breakoutSessionCount':
      setBreakoutSessions((prevBreakoutSessions: any) => {
        const updatedValue = Math.max(0, prevBreakoutSessions + value);
        return updatedValue;
      });
      break;
    case 'presenterCount':
      setPresenters((prevPresenters: any) => {
        const updatedValue = Math.max(0, prevPresenters + value);
        return updatedValue;
      });
      break;
    default:
      break;
  }

  updateStepTwoData(field, Math.max(0, formData[field] + value));
};


  return (
    <div className='grid grid-cols-2 gap-4 mb-6'>
      <div>
        <p>How many rooms will be used?</p>
      </div>
      <Counter
        value={rooms}
        onDecrease={() => handleAdjust('roomCount', -1)}
        onIncrease={() => handleAdjust('roomCount', 1)}
      />
      <div>
        <p>How many general sessions?</p>
      </div>
      <Counter
        value={generalSessions}
        onDecrease={() => handleAdjust('generalSessionCount', -1)}
        onIncrease={() => handleAdjust('generalSessionCount', 1)}
      />
      <div>
        <p>How many breakout sessions?</p>
      </div>
      <Counter
        value={breakoutSessions}
        onDecrease={() => handleAdjust('breakoutSessionCount', -1)}
        onIncrease={() => handleAdjust('breakoutSessionCount', 1)}
      />

      <div>
        <p>How many presenters will there be?</p>
      </div>

      <Counter
        value={presenters}
        onDecrease={() => handleAdjust('presenterCount', -1)}
        onIncrease={() => handleAdjust('presenterCount', 1)}
      />
    </div>
  );
};

export default StepTwo;
