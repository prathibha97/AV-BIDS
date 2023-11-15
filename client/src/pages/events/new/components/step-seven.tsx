import { Textarea } from '@material-tailwind/react';
import { FC, useEffect, useState } from 'react';
import CardDetails from './card-details';

interface StepSevenProps {
  formData: any;
  updateFormData: (field: string, value: number | Requirement[]) => void;
}

interface Requirement {
  label: string;
  count: number;
}

const StepSeven: FC<StepSevenProps> = ({ formData, updateFormData }) => {
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

  const [comments, setComments] = useState('')

  useEffect(() => {
    // Update formData when otherRequirements changes
    updateFormData('otherRequirements', otherRequirements);
  }, [otherRequirements]);

  const handleAdjust = (
    field: string,
    value: number | string,
    index?: number
  ) => {
    let updatedValue: number | Requirement[] = 0;

    if (field === 'count' && typeof value === 'number' && index !== undefined) {
      setOtherRequirements((prevRequirements) => {
        const updatedRequirements = prevRequirements.map((requirement, i) => {
          if (index !== undefined && i === index) {
            return {
              ...requirement,
              count: Math.max(0, value),
            };
          }
          return requirement;
        });

        // Pass the correct label to updateFormData directly from the updated state
        updateFormData('otherRequirements', updatedRequirements);

        return updatedRequirements;
      });
    } else if (
      field === 'label' &&
      typeof value === 'string' &&
      index !== undefined
    ) {
      setOtherRequirements((prevRequirements) => {
        const updatedRequirements = prevRequirements.map((requirement, i) => {
          if (index !== undefined && i === index) {
            return {
              ...requirement,
              label: String(value),
            };
          }
          return requirement;
        });

        updateFormData('otherRequirements', updatedRequirements);

        return updatedRequirements;
      });
    }
    else if (field === 'comments' && typeof value === 'string') {
      setComments(value);
      // @ts-ignore
      updateFormData('comment', value);
    } else {
      switch (field) {
        case 'Audio_Tech':
          // @ts-ignore
          updatedValue = Math.max(0, Audio_Tech + value);
          setAudio_Tech(updatedValue);
          break;
        case 'Video_Tech':
          // @ts-ignore
          updatedValue = Math.max(0, Video_Tech + value);
          setVideo_Tech(updatedValue);
          break;
        case 'Lighting_Tech':
          // @ts-ignore
          updatedValue = Math.max(0, Lighting_Tech + value);
          setLighting_Tech(updatedValue);
          break;
        case 'Project_Manager':
          // @ts-ignore
          updatedValue = Math.max(0, Project_Manager + value);
          setProject_Manager(updatedValue);
          break;
        case 'Mobile_Hotspot_up_to_15_devices':
          // @ts-ignore
          updatedValue = Math.max(0, Mobile_Hotspot_up_to_15_devices + value);
          setMobile_Hotspot_up_to_15_devices(updatedValue);
          break;
        case 'Event_WIFI_Network_more_than_15_devices':
          updatedValue = Math.max(
            0,
            // @ts-ignore
            Event_WIFI_Network_more_than_15_devices + value
          );
          setEvent_WIFI_Network_more_than_15_devices(updatedValue);
          break;
        case 'Laptops_PC':
          // @ts-ignore
          updatedValue = Math.max(0, Laptops_PC + value);
          setLaptops_PC(updatedValue);
          break;
        case 'Laptops_Mac':
          // @ts-ignore
          updatedValue = Math.max(0, Laptops_Mac + value);
          setLaptops_Mac(updatedValue);
          break;
        default:
          break;
      }
      // @ts-ignore
      if (!isNaN(updatedValue)) {
        updateFormData(field, updatedValue);
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
            label={`Requirement ${index + 1}`}
            requirement={requirement}
            onRequirementChange={(newRequirement) => {
              handleAdjust('label', newRequirement.label, index);
              handleAdjust('count', newRequirement.count, index);
            }}
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
            value={comments}
            onChange={(e) => handleAdjust('comments', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default StepSeven;

interface RequirementInputProps {
  label: string;
  requirement: Requirement;
  onRequirementChange: (newRequirement: Requirement) => void;
}

function RequirementInput(props: RequirementInputProps) {
  const { label, requirement, onRequirementChange } = props;

  const handleLabelChange = (newLabel: string) => {
    onRequirementChange({
      ...requirement,
      label: newLabel,
    });
  };

  const handleCountChange = (newCount: number) => {
    onRequirementChange({
      ...requirement,
      count: Math.max(0, newCount),
    });
  };

  return (
    <div className='flex items-center space-x-8'>
      <input
        className='border rounded-lg p-2 mb-4 border-[#E4E4E4]'
        placeholder={label}
        value={requirement.label}
        onChange={(e) => handleLabelChange(e.target.value)}
      />

      <div className='flex items-center gap-4'>
        <div className='flex items-center justify-center rounded-full w-7 h-7 bg-[#F3F1FB] text-[#888888]'>
          <button
            type='button'
            onClick={() => handleCountChange(requirement.count - 1)}
          >
            -
          </button>
        </div>
        <p>{requirement.count}</p>
        <div className='flex items-center justify-center rounded-full w-7 h-7 bg-[#F3F1FB] text-[#888888]'>
          <button
            type='button'
            onClick={() => handleCountChange(requirement.count + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
