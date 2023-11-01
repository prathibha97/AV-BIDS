import {
  Textarea,
  Button,
  Input,
  Select,
  Option,
} from "@material-tailwind/react";

import DELETE_BUTTON from "../../assets/12_edit_event/ep_delete.png";

export function index() {
  return (
    <div className="container mx-auto mb-8">
      <section className="bg-white px-8 py-8 rounded-xl drop-shadow-md">
        <h2 className="text-[20px] font-semibold mb-6">Edit Event</h2>

        {/* <div className="flex items-center gap-8 "></div> */}

        <div className="grid grid-cols-2 mb-8">
          <div className="flex flex-col items-center gap-2">
            <div className="flex  items-center justify-center rounded-full w-10 h-10 bg-[#42D27A] text-white">
              <p>1</p>
            </div>

            <p className="font-medium text-[16px]">Update Information</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex  items-center justify-center rounded-full w-10 h-10 bg-[#42D27A] text-white">
              <p>2</p>
            </div>
            <p className="text-[16px] font-medium ">Equipment Requirements</p>
          </div>
        </div>

        <p className="text-[18px] font-medium mb-4">Audio</p>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Microphones</p>
            <Microphones />
          </div>
          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Speakers</p>
            <Speakers />
          </div>
          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Mixers</p>
            <Mixers />
          </div>
          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Communication</p>
            <Communication />
          </div>
        </div>

        <div className="bg-[#F3F1FB]">
          {/* <div className="flex items-center gap-16">
            <p className="text-[15px] font-medium">Wired Handheld</p>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-full w-7 h-7 bg-white  text-[#888888]">
                <p className="font-medium text-black">-</p>
              </div>
              <p>0</p>
              <div className="flex items-center justify-center rounded-full w-7 h-7 bg-white text-[#888888]">
                <p className="font-medium text-black">+</p>
              </div>
            </div>
          </div> */}
        </div>

        {/* --------------------------------------------------------------- */}

        <div className="flex items-center justify-between mt-6">
          <div>
            <Button
              variant="outlined"
              size="sm"
              className="rounded-full  py-3 px-6 mt-4 bg-[#EBEBEB] font-poppins normal-case border-none w-[135px]"
            >
              <span className="text-black">Cancel</span>
            </Button>
          </div>

          <div>
            <Button
              variant="outlined"
              color="indigo"
              size="sm"
              className="rounded-full  py-3 px-6 mt-4  font-poppins normal-case border-primary w-[135px] mr-6"
            >
              <span className="text-primary ">Save as Draft</span>
            </Button>

            <Button
              variant="filled"
              color="indigo"
              size="sm"
              className="rounded-full  py-3 px-6 mt-4 font-poppins normal-case bg-primary w-[135px]"
            >
              <span className="text-white">Next</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

interface CardDetailsProps {
  name: string;
}

function Microphones() {
  return (
    <div>
      <CardDetails name="Wired Handheld" />
      <CardDetails name="Wireless Handheld" />
      <CardDetails name="Wireless Lavalier" />
      <CardDetails name="Headset Microphone" />
      <CardDetails name="Earset Microphone" />
      <CardDetails name="Gooseneck Microphone" />
      <CardDetails name="Boundary Microphone" />
      <CardDetails name="Audience Microphone" />
    </div>
  );
}

function Speakers() {
  return (
    <div>
      <CardDetails name="Speakers 8”-15”" />
      <CardDetails name="Line-array Speaker System" />
      <CardDetails name="Subwoofer 12”-18”" />
      <CardDetails name="Reference Speaker Monitors" />
      <CardDetails name="Bluetooth Speaker Small" />
      <CardDetails name="Bluetooth Speaker Large" />
      <CardDetails name="Computer Audio Speaker System" />
      <CardDetails name="Audio Rigging and Truss" />
    </div>
  );
}

function Mixers() {
  return (
    <div>
      <CardDetails name="Analog Mixer" />
      <CardDetails name="Digital Mixer" />
      <CardDetails name="Computer Audio Interface" />
      <CardDetails name="Multi-Media D.I. Box" />
      <CardDetails name="Broadcast Phone Line Interface" />
      <CardDetails name="Digital Audio Recording" />
      <CardDetails name="Audio Playback Instant Replay" />
      <CardDetails name="CD Player" />
      <CardDetails name="Audio Processing (EQ, Comp, etc.)" />
    </div>
  );
}

function Communication() {
  return (
    <div>
      <CardDetails name="Wireless Belt Pack and Headset" />
      <CardDetails name="Wired Belt Pack and Headset" />
    </div>
  );
}

function CardDetails(props: CardDetailsProps) {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <p className="text-[15px] font-medium">{props.name}</p>
        </div>

        <div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center rounded-full w-7 h-7 bg-white text-[#888888]">
              <p className="font-medium text-black">-</p>
            </div>
            <p>0</p>
            <div className="flex items-center justify-center rounded-full w-7 h-7 bg-white text-[#888888]">
              <p className="font-medium text-black">+</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default index;
