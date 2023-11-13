import { FC, useState } from "react";
import CardDetails from "./card-details";

interface StepSixProps {
  formData: any;
  updateStepTwoData: (field: string, value: number) => void;
}

const StepSix: FC<StepSixProps> = ({formData,updateStepTwoData}) => {

  const [Uplighting, setUplighting] = useState(0);
  const [Stage_Wash, setStage_Wash] = useState(0);
  const [Moving_Head_Lights, setMoving_Head_Lights] = useState(0);
  const [Gobo, setGobo] = useState(0);
  const [Inflatable_Balloon_Light, setInflatable_Balloon_Light] = useState(0);
  const [LED_Lighting_Effects, setLED_Lighting_Effects] = useState(0);
  const [Spotlight, setSpotlight] = useState(0);
  const [Lighting_Rigging_and_Truss, setLighting_Rigging_and_Truss] =
    useState(0);

    const [Drape_Kit_Black, setDrape_Kit_Black] = useState(0);
    const [Drape_Kit_Grey, setDrape_Kit_Grey] = useState(0);
    const [Drape_Kit_White, setDrape_Kit_White] = useState(0);
    const [Scenic_Panels, setScenic_Panels] = useState(0);
    const [Podium, setPodium] = useState(0);
    const [
      Mobile_Hotspot_up_to_15_devices,
      setMobile_Hotspot_up_to_15_devices,
    ] = useState(0);
    const [
      Event_WIFI_Network_more_than_15_devices,
      setEvent_WIFI_Network_more_than_15_devices,
    ] = useState(0);
    const [Laptops_PC, setLaptops_PC] = useState(0);
    const [Laptops_Mac, setLaptops_Mac] = useState(0);

    const [Audience_Table_Power, setAudience_Table_Power] = useState(0);
    const [Power_Strips_6x1, setPower_Strips_6x1] = useState(0);
    const [
      Portable_Distribution_Box_50_Amp,
      setPortable_Distribution_Box_50_Amp,
    ] = useState(0);
    const [
      Portable_Distribution_Box_100_Amp,
      setPortable_Distribution_Box_100_Amp,
    ] = useState(0);
    const [
      Portable_Distribution_Box_200_Amp,
      setPortable_Distribution_Box_200_Amp,
    ] = useState(0);
    const [
      Portable_Distribution_Box_300_Amp,
      setPortable_Distribution_Box_300_Amp,
    ] = useState(0);
    const [
      Portable_Distribution_Box_400_Amp,
      setPortable_Distribution_Box_400_Amp,
    ] = useState(0);

    const handleAdjust = (field: string, value: number) => {
      let updatedValue = 0;

      switch (field) {
        case 'Uplighting':
          updatedValue = Math.max(0, Uplighting + value);
          setUplighting(updatedValue);
          break;
        case 'Stage_Wash':
          updatedValue = Math.max(0, Stage_Wash + value);
          setStage_Wash(updatedValue);
          break;
        case 'Moving_Head_Lights':
          updatedValue = Math.max(0, Moving_Head_Lights + value);
          setMoving_Head_Lights(updatedValue);
          break;
        case 'Gobo':
          updatedValue = Math.max(0, Gobo + value);
          setGobo(updatedValue);
          break;
        case 'Inflatable_Balloon_Light':
          updatedValue = Math.max(0, Inflatable_Balloon_Light + value);
          setInflatable_Balloon_Light(updatedValue);
          break;
        case 'LED_Lighting_Effects':
          updatedValue = Math.max(0, LED_Lighting_Effects + value);
          setLED_Lighting_Effects(updatedValue);
          break;
        case 'Spotlight':
          updatedValue = Math.max(0, Spotlight + value);
          setSpotlight(updatedValue);
          break;
        case 'Lighting_Rigging_and_Truss':
          updatedValue = Math.max(0, Lighting_Rigging_and_Truss + value);
          setLighting_Rigging_and_Truss(updatedValue);
          break;
        case 'Drape_Kit_Black':
          updatedValue = Math.max(0, Drape_Kit_Black + value);
          setDrape_Kit_Black(updatedValue);
          break;
        case 'Drape_Kit_Grey':
          updatedValue = Math.max(0, Drape_Kit_Grey + value);
          setDrape_Kit_Grey(updatedValue);
          break;
        case 'Drape_Kit_White':
          updatedValue = Math.max(0, Drape_Kit_White + value);
          setDrape_Kit_White(updatedValue);
          break;
        case 'Scenic_Panels':
          updatedValue = Math.max(0, Scenic_Panels + value);
          setScenic_Panels(updatedValue);
          break;
        case 'Podium':
          updatedValue = Math.max(0, Podium + value);
          setPodium(updatedValue);
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
        case 'Audience_Table_Power':
          updatedValue = Math.max(0, Audience_Table_Power + value);
          setAudience_Table_Power(updatedValue);
          break;
        case 'Power_Strips_6x1':
          updatedValue = Math.max(0, Power_Strips_6x1 + value);
          setPower_Strips_6x1(updatedValue);
          break;
        case 'Portable_Distribution_Box_50_Amp':
          updatedValue = Math.max(0, Portable_Distribution_Box_50_Amp + value);
          setPortable_Distribution_Box_50_Amp(updatedValue);
          break;
        case 'Portable_Distribution_Box_100_Amp':
          updatedValue = Math.max(0, Portable_Distribution_Box_100_Amp + value);
          setPortable_Distribution_Box_100_Amp(updatedValue);
          break;
        case 'Portable_Distribution_Box_200_Amp':
          updatedValue = Math.max(0, Portable_Distribution_Box_200_Amp + value);
          setPortable_Distribution_Box_200_Amp(updatedValue);
          break;
        case 'Portable_Distribution_Box_300_Amp':
          updatedValue = Math.max(0, Portable_Distribution_Box_300_Amp + value);
          setPortable_Distribution_Box_300_Amp(updatedValue);
          break;
        case 'Portable_Distribution_Box_400_Amp':
          updatedValue = Math.max(0, Portable_Distribution_Box_400_Amp + value);
          setPortable_Distribution_Box_400_Amp(updatedValue);
          break;
        default:
          break;
      }

      if (!isNaN(updatedValue)) {
        updateStepTwoData(field, updatedValue);
      }
    };
  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Lighting</p>
        <CardDetails
          name='Uplighting'
          value={Uplighting}
          onDecrease={() => handleAdjust('Uplighting', -1)}
          onIncrease={() => handleAdjust('Uplighting', 1)}
        />
        <CardDetails
          name='Stage Wash'
          value={Stage_Wash}
          onDecrease={() => handleAdjust('Stage_Wash', -1)}
          onIncrease={() => handleAdjust('Stage_Wash', 1)}
        />
        <CardDetails
          name='Moving Head Lights'
          value={Moving_Head_Lights}
          onDecrease={() => handleAdjust('Moving_Head_Lights', -1)}
          onIncrease={() => handleAdjust('Moving_Head_Lights', 1)}
        />
        <CardDetails
          name='Gobo'
          value={Gobo}
          onDecrease={() => handleAdjust('Gobo', -1)}
          onIncrease={() => handleAdjust('Gobo', 1)}
        />
        <CardDetails
          name='Inflatable Balloon Light'
          value={Inflatable_Balloon_Light}
          onDecrease={() => handleAdjust('Inflatable_Balloon_Light', -1)}
          onIncrease={() => handleAdjust('Inflatable_Balloon_Light', 1)}
        />
        <CardDetails
          name='LED Lighting Effects'
          value={LED_Lighting_Effects}
          onDecrease={() => handleAdjust('LED_Lighting_Effects', -1)}
          onIncrease={() => handleAdjust('LED_Lighting_Effects', 1)}
        />
        <CardDetails
          name='Spotlight'
          value={Spotlight}
          onDecrease={() => handleAdjust('Spotlight', -1)}
          onIncrease={() => handleAdjust('Spotlight', 1)}
        />
        <CardDetails
          name='Lighting Rigging and Truss'
          value={Lighting_Rigging_and_Truss}
          onDecrease={() => handleAdjust('Lighting_Rigging_and_Truss', -1)}
          onIncrease={() => handleAdjust('Lighting_Rigging_and_Truss', 1)}
        />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Scenic</p>
        <CardDetails
          name='Drape Kit (Black)'
          value={Drape_Kit_Black}
          onDecrease={() => handleAdjust('Drape_Kit_Black', -1)}
          onIncrease={() => handleAdjust('Drape_Kit_Black', 1)}
        />
        <CardDetails
          name='Drape Kit (Grey)'
          value={Drape_Kit_Grey}
          onDecrease={() => handleAdjust('Drape_Kit_Grey', -1)}
          onIncrease={() => handleAdjust('Drape_Kit_Grey', 1)}
        />
        <CardDetails
          name='Drape Kit (White)'
          value={Drape_Kit_White}
          onDecrease={() => handleAdjust('Drape_Kit_White', -1)}
          onIncrease={() => handleAdjust('Drape_Kit_White', 1)}
        />
        <CardDetails
          name='Scenic Panels'
          value={Scenic_Panels}
          onDecrease={() => handleAdjust('Scenic_Panels', -1)}
          onIncrease={() => handleAdjust('Scenic_Panels', 1)}
        />
        <CardDetails
          name='Podium'
          value={Podium}
          onDecrease={() => handleAdjust('Podium', -1)}
          onIncrease={() => handleAdjust('Podium', 1)}
        />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Electrical</p>
        <CardDetails
          name='Audience Table Power'
          value={Audience_Table_Power}
          onDecrease={() => handleAdjust('Audience_Table_Power', -1)}
          onIncrease={() => handleAdjust('Audience_Table_Power', 1)}
        />
        <CardDetails
          name='Power Strips 6x1'
          value={Power_Strips_6x1}
          onDecrease={() => handleAdjust('Power_Strips_6x1', -1)}
          onIncrease={() => handleAdjust('Power_Strips_6x1', 1)}
        />
        <CardDetails
          name='Portable Distribution Box (50 Amp)'
          value={Portable_Distribution_Box_50_Amp}
          onDecrease={() =>
            handleAdjust('Portable_Distribution_Box_50_Amp', -1)
          }
          onIncrease={() => handleAdjust('Portable_Distribution_Box_50_Amp', 1)}
        />
        <CardDetails
          name='Portable Distribution Box (100 Amp)'
          value={Portable_Distribution_Box_100_Amp}
          onDecrease={() =>
            handleAdjust('Portable_Distribution_Box_100_Amp', -1)
          }
          onIncrease={() =>
            handleAdjust('Portable_Distribution_Box_100_Amp', 1)
          }
        />
        <CardDetails
          name='Portable Distribution Box (200 Amp)'
          value={Portable_Distribution_Box_200_Amp}
          onDecrease={() =>
            handleAdjust('Portable_Distribution_Box_200_Amp', -1)
          }
          onIncrease={() =>
            handleAdjust('Portable_Distribution_Box_200_Amp', 1)
          }
        />
        <CardDetails
          name='Portable Distribution Box (300 Amp)'
          value={Portable_Distribution_Box_300_Amp}
          onDecrease={() =>
            handleAdjust('Portable_Distribution_Box_300_Amp', -1)
          }
          onIncrease={() =>
            handleAdjust('Portable_Distribution_Box_300_Amp', 1)
          }
        />
        <CardDetails
          name='Portable Distribution Box (400 Amp)'
          value={Portable_Distribution_Box_400_Amp}
          onDecrease={() =>
            handleAdjust('Portable_Distribution_Box_400_Amp', -1)
          }
          onIncrease={() =>
            handleAdjust('Portable_Distribution_Box_400_Amp', 1)
          }
        />
      </div>
    </div>
  );
};
 
export default StepSix;