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

        <p className="text-[18px] font-medium mb-4">Video</p>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Screens</p>
            <Screens />
          </div>
          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Projection</p>
            <Projection />
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

function Screens() {
  return (
    <div>
      <CardDetails name="21:9 Large Format Screen" />
      <CardDetails name="Fast Fold Screen (16:9 Format) Large Venue" />
      <CardDetails name="Fast Fold Screen (16:9 Format) Medium Venue" />
      <CardDetails name="Fast Fold Screen (16:9 Format) Meeting Room" />
      <CardDetails name="Fast Fold Screen (4:3 Format) Large Venue" />
      <CardDetails name="Fast Fold Screen (4:3 Format) Medium Venue" />
      <CardDetails name="Fast Fold Screen (4:3 Format) Meeting Room" />
      <CardDetails name="Fast Fold Drape Kit" />
      <CardDetails name="Tripod Screens 60”-96" />
      <CardDetails name="LCD Monitor" />
      <CardDetails name="Video LED Wall" />
      <CardDetails name="Screen Rigging and Truss" />
    </div>
  );
}

function Projection() {
  return (
    <div>
      <CardDetails name="21:9 Format Projection" />
      <CardDetails name="Large Venue Projector (Standard Throw Lens)" />
      <CardDetails name="Large Venue Projector (Long Throw Lens)" />
      <CardDetails name="Large Venue Projector (Short Throw Lens)" />
      <CardDetails name="Medium Venue Projector (Standard Throw Lens)" />
      <CardDetails name="Medium Venue Projector (Long Throw Lens)" />
      <CardDetails name="Medium Venue Projector (Short Throw Lens)" />
      <CardDetails name="Meeting Room Projector" />
      <CardDetails name="Projector Rigging and Truss" />
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
