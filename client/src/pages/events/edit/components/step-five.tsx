import { FC, useState } from 'react';
import CardDetails from './card-details';

interface StepFiveProps {
  formData: any;
  updateStepTwoData: (field: string, value: number) => void;
}

const StepFive: FC<StepFiveProps> = ({ formData, updateStepTwoData }) => {
  const [Broadcast_Camera, setBroadcast_Camera] = useState(
    formData.Broadcast_Camera || 0
  );
  const [Roaming_Camera, setRoaming_Camera] = useState(
    formData.Roaming_Camera || 0
  );
  const [Camcorder, setCamcorder] = useState(formData.Camcorder || 0);
  const [Video_and_Camera_Lighting, setVideo_and_Camera_Lighting] = useState(
    formData.Video_and_Camera_Lighting || 0
  );
  const [Photography_Camera, setPhotography_Camera] = useState(
    formData.Photography_Camera || 0
  );

  const [
    Video_Switching_and_Effects_Processing,
    setVideo_Switching_and_Effects_Processing,
  ] = useState(formData.Video_Switching_and_Effects_Processing || 0);
  const [Video_Capture, setVideo_Capture] = useState(
    formData.Video_Capture || 0
  );
  const [Screen_Blend_21_Nine_Format, setScreen_Blend_21_Nine_Format] =
    useState(formData.Screen_Blend_21_Nine_Format || 0);
  const [Video_Streaming, setVideo_Streaming] = useState(
    formData.Video_Streaming || 0
  );
  const [DVD_Blu_Ray_Player, setDVD_Blu_Ray_Player] = useState(
    formData.DVD_Blu_Ray_Player || 0
  );
  const [VHS_DVD_Player, setVHS_DVD_Player] = useState(
    formData.VHS_DVD_Player || 0
  );

  const [Speaker_Timer, setSpeaker_Timer] = useState(
    formData.Speaker_Timer || 0
  );
  const [Presentation_Remote_Clicker, setPresentation_Remote_Clicker] =
    useState(formData.Presentation_Remote_Clicker || 0);
  const [Laser_Pointer, setLaser_Pointer] = useState(
    formData.Laser_Pointer || 0
  );
  const [Perfect_Cue_System, setPerfect_Cue_System] = useState(
    formData.Perfect_Cue_System || 0
  );
  const [Flipchart, setFlipchart] = useState(formData.Flipchart || 0);

  const handleAdjust = (field: string, value: number) => {
    let updatedValue = 0;

    switch (field) {
      case 'Broadcast_Camera':
        updatedValue = Math.max(0, Broadcast_Camera + value);
        setBroadcast_Camera(updatedValue);
        break;
      case 'Roaming_Camera':
        updatedValue = Math.max(0, Roaming_Camera + value);
        setRoaming_Camera(updatedValue);
        break;
      case 'Camcorder':
        updatedValue = Math.max(0, Camcorder + value);
        setCamcorder(updatedValue);
        break;
      case 'Video_and_Camera_Lighting':
        updatedValue = Math.max(0, Video_and_Camera_Lighting + value);
        setVideo_and_Camera_Lighting(updatedValue);
        break;
      case 'Photography_Camera':
        updatedValue = Math.max(0, Photography_Camera + value);
        setPhotography_Camera(updatedValue);
        break;
      case 'Video_Switching_and_Effects_Processing':
        updatedValue = Math.max(
          0,
          Video_Switching_and_Effects_Processing + value
        );
        setVideo_Switching_and_Effects_Processing(updatedValue);
        break;
      case 'Video_Capture':
        updatedValue = Math.max(0, Video_Capture + value);
        setVideo_Capture(updatedValue);
        break;
      case 'Video_Streaming':
        updatedValue = Math.max(0, Video_Streaming + value);
        setVideo_Streaming(updatedValue);
        break;
      case 'Screen_Blend_21_Nine_Format':
        updatedValue = Math.max(0, Screen_Blend_21_Nine_Format + value);
        setScreen_Blend_21_Nine_Format(updatedValue);
        break;
      case 'DVD_Blu_Ray_Player':
        updatedValue = Math.max(0, DVD_Blu_Ray_Player + value);
        setDVD_Blu_Ray_Player(updatedValue);
        break;
      case 'VHS_DVD_Player':
        updatedValue = Math.max(0, VHS_DVD_Player + value);
        setVHS_DVD_Player(updatedValue);
        break;
      case 'Speaker_Timer':
        updatedValue = Math.max(0, Speaker_Timer + value);
        setSpeaker_Timer(updatedValue);
        break;
      case 'Presentation_Remote_Clicker':
        updatedValue = Math.max(0, Presentation_Remote_Clicker + value);
        setPresentation_Remote_Clicker(updatedValue);
        break;
      case 'Laser_Pointer':
        updatedValue = Math.max(0, Laser_Pointer + value);
        setLaser_Pointer(updatedValue);
        break;
      case 'Perfect_Cue_System':
        updatedValue = Math.max(0, Perfect_Cue_System + value);
        setPerfect_Cue_System(updatedValue);
        break;
      case 'Flipchart':
        updatedValue = Math.max(0, Flipchart + value);
        setFlipchart(updatedValue);
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
        <p className='text-[18px] font-medium mb-4'>Video & Camera</p>
        <CardDetails
          name='Broadcast Camera'
          value={Broadcast_Camera}
          onDecrease={() => handleAdjust('Broadcast_Camera', -1)}
          onIncrease={() => handleAdjust('Broadcast_Camera', 1)}
        />
        <CardDetails
          name='Roaming Camera'
          value={Roaming_Camera}
          onDecrease={() => handleAdjust('Roaming_Camera', -1)}
          onIncrease={() => handleAdjust('Roaming_Camera', 1)}
        />
        <CardDetails
          name='Camcorder'
          value={Camcorder}
          onDecrease={() => handleAdjust('Camcorder', -1)}
          onIncrease={() => handleAdjust('Camcorder', 1)}
        />
        <CardDetails
          name='Video & Camera Lighting'
          value={Video_and_Camera_Lighting}
          onDecrease={() => handleAdjust('Video_and_Camera_Lighting', -1)}
          onIncrease={() => handleAdjust('Video_and_Camera_Lighting', 1)}
        />
        <CardDetails
          name='Photography Camera'
          value={Photography_Camera}
          onDecrease={() => handleAdjust('Photography_Camera', -1)}
          onIncrease={() => handleAdjust('Photography_Camera', 1)}
        />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Video Processing</p>
        <CardDetails
          name='Video Switching & Effects Processing'
          value={Video_Switching_and_Effects_Processing}
          onDecrease={() =>
            handleAdjust('Video_Switching_and_Effects_Processing', -1)
          }
          onIncrease={() =>
            handleAdjust('Video_Switching_and_Effects_Processing', 1)
          }
        />
        <CardDetails
          name='Video Capture'
          value={Video_Capture}
          onDecrease={() => handleAdjust('Video_Capture', -1)}
          onIncrease={() => handleAdjust('Video_Capture', 1)}
        />
        <CardDetails
          name='Screen Blend (21:9 Format)'
          value={Screen_Blend_21_Nine_Format}
          onDecrease={() => handleAdjust('Screen_Blend_21_Nine_Format', -1)}
          onIncrease={() => handleAdjust('Screen_Blend_21_Nine_Format', 1)}
        />
        <CardDetails
          name='Video Streaming'
          value={Video_Streaming}
          onDecrease={() => handleAdjust('Video_Streaming', -1)}
          onIncrease={() => handleAdjust('Video_Streaming', 1)}
        />
        <CardDetails
          name='DVD-Blu-Ray Player'
          value={DVD_Blu_Ray_Player}
          onDecrease={() => handleAdjust('DVD_Blu_Ray_Player', -1)}
          onIncrease={() => handleAdjust('DVD_Blu_Ray_Player', 1)}
        />
        <CardDetails
          name='VHS/DVD Player'
          value={VHS_DVD_Player}
          onDecrease={() => handleAdjust('VHS_DVD_Player', -1)}
          onIncrease={() => handleAdjust('VHS_DVD_Player', 1)}
        />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Presenter Tools</p>
        <CardDetails
          name='Speaker Timer'
          value={Speaker_Timer}
          onDecrease={() => handleAdjust('Speaker_Timer', -1)}
          onIncrease={() => handleAdjust('Speaker_Timer', 1)}
        />
        <CardDetails
          name='Presentation Remote Clicker'
          value={Presentation_Remote_Clicker}
          onDecrease={() => handleAdjust('Presentation_Remote_Clicker', -1)}
          onIncrease={() => handleAdjust('Presentation_Remote_Clicker', 1)}
        />
        <CardDetails
          name='Laser Pointer'
          value={Laser_Pointer}
          onDecrease={() => handleAdjust('Laser_Pointer', -1)}
          onIncrease={() => handleAdjust('Laser_Pointer', 1)}
        />
        <CardDetails
          name='Perfect Cue System'
          value={Perfect_Cue_System}
          onDecrease={() => handleAdjust('Perfect_Cue_System', -1)}
          onIncrease={() => handleAdjust('Perfect_Cue_System', 1)}
        />
        <CardDetails
          name='Flipchart'
          value={Flipchart}
          onDecrease={() => handleAdjust('Flipchart', -1)}
          onIncrease={() => handleAdjust('Flipchart', 1)}
        />
      </div>
    </div>
  );
};

export default StepFive;
