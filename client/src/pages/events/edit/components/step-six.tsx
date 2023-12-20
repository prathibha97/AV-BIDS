import { FC, useState } from 'react';
import { Electrical, Lighting, Scenic } from '../../../../types';
import CardDetails from './card-details';

interface StepSixProps {
  formData: any;
  updateFormData: (field: string, value: number) => void;
}

const StepSix: FC<StepSixProps> = ({ formData, updateFormData }) => {
  const [lighting, setLighting] = useState({
    Uplighting: formData.lighting?.Uplighting ?? 0,
    Stage_Wash: formData.lighting?.Stage_Wash ?? 0,
    Moving_Head_Lights: formData.lighting?.Moving_Head_Lights ?? 0,
    Gobo: formData.lighting?.Gobo ?? 0,
    Inflatable_Balloon_Light: formData.lighting?.Inflatable_Balloon_Light ?? 0,
    LED_Lighting_Effects: formData.lighting?.LED_Lighting_Effects ?? 0,
    Spotlight: formData.lighting?.Spotlight ?? 0,
    Lighting_Rigging_and_Truss:
      formData.lighting?.Lighting_Rigging_and_Truss ?? 0,
  });

  const [scenic, setScenic] = useState({
    Drape_Kit_Black: formData.scenic?.Drape_Kit_Black ?? 0,
    Drape_Kit_Grey: formData.scenic?.Drape_Kit_Grey ?? 0,
    Drape_Kit_White: formData.scenic?.Drape_Kit_White ?? 0,
    Scenic_Panels: formData.scenic?.Scenic_Panels ?? 0,
    Podium: formData.scenic?.Podium ?? 0,
  });

  const [electrical, setElectrical] = useState({
    Audience_Table_Power: formData.electrical?.Audience_Table_Power ?? 0,
    Power_Strips_6x1: formData.electrical?.Power_Strips_6x1 ?? 0,
    Portable_Distribution_Box_50_Amp:
      formData.electrical?.Portable_Distribution_Box_50_Amp ?? 0,
    Portable_Distribution_Box_100_Amp:
      formData.electrical?.Portable_Distribution_Box_100_Amp ?? 0,
    Portable_Distribution_Box_200_Amp:
      formData.electrical?.Portable_Distribution_Box_200_Amp ?? 0,
    Portable_Distribution_Box_300_Amp:
      formData.electrical?.Portable_Distribution_Box_300_Amp ?? 0,
    Portable_Distribution_Box_400_Amp:
      formData.electrical?.Portable_Distribution_Box_400_Amp ?? 0,
  });

  const handleAdjustLighting = (field: keyof Lighting, value: number) => {
    let updatedValue = Math.max(0, lighting[field] + value);
    setLighting((prev) => ({ ...prev, [field]: updatedValue }));

    if (!isNaN(updatedValue)) {
      updateFormData(field as string, updatedValue);
    }
  };

  const handleAdjustScenic = (field: keyof Scenic, value: number) => {
    // @ts-ignore
    let updatedValue = Math.max(0, scenic[field] + value);
    setScenic((prev) => ({ ...prev, [field]: updatedValue }));

    if (!isNaN(updatedValue)) {
      updateFormData(field as string, updatedValue);
    }
  };

  const handleAdjustElectrical = (field: keyof Electrical, value: number) => {
    let updatedValue = Math.max(0, electrical[field] + value);
    setElectrical((prev) => ({ ...prev, [field]: updatedValue }));

    if (!isNaN(updatedValue)) {
      updateFormData(field as string, updatedValue);
    }
  };
  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Lighting</p>
        <CardDetails
          name='Uplighting'
          value={lighting.Uplighting}
          onDecrease={() => handleAdjustLighting('Uplighting', -1)}
          onIncrease={() => handleAdjustLighting('Uplighting', 1)}
        />
        <CardDetails
          name='Stage Wash'
          value={lighting.Stage_Wash}
          onDecrease={() => handleAdjustLighting('Stage_Wash', -1)}
          onIncrease={() => handleAdjustLighting('Stage_Wash', 1)}
        />
        <CardDetails
          name='Moving Head Lights'
          value={lighting.Moving_Head_Lights}
          onDecrease={() => handleAdjustLighting('Moving_Head_Lights', -1)}
          onIncrease={() => handleAdjustLighting('Moving_Head_Lights', 1)}
        />
        <CardDetails
          name='Gobo'
          value={lighting.Gobo}
          onDecrease={() => handleAdjustLighting('Gobo', -1)}
          onIncrease={() => handleAdjustLighting('Gobo', 1)}
        />
        <CardDetails
          name='Inflatable Balloon Light'
          value={lighting.Inflatable_Balloon_Light}
          onDecrease={() =>
            handleAdjustLighting('Inflatable_Balloon_Light', -1)
          }
          onIncrease={() => handleAdjustLighting('Inflatable_Balloon_Light', 1)}
        />
        <CardDetails
          name='LED Lighting Effects'
          value={lighting.LED_Lighting_Effects}
          onDecrease={() => handleAdjustLighting('LED_Lighting_Effects', -1)}
          onIncrease={() => handleAdjustLighting('LED_Lighting_Effects', 1)}
        />
        <CardDetails
          name='Spotlight'
          value={lighting.Spotlight}
          onDecrease={() => handleAdjustLighting('Spotlight', -1)}
          onIncrease={() => handleAdjustLighting('Spotlight', 1)}
        />
        <CardDetails
          name='Lighting Rigging and Truss'
          value={lighting.Lighting_Rigging_and_Truss}
          onDecrease={() =>
            handleAdjustLighting('Lighting_Rigging_and_Truss', -1)
          }
          onIncrease={() =>
            handleAdjustLighting('Lighting_Rigging_and_Truss', 1)
          }
        />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Scenic</p>
        <CardDetails
          name='Drape Kit (Black)'
          value={scenic.Drape_Kit_Black}
          onDecrease={() => handleAdjustScenic('Drape_Kit_Black', -1)}
          onIncrease={() => handleAdjustScenic('Drape_Kit_Black', 1)}
        />
        <CardDetails
          name='Drape Kit (Grey)'
          value={scenic.Drape_Kit_Grey}
          onDecrease={() => handleAdjustScenic('Drape_Kit_Grey', -1)}
          onIncrease={() => handleAdjustScenic('Drape_Kit_Grey', 1)}
        />
        <CardDetails
          name='Drape Kit (White)'
          value={scenic.Drape_Kit_White}
          onDecrease={() => handleAdjustScenic('Drape_Kit_White', -1)}
          onIncrease={() => handleAdjustScenic('Drape_Kit_White', 1)}
        />
        <CardDetails
          name='Scenic Panels'
          value={scenic.Scenic_Panels}
          onDecrease={() => handleAdjustScenic('Scenic_Panels', -1)}
          onIncrease={() => handleAdjustScenic('Scenic_Panels', 1)}
        />
        <CardDetails
          name='Podium'
          value={scenic.Podium}
          onDecrease={() => handleAdjustScenic('Podium', -1)}
          onIncrease={() => handleAdjustScenic('Podium', 1)}
        />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Electrical</p>
        <CardDetails
          name='Audience Table Power'
          value={electrical.Audience_Table_Power}
          onDecrease={() => handleAdjustElectrical('Audience_Table_Power', -1)}
          onIncrease={() => handleAdjustElectrical('Audience_Table_Power', 1)}
        />
        <CardDetails
          name='Power Strips 6x1'
          value={electrical.Power_Strips_6x1}
          onDecrease={() => handleAdjustElectrical('Power_Strips_6x1', -1)}
          onIncrease={() => handleAdjustElectrical('Power_Strips_6x1', 1)}
        />
        <CardDetails
          name='Portable Distribution Box (50 Amp)'
          value={electrical.Portable_Distribution_Box_50_Amp}
          onDecrease={() =>
            handleAdjustElectrical('Portable_Distribution_Box_50_Amp', -1)
          }
          onIncrease={() =>
            handleAdjustElectrical('Portable_Distribution_Box_50_Amp', 1)
          }
        />
        <CardDetails
          name='Portable Distribution Box (100 Amp)'
          value={electrical.Portable_Distribution_Box_100_Amp}
          onDecrease={() =>
            handleAdjustElectrical('Portable_Distribution_Box_100_Amp', -1)
          }
          onIncrease={() =>
            handleAdjustElectrical('Portable_Distribution_Box_100_Amp', 1)
          }
        />
        <CardDetails
          name='Portable Distribution Box (200 Amp)'
          value={electrical.Portable_Distribution_Box_200_Amp}
          onDecrease={() =>
            handleAdjustElectrical('Portable_Distribution_Box_200_Amp', -1)
          }
          onIncrease={() =>
            handleAdjustElectrical('Portable_Distribution_Box_200_Amp', 1)
          }
        />
        <CardDetails
          name='Portable Distribution Box (300 Amp)'
          value={electrical.Portable_Distribution_Box_300_Amp}
          onDecrease={() =>
            handleAdjustElectrical('Portable_Distribution_Box_300_Amp', -1)
          }
          onIncrease={() =>
            handleAdjustElectrical('Portable_Distribution_Box_300_Amp', 1)
          }
        />
        <CardDetails
          name='Portable Distribution Box (400 Amp)'
          value={electrical.Portable_Distribution_Box_400_Amp}
          onDecrease={() =>
            handleAdjustElectrical('Portable_Distribution_Box_400_Amp', -1)
          }
          onIncrease={() =>
            handleAdjustElectrical('Portable_Distribution_Box_400_Amp', 1)
          }
        />
      </div>
    </div>
  );
};

export default StepSix;
