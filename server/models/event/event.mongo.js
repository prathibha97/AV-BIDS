const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    eventType: {
      type: String,
    },
    eventCategory: {
      type: String,
    },
    eventSubCategory: {
      type: String,
    },
    eventBudget: {
      type: String,
    },
    address: {
      venueName: {
        type: String,
      },
      venueAddress: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zipCode: {
        type: String,
      },
    },
    roomCount: {
      type: Number,
    },
    generalSessionCount: {
      type: Number,
    },
    breakoutSessionCount: {
      type: Number,
    },
    presenterCount: {
      type: Number,
    },
    microphones: {
      wiredHandheld: Number,
      wirelessHandheld: Number,
      wirelessLavalier: Number,
      headsetMicrophone: Number,
      earsetMicrophone: Number,
      gooseneckMicrophone: Number,
      boundaryMicrophone: Number,
      audienceMicrophone: Number,
    },
    speakers: {
      speakers_8_15: Number,
      line_array_speaker_system: Number,
      subwoofer_12_18: Number,
      reference_speaker_monitors: Number,
      bluetooth_speaker_small: Number,
      bluetooth_speaker_large: Number,
      computer_audio_speaker_system: Number,
      audio_rigging_and_truss: Number,
    },
    mixers: {
      analog_mixer: Number,
      digital_mixer: Number,
      computer_audio_interface: Number,
      multi_media_DI_box: Number,
      broadcast_phone_line_interface: Number,
      digital_audio_recording: Number,
      audio_playback_instant_replay: Number,
      cd_player: Number,
      audio_processing: Number,
    },
    communication: {
      wireless_belt_pack_and_headset: Number,
      wired_belt_pack_and_headset: Number,
    },
    screens: {
      Twenty_One_Nine_Large_Format_Screen: Number,
      Fast_Fold_Screen_16_9_Format_Large_Venue: Number,
      Fast_Fold_Screen_16_9_Format_Medium_Venue: Number,
      Fast_Fold_Screen_16_9_Format_Meeting_Room: Number,
      Fast_Fold_Screen_4_3_Format_Large_Venue: Number,
      Fast_Fold_Screen_4_3_Format_Medium_Venue: Number,
      Fast_Fold_Screen_4_3_Format_Meeting_Room: Number,
      Fast_Fold_Drape_Kit: Number,
      Tripod_Screens_60_96: Number,
      LCD_Monitor: Number,
      Video_LED_Wall: Number,
      Screen_Rigging_and_Truss: Number,
    },
    projection: {
      Twenty_One_Nine_Format_Projection: Number,
      Large_Venue_Projector_Standard_Throw_Lens: Number,
      Large_Venue_Projector_Long_Throw_Lens: Number,
      Large_Venue_Projector_Short_Throw_Lens: Number,
      Medium_Venue_Projector_Standard_Throw_Lens: Number,
      Medium_Venue_Projector_Long_Throw_Lens: Number,
      Medium_Venue_Projector_Short_Throw_Lens: Number,
      Meeting_Room_Projector: Number,
      Projector_Rigging_and_Truss: Number,
    },
    videoCamera: {
      Broadcast_Camera: Number,
      Roaming_Camera: Number,
      Camcorder: Number,
      Video_and_Camera_Lighting: Number,
      Photography_Camera: Number,
    },
    videoProcessing: {
      Video_Switching_and_Effects_Processing: Number,
      Video_Capture: Number,
      Screen_Blend_21_Nine_Format: Number,
      Video_Streaming: Number,
      DVD_Blu_Ray_Player: Number,
      VHS_DVD_Player: Number,
    },
    presenterTools: {
      Speaker_Timer: Number,
      Presentation_Remote_Clicker: Number,
      Laser_Pointer: Number,
      Perfect_Cue_System: Number,
      Flipchart: Number,
    },
    lighting: {
      Uplighting: Number,
      Stage_Wash: Number,
      Moving_Head_Lights: Number,
      Gobo: Number,
      Inflatable_Balloon_Light: Number,
      LED_Lighting_Effects: Number,
      Spotlight: Number,
      Lighting_Rigging_and_Truss: Number,
    },
    scenic: {
      Drape_Kit_Black: Number,
      Drape_Kit_Grey: Number,
      Drape_Kit_White: Number,
      Scenic_Panels: Number,
      Podium: Number,
      Mobile_Hotspot_up_to_15_devices: Number,
      Event_WIFI_Network_more_than_15_devices: Number,
      Laptops_PC: Number,
      Laptops_Mac: Number,
    },
    electrical: {
      Audience_Table_Power: Number,
      Power_Strips_6x1: Number,
      Portable_Distribution_Box_50_Amp: Number,
      Portable_Distribution_Box_100_Amp: Number,
      Portable_Distribution_Box_200_Amp: Number,
      Portable_Distribution_Box_300_Amp: Number,
      Portable_Distribution_Box_400_Amp: Number,
    },
    staff: {
      Audio_Tech: Number,
      Video_Tech: Number,
      Lighting_Tech: Number,
      Project_Manager: Number,
    },
    otherRequirements: [
      {
        label: String,
        count: Number,
      },
    ],
    files: [
      {
        fileName: String,
        url: String,
      },
    ],
    proposals: [
      {
        provider: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'User',
        },
        proposalText: String,
        files: [
          {
            fileName: String,
            url: String,
          },
        ],
      },
    ],
    comments: {
      description: String,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    modifiedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
