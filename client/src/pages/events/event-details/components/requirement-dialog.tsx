// import {
//   Button,
//   Dialog,
//   DialogBody,
//   DialogFooter,
//   DialogHeader,
// } from '@material-tailwind/react';
// import { FC } from 'react';
// import { Event } from '../../../../types';

// interface RequirementDialogProps {
//   open: boolean;
//   event: Event | null;
//   handleOpen: () => void;
// }

// const RequirementDialog: FC<RequirementDialogProps> = ({
//   handleOpen,
//   open,
//   event
// }) => {
//   const {
//     roomCount,
//     generalSessionCount,
//     breakoutSessionCount,
//     presenterCount,
//     microphones,
//     speakers,
//     mixers,
//     communication,
//     screens,
//     projection,
//     videoCamera,
//     videoProcessing,
//     presenterTools,
//     lighting,
//     scenic,
//     electrical,
//     staff,
//     otherRequirements,
//   } = event || {};

//   return (
//     <Dialog open={open} handler={handleOpen}>
//       <DialogHeader>{event?.title} - AV Requirements</DialogHeader>
//       <DialogBody className='max-h-[500px] overflow-y-auto'>
//         <div>
//           <h3>General Requirements</h3>
//           <p>Room Count: {roomCount}</p>
//           <p>General Session Count: {generalSessionCount}</p>
//           <p>Breakout Session Count: {breakoutSessionCount}</p>
//           <p>Presenter Count: {presenterCount}</p>

//           <h3>Microphone Requirements</h3>
//           <p>Wired Handheld Microphones: {microphones?.wiredHandheld}</p>
//           <p>Wireless Handheld Microphones: {microphones?.wirelessHandheld}</p>
//           <p>Wireless Lavalier Microphones: {microphones?.wirelessLavalier}</p>
//           <p>Headset Microphones: {microphones?.headsetMicrophone}</p>
//           <p>Earset Microphones: {microphones?.earsetMicrophone}</p>
//           <p>Gooseneck Microphones: {microphones?.gooseneckMicrophone}</p>
//           <p>Boundary Microphones: {microphones?.boundaryMicrophone}</p>
//           <p>Audience Microphones: {microphones?.audienceMicrophone}</p>

//           <h3>Speakers Requirements</h3>
//           <p>Speakers 8-15: {speakers?.speakers_8_15}</p>
//           <p>
//             Line Array Speaker System: {speakers?.line_array_speaker_system}
//           </p>
//           <p>Subwoofer 12-18: {speakers?.subwoofer_12_18}</p>
//           <p>
//             Reference Speaker Monitors: {speakers?.reference_speaker_monitors}
//           </p>
//           <p>Bluetooth Speaker Small: {speakers?.bluetooth_speaker_small}</p>
//           <p>Bluetooth Speaker Large: {speakers?.bluetooth_speaker_large}</p>
//           <p>
//             Computer Audio Speaker System:{' '}
//             {speakers?.computer_audio_speaker_system}
//           </p>
//           <p>Audio Rigging and Truss: {speakers?.audio_rigging_and_truss}</p>

//           {/* Add similar sections for mixers, communication, screens, projection, videoCamera, and videoProcessing */}

//           <h3>Mixer Requirements</h3>
//           <p>Analog Mixer: {mixers?.analog_mixer}</p>
//           <p>Digital Mixer: {mixers?.digital_mixer}</p>
//           <p>Computer Audio Interface: {mixers?.computer_audio_interface}</p>
//           <p>Multi-Media DI Box: {mixers?.multi_media_DI_box}</p>
//           <p>
//             Broadcast Phone Line Interface:{' '}
//             {mixers?.broadcast_phone_line_interface}
//           </p>
//           <p>Digital Audio Recording: {mixers?.digital_audio_recording}</p>
//           <p>
//             Audio Playback Instant Replay:{' '}
//             {mixers?.audio_playback_instant_replay}
//           </p>
//           <p>CD Player: {mixers?.cd_player}</p>
//           <p>Audio Processing: {mixers?.audio_processing}</p>

//           <h3>Communication Requirements</h3>
//           <p>
//             Wireless Belt Pack and Headset:{' '}
//             {communication?.wireless_belt_pack_and_headset}
//           </p>
//           <p>
//             Wired Belt Pack and Headset:{' '}
//             {communication?.wired_belt_pack_and_headset}
//           </p>

//           <h3>Screens Requirements</h3>
//           <p>
//             21:9 Large Format Screen:{' '}
//             {screens?.Twenty_One_Nine_Large_Format_Screen}
//           </p>
//           <p>
//             Fast Fold Screen 16:9 Format Large Venue:{' '}
//             {screens?.Fast_Fold_Screen_16_9_Format_Large_Venue}
//           </p>
//           <p>
//             Fast Fold Screen 16:9 Format Medium Venue:{' '}
//             {screens?.Fast_Fold_Screen_16_9_Format_Medium_Venue}
//           </p>
//           <p>
//             Fast Fold Screen 16:9 Format Meeting Room:{' '}
//             {screens?.Fast_Fold_Screen_16_9_Format_Meeting_Room}
//           </p>
//           <p>
//             Fast Fold Screen 4:3 Format Large Venue:{' '}
//             {screens?.Fast_Fold_Screen_4_3_Format_Large_Venue}
//           </p>
//           <p>
//             Fast Fold Screen 4:3 Format Medium Venue:{' '}
//             {screens?.Fast_Fold_Screen_4_3_Format_Medium_Venue}
//           </p>
//           <p>
//             Fast Fold Screen 4:3 Format Meeting Room:{' '}
//             {screens?.Fast_Fold_Screen_4_3_Format_Meeting_Room}
//           </p>
//           <p>Fast Fold Drape Kit: {screens?.Fast_Fold_Drape_Kit}</p>
//           <p>Tripod Screens 60:96: {screens?.Tripod_Screens_60_96}</p>
//           <p>LCD Monitor: {screens?.LCD_Monitor}</p>
//           <p>Video LED Wall: {screens?.Video_LED_Wall}</p>
//           <p>Screen Rigging and Truss: {screens?.Screen_Rigging_and_Truss}</p>

//           <h3>Projection Requirements</h3>
//           <p>
//             21:9 Format Projection:{' '}
//             {projection?.Twenty_One_Nine_Format_Projection}
//           </p>
//           <p>
//             Large Venue Projector Standard Throw Lens:{' '}
//             {projection?.Large_Venue_Projector_Standard_Throw_Lens}
//           </p>
//           <p>
//             Large Venue Projector Long Throw Lens:{' '}
//             {projection?.Large_Venue_Projector_Long_Throw_Lens}
//           </p>
//           <p>
//             Large Venue Projector Short Throw Lens:{' '}
//             {projection?.Large_Venue_Projector_Short_Throw_Lens}
//           </p>
//           <p>
//             Medium Venue Projector Standard Throw Lens:{' '}
//             {projection?.Medium_Venue_Projector_Standard_Throw_Lens}
//           </p>
//           <p>
//             Medium Venue Projector Long Throw Lens:{' '}
//             {projection?.Medium_Venue_Projector_Long_Throw_Lens}
//           </p>
//           <p>
//             Medium Venue Projector Short Throw Lens:{' '}
//             {projection?.Medium_Venue_Projector_Short_Throw_Lens}
//           </p>
//           <p>Meeting Room Projector: {projection?.Meeting_Room_Projector}</p>
//           <p>
//             Projector Rigging and Truss:{' '}
//             {projection?.Projector_Rigging_and_Truss}
//           </p>

//           <h3>Video Camera Requirements</h3>
//           <p>Broadcast Camera: {videoCamera?.Broadcast_Camera}</p>
//           <p>Roaming Camera: {videoCamera?.Roaming_Camera}</p>
//           <p>Camcorder: {videoCamera?.Camcorder}</p>
//           <p>
//             Video and Camera Lighting: {videoCamera?.Video_and_Camera_Lighting}
//           </p>
//           <p>Photography Camera: {videoCamera?.Photography_Camera}</p>

//           <h3>Video Processing Requirements</h3>
//           <p>
//             Video Switching and Effects Processing:{' '}
//             {videoProcessing?.Video_Switching_and_Effects_Processing}
//           </p>
//           <p>Video Capture: {videoProcessing?.Video_Capture}</p>
//           <p>
//             Screen Blend 21:9 Format:{' '}
//             {videoProcessing?.Screen_Blend_21_Nine_Format}
//           </p>
//           <p>Video Streaming: {videoProcessing?.Video_Streaming}</p>
//           <p>DVD/Blu-Ray Player: {videoProcessing?.DVD_Blu_Ray_Player}</p>
//           <p>VHS/DVD Player: {videoProcessing?.VHS_DVD_Player}</p>

//           <h3>Presenter Tools Requirements</h3>
//           <p>Speaker Timer: {presenterTools?.Speaker_Timer}</p>
//           <p>
//             Presentation Remote Clicker:{' '}
//             {presenterTools?.Presentation_Remote_Clicker}
//           </p>
//           <p>Laser Pointer: {presenterTools?.Laser_Pointer}</p>
//           <p>Perfect Cue System: {presenterTools?.Perfect_Cue_System}</p>
//           <p>Flipchart: {presenterTools?.Flipchart}</p>

//           <h3>Lighting Requirements</h3>
//           <p>Uplighting: {lighting?.Uplighting}</p>
//           <p>Stage Wash: {lighting?.Stage_Wash}</p>
//           <p>Moving Head Lights: {lighting?.Moving_Head_Lights}</p>
//           <p>Gobo: {lighting?.Gobo}</p>
//           <p>Inflatable Balloon Light: {lighting?.Inflatable_Balloon_Light}</p>
//           <p>LED Lighting Effects: {lighting?.LED_Lighting_Effects}</p>
//           <p>Spotlight: {lighting?.Spotlight}</p>
//           <p>
//             Lighting Rigging and Truss: {lighting?.Lighting_Rigging_and_Truss}
//           </p>

//           <h3>Scenic Requirements</h3>
//           <p>Drape Kit Black: {scenic?.Drape_Kit_Black}</p>
//           <p>Drape Kit Grey: {scenic?.Drape_Kit_Grey}</p>
//           <p>Drape Kit White: {scenic?.Drape_Kit_White}</p>
//           <p>Scenic Panels: {scenic?.Scenic_Panels}</p>
//           <p>Podium: {scenic?.Podium}</p>
//           <p>
//             Mobile Hotspot up to 15 devices:{' '}
//             {scenic?.Mobile_Hotspot_up_to_15_devices}
//           </p>
//           <p>
//             Event WIFI Network more than 15 devices:{' '}
//             {scenic?.Event_WIFI_Network_more_than_15_devices}
//           </p>
//           <p>Laptops PC: {scenic?.Laptops_PC}</p>
//           <p>Laptops Mac: {scenic?.Laptops_Mac}</p>

//           <h3>Electrical Requirements</h3>
//           <p>Audience Table Power: {electrical?.Audience_Table_Power}</p>
//           <p>Power Strips 6x1: {electrical?.Power_Strips_6x1}</p>
//           <p>
//             Portable Distribution Box 50 Amp:{' '}
//             {electrical?.Portable_Distribution_Box_50_Amp}
//           </p>
//           {/* Add more electrical requirements as needed */}

//           <h3>Staff Requirements</h3>
//           <p>Audio Tech: {staff?.Audio_Tech}</p>
//           <p>Video Tech: {staff?.Video_Tech}</p>
//           <p>Lighting Tech: {staff?.Lighting_Tech}</p>
//           <p>Project Manager: {staff?.Project_Manager}</p>

//           <h3>Other Requirements</h3>
//           {otherRequirements?.map((req:any, index:number) => (
//             <p key={index}>
//               {req.label}: {req.count}
//             </p>
//           ))}
//         </div>
//       </DialogBody>
//       <DialogFooter>
//         <Button
//           variant='text'
//           color='red'
//           onClick={handleOpen}
//           className='mr-1'
//         >
//           <span>Close</span>
//         </Button>
//         <Button variant='gradient' color='green' onClick={handleOpen}>
//           <span>Confirm</span>
//         </Button>
//       </DialogFooter>
//     </Dialog>
//   );
// };

// export default RequirementDialog;

import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from '@material-tailwind/react';
import { FC } from 'react';
import { Event } from '../../../../types';

interface RequirementDialogProps {
  open: boolean;
  event: Event | null;
  handleOpen: () => void;
}

const RequirementDialog: FC<RequirementDialogProps> = ({
  handleOpen,
  open,
  event,
}) => {
  const renderSection = (
    title: string,
    requirements: Record<string, number> | undefined
  ) => {
    return (
      requirements && (
        <>
          <h3 className='font-bold mb-2'>{title}</h3>
          {Object.entries(requirements).map(
            ([key, value]) => value > 0 && <p key={key}>{`${key}: ${value}`}</p>
          )}
        </>
      )
    );
  };

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogHeader>{event?.title} - AV Requirements</DialogHeader>
      <DialogBody className='max-h-[500px] overflow-y-auto'>
        <div>
          {renderSection('General Requirements', {
            // @ts-ignore
            'Room Count': event?.roomCount,
            // @ts-ignore
            'General Session Count': event?.generalSessionCount,
            // @ts-ignore
            'Breakout Session Count': event?.breakoutSessionCount,
            // @ts-ignore
            'Presenter Count': event?.presenterCount,
          })}

          {renderSection('Microphone Requirements', event?.microphones)}

          {renderSection('Speakers Requirements', event?.speakers)}

          {renderSection('Mixer Requirements', event?.mixers)}

          {renderSection('Communication Requirements', event?.communication)}

          {renderSection('Screens Requirements', event?.screens)}

          {renderSection('Projection Requirements', event?.projection)}

          {renderSection('Video Camera Requirements', event?.videoCamera)}

          {renderSection(
            'Video Processing Requirements',
            event?.videoProcessing
          )}

          {renderSection('Presenter Tools Requirements', event?.presenterTools)}

          {renderSection('Lighting Requirements', event?.lighting)}

          {renderSection('Scenic Requirements', event?.scenic)}

          {renderSection('Electrical Requirements', event?.electrical)}

          {renderSection('Staff Requirements', event?.staff)}

          {renderSection(
            'Other Requirements',
            // @ts-ignore
            {
              // @ts-ignore
              ...event?.otherRequirements.reduce((acc, req) => {
                // @ts-ignore
                if (req.count > 0) {
                  acc[req.label] = req.count;
                }
                return acc;
              }, {}),
            }
          )}
        </div>
      </DialogBody>
      <DialogFooter>
        <Button
          variant='text'
          color='red'
          onClick={handleOpen}
          className='mr-1'
        >
          <span>Close</span>
        </Button>
        <Button variant='gradient' color='green' onClick={handleOpen}>
          <span>Confirm</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
};

export default RequirementDialog;
