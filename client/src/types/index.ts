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
  members: [Member];
  savedEvents: [Event];
  insurance: string;
  companyAddress: {
    address: string;
    country: string;
    city: string;
    zip: string;
    state: string;
  };
  address: {
    addressLine1: string;
    addressLine2: string;
    city: string;
    zip: string;
    state: string;
  };
  subscription: {
    customerId: string;
    productId: string;
    priceId: string;
    subscriptionId: string;
    plan: 'PREMIUM' | 'BASIC' | 'TRIAL';
    startDate: Date;
    _id: string;
  };
}

export interface Member {
  _id: string;
  name: string;
  email: string;
  role: string;
}

type FileInformation = {
  fileName: string;
  url: string;
  _id: string;
};

type Thumbnail = {
  fileName: string;
  url: string;
  _id: string;
};

type FileInformationArray = FileInformation[];
type ThumbnailArray = Thumbnail[];

export type Event = {
  _id: string;
  title: string;
  description: string;
  eventType: string;
  eventCategory: string;
  eventSubCategory: string;
  eventBudget: string;
  proposalDueDate: string;
  eventStartDate: string;
  eventEndDate: string;
  audienceSize: string;
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
  microphones: Microphones;
  speakers: Speaksers;
  mixers: Mixers;
  communication: Communication;
  screens: Screens;
  projection: Projection;

  videoCamera: VideoCamera;

  videoProcessing: VideoProcessing;

  presenterTools: PresenterTools;

  lighting: Lighting;

  scenic: Scenic;

  electrical: Electrical;

  staff: Staff;

  otherRequirements?:
    | {
        [requirement: string]: string | number;
      }[]
    | undefined;
  comments: {
    description: string;
  };
  files: FileInformationArray;
  thumbnail: ThumbnailArray;
  proposals: [string];
  createdAt: Date;
  updatedAt: Date;
  status: string;
  createdBy: string;
};

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
  createdAt: Date;
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

type Document = {
  fileName: string;
  url: string;
};

export type Proposal = {
  _id?: string;
  event: string;
  provider: string;
  status: string;
  documents: [Document];
};

export type OTP = {
  OTPValue: string | null;
  email: string | null;
};

export type StripeProduct = {
  id: string;
  object: string;
  active: boolean;
  created: number;
  default_price: string | null;
  description: string | null;
  images: string[];
  features: string[];
  livemode: boolean;
  metadata: Record<string, any>;
  name: string;
  package_dimensions: Record<string, any> | null;
  shippable: boolean | null;
  statement_descriptor: string | null;
  tax_code: string | null;
  unit_label: string | null;
  updated: number;
  url: string | null;
};

export type StripePrice = {
  id: string;
  object: string;
  active: boolean;
  billing_scheme: string;
  created: number;
  currency: string;
  custom_unit_amount: number | null;
  livemode: boolean;
  lookup_key: string | null;
  metadata: Record<string, any>;
  nickname: string | null;
  product: StripeProduct;
  recurring: {
    aggregate_usage: string | null;
    interval: string;
    interval_count: number;
    trial_period_days: number | null;
    usage_type: string;
  };
  tax_behavior: string;
  tiers_mode: string | null;
  transform_quantity: string | null;
  type: string;
  unit_amount: number;
  unit_amount_decimal: string;
};

export type StripeSubscription = {
  subscriptionId: string;
  clientSecret: string | undefined;
};

export interface StripeCustomer {
  id: string;
  object: string;
  address: {
    line1: string;
    line2: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
  balance: number;
  created: number;
  currency: null | string; // Replace 'string' with the actual type of currency if known
  default_source: null | string; // Replace 'string' with the actual type of default_source if known
  delinquent: boolean;
  description: null | string; // Replace 'string' with the actual type of description if known
  discount: null | string; // Replace 'string' with the actual type of discount if known
  email: string;
  invoice_prefix: string;
  invoice_settings: {
    custom_fields: null | unknown; // Replace 'unknown' with the actual type if known
    default_payment_method: null | string; // Replace 'string' with the actual type if known
    footer: null | string; // Replace 'string' with the actual type if known
    rendering_options: null | unknown; // Replace 'unknown' with the actual type if known
  };
  livemode: boolean;
  metadata: Record<string, unknown>; // Replace 'unknown' with the actual type if known
  name: string;
  next_invoice_sequence: number;
  phone: null | string; // Replace 'string' with the actual type of phone if known
  preferred_locales: string[];
  shipping: null | unknown; // Replace 'unknown' with the actual type if known
  tax_exempt: string;
  test_clock: null | unknown; // Replace 'unknown' with the actual type if known
}

export type Notification = {
  _id: string;
  message: string;
  type: string;
  userId: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export interface Microphones {
  wiredHandheld: number;
  wirelessHandheld: number;
  wirelessLavalier: number;
  headsetMicrophone: number;
  earsetMicrophone: number;
  gooseneckMicrophone: number;
  boundaryMicrophone: number;
  audienceMicrophone: number;
}

export interface Speaksers {
  speakers_8_15: number;
  line_array_speaker_system: number;
  subwoofer_12_18: number;
  reference_speaker_monitors: number;
  bluetooth_speaker_small: number;
  bluetooth_speaker_large: number;
  computer_audio_speaker_system: number;
  audio_rigging_and_truss: number;
}

export interface Mixers {
  analog_mixer: number;
  digital_mixer: number;
  computer_audio_interface: number;
  multi_media_DI_box: number;
  broadcast_phone_line_interface: number;
  digital_audio_recording: number;
  audio_playback_instant_replay: number;
  cd_player: number;
  audio_processing: number;
}

export interface Communication {
  wireless_belt_pack_and_headset: number;
  wired_belt_pack_and_headset: number;
}

export interface Screens {
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

export interface Projection {
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

export interface VideoCamera {
  Broadcast_Camera: number;
  Roaming_Camera: number;
  Camcorder: number;
  Video_and_Camera_Lighting: number;
  Photography_Camera: number;
}

export interface VideoProcessing {
  Video_Switching_and_Effects_Processing: number;
  Video_Capture: number;
  Screen_Blend_21_Nine_Format: number;
  Video_Streaming: number;
  DVD_Blu_Ray_Player: number;
  VHS_DVD_Player: number;
}

export interface PresenterTools {
  Speaker_Timer: number;
  Presentation_Remote_Clicker: number;
  Laser_Pointer: number;
  Perfect_Cue_System: number;
  Flipchart: number;
}

export interface Lighting {
  Uplighting: number;
  Stage_Wash: number;
  Moving_Head_Lights: number;
  Gobo: number;
  Inflatable_Balloon_Light: number;
  LED_Lighting_Effects: number;
  Spotlight: number;
  Lighting_Rigging_and_Truss: number;
}

export interface Scenic {
  Drape_Kit_Black: number;
  Drape_Kit_Grey: number;
  Drape_Kit_White: number;
  Scenic_Panels: number;
  Podium: number;
  Mobile_Hotspot_up_to_15_devices: number;
  Event_WIFI_Network_more_than_15_devices: number;
  Laptops_PC: number;
  Laptops_Mac: number;
}

export interface Electrical {
  Audience_Table_Power: number;
  Power_Strips_6x1: number;
  Portable_Distribution_Box_50_Amp: number;
  Portable_Distribution_Box_100_Amp: number;
  Portable_Distribution_Box_200_Amp: number;
  Portable_Distribution_Box_300_Amp: number;
  Portable_Distribution_Box_400_Amp: number;
}

export interface Staff {
  Audio_Tech: number;
  Video_Tech: number;
  Lighting_Tech: number;
  Project_Manager: number;
}
