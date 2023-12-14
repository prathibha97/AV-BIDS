import { FC, useState } from 'react';
import CardDetails from './card-details';

interface StepFourProps {
  formData: any;
  updateFormData: (field: string, value: number) => void;
}

interface Screens {
  Twenty_One_Nine_Large_Format_Screen: number;
  Fast_Fold_Screen_16_9_Format_Large_Venue: number;
  Fast_Fold_Screen_16_9_Format_Medium_Venue: number;
  Fast_Fold_Screen_16_9_Format_Meeting_Room: number;
  Fast_Fold_Screen_4_3_Format_Large_Venue: number;
  Fast_Fold_Screen_4_3_Format_Medium_Venue: number;
  Fast_Fold_Screen_4_3_Format_Meeting_Room: number;
  Fast_Fold_Drape_Kit: number;
  Tripod_Screens_60_96: number;
  LCD_Monitor: number;
  Video_LED_Wall: number;
  Screen_Rigging_and_Truss: number;
}

interface Projection {
  Twenty_One_Nine_Format_Projection: number;
  Large_Venue_Projector_Standard_Throw_Lens: number;
  Large_Venue_Projector_Long_Throw_Lens: number;
  Large_Venue_Projector_Short_Throw_Lens: number;
  Medium_Venue_Projector_Standard_Throw_Lens: number;
  Medium_Venue_Projector_Long_Throw_Lens: number;
  Medium_Venue_Projector_Short_Throw_Lens: number;
  Meeting_Room_Projector: number;
  Projector_Rigging_and_Truss: number;
}

const StepFour: FC<StepFourProps> = ({ formData, updateFormData }) => {
  const [screens, setScreens] = useState({
    Twenty_One_Nine_Large_Format_Screen:
      formData.screens?.Twenty_One_Nine_Large_Format_Screen ?? 0,
    Fast_Fold_Screen_16_9_Format_Large_Venue:
      formData.screens?.Fast_Fold_Screen_16_9_Format_Large_Venue ?? 0,
    Fast_Fold_Screen_16_9_Format_Medium_Venue:
      formData.screens?.Fast_Fold_Screen_16_9_Format_Medium_Venue ?? 0,
    Fast_Fold_Screen_16_9_Format_Meeting_Room:
      formData.screens?.Fast_Fold_Screen_16_9_Format_Meeting_Room ?? 0,
    Fast_Fold_Screen_4_3_Format_Large_Venue:
      formData.screens?.Fast_Fold_Screen_4_3_Format_Large_Venue ?? 0,
    Fast_Fold_Screen_4_3_Format_Medium_Venue:
      formData.screens?.Fast_Fold_Screen_4_3_Format_Medium_Venue ?? 0,
    Fast_Fold_Screen_4_3_Format_Meeting_Room:
      formData.screens?.Fast_Fold_Screen_4_3_Format_Meeting_Room ?? 0,
    Fast_Fold_Drape_Kit: formData.screens?.Fast_Fold_Drape_Kit ?? 0,
    Tripod_Screens_60_96: formData.screens?.Tripod_Screens_60_96 ?? 0,
    LCD_Monitor: formData.screens?.LCD_Monitor ?? 0,
    Video_LED_Wall: formData.screens?.Video_LED_Wall ?? 0,
    Screen_Rigging_and_Truss: formData.screens?.Screen_Rigging_and_Truss ?? 0,
  });

  const [projection, setProjection] = useState({
    Twenty_One_Nine_Format_Projection:
      formData.projection?.Twenty_One_Nine_Format_Projection ?? 0,
    Large_Venue_Projector_Standard_Throw_Lens:
      formData.projection?.Large_Venue_Projector_Standard_Throw_Lens ?? 0,
    Large_Venue_Projector_Long_Throw_Lens:
      formData.projection?.Large_Venue_Projector_Long_Throw_Lens ?? 0,
    Large_Venue_Projector_Short_Throw_Lens:
      formData.projection?.Large_Venue_Projector_Short_Throw_Lens ?? 0,
    Medium_Venue_Projector_Standard_Throw_Lens:
      formData.projection?.Medium_Venue_Projector_Standard_Throw_Lens ?? 0,
    Medium_Venue_Projector_Long_Throw_Lens:
      formData.projection?.Medium_Venue_Projector_Long_Throw_Lens ?? 0,
    Medium_Venue_Projector_Short_Throw_Lens:
      formData.projection?.Medium_Venue_Projector_Short_Throw_Lens ?? 0,
    Meeting_Room_Projector: formData.projection?.Meeting_Room_Projector ?? 0,
    Projector_Rigging_and_Truss:
      formData.projection?.Projector_Rigging_and_Truss ?? 0,
  });


  const handleAdjustScreens = (field: keyof Screens, value: number) => {
    let updatedValue = Math.max(0, screens[field] + value);
    setScreens((prev) => ({ ...prev, [field]: updatedValue }));

    if (!isNaN(updatedValue)) {
      updateFormData(field as string, updatedValue);
    }
  };

  const handleAdjustProjection = (field: keyof Projection, value: number) => {
    let updatedValue = Math.max(0, projection[field] + value);
    setProjection((prev) => ({ ...prev, [field]: updatedValue }));

    if (!isNaN(updatedValue)) {
      updateFormData(field as string, updatedValue);
    }
  };
  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Screens</p>
        <CardDetails
          name='21:9 Large Format Screen'
          value={screens.Twenty_One_Nine_Large_Format_Screen}
          onDecrease={() =>
            handleAdjustScreens('Twenty_One_Nine_Large_Format_Screen', -1)
          }
          onIncrease={() =>
            handleAdjustScreens('Twenty_One_Nine_Large_Format_Screen', 1)
          }
        />
        <CardDetails
          name='Fast Fold Screen (16:9 Format) Large Venue'
          value={screens.Fast_Fold_Screen_16_9_Format_Large_Venue}
          onDecrease={() =>
            handleAdjustScreens('Fast_Fold_Screen_16_9_Format_Large_Venue', -1)
          }
          onIncrease={() =>
            handleAdjustScreens('Fast_Fold_Screen_16_9_Format_Large_Venue', 1)
          }
        />
        <CardDetails
          name='Fast Fold Screen (16:9 Format) Medium Venue'
          value={screens.Fast_Fold_Screen_16_9_Format_Medium_Venue}
          onDecrease={() =>
            handleAdjustScreens('Fast_Fold_Screen_16_9_Format_Medium_Venue', -1)
          }
          onIncrease={() =>
            handleAdjustScreens('Fast_Fold_Screen_16_9_Format_Medium_Venue', 1)
          }
        />
        <CardDetails
          name='Fast Fold Screen (16:9 Format) Meeting Room'
          value={screens.Fast_Fold_Screen_16_9_Format_Meeting_Room}
          onDecrease={() =>
            handleAdjustScreens('Fast_Fold_Screen_16_9_Format_Meeting_Room', -1)
          }
          onIncrease={() =>
            handleAdjustScreens('Fast_Fold_Screen_16_9_Format_Meeting_Room', 1)
          }
        />
        <CardDetails
          name='Fast Fold Screen (4:3 Format) Large Venue'
          value={screens.Fast_Fold_Screen_4_3_Format_Large_Venue}
          onDecrease={() =>
            handleAdjustScreens('Fast_Fold_Screen_4_3_Format_Large_Venue', -1)
          }
          onIncrease={() =>
            handleAdjustScreens('Fast_Fold_Screen_4_3_Format_Large_Venue', 1)
          }
        />
        <CardDetails
          name='Fast Fold Screen (4:3 Format) Medium Venue'
          value={screens.Fast_Fold_Screen_4_3_Format_Medium_Venue}
          onDecrease={() =>
            handleAdjustScreens('Fast_Fold_Screen_4_3_Format_Medium_Venue', -1)
          }
          onIncrease={() =>
            handleAdjustScreens('Fast_Fold_Screen_4_3_Format_Medium_Venue', 1)
          }
        />
        <CardDetails
          name='Fast Fold Screen (4:3 Format) Meeting Room'
          value={screens.Fast_Fold_Screen_4_3_Format_Meeting_Room}
          onDecrease={() =>
            handleAdjustScreens('Fast_Fold_Screen_4_3_Format_Meeting_Room', -1)
          }
          onIncrease={() =>
            handleAdjustScreens('Fast_Fold_Screen_4_3_Format_Meeting_Room', 1)
          }
        />
        <CardDetails
          name='Fast Fold Drape Kit'
          value={screens.Fast_Fold_Drape_Kit}
          onDecrease={() => handleAdjustScreens('Fast_Fold_Drape_Kit', -1)}
          onIncrease={() => handleAdjustScreens('Fast_Fold_Drape_Kit', 1)}
        />
        <CardDetails
          name='Tripod Screens 60”-96”'
          value={screens.Tripod_Screens_60_96}
          onDecrease={() => handleAdjustScreens('Tripod_Screens_60_96', -1)}
          onIncrease={() => handleAdjustScreens('Tripod_Screens_60_96', 1)}
        />
        <CardDetails
          name='LCD Monitor'
          value={screens.LCD_Monitor}
          onDecrease={() => handleAdjustScreens('LCD_Monitor', -1)}
          onIncrease={() => handleAdjustScreens('LCD_Monitor', 1)}
        />
        <CardDetails
          name='Video LED Wall'
          value={screens.Video_LED_Wall}
          onDecrease={() => handleAdjustScreens('Video_LED_Wall', -1)}
          onIncrease={() => handleAdjustScreens('Video_LED_Wall', 1)}
        />
        <CardDetails
          name='Screen Rigging and Truss'
          value={screens.Screen_Rigging_and_Truss}
          onDecrease={() => handleAdjustScreens('Screen_Rigging_and_Truss', -1)}
          onIncrease={() => handleAdjustScreens('Screen_Rigging_and_Truss', 1)}
        />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Projection</p>
        <CardDetails
          name='21:9 Format Projection'
          value={projection.Twenty_One_Nine_Format_Projection}
          onDecrease={() =>
            handleAdjustProjection('Twenty_One_Nine_Format_Projection', -1)
          }
          onIncrease={() =>
            handleAdjustProjection('Twenty_One_Nine_Format_Projection', 1)
          }
        />
        <CardDetails
          name='Large Venue Projector (Standard Throw Lens)'
          value={projection.Large_Venue_Projector_Standard_Throw_Lens}
          onDecrease={() =>
            handleAdjustProjection(
              'Large_Venue_Projector_Standard_Throw_Lens',
              -1
            )
          }
          onIncrease={() =>
            handleAdjustProjection(
              'Large_Venue_Projector_Standard_Throw_Lens',
              1
            )
          }
        />
        <CardDetails
          name='Large Venue Projector (Long Throw Lens)'
          value={projection.Large_Venue_Projector_Long_Throw_Lens}
          onDecrease={() =>
            handleAdjustProjection('Large_Venue_Projector_Long_Throw_Lens', -1)
          }
          onIncrease={() =>
            handleAdjustProjection('Large_Venue_Projector_Long_Throw_Lens', 1)
          }
        />
        <CardDetails
          name='Large Venue Projector (Short Throw Lens)'
          value={projection.Large_Venue_Projector_Short_Throw_Lens}
          onDecrease={() =>
            handleAdjustProjection('Large_Venue_Projector_Short_Throw_Lens', -1)
          }
          onIncrease={() =>
            handleAdjustProjection('Large_Venue_Projector_Short_Throw_Lens', 1)
          }
        />
        <CardDetails
          name='Medium Venue Projector (Standard Throw Lens)'
          value={projection.Medium_Venue_Projector_Standard_Throw_Lens}
          onDecrease={() =>
            handleAdjustProjection(
              'Medium_Venue_Projector_Standard_Throw_Lens',
              -1
            )
          }
          onIncrease={() =>
            handleAdjustProjection(
              'Medium_Venue_Projector_Standard_Throw_Lens',
              1
            )
          }
        />
        <CardDetails
          name='Medium Venue Projector (Long Throw Lens)'
          value={projection.Medium_Venue_Projector_Long_Throw_Lens}
          onDecrease={() =>
            handleAdjustProjection('Medium_Venue_Projector_Long_Throw_Lens', -1)
          }
          onIncrease={() =>
            handleAdjustProjection('Medium_Venue_Projector_Long_Throw_Lens', 1)
          }
        />
        <CardDetails
          name='Medium Venue Projector (Short Throw Lens)'
          value={projection.Medium_Venue_Projector_Short_Throw_Lens}
          onDecrease={() =>
            handleAdjustProjection(
              'Medium_Venue_Projector_Short_Throw_Lens',
              -1
            )
          }
          onIncrease={() =>
            handleAdjustProjection('Medium_Venue_Projector_Short_Throw_Lens', 1)
          }
        />
        <CardDetails
          name='Meeting Room Projector'
          value={projection.Meeting_Room_Projector}
          onDecrease={() =>
            handleAdjustProjection('Meeting_Room_Projector', -1)
          }
          onIncrease={() => handleAdjustProjection('Meeting_Room_Projector', 1)}
        />
        <CardDetails
          name='Projector Rigging and Truss'
          value={projection.Projector_Rigging_and_Truss}
          onDecrease={() =>
            handleAdjustProjection('Projector_Rigging_and_Truss', -1)
          }
          onIncrease={() =>
            handleAdjustProjection('Projector_Rigging_and_Truss', 1)
          }
        />
      </div>
    </div>
  );
};

export default StepFour;
