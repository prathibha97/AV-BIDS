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

            <p className="font-medium text-[16px]">Update Information </p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex  items-center justify-center rounded-full w-10 h-10 bg-[#42D27A] text-white">
              <p>2</p>
            </div>
            <p className="text-[16px] font-medium ">Equipment Requirements</p>
          </div>
        </div>

        <p className="text-[18px] font-medium mb-4">Video</p>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Video & Camera</p>
            <VideoCamera />
          </div>
          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Video Processing</p>
            <VideoProcessing />
          </div>
          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Presenter Tools</p>
            <PresenterTools />
          </div>
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

function VideoCamera() {
  return (
    <div>
      <CardDetails name="Broadcast Camera" />
      <CardDetails name="Roaming Camera" />
      <CardDetails name="Camcorder" />
      <CardDetails name="Video & Camera Lighting" />
      <CardDetails name="Photography Camera" />
    </div>
  );
}

function VideoProcessing() {
  return (
    <div>
      <CardDetails name="Video Switching & Effects Processing" />
      <CardDetails name="Video Capture" />
      <CardDetails name="Screen Blend (21:9 Format)" />
      <CardDetails name="Video Streaming" />
      <CardDetails name="DVD-Blu-Ray Player" />
      <CardDetails name="VHS/DVD Player" />
    </div>
  );
}

function PresenterTools() {
  return (
    <div>
      <CardDetails name="Speaker Timer" />
      <CardDetails name="Presentation Remote Clicker" />
      <CardDetails name="Laser Pointer" />
      <CardDetails name="Perfect Cue System" />
      <CardDetails name="Flipchart" />
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
