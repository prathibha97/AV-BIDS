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
    '21:9_Large_Format_Screen': number;
    'Fast_Fold_Screen_(16:9_Format)_Large_Venue': number;
    'Fast_Fold_Screen_(16:9_Format)_Medium_Venue': number;
    'Fast_Fold_Screen_(16:9_Format)_Meeting_Room': number;
    'Fast_Fold_Screen_(4:3_Format)_Large_Venue': number;
    'Fast_Fold_Screen_(4:3_Format)_Medium_Venue': number;
    'Fast_Fold_Screen_(4:3_Format)_Meeting_Room': number;
    Fast_Fold_Drape_Kit: number;
    'Tripod_Screens_60”-96': number;
    LCD_Monitor: number;
    Video_LED_Wall: number;
    Screen_Rigging_and_Truss: number;
  };
  projection: {
    '21:9 Format Projection': number;
    'Large Venue Projector (Standard Throw Lens)': number;
    'Large Venue Projector (Long Throw Lens)': number;
    'Large Venue Projector (Short Throw Lens)': number;
    'Medium Venue Projector (Standard Throw Lens)': number;
    'Medium Venue Projector (Long Throw Lens)': number;
    'Medium Venue Projector (Short Throw Lens)': number;
    'Meeting Room Projector': number;
    'Projector Rigging and Truss': number;
  };
  videoCamera: {
    'Broadcast Camera': number;
    'Roaming Camera': number;
    Camcorder: number;
    'Video & Camera Lighting': number;
    'Photography Camera': number;
  };
  videoProcessing: {
    'Video Switching & Effects Processing': number;
    'Video Capture': number;
    'Screen Blend (21:9 Format)': number;
    'Video Streaming': number;
    'DVD-Blu-Ray Player': number;
    'VHS/DVD Player': number;
  };
  presenterTools: {
    'Speaker Timer': number;
    'Presentation Remote Clicker': number;
    'Laser Pointer': number;
    'Perfect Cue System': number;
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
