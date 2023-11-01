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

        <p className="text-[18px] font-medium mb-4">Lighting and Scenic</p>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Lighting</p>
            <Lighting />
          </div>
          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Scenic</p>
            <Scenic />
          </div>
          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Electrical</p>
            <Electrical />
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

function Lighting() {
  return (
    <div>
      <CardDetails name="Uplighting" />
      <CardDetails name="Stage Wash" />
      <CardDetails name="Moving Head Lights" />
      <CardDetails name="Gobo" />
      <CardDetails name="Inflatable Balloon Light" />
      <CardDetails name="LED Lighting Effects" />
      <CardDetails name="Spotlight" />
      <CardDetails name="Lighting Rigging and Truss" />
    </div>
  );
}

function Scenic() {
  return (
    <div>
      <CardDetails name="Drape Kit (Black)" />
      <CardDetails name="Drape Kit (Grey)" />
      <CardDetails name="Drape Kit (White)" />
      <CardDetails name="Scenic Panels" />
      <CardDetails name="Podium" />
    </div>
  );
}

function Electrical() {
  return (
    <div>
      <CardDetails name="Audience Table Power" />
      <CardDetails name="Power Strips 6x1" />
      <CardDetails name="Portable Distribution Box (50 Amp)" />
      <CardDetails name="Portable Distribution Box (100 Amp)" />
      <CardDetails name="Portable Distribution Box (200 Amp)" />
      <CardDetails name="Portable Distribution Box (300 Amp)" />
      <CardDetails name="Portable Distribution Box (400 Amp)" />
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
