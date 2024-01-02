import { FC, useState } from "react";
import {
  PresenterTools,
  VideoCamera,
  VideoProcessing,
} from "../../../../types";
import CardDetails from "./card-details";

interface StepFiveProps {
  formData: any;
  updateFormData: (field: string, value: number) => void;
}

const StepFive: FC<StepFiveProps> = ({ formData, updateFormData }) => {
  const [videoCamera, setVideoCamera] = useState({
    Broadcast_Camera: formData.videoCamera?.Broadcast_Camera ?? 0,
    Roaming_Camera: formData.videoCamera?.Roaming_Camera ?? 0,
    Camcorder: formData.videoCamera?.Camcorder ?? 0,
    Video_and_Camera_Lighting:
      formData.videoCamera?.Video_and_Camera_Lighting ?? 0,
    Photography_Camera: formData.videoCamera?.Photography_Camera ?? 0,
  });

  const [videoProcessing, setVideoProcessing] = useState({
    Video_Switching_and_Effects_Processing:
      formData.videoProcessing?.Video_Switching_and_Effects_Processing ?? 0,
    Video_Capture: formData.videoProcessing?.Video_Capture ?? 0,
    Screen_Blend_21_Nine_Format:
      formData.videoProcessing?.Screen_Blend_21_Nine_Format ?? 0,
    Video_Streaming: formData.videoProcessing?.Video_Streaming ?? 0,
    DVD_Blu_Ray_Player: formData.videoProcessing?.DVD_Blu_Ray_Player ?? 0,
    VHS_DVD_Player: formData.videoProcessing?.VHS_DVD_Player ?? 0,
  });

  const [presenterTools, setPresenterTools] = useState({
    Speaker_Timer: formData.presenterTools?.Speaker_Timer ?? 0,
    Presentation_Remote_Clicker:
      formData.presenterTools?.Presentation_Remote_Clicker ?? 0,
    Laser_Pointer: formData.presenterTools?.Laser_Pointer ?? 0,
    Perfect_Cue_System: formData.presenterTools?.Perfect_Cue_System ?? 0,
    Flipchart: formData.presenterTools?.Flipchart ?? 0,
  });

  const handleAdjustVideoCamera = (field: keyof VideoCamera, value: number) => {
    let updatedValue = Math.max(0, videoCamera[field] + value);
    setVideoCamera((prev) => ({ ...prev, [field]: updatedValue }));

    if (!isNaN(updatedValue)) {
      updateFormData(field as string, updatedValue);
    }
  };

  const handleAdjustVideoProcessing = (
    field: keyof VideoProcessing,
    value: number
  ) => {
    let updatedValue = Math.max(0, videoProcessing[field] + value);
    setVideoProcessing((prev) => ({ ...prev, [field]: updatedValue }));

    if (!isNaN(updatedValue)) {
      updateFormData(field as string, updatedValue);
    }
  };

  const handleAdjustPresenterTools = (
    field: keyof PresenterTools,
    value: number
  ) => {
    let updatedValue = Math.max(0, presenterTools[field] + value);
    setPresenterTools((prev) => ({ ...prev, [field]: updatedValue }));

    if (!isNaN(updatedValue)) {
      updateFormData(field as string, updatedValue);
    }
  };
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-[#F3F1FB] rounded-lg p-6 col-span-2 sm:col-span-1">
        <p className="text-[18px] font-medium mb-4">Video & Camera</p>
        <CardDetails
          name="Broadcast Camera"
          value={videoCamera.Broadcast_Camera}
          onDecrease={() => handleAdjustVideoCamera("Broadcast_Camera", -1)}
          onIncrease={() => handleAdjustVideoCamera("Broadcast_Camera", 1)}
        />
        <CardDetails
          name="Roaming Camera"
          value={videoCamera.Roaming_Camera}
          onDecrease={() => handleAdjustVideoCamera("Roaming_Camera", -1)}
          onIncrease={() => handleAdjustVideoCamera("Roaming_Camera", 1)}
        />
        <CardDetails
          name="Camcorder"
          value={videoCamera.Camcorder}
          onDecrease={() => handleAdjustVideoCamera("Camcorder", -1)}
          onIncrease={() => handleAdjustVideoCamera("Camcorder", 1)}
        />
        <CardDetails
          name="Video & Camera Lighting"
          value={videoCamera.Video_and_Camera_Lighting}
          onDecrease={() =>
            handleAdjustVideoCamera("Video_and_Camera_Lighting", -1)
          }
          onIncrease={() =>
            handleAdjustVideoCamera("Video_and_Camera_Lighting", 1)
          }
        />
        <CardDetails
          name="Photography Camera"
          value={videoCamera.Photography_Camera}
          onDecrease={() => handleAdjustVideoCamera("Photography_Camera", -1)}
          onIncrease={() => handleAdjustVideoCamera("Photography_Camera", 1)}
        />
      </div>
      <div className="bg-[#F3F1FB] rounded-lg p-6 col-span-2 sm:col-span-1">
        <p className="text-[18px] font-medium mb-4">Video Processing</p>
        <CardDetails
          name="Video Switching & Effects Processing"
          value={videoProcessing.Video_Switching_and_Effects_Processing}
          onDecrease={() =>
            handleAdjustVideoProcessing(
              "Video_Switching_and_Effects_Processing",
              -1
            )
          }
          onIncrease={() =>
            handleAdjustVideoProcessing(
              "Video_Switching_and_Effects_Processing",
              1
            )
          }
        />
        <CardDetails
          name="Video Capture"
          value={videoProcessing.Video_Capture}
          onDecrease={() => handleAdjustVideoProcessing("Video_Capture", -1)}
          onIncrease={() => handleAdjustVideoProcessing("Video_Capture", 1)}
        />
        <CardDetails
          name="Screen Blend (21:9 Format)"
          value={videoProcessing.Screen_Blend_21_Nine_Format}
          onDecrease={() =>
            handleAdjustVideoProcessing("Screen_Blend_21_Nine_Format", -1)
          }
          onIncrease={() =>
            handleAdjustVideoProcessing("Screen_Blend_21_Nine_Format", 1)
          }
        />
        <CardDetails
          name="Video Streaming"
          value={videoProcessing.Video_Streaming}
          onDecrease={() => handleAdjustVideoProcessing("Video_Streaming", -1)}
          onIncrease={() => handleAdjustVideoProcessing("Video_Streaming", 1)}
        />
        <CardDetails
          name="DVD-Blu-Ray Player"
          value={videoProcessing.DVD_Blu_Ray_Player}
          onDecrease={() =>
            handleAdjustVideoProcessing("DVD_Blu_Ray_Player", -1)
          }
          onIncrease={() =>
            handleAdjustVideoProcessing("DVD_Blu_Ray_Player", 1)
          }
        />
        <CardDetails
          name="VHS/DVD Player"
          value={videoProcessing.VHS_DVD_Player}
          onDecrease={() => handleAdjustVideoProcessing("VHS_DVD_Player", -1)}
          onIncrease={() => handleAdjustVideoProcessing("VHS_DVD_Player", 1)}
        />
      </div>
      <div className="bg-[#F3F1FB] rounded-lg p-6 col-span-2 sm:col-span-1">
        <p className="text-[18px] font-medium mb-4">Presenter Tools</p>
        <CardDetails
          name="Speaker Timer"
          value={presenterTools.Speaker_Timer}
          onDecrease={() => handleAdjustPresenterTools("Speaker_Timer", -1)}
          onIncrease={() => handleAdjustPresenterTools("Speaker_Timer", 1)}
        />
        <CardDetails
          name="Presentation Remote Clicker"
          value={presenterTools.Presentation_Remote_Clicker}
          onDecrease={() =>
            handleAdjustPresenterTools("Presentation_Remote_Clicker", -1)
          }
          onIncrease={() =>
            handleAdjustPresenterTools("Presentation_Remote_Clicker", 1)
          }
        />
        <CardDetails
          name="Laser Pointer"
          value={presenterTools.Laser_Pointer}
          onDecrease={() => handleAdjustPresenterTools("Laser_Pointer", -1)}
          onIncrease={() => handleAdjustPresenterTools("Laser_Pointer", 1)}
        />
        <CardDetails
          name="Perfect Cue System"
          value={presenterTools.Perfect_Cue_System}
          onDecrease={() =>
            handleAdjustPresenterTools("Perfect_Cue_System", -1)
          }
          onIncrease={() => handleAdjustPresenterTools("Perfect_Cue_System", 1)}
        />
        <CardDetails
          name="Flipchart"
          value={presenterTools.Flipchart}
          onDecrease={() => handleAdjustPresenterTools("Flipchart", -1)}
          onIncrease={() => handleAdjustPresenterTools("Flipchart", 1)}
        />
      </div>
    </div>
  );
};

export default StepFive;
