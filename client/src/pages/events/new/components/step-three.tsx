// import { FC, useState } from "react";
// import CardDetails from "./card-details";

// interface StepThreeProps {
//   formData: any;
//   updateStepTwoData: (field: string, value: number) => void;
// }

// const StepThree: FC<StepThreeProps> = ({ formData, updateStepTwoData }) => {
//   const [wiredHandheld, setWiredHandheld] = useState(0);
//   const [wirelessHandheld, setWirelessHandheld] = useState(0);
//   const [wirelessLavalier, setWirelessLavalier] = useState(0);
//   const [headsetMicrophone, setHeadsetMicrophone] = useState(0);
//   const [earsetMicrophone, setEarsetMicrophone] = useState(0);
//   const [gooseneckMicrophone, setGooseneckMicrophone] = useState(0);
//   const [boundaryMicrophone, setBoundaryMicrophone] = useState(0);
//   const [audienceMicrophone, setAudienceMicrophone] = useState(0);

//   const [speakers_8_15, setSpeakers_8_15] = useState(0);
//   const [line_array_speaker_system, setLine_array_speaker_system] = useState(0);
//   const [subwoofer_12_18, setSubwoofer_12_18] = useState(0);
//   const [reference_speaker_monitors, setReference_speaker_monitors] =
//     useState(0);
//   const [bluetooth_speaker_small, setBluetooth_speaker_small] = useState(0);
//   const [bluetooth_speaker_large, setBluetooth_speaker_large] = useState(0);
//   const [computer_audio_speaker_system, setComputer_audio_speaker_system] =
//     useState(0);
//   const [audio_rigging_and_truss, setAudio_rigging_and_truss] = useState(0);

//   const [analog_mixer, setAnalog_mixer] = useState(0);
//   const [digital_mixer, setDigital_mixer] = useState(0);
//   const [computer_audio_interface, setComputer_audio_interface] = useState(0);
//   const [multi_media_DI_box, setMulti_media_DI_box] = useState(0);
//   const [broadcast_phone_line_interface, setBroadcast_phone_line_interface] =
//     useState(0);
//   const [digital_audio_recording, setDigital_audio_recording] = useState(0);
//   const [audio_playback_instant_replay, setAudio_playback_instant_replay] =
//     useState(0);
//   const [cd_player, setCd_player] = useState(0);
//   const [audio_processing, setAudio_processing] = useState(0);

//   const [wireless_belt_pack_and_headset, setWireless_belt_pack_and_headset] =
//     useState(0);
//   const [wired_belt_pack_and_headset, setWired_belt_pack_and_headset] =
//     useState(0);

//   const handleAdjust = (field: string, value: number) => {
//     let updatedValue = 0;

//     switch (field) {
//       case "wiredHandheld":
//         updatedValue = Math.max(0, wiredHandheld + value);
//         setWiredHandheld(updatedValue);
//         break;
//       case "wirelessHandheld":
//         updatedValue = Math.max(0, wirelessHandheld + value);
//         setWirelessHandheld(updatedValue);
//         break;
//       case "wirelessLavalier":
//         updatedValue = Math.max(0, wirelessLavalier + value);
//         setWirelessLavalier(updatedValue);
//         break;
//       case "headsetMicrophone":
//         updatedValue = Math.max(0, headsetMicrophone + value);
//         setHeadsetMicrophone(updatedValue);
//         break;
//       case "earsetMicrophone":
//         updatedValue = Math.max(0, earsetMicrophone + value);
//         setEarsetMicrophone(updatedValue);
//         break;
//       case "gooseneckMicrophone":
//         updatedValue = Math.max(0, gooseneckMicrophone + value);
//         setGooseneckMicrophone(updatedValue);
//         break;
//       case "boundaryMicrophone":
//         updatedValue = Math.max(0, boundaryMicrophone + value);
//         setBoundaryMicrophone(updatedValue);
//         break;
//       case "audienceMicrophone":
//         updatedValue = Math.max(0, audienceMicrophone + value);
//         setAudienceMicrophone(updatedValue);
//         break;
//       case "speakers_8_15":
//         updatedValue = Math.max(0, speakers_8_15 + value);
//         setSpeakers_8_15(updatedValue);
//         break;
//       case "line_array_speaker_system":
//         updatedValue = Math.max(0, line_array_speaker_system + value);
//         setLine_array_speaker_system(updatedValue);
//         break;
//       case "subwoofer_12_18":
//         updatedValue = Math.max(0, subwoofer_12_18 + value);
//         setSubwoofer_12_18(updatedValue);
//         break;
//       case "reference_speaker_monitors":
//         updatedValue = Math.max(0, reference_speaker_monitors + value);
//         setReference_speaker_monitors(updatedValue);
//         break;
//       case "bluetooth_speaker_small":
//         updatedValue = Math.max(0, bluetooth_speaker_small + value);
//         setBluetooth_speaker_small(updatedValue);
//         break;
//       case "bluetooth_speaker_large":
//         updatedValue = Math.max(0, bluetooth_speaker_large + value);
//         setBluetooth_speaker_large(updatedValue);
//         break;
//       case "computer_audio_speaker_system":
//         updatedValue = Math.max(0, computer_audio_speaker_system + value);
//         setComputer_audio_speaker_system(updatedValue);
//         break;
//       case "audio_rigging_and_truss":
//         updatedValue = Math.max(0, audio_rigging_and_truss + value);
//         setAudio_rigging_and_truss(updatedValue);
//         break;
//       case "analog_mixer":
//         updatedValue = Math.max(0, analog_mixer + value);
//         setAnalog_mixer(updatedValue);
//         break;
//       case "digital_mixer":
//         updatedValue = Math.max(0, digital_mixer + value);
//         setDigital_mixer(updatedValue);
//         break;
//       case "computer_audio_interface":
//         updatedValue = Math.max(0, computer_audio_interface + value);
//         setComputer_audio_interface(updatedValue);
//         break;
//       case "multi_media_DI_box":
//         updatedValue = Math.max(0, multi_media_DI_box + value);
//         setMulti_media_DI_box(updatedValue);
//         break;
//       case "broadcast_phone_line_interface":
//         updatedValue = Math.max(0, broadcast_phone_line_interface + value);
//         setBroadcast_phone_line_interface(updatedValue);
//         break;
//       case "digital_audio_recording":
//         updatedValue = Math.max(0, digital_audio_recording + value);
//         setDigital_audio_recording(updatedValue);
//         break;
//       case "audio_playback_instant_replay":
//         updatedValue = Math.max(0, audio_playback_instant_replay + value);
//         setAudio_playback_instant_replay(updatedValue);
//         break;
//       case "cd_player":
//         updatedValue = Math.max(0, cd_player + value);
//         setCd_player(updatedValue);
//         break;
//       case "audio_processing":
//         updatedValue = Math.max(0, audio_processing + value);
//         setAudio_processing(updatedValue);
//         break;
//       case "wireless_belt_pack_and_headset":
//         updatedValue = Math.max(0, wireless_belt_pack_and_headset + value);
//         setWireless_belt_pack_and_headset(updatedValue);
//         break;
//       case "wired_belt_pack_and_headset":
//         updatedValue = Math.max(0, wired_belt_pack_and_headset + value);
//         setWired_belt_pack_and_headset(updatedValue);
//         break;
//       default:
//         break;
//     }

//     if (!isNaN(updatedValue)) {
//       updateStepTwoData(field, updatedValue);
//     }
//   };
//   return (
//     <div className="grid sm:grid-cols-2 gap-6">
//       <div className="bg-[#F3F1FB] rounded-lg p-6">
//         <p className="text-[18px] font-medium mb-4">Microphones</p>
//         <div>
//           <CardDetails
//             name="Wired Handheld"
//             value={wiredHandheld}
//             onDecrease={() => handleAdjust("wiredHandheld", -1)}
//             onIncrease={() => handleAdjust("wiredHandheld", 1)}
//           />
//           <CardDetails
//             name="Wireless Handheld"
//             value={wirelessHandheld}
//             onDecrease={() => handleAdjust("wirelessHandheld", -1)}
//             onIncrease={() => handleAdjust("wirelessHandheld", 1)}
//           />
//           <CardDetails
//             name="Wireless Lavalier"
//             value={wirelessLavalier}
//             onDecrease={() => handleAdjust("wirelessLavalier", -1)}
//             onIncrease={() => handleAdjust("wirelessLavalier", 1)}
//           />
//           <CardDetails
//             name="Headset Microphone"
//             value={headsetMicrophone}
//             onDecrease={() => handleAdjust("headsetMicrophone", -1)}
//             onIncrease={() => handleAdjust("headsetMicrophone", 1)}
//           />
//           <CardDetails
//             name="Earset Microphone"
//             value={earsetMicrophone}
//             onDecrease={() => handleAdjust("earsetMicrophone", -1)}
//             onIncrease={() => handleAdjust("earsetMicrophone", 1)}
//           />
//           <CardDetails
//             name="Gooseneck Microphone"
//             value={gooseneckMicrophone}
//             onDecrease={() => handleAdjust("gooseneckMicrophone", -1)}
//             onIncrease={() => handleAdjust("gooseneckMicrophone", 1)}
//           />
//           <CardDetails
//             name="Boundary Microphone"
//             value={boundaryMicrophone}
//             onDecrease={() => handleAdjust("boundaryMicrophone", -1)}
//             onIncrease={() => handleAdjust("boundaryMicrophone", 1)}
//           />
//           <CardDetails
//             name="Audience Microphone"
//             value={audienceMicrophone}
//             onDecrease={() => handleAdjust("audienceMicrophone", -1)}
//             onIncrease={() => handleAdjust("audienceMicrophone", 1)}
//           />
//         </div>
//       </div>
//       <div className="bg-[#F3F1FB] rounded-lg p-6">
//         <p className="text-[18px] font-medium mb-4">Speakers</p>
//         <div>
//           <CardDetails
//             name="Speakers 8”-15”"
//             value={speakers_8_15}
//             onDecrease={() => handleAdjust("speakers_8_15", -1)}
//             onIncrease={() => handleAdjust("speakers_8_15", 1)}
//           />
//           <CardDetails
//             name="Line-array Speaker System"
//             value={line_array_speaker_system}
//             onDecrease={() => handleAdjust("line_array_speaker_system", -1)}
//             onIncrease={() => handleAdjust("line_array_speaker_system", 1)}
//           />
//           <CardDetails
//             name="Subwoofer 12”-18”"
//             value={subwoofer_12_18}
//             onDecrease={() => handleAdjust("subwoofer_12_18", -1)}
//             onIncrease={() => handleAdjust("subwoofer_12_18", 1)}
//           />
//           <CardDetails
//             name="Reference Speaker Monitors"
//             value={reference_speaker_monitors}
//             onDecrease={() => handleAdjust("reference_speaker_monitors", -1)}
//             onIncrease={() => handleAdjust("reference_speaker_monitors", 1)}
//           />
//           <CardDetails
//             name="Bluetooth Speaker Small"
//             value={bluetooth_speaker_small}
//             onDecrease={() => handleAdjust("bluetooth_speaker_small", -1)}
//             onIncrease={() => handleAdjust("bluetooth_speaker_small", 1)}
//           />
//           <CardDetails
//             name="Bluetooth Speaker Large"
//             value={bluetooth_speaker_large}
//             onDecrease={() => handleAdjust("bluetooth_speaker_large", -1)}
//             onIncrease={() => handleAdjust("bluetooth_speaker_large", 1)}
//           />
//           <CardDetails
//             name="Computer Audio Speaker System"
//             value={computer_audio_speaker_system}
//             onDecrease={() => handleAdjust("computer_audio_speaker_system", -1)}
//             onIncrease={() => handleAdjust("computer_audio_speaker_system", 1)}
//           />
//           <CardDetails
//             name="Audio Rigging and Truss"
//             value={audio_rigging_and_truss}
//             onDecrease={() => handleAdjust("audio_rigging_and_truss", -1)}
//             onIncrease={() => handleAdjust("audio_rigging_and_truss", 1)}
//           />
//         </div>
//       </div>
//       <div className="bg-[#F3F1FB] rounded-lg p-6">
//         <p className="text-[18px] font-medium mb-4">Mixers</p>
//         <div>
//           <CardDetails
//             name="Analog Mixer"
//             value={analog_mixer}
//             onDecrease={() => handleAdjust("analog_mixer", -1)}
//             onIncrease={() => handleAdjust("analog_mixer", 1)}
//           />
//           <CardDetails
//             name="Digital Mixer"
//             value={digital_mixer}
//             onDecrease={() => handleAdjust("digital_mixer", -1)}
//             onIncrease={() => handleAdjust("digital_mixer", 1)}
//           />
//           <CardDetails
//             name="Computer Audio Interface"
//             value={computer_audio_interface}
//             onDecrease={() => handleAdjust("computer_audio_interface", -1)}
//             onIncrease={() => handleAdjust("computer_audio_interface", 1)}
//           />
//           <CardDetails
//             name="Multi-Media D.I. Box"
//             value={multi_media_DI_box}
//             onDecrease={() => handleAdjust("multi_media_DI_box", -1)}
//             onIncrease={() => handleAdjust("multi_media_DI_box", 1)}
//           />
//           <CardDetails
//             name="Broadcast Phone Line Interface"
//             value={broadcast_phone_line_interface}
//             onDecrease={() =>
//               handleAdjust("broadcast_phone_line_interface", -1)
//             }
//             onIncrease={() => handleAdjust("broadcast_phone_line_interface", 1)}
//           />
//           <CardDetails
//             name="Digital Audio Recording"
//             value={digital_audio_recording}
//             onDecrease={() => handleAdjust("digital_audio_recording", -1)}
//             onIncrease={() => handleAdjust("digital_audio_recording", 1)}
//           />
//           <CardDetails
//             name="Audio Playback Instant Replay"
//             value={audio_playback_instant_replay}
//             onDecrease={() => handleAdjust("audio_playback_instant_replay", -1)}
//             onIncrease={() => handleAdjust("audio_playback_instant_replay", 1)}
//           />
//           <CardDetails
//             name="CD Player"
//             value={cd_player}
//             onDecrease={() => handleAdjust("cd_player", -1)}
//             onIncrease={() => handleAdjust("cd_player", 1)}
//           />
//           <CardDetails
//             name="Audio Processing (EQ, Comp, etc.)"
//             value={audio_processing}
//             onDecrease={() => handleAdjust("audio_processing", -1)}
//             onIncrease={() => handleAdjust("audio_processing", 1)}
//           />
//         </div>
//       </div>
//       <div className="bg-[#F3F1FB] rounded-lg p-6">
//         <p className="text-[18px] font-medium mb-4">Communication</p>
//         <div>
//           <CardDetails
//             name="Wireless Belt Pack and Headset"
//             value={wireless_belt_pack_and_headset}
//             onDecrease={() =>
//               handleAdjust("wireless_belt_pack_and_headset", -1)
//             }
//             onIncrease={() => handleAdjust("wireless_belt_pack_and_headset", 1)}
//           />

//           <CardDetails
//             name="Wired Belt Pack and Headset"
//             value={wired_belt_pack_and_headset}
//             onDecrease={() => handleAdjust("wired_belt_pack_and_headset", -1)}
//             onIncrease={() => handleAdjust("wired_belt_pack_and_headset", 1)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StepThree;

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
    <div className="grid sm:grid-cols-2 gap-6">
      <div className="bg-[#F3F1FB] rounded-lg p-6 ">
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
      <div className="bg-[#F3F1FB] rounded-lg p-6">
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
      <div className="bg-[#F3F1FB] rounded-lg p-6">
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
      <div className="bg-[#F3F1FB] rounded-lg p-6">
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
