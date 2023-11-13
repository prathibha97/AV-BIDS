import { FC, useState } from 'react';
import Counter from '../../../components/counter';

interface StepTwoProps {
  formData: {
    roomCount: number;
    generalSessionCount: number;
    breakoutSessionCount: number;
    presenterCount: number;
  };
  updateStepTwoData: (field: string, value: number) => void;
}

const StepTwo: FC<StepTwoProps> = ({ formData, updateStepTwoData }) => {
  const [rooms, setRooms] = useState(formData.roomCount || 0);
  const [generalSessions, setGeneralSessions] = useState(
    formData.generalSessionCount || 0
  );
  const [breakoutSessions, setBreakoutSessions] = useState(
    formData.breakoutSessionCount || 0
  );
  const [presenters, setPresenters] = useState(formData.presenterCount || 0);

  const handleAdjust = (field: string, value: number) => {
    let updatedValue = 0;

    switch (field) {
      case 'roomCount':
        updatedValue = Math.max(0, rooms + value);
        setRooms(updatedValue);
        break;
      case 'generalSessionCount':
        updatedValue = Math.max(0, generalSessions + value);
        setGeneralSessions(updatedValue);
        break;
      case 'breakoutSessionCount':
        updatedValue = Math.max(0, breakoutSessions + value);
        setBreakoutSessions(updatedValue);
        break;
      case 'presenterCount':
        updatedValue = Math.max(0, presenters + value);
        setPresenters(updatedValue);
        break;
      default:
        break;
    }

    if (!isNaN(updatedValue)) {
      updateStepTwoData(field, updatedValue);
    }
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
