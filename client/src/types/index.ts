export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: 'PLANNER' | 'PROVIDER';
  refreshToken: string[];
  imageUrl: string;
  phone: string;
  website: string;
  company: string;
}

export interface Member {
  name: string;
  email: string;
  role: string;
}

export interface Event {
  title: string;
  description: string;
  eventType: string;
  eventCategory: string;
  eventSubCategory: string;
  eventBudget: string;
  address: {
    venueName: string;
    venueAddress: string;
    city: string;
    state: string;
    zipCode: string;
  };
  roomCount: number;
  generalSessionCount: number;
  breakoutSessionCount: number;
  presenterCount: number;
  microphones: {
    wiredHandheld: number;
    wirelessHandheld: number;
    wirelessLavalier: number;
    headsetMicrophone: number;
    earsetMicrophone: number;
    gooseneckMicrophone: number;
    boundaryMicrophone: number;
    audienceMicrophone: number;
  };
  speakers: {
    speakers_8_15: number;
    line_array_speaker_system: number;
    subwoofer_12_18: number;
    reference_speaker_monitors: number;
    bluetooth_speaker_small: number;
    bluetooth_speaker_large: number;
    computer_audio_speaker_system: number;
    audio_rigging_and_truss: number;
  };
  mixers: {
    analog_mixer: number;
    digital_mixer: number;
    computer_audio_interface: number;
    multi_media_DI_box: number;
    broadcast_phone_line_interface: number;
    digital_audio_recording: number;
    audio_playback_instant_replay: number;
    cd_player: number;
    audio_processing: number;
  };
  communication: {
    wireless_belt_pack_and_headset: number;
    wired_belt_pack_and_headset: number;
  };
  screens: {
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
  };
  projection: {
    Twenty_One_Nine_Format_Projection: number;
    Large_Venue_Projector_Standard_Throw_Lens: number;
    Large_Venue_Projector_Long_Throw_Lens: number;
    Large_Venue_Projector_Short_Throw_Lens: number;
    Medium_Venue_Projector_Standard_Throw_Lens: number;
    Medium_Venue_Projector_Long_Throw_Lens: number;
    Medium_Venue_Projector_Short_Throw_Lens: number;
    Meeting_Room_Projector: number;
    Projector_Rigging_and_Truss: number;
  };

  videoCamera: {
    Broadcast_Camera: number;
    Roaming_Camera: number;
    Camcorder: number;
    Video_and_Camera_Lighting: number;
    Photography_Camera: number;
  };

  videoProcessing: {
    Video_Switching_and_Effects_Processing: number;
    Video_Capture: number;
    Screen_Blend_21_Nine_Format: number;
    Video_Streaming: number;
    DVD_Blu_Ray_Player: number;
    VHS_DVD_Player: number;
  };

  presenterTools: {
    Speaker_Timer: number;
    Presentation_Remote_Clicker: number;
    Laser_Pointer: number;
    Perfect_Cue_System: number;
    Flipchart: number;
  };

  lighting: {
    Uplighting: number;
    'Stage Wash': number;
    'Moving Head Lights': number;
    Gobo: number;
    'Inflatable Balloon Light': number;
    'LED Lighting Effects': number;
    Spotlight: number;
    'Lighting Rigging and Truss': number;
  };
  scenic: {
    'Drape Kit (Black)': number;
    'Drape Kit (Grey)': number;
    'Drape Kit (White)': number;
    'Scenic Panels': number;
    Podium: number;
    'Mobile Hotspot (up to 15 devices)': number;
    'Event WIFI Network (more than 15 devices)': number;
    'Laptops-PC': number;
    'Laptops-Mac': number;
  };
  electrical: {
    'Audience Table Power': number;
    'Power Strips 6x1': number;
    'Portable Distribution Box (50 Amp)': number;
    'Portable Distribution Box (100 Amp)': number;
    'Portable Distribution Box (200 Amp)': number;
    'Portable Distribution Box (300 Amp)': number;
    'Portable Distribution Box (400 Amp)': number;
  };
  staff: {
    'Audio Tech': number;
    'Video Tech': number;
    'Lighting Tech': number;
    'Project Manager': number;
  };
  otherRequirements: {
    [requirement: string]: number;
  };
  comments: {
    description: string;
  };
}
