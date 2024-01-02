import { FC, useState } from "react";
import {
  Communication,
  Microphones,
  Mixers,
  Speaksers,
} from "../../../../types";
import CardDetails from "./card-details";

interface StepThreeProps {
  formData: any;
  updateFormData: (field: string, value: number) => void;
}

const StepThree: FC<StepThreeProps> = ({ formData, updateFormData }) => {
  const [microphones, setMicrophones] = useState({
    wiredHandheld: formData.microphones?.wiredHandheld ?? 0,
    wirelessHandheld: formData.microphones?.wirelessHandheld ?? 0,
    wirelessLavalier: formData.microphones?.wirelessLavalier ?? 0,
    headsetMicrophone: formData.microphones?.headsetMicrophone ?? 0,
    earsetMicrophone: formData.microphones?.earsetMicrophone ?? 0,
    gooseneckMicrophone: formData.microphones?.gooseneckMicrophone ?? 0,
    boundaryMicrophone: formData.microphones?.boundaryMicrophone ?? 0,
    audienceMicrophone: formData.microphones?.audienceMicrophone ?? 0,
  });

  const [speaksers, setSpeaksers] = useState({
    speakers_8_15: formData.speakers?.speakers_8_15 ?? 0,
    line_array_speaker_system:
      formData.speakers?.line_array_speaker_system ?? 0,
    subwoofer_12_18: formData.speakers?.subwoofer_12_18 ?? 0,
    reference_speaker_monitors:
      formData.speakers?.reference_speaker_monitors ?? 0,
    bluetooth_speaker_small: formData.speakers?.bluetooth_speaker_small ?? 0,
    bluetooth_speaker_large: formData.speakers?.bluetooth_speaker_large ?? 0,
    computer_audio_speaker_system:
      formData.speakers?.computer_audio_speaker_system ?? 0,
    audio_rigging_and_truss: formData.speakers?.audio_rigging_and_truss ?? 0,
  });

  const [mixers, setMixers] = useState({
    analog_mixer: formData.mixers?.analog_mixer ?? 0,
    digital_mixer: formData.mixers?.digital_mixer ?? 0,
    computer_audio_interface: formData.mixers?.computer_audio_interface ?? 0,
    multi_media_DI_box: formData.mixers?.multi_media_DI_box ?? 0,
    broadcast_phone_line_interface:
      formData.mixers?.broadcast_phone_line_interface ?? 0,
    digital_audio_recording: formData.mixers?.digital_audio_recording ?? 0,
    audio_playback_instant_replay:
      formData.mixers?.audio_playback_instant_replay ?? 0,
    cd_player: formData.mixers?.cd_player ?? 0,
    audio_processing: formData.mixers?.audio_processing ?? 0,
  });

  const [communication, setCommunication] = useState({
    wireless_belt_pack_and_headset:
      formData.communication?.wireless_belt_pack_and_headset ?? 0,
    wired_belt_pack_and_headset:
      formData.communication?.wired_belt_pack_and_headset ?? 0,
  });

  const handleAdjustMicrophones = (field: keyof Microphones, value: number) => {
    let updatedValue = Math.max(0, microphones[field] + value);
    setMicrophones((prev) => ({ ...prev, [field]: updatedValue }));

    if (!isNaN(updatedValue)) {
      updateFormData(field as string, updatedValue);
    }
  };

  const handleAdjustSpeaksers = (field: keyof Speaksers, value: number) => {
    let updatedValue = Math.max(0, speaksers[field] + value);
    setSpeaksers((prev) => ({ ...prev, [field]: updatedValue }));

    if (!isNaN(updatedValue)) {
      updateFormData(field as string, updatedValue);
    }
  };

  const handleAdjustMixers = (field: keyof Mixers, value: number) => {
    let updatedValue = Math.max(0, mixers[field] + value);
    setMixers((prev) => ({ ...prev, [field]: updatedValue }));

    if (!isNaN(updatedValue)) {
      updateFormData(field as string, updatedValue);
    }
  };

  const handleAdjustCommunication = (
    field: keyof Communication,
    value: number
  ) => {
    let updatedValue = Math.max(0, communication[field] + value);
    setCommunication((prev) => ({ ...prev, [field]: updatedValue }));

    if (!isNaN(updatedValue)) {
      updateFormData(field as string, updatedValue);
    }
  };
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="bg-[#F3F1FB] rounded-lg p-6 col-span-2 sm:col-span-1">
        <p className="text-[18px] font-medium mb-4">Microphones</p>
        <div>
          <CardDetails
            name="Wired Handheld"
            value={microphones.wiredHandheld}
            onDecrease={() => handleAdjustMicrophones("wiredHandheld", -1)}
            onIncrease={() => handleAdjustMicrophones("wiredHandheld", 1)}
          />
          <CardDetails
            name="Wireless Handheld"
            value={microphones.wirelessHandheld}
            onDecrease={() => handleAdjustMicrophones("wirelessHandheld", -1)}
            onIncrease={() => handleAdjustMicrophones("wirelessHandheld", 1)}
          />
          <CardDetails
            name="Wireless Lavalier"
            value={microphones.wirelessLavalier}
            onDecrease={() => handleAdjustMicrophones("wirelessLavalier", -1)}
            onIncrease={() => handleAdjustMicrophones("wirelessLavalier", 1)}
          />
          <CardDetails
            name="Headset Microphone"
            value={microphones.headsetMicrophone}
            onDecrease={() => handleAdjustMicrophones("headsetMicrophone", -1)}
            onIncrease={() => handleAdjustMicrophones("headsetMicrophone", 1)}
          />
          <CardDetails
            name="Earset Microphone"
            value={microphones.earsetMicrophone}
            onDecrease={() => handleAdjustMicrophones("earsetMicrophone", -1)}
            onIncrease={() => handleAdjustMicrophones("earsetMicrophone", 1)}
          />
          <CardDetails
            name="Gooseneck Microphone"
            value={microphones.gooseneckMicrophone}
            onDecrease={() =>
              handleAdjustMicrophones("gooseneckMicrophone", -1)
            }
            onIncrease={() => handleAdjustMicrophones("gooseneckMicrophone", 1)}
          />
          <CardDetails
            name="Boundary Microphone"
            value={microphones.boundaryMicrophone}
            onDecrease={() => handleAdjustMicrophones("boundaryMicrophone", -1)}
            onIncrease={() => handleAdjustMicrophones("boundaryMicrophone", 1)}
          />
          <CardDetails
            name="Audience Microphone"
            value={microphones.audienceMicrophone}
            onDecrease={() => handleAdjustMicrophones("audienceMicrophone", -1)}
            onIncrease={() => handleAdjustMicrophones("audienceMicrophone", 1)}
          />
        </div>
      </div>
      <div className="bg-[#F3F1FB] rounded-lg p-6  col-span-2 sm:col-span-1">
        <p className="text-[18px] font-medium mb-4">Speakers</p>
        <div>
          <CardDetails
            name="Speakers 8”-15”"
            value={speaksers.speakers_8_15}
            onDecrease={() => handleAdjustSpeaksers("speakers_8_15", -1)}
            onIncrease={() => handleAdjustSpeaksers("speakers_8_15", 1)}
          />
          <CardDetails
            name="Line-array Speaker System"
            value={speaksers.line_array_speaker_system}
            onDecrease={() =>
              handleAdjustSpeaksers("line_array_speaker_system", -1)
            }
            onIncrease={() =>
              handleAdjustSpeaksers("line_array_speaker_system", 1)
            }
          />
          <CardDetails
            name="Subwoofer 12”-18”"
            value={speaksers.subwoofer_12_18}
            onDecrease={() => handleAdjustSpeaksers("subwoofer_12_18", -1)}
            onIncrease={() => handleAdjustSpeaksers("subwoofer_12_18", 1)}
          />
          <CardDetails
            name="Reference Speaker Monitors"
            value={speaksers.reference_speaker_monitors}
            onDecrease={() =>
              handleAdjustSpeaksers("reference_speaker_monitors", -1)
            }
            onIncrease={() =>
              handleAdjustSpeaksers("reference_speaker_monitors", 1)
            }
          />
          <CardDetails
            name="Bluetooth Speaker Small"
            value={speaksers.bluetooth_speaker_small}
            onDecrease={() =>
              handleAdjustSpeaksers("bluetooth_speaker_small", -1)
            }
            onIncrease={() =>
              handleAdjustSpeaksers("bluetooth_speaker_small", 1)
            }
          />
          <CardDetails
            name="Bluetooth Speaker Large"
            value={speaksers.bluetooth_speaker_large}
            onDecrease={() =>
              handleAdjustSpeaksers("bluetooth_speaker_large", -1)
            }
            onIncrease={() =>
              handleAdjustSpeaksers("bluetooth_speaker_large", 1)
            }
          />
          <CardDetails
            name="Computer Audio Speaker System"
            value={speaksers.computer_audio_speaker_system}
            onDecrease={() =>
              handleAdjustSpeaksers("computer_audio_speaker_system", -1)
            }
            onIncrease={() =>
              handleAdjustSpeaksers("computer_audio_speaker_system", 1)
            }
          />
          <CardDetails
            name="Audio Rigging and Truss"
            value={speaksers.audio_rigging_and_truss}
            onDecrease={() =>
              handleAdjustSpeaksers("audio_rigging_and_truss", -1)
            }
            onIncrease={() =>
              handleAdjustSpeaksers("audio_rigging_and_truss", 1)
            }
          />
        </div>
      </div>
      <div className="bg-[#F3F1FB] rounded-lg p-6  col-span-2 sm:col-span-1">
        <p className="text-[18px] font-medium mb-4">Mixers</p>
        <div>
          <CardDetails
            name="Analog Mixer"
            value={mixers.analog_mixer}
            onDecrease={() => handleAdjustMixers("analog_mixer", -1)}
            onIncrease={() => handleAdjustMixers("analog_mixer", 1)}
          />
          <CardDetails
            name="Digital Mixer"
            value={mixers.digital_mixer}
            onDecrease={() => handleAdjustMixers("digital_mixer", -1)}
            onIncrease={() => handleAdjustMixers("digital_mixer", 1)}
          />
          <CardDetails
            name="Computer Audio Interface"
            value={mixers.computer_audio_interface}
            onDecrease={() =>
              handleAdjustMixers("computer_audio_interface", -1)
            }
            onIncrease={() => handleAdjustMixers("computer_audio_interface", 1)}
          />
          <CardDetails
            name="Multi-Media D.I. Box"
            value={mixers.multi_media_DI_box}
            onDecrease={() => handleAdjustMixers("multi_media_DI_box", -1)}
            onIncrease={() => handleAdjustMixers("multi_media_DI_box", 1)}
          />
          <CardDetails
            name="Broadcast Phone Line Interface"
            value={mixers.broadcast_phone_line_interface}
            onDecrease={() =>
              handleAdjustMixers("broadcast_phone_line_interface", -1)
            }
            onIncrease={() =>
              handleAdjustMixers("broadcast_phone_line_interface", 1)
            }
          />
          <CardDetails
            name="Digital Audio Recording"
            value={mixers.digital_audio_recording}
            onDecrease={() => handleAdjustMixers("digital_audio_recording", -1)}
            onIncrease={() => handleAdjustMixers("digital_audio_recording", 1)}
          />
          <CardDetails
            name="Audio Playback Instant Replay"
            value={mixers.audio_playback_instant_replay}
            onDecrease={() =>
              handleAdjustMixers("audio_playback_instant_replay", -1)
            }
            onIncrease={() =>
              handleAdjustMixers("audio_playback_instant_replay", 1)
            }
          />
          <CardDetails
            name="CD Player"
            value={mixers.cd_player}
            onDecrease={() => handleAdjustMixers("cd_player", -1)}
            onIncrease={() => handleAdjustMixers("cd_player", 1)}
          />
          <CardDetails
            name="Audio Processing (EQ, Comp, etc.)"
            value={mixers.audio_processing}
            onDecrease={() => handleAdjustMixers("audio_processing", -1)}
            onIncrease={() => handleAdjustMixers("audio_processing", 1)}
          />
        </div>
      </div>
      <div className="bg-[#F3F1FB] rounded-lg p-6  col-span-2 sm:col-span-1">
        <p className="text-[18px] font-medium mb-4">Communication</p>
        <div>
          <CardDetails
            name="Wireless Belt Pack and Headset"
            value={communication.wireless_belt_pack_and_headset}
            onDecrease={() =>
              handleAdjustCommunication("wireless_belt_pack_and_headset", -1)
            }
            onIncrease={() =>
              handleAdjustCommunication("wireless_belt_pack_and_headset", 1)
            }
          />

          <CardDetails
            name="Wired Belt Pack and Headset"
            value={communication.wired_belt_pack_and_headset}
            onDecrease={() =>
              handleAdjustCommunication("wired_belt_pack_and_headset", -1)
            }
            onIncrease={() =>
              handleAdjustCommunication("wired_belt_pack_and_headset", 1)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default StepThree;
