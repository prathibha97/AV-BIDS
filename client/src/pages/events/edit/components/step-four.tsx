import { FC, useState } from 'react';
import CardDetails from './card-details';

interface StepFourProps {
  formData: any;
  updateStepTwoData: (field: string, value: number) => void;
}

const StepFour: FC<StepFourProps> = ({ formData, updateStepTwoData }) => {
  const [
    Twenty_One_Nine_Large_Format_Screen,
    setTwenty_One_Nine_Large_Format_Screen,
  ] = useState(formData.Twenty_One_Nine_Large_Format_Screen || 0);
  const [
    Fast_Fold_Screen_16_9_Format_Large_Venue,
    setFast_Fold_Screen_16_9_Format_Large_Venue,
  ] = useState(formData.Fast_Fold_Screen_16_9_Format_Large_Venue || 0);
  const [
    Fast_Fold_Screen_16_9_Format_Medium_Venue,
    setFast_Fold_Screen_16_9_Format_Medium_Venue,
  ] = useState(formData.Fast_Fold_Screen_16_9_Format_Medium_Venue || 0);
  const [
    Fast_Fold_Screen_16_9_Format_Meeting_Room,
    setFast_Fold_Screen_16_9_Format_Meeting_Room,
  ] = useState(formData.Fast_Fold_Screen_16_9_Format_Meeting_Room || 0);
  const [
    Fast_Fold_Screen_4_3_Format_Large_Venue,
    setFast_Fold_Screen_4_3_Format_Large_Venue,
  ] = useState(formData.Fast_Fold_Screen_4_3_Format_Large_Venue || 0);
  const [
    Fast_Fold_Screen_4_3_Format_Medium_Venue,
    setFast_Fold_Screen_4_3_Format_Medium_Venue,
  ] = useState(formData.Fast_Fold_Screen_4_3_Format_Medium_Venue || 0);
  const [
    Fast_Fold_Screen_4_3_Format_Meeting_Room,
    setFast_Fold_Screen_4_3_Format_Meeting_Room,
  ] = useState(formData.Fast_Fold_Screen_4_3_Format_Meeting_Room || 0);
  const [Fast_Fold_Drape_Kit, setFast_Fold_Drape_Kit] = useState(
    formData.Fast_Fold_Drape_Kit || 0
  );
  const [Tripod_Screens_60_96, setTripod_Screens_60_96] = useState(
    formData.Tripod_Screens_60_96 || 0
  );
  const [LCD_Monitor, setLCD_Monitor] = useState(formData.LCD_Monitor || 0);
  const [Video_LED_Wall, setVideo_LED_Wall] = useState(
    formData.Video_LED_Wall || 0
  );
  const [Screen_Rigging_and_Truss, setScreen_Rigging_and_Truss] = useState(
    formData.Screen_Rigging_and_Truss || 0
  );

  const [
    Twenty_One_Nine_Format_Projection,
    setTwenty_One_Nine_Format_Projection,
  ] = useState(formData.Twenty_One_Nine_Format_Projection || 0);
  const [
    Large_Venue_Projector_Standard_Throw_Lens,
    setLarge_Venue_Projector_Standard_Throw_Lens,
  ] = useState(formData.Large_Venue_Projector_Standard_Throw_Lens || 0);
  const [
    Large_Venue_Projector_Long_Throw_Lens,
    setLarge_Venue_Projector_Long_Throw_Lens,
  ] = useState(formData.Large_Venue_Projector_Long_Throw_Lens || 0);
  const [
    Large_Venue_Projector_Short_Throw_Lens,
    setLarge_Venue_Projector_Short_Throw_Lens,
  ] = useState(formData.Large_Venue_Projector_Short_Throw_Lens || 0);
  const [
    Medium_Venue_Projector_Standard_Throw_Lens,
    setMedium_Venue_Projector_Standard_Throw_Lens,
  ] = useState(formData.Medium_Venue_Projector_Standard_Throw_Lens || 0);
  const [
    Medium_Venue_Projector_Long_Throw_Lens,
    setMedium_Venue_Projector_Long_Throw_Lens,
  ] = useState(formData.Medium_Venue_Projector_Long_Throw_Lens || 0);
  const [
    Medium_Venue_Projector_Short_Throw_Lens,
    setMedium_Venue_Projector_Short_Throw_Lens,
  ] = useState(formData.Medium_Venue_Projector_Short_Throw_Lens || 0);
  const [Meeting_Room_Projector, setMeeting_Room_Projector] = useState(
    formData.Meeting_Room_Projector || 0
  );
  const [Projector_Rigging_and_Truss, setProjector_Rigging_and_Truss] =
    useState(formData.Projector_Rigging_and_Truss || 0);

  const handleAdjust = (field: string, value: number) => {
    let updatedValue = 0;

    switch (field) {
      case 'Twenty_One_Nine_Large_Format_Screen':
        updatedValue = Math.max(0, Twenty_One_Nine_Large_Format_Screen + value);
        setTwenty_One_Nine_Large_Format_Screen(updatedValue);
        break;
      case 'Fast_Fold_Screen_16_9_Format_Large_Venue':
        updatedValue = Math.max(
          0,
          Fast_Fold_Screen_16_9_Format_Large_Venue + value
        );
        setFast_Fold_Screen_16_9_Format_Large_Venue(updatedValue);
        break;
      case 'Fast_Fold_Screen_16_9_Format_Medium_Venue':
        updatedValue = Math.max(
          0,
          Fast_Fold_Screen_16_9_Format_Medium_Venue + value
        );
        setFast_Fold_Screen_16_9_Format_Medium_Venue(updatedValue);
        break;
      case 'Fast_Fold_Screen_16_9_Format_Meeting_Room':
        updatedValue = Math.max(
          0,
          Fast_Fold_Screen_16_9_Format_Meeting_Room + value
        );
        setFast_Fold_Screen_16_9_Format_Meeting_Room(updatedValue);
        break;
      case 'Fast_Fold_Screen_4_3_Format_Large_Venue':
        updatedValue = Math.max(
          0,
          Fast_Fold_Screen_4_3_Format_Large_Venue + value
        );
        setFast_Fold_Screen_4_3_Format_Large_Venue(updatedValue);
        break;
      case 'Fast_Fold_Screen_4_3_Format_Medium_Venue':
        updatedValue = Math.max(
          0,
          Fast_Fold_Screen_4_3_Format_Medium_Venue + value
        );
        setFast_Fold_Screen_4_3_Format_Medium_Venue(updatedValue);
        break;
      case 'Fast_Fold_Screen_4_3_Format_Meeting_Room':
        updatedValue = Math.max(
          0,
          Fast_Fold_Screen_4_3_Format_Meeting_Room + value
        );
        setFast_Fold_Screen_4_3_Format_Meeting_Room(updatedValue);
        break;
      case 'Fast_Fold_Drape_Kit':
        updatedValue = Math.max(0, Fast_Fold_Drape_Kit + value);
        setFast_Fold_Drape_Kit(updatedValue);
        break;
      case 'Tripod_Screens_60_96':
        updatedValue = Math.max(0, Tripod_Screens_60_96 + value);
        setTripod_Screens_60_96(updatedValue);
        break;
      case 'LCD_Monitor':
        updatedValue = Math.max(0, LCD_Monitor + value);
        setLCD_Monitor(updatedValue);
        break;
      case 'Video_LED_Wall':
        updatedValue = Math.max(0, Video_LED_Wall + value);
        setVideo_LED_Wall(updatedValue);
        break;
      case 'Screen_Rigging_and_Truss':
        updatedValue = Math.max(0, Screen_Rigging_and_Truss + value);
        setScreen_Rigging_and_Truss(updatedValue);
        break;
      case 'Twenty_One_Nine_Format_Projection':
        updatedValue = Math.max(0, Twenty_One_Nine_Format_Projection + value);
        setTwenty_One_Nine_Format_Projection(updatedValue);
        break;
      case 'Large_Venue_Projector_Standard_Throw_Lens':
        updatedValue = Math.max(
          0,
          Large_Venue_Projector_Standard_Throw_Lens + value
        );
        setLarge_Venue_Projector_Standard_Throw_Lens(updatedValue);
        break;
      case 'Large_Venue_Projector_Long_Throw_Lens':
        updatedValue = Math.max(
          0,
          Large_Venue_Projector_Long_Throw_Lens + value
        );
        setLarge_Venue_Projector_Long_Throw_Lens(updatedValue);
        break;
      case 'Large_Venue_Projector_Short_Throw_Lens':
        updatedValue = Math.max(
          0,
          Large_Venue_Projector_Short_Throw_Lens + value
        );
        setLarge_Venue_Projector_Short_Throw_Lens(updatedValue);
        break;
      case 'Medium_Venue_Projector_Standard_Throw_Lens':
        updatedValue = Math.max(
          0,
          Medium_Venue_Projector_Standard_Throw_Lens + value
        );
        setMedium_Venue_Projector_Standard_Throw_Lens(updatedValue);
        break;
      case 'Medium_Venue_Projector_Long_Throw_Lens':
        updatedValue = Math.max(
          0,
          Medium_Venue_Projector_Long_Throw_Lens + value
        );
        setMedium_Venue_Projector_Long_Throw_Lens(updatedValue);
        break;
      case 'Medium_Venue_Projector_Short_Throw_Lens':
        updatedValue = Math.max(
          0,
          Medium_Venue_Projector_Short_Throw_Lens + value
        );
        setMedium_Venue_Projector_Short_Throw_Lens(updatedValue);
        break;
      case 'Meeting_Room_Projector':
        updatedValue = Math.max(0, Meeting_Room_Projector + value);
        setMeeting_Room_Projector(updatedValue);
        break;
      case 'Projector_Rigging_and_Truss':
        updatedValue = Math.max(0, Projector_Rigging_and_Truss + value);
        setProjector_Rigging_and_Truss(updatedValue);
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
        <p className='text-[18px] font-medium mb-4'>Screens</p>
        <CardDetails
          name='21:9 Large Format Screen'
          value={Twenty_One_Nine_Large_Format_Screen}
          onDecrease={() =>
            handleAdjust('Twenty_One_Nine_Large_Format_Screen', -1)
          }
          onIncrease={() =>
            handleAdjust('Twenty_One_Nine_Large_Format_Screen', 1)
          }
        />
        <CardDetails
          name='Fast Fold Screen (16:9 Format) Large Venue'
          value={Fast_Fold_Screen_16_9_Format_Large_Venue}
          onDecrease={() =>
            handleAdjust('Fast_Fold_Screen_16_9_Format_Large_Venue', -1)
          }
          onIncrease={() =>
            handleAdjust('Fast_Fold_Screen_16_9_Format_Large_Venue', 1)
          }
        />
        <CardDetails
          name='Fast Fold Screen (16:9 Format) Medium Venue'
          value={Fast_Fold_Screen_16_9_Format_Medium_Venue}
          onDecrease={() =>
            handleAdjust('Fast_Fold_Screen_16_9_Format_Medium_Venue', -1)
          }
          onIncrease={() =>
            handleAdjust('Fast_Fold_Screen_16_9_Format_Medium_Venue', 1)
          }
        />
        <CardDetails
          name='Fast Fold Screen (16:9 Format) Meeting Room'
          value={Fast_Fold_Screen_16_9_Format_Meeting_Room}
          onDecrease={() =>
            handleAdjust('Fast_Fold_Screen_16_9_Format_Meeting_Room', -1)
          }
          onIncrease={() =>
            handleAdjust('Fast_Fold_Screen_16_9_Format_Meeting_Room', 1)
          }
        />
        <CardDetails
          name='Fast Fold Screen (4:3 Format) Large Venue'
          value={Fast_Fold_Screen_4_3_Format_Large_Venue}
          onDecrease={() =>
            handleAdjust('Fast_Fold_Screen_4_3_Format_Large_Venue', -1)
          }
          onIncrease={() =>
            handleAdjust('Fast_Fold_Screen_4_3_Format_Large_Venue', 1)
          }
        />
        <CardDetails
          name='Fast Fold Screen (4:3 Format) Medium Venue'
          value={Fast_Fold_Screen_4_3_Format_Medium_Venue}
          onDecrease={() =>
            handleAdjust('Fast_Fold_Screen_4_3_Format_Medium_Venue', -1)
          }
          onIncrease={() =>
            handleAdjust('Fast_Fold_Screen_4_3_Format_Medium_Venue', 1)
          }
        />
        <CardDetails
          name='Fast Fold Screen (4:3 Format) Meeting Room'
          value={Fast_Fold_Screen_4_3_Format_Meeting_Room}
          onDecrease={() =>
            handleAdjust('Fast_Fold_Screen_4_3_Format_Meeting_Room', -1)
          }
          onIncrease={() =>
            handleAdjust('Fast_Fold_Screen_4_3_Format_Meeting_Room', 1)
          }
        />
        <CardDetails
          name='Fast Fold Drape Kit'
          value={Fast_Fold_Drape_Kit}
          onDecrease={() => handleAdjust('Fast_Fold_Drape_Kit', -1)}
          onIncrease={() => handleAdjust('Fast_Fold_Drape_Kit', 1)}
        />
        <CardDetails
          name='Tripod Screens 60”-96”'
          value={Tripod_Screens_60_96}
          onDecrease={() => handleAdjust('Tripod_Screens_60_96', -1)}
          onIncrease={() => handleAdjust('Tripod_Screens_60_96', 1)}
        />
        <CardDetails
          name='LCD Monitor'
          value={LCD_Monitor}
          onDecrease={() => handleAdjust('LCD_Monitor', -1)}
          onIncrease={() => handleAdjust('LCD_Monitor', 1)}
        />
        <CardDetails
          name='Video LED Wall'
          value={Video_LED_Wall}
          onDecrease={() => handleAdjust('Video_LED_Wall', -1)}
          onIncrease={() => handleAdjust('Video_LED_Wall', 1)}
        />
        <CardDetails
          name='Screen Rigging and Truss'
          value={Screen_Rigging_and_Truss}
          onDecrease={() => handleAdjust('Screen_Rigging_and_Truss', -1)}
          onIncrease={() => handleAdjust('Screen_Rigging_and_Truss', 1)}
        />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Projection</p>
        <CardDetails
          name='21:9 Format Projection'
          value={Twenty_One_Nine_Format_Projection}
          onDecrease={() =>
            handleAdjust('Twenty_One_Nine_Format_Projection', -1)
          }
          onIncrease={() =>
            handleAdjust('Twenty_One_Nine_Format_Projection', 1)
          }
        />
        <CardDetails
          name='Large Venue Projector (Standard Throw Lens)'
          value={Large_Venue_Projector_Standard_Throw_Lens}
          onDecrease={() =>
            handleAdjust('Large_Venue_Projector_Standard_Throw_Lens', -1)
          }
          onIncrease={() =>
            handleAdjust('Large_Venue_Projector_Standard_Throw_Lens', 1)
          }
        />
        <CardDetails
          name='Large Venue Projector (Long Throw Lens)'
          value={Large_Venue_Projector_Long_Throw_Lens}
          onDecrease={() =>
            handleAdjust('Large_Venue_Projector_Long_Throw_Lens', -1)
          }
          onIncrease={() =>
            handleAdjust('Large_Venue_Projector_Long_Throw_Lens', 1)
          }
        />
        <CardDetails
          name='Large Venue Projector (Short Throw Lens)'
          value={Large_Venue_Projector_Short_Throw_Lens}
          onDecrease={() =>
            handleAdjust('Large_Venue_Projector_Short_Throw_Lens', -1)
          }
          onIncrease={() =>
            handleAdjust('Large_Venue_Projector_Short_Throw_Lens', 1)
          }
        />
        <CardDetails
          name='Medium Venue Projector (Standard Throw Lens)'
          value={Medium_Venue_Projector_Standard_Throw_Lens}
          onDecrease={() =>
            handleAdjust('Medium_Venue_Projector_Standard_Throw_Lens', -1)
          }
          onIncrease={() =>
            handleAdjust('Medium_Venue_Projector_Standard_Throw_Lens', 1)
          }
        />
        <CardDetails
          name='Medium Venue Projector (Long Throw Lens)'
          value={Medium_Venue_Projector_Long_Throw_Lens}
          onDecrease={() =>
            handleAdjust('Medium_Venue_Projector_Long_Throw_Lens', -1)
          }
          onIncrease={() =>
            handleAdjust('Medium_Venue_Projector_Long_Throw_Lens', 1)
          }
        />
        <CardDetails
          name='Medium Venue Projector (Short Throw Lens)'
          value={Medium_Venue_Projector_Short_Throw_Lens}
          onDecrease={() =>
            handleAdjust('Medium_Venue_Projector_Short_Throw_Lens', -1)
          }
          onIncrease={() =>
            handleAdjust('Medium_Venue_Projector_Short_Throw_Lens', 1)
          }
        />
        <CardDetails
          name='Meeting Room Projector'
          value={Meeting_Room_Projector}
          onDecrease={() => handleAdjust('Meeting_Room_Projector', -1)}
          onIncrease={() => handleAdjust('Meeting_Room_Projector', 1)}
        />
        <CardDetails
          name='Projector Rigging and Truss'
          value={Projector_Rigging_and_Truss}
          onDecrease={() => handleAdjust('Projector_Rigging_and_Truss', -1)}
          onIncrease={() => handleAdjust('Projector_Rigging_and_Truss', 1)}
        />
      </div>
    </div>
  );
};

export default StepFour;
