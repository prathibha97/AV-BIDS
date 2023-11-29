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
  members: [Member]
  savedEvents: [Event]
  insurance: string
}

export interface Member {
  _id:string
  name: string;
  email: string;
  role: string;
}

type FileInformation = {
  fileName: string;
  url: string;
  _id: string;
};

type FileInformationArray = FileInformation[];

export type Event = {
  _id: string;
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
    Stage_Wash: number;
    Moving_Head_Lights: number;
    Gobo: number;
    Inflatable_Balloon_Light: number;
    LED_Lighting_Effects: number;
    Spotlight: number;
    Lighting_Rigging_and_Truss: number;
  };

  scenic: {
    Drape_Kit_Black: number;
    Drape_Kit_Grey: number;
    Drape_Kit_White: number;
    Scenic_Panels: number;
    Podium: number;
    Mobile_Hotspot_up_to_15_devices: number;
    Event_WIFI_Network_more_than_15_devices: number;
    Laptops_PC: number;
    Laptops_Mac: number;
  };

  electrical: {
    Audience_Table_Power: number;
    Power_Strips_6x1: number;
    Portable_Distribution_Box_50_Amp: number;
    Portable_Distribution_Box_100_Amp: number;
    Portable_Distribution_Box_200_Amp: number;
    Portable_Distribution_Box_300_Amp: number;
    Portable_Distribution_Box_400_Amp: number;
  };

  staff: {
    Audio_Tech: number;
    Video_Tech: number;
    Lighting_Tech: number;
    Project_Manager: number;
  };

  otherRequirements: {
    [requirement: string]: number;
  };
  comments: {
    description: string;
  };
  files: FileInformationArray;
  proposals: [string]
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
}

export type Review = {
  _id: string;
  rating: number;
  comment: string;
  eventPlanner: string;
  createdBy: string;
};

export interface UserWithReviewWithEvent extends User {
  reviews: Review[];
  events: Event[];
  createdAt: Date
}

export type Message = {
  _id?: string;
  conversationId?: string;
  sender: string;
  text: string;
  createdAt: Date;
  updatedAt?: Date;
};

export type Conversation = {
  _id?: string;
  members: string[];
  createdAt?: Date;
  updatedAt?: Date;
};