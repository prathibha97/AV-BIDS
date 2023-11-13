import { Textarea } from '@material-tailwind/react';
import { FC, useState } from 'react';
import CardDetails from './card-details';

interface StepSevenProps {
  formData: any;
  updateStepTwoData: (field: string, value: number | Requirement[]) => void;
}

interface Requirement {
  label: string;
  count: number;
}

const StepSeven: FC<StepSevenProps> = ({ formData, updateStepTwoData }) => {
  const [Audio_Tech, setAudio_Tech] = useState(0);
  const [Video_Tech, setVideo_Tech] = useState(0);
  const [Lighting_Tech, setLighting_Tech] = useState(0);
  const [Project_Manager, setProject_Manager] = useState(0);

  const [Mobile_Hotspot_up_to_15_devices, setMobile_Hotspot_up_to_15_devices] =
    useState(0);
  const [
    Event_WIFI_Network_more_than_15_devices,
    setEvent_WIFI_Network_more_than_15_devices,
  ] = useState(0);
  const [Laptops_PC, setLaptops_PC] = useState(0);
  const [Laptops_Mac, setLaptops_Mac] = useState(0);

  const [otherRequirements, setOtherRequirements] = useState<Requirement[]>([
    { label: '', count: 0 },
    { label: '', count: 0 },
    { label: '', count: 0 },
    { label: '', count: 0 },
    { label: '', count: 0 },
  ]);

  const handleAdjust = (field: string, value: number) => {
    let updatedValue = 0;

    // Check if the field corresponds to otherRequirements
    const isOtherRequirement = field.startsWith('otherRequirement');

    if (isOtherRequirement) {
      const index = parseInt(field.replace('otherRequirement', ''), 10) - 1;

      if (!isNaN(index) && index >= 0 && index < otherRequirements.length) {
        const updatedRequirements = [...otherRequirements];
        updatedValue = Math.max(0, updatedRequirements[index].count + value);
        updatedRequirements[index] = {
          ...updatedRequirements[index],
          count: updatedValue,
        };
        setOtherRequirements(updatedRequirements);
      }

    } else {
      switch (field) {
        case 'Audio_Tech':
          updatedValue = Math.max(0, Audio_Tech + value);
          setAudio_Tech(updatedValue);
          break;
        case 'Video_Tech':
          updatedValue = Math.max(0, Video_Tech + value);
          setVideo_Tech(updatedValue);
          break;
        case 'Lighting_Tech':
          updatedValue = Math.max(0, Lighting_Tech + value);
          setLighting_Tech(updatedValue);
          break;
        case 'Project_Manager':
          updatedValue = Math.max(0, Project_Manager + value);
          setProject_Manager(updatedValue);
          break;
        case 'Mobile_Hotspot_up_to_15_devices':
          updatedValue = Math.max(0, Mobile_Hotspot_up_to_15_devices + value);
          setMobile_Hotspot_up_to_15_devices(updatedValue);
          break;
        case 'Event_WIFI_Network_more_than_15_devices':
          updatedValue = Math.max(
            0,
            Event_WIFI_Network_more_than_15_devices + value
          );
          setEvent_WIFI_Network_more_than_15_devices(updatedValue);
          break;
        case 'Laptops_PC':
          updatedValue = Math.max(0, Laptops_PC + value);
          setLaptops_PC(updatedValue);
          break;
        case 'Laptops_Mac':
          updatedValue = Math.max(0, Laptops_Mac + value);
          setLaptops_Mac(updatedValue);
          break;
        default:
          break;
      }

      if (!isNaN(updatedValue)) {
        updateStepTwoData(field, updatedValue);
      }
    }
  };


  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Staff</p>
        <CardDetails
          name='Audio Tech'
          value={Audio_Tech}
          onDecrease={() => handleAdjust('Audio_Tech', -1)}
          onIncrease={() => handleAdjust('Audio_Tech', 1)}
        />
        <CardDetails
          name='Video Tech'
          value={Video_Tech}
          onDecrease={() => handleAdjust('Video_Tech', -1)}
          onIncrease={() => handleAdjust('Video_Tech', 1)}
        />
        <CardDetails
          name='Lighting Tech'
          value={Lighting_Tech}
          onDecrease={() => handleAdjust('Lighting_Tech', -1)}
          onIncrease={() => handleAdjust('Lighting_Tech', 1)}
        />
        <CardDetails
          name='Project Manager'
          value={Project_Manager}
          onDecrease={() => handleAdjust('Project_Manager', -1)}
          onIncrease={() => handleAdjust('Project_Manager', 1)}
        />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Scenic</p>
        <CardDetails
          name='Mobile Hotspot (up to 15 devices)'
          value={Mobile_Hotspot_up_to_15_devices}
          onDecrease={() => handleAdjust('Mobile_Hotspot_up_to_15_devices', -1)}
          onIncrease={() => handleAdjust('Mobile_Hotspot_up_to_15_devices', 1)}
        />
        <CardDetails
          name='Event WIFI Network (more than 15 devices)'
          value={Event_WIFI_Network_more_than_15_devices}
          onDecrease={() =>
            handleAdjust('Event_WIFI_Network_more_than_15_devices', -1)
          }
          onIncrease={() =>
            handleAdjust('Event_WIFI_Network_more_than_15_devices', 1)
          }
        />
        <CardDetails
          name='Laptops-PC'
          value={Laptops_PC}
          onDecrease={() => handleAdjust('Laptops_PC', -1)}
          onIncrease={() => handleAdjust('Laptops_PC', 1)}
        />
        <CardDetails
          name='Laptops-Mac'
          value={Laptops_Mac}
          onDecrease={() => handleAdjust('Laptops_Mac', -1)}
          onIncrease={() => handleAdjust('Laptops_Mac', 1)}
        />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Other Requirements</p>
        {otherRequirements.map((requirement, index) => (
          <RequirementInput
            key={index}
            requirement={requirement}
            onRequirementChange={(newRequirement) =>
              setOtherRequirements((prev) =>
                prev.map((prevReq, i) =>
                  i === index ? newRequirement : prevReq
                )
              )
            }
            index={index + 1}
          />
        ))}
      </div>

      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Comments</p>
        <p className='text-[15px] font-medium mb-3 '>Description</p>

        <div>
          <Textarea
            label='Description'
            className='bg-white border border-[#E4E4E4]'
          />
        </div>
      </div>
    </div>
  );
};

export default StepSeven;

interface RequirementInputProps {
  requirement: Requirement;
  onRequirementChange: (newRequirement: Requirement) => void;
  index: number;
}

function RequirementInput(props: RequirementInputProps) {
  const { requirement, onRequirementChange } = props;

  const handleLabelChange = (newLabel: string) => {
    onRequirementChange({ ...requirement, label: newLabel });
  };

  const handleCountChange = (newCount: number) => {
    onRequirementChange({ ...requirement, count: newCount });
  };

  return (
    <div>
      <Input
        label={requirement.label}
        onLabelChange={handleLabelChange}
        value={requirement.count}
        onDecrease={() => handleCountChange(Math.max(0, requirement.count - 1))}
        onIncrease={() => handleCountChange(requirement.count + 1)}
      />
    </div>
  );
}

function Input(props: {
  label: string;
  onLabelChange: (newLabel: string) => void;
  value?: number;
  onDecrease?: () => void;
  onIncrease?: () => void;
}) {
  return (
    <div className='grid grid-cols-2 gap-4  content-center'>
      <div>
        <input
          type='text'
          placeholder={props.label}
          className='border rounded-lg p-2 mb-4 border-[#E4E4E4]'
          onChange={(e) => props.onLabelChange(e.target.value)}
        />
      </div>

      <div>
        <div className='flex items-center gap-4'>
          <div className='flex items-center justify-center rounded-full w-7 h-7 bg-[#F3F1FB] text-[#888888]'>
            <button type='button' onClick={props.onDecrease}>
              -
            </button>
          </div>
          <p>{props.value}</p>
          <div className='flex items-center justify-center rounded-full w-7 h-7 bg-[#F3F1FB] text-[#888888]'>
            <button type='button' onClick={props.onIncrease}>
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
