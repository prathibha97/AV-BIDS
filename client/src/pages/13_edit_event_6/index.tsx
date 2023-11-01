import { Textarea, Button, Select, Option } from "@material-tailwind/react";

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

        <p className="text-[18px] font-medium mb-4">Staff and I.T.</p>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Staff</p>
            <Staff />
          </div>
          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Scenic</p>
            <Scenic />
          </div>
          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Other Requirements</p>
            <OtherRequirements />
          </div>

          <div className="bg-[#F3F1FB] rounded-lg p-6">
            <p className="text-[18px] font-medium mb-4">Comments</p>
            <p className="text-[15px] font-medium mb-3 ">Description</p>

            <div>
              <Textarea
                label="Description"
                className="bg-white border border-[#E4E4E4]"
              />
            </div>
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

function Staff() {
  return (
    <div>
      <CardDetails name="Audio Tech" />
      <CardDetails name="Video Tech" />
      <CardDetails name="Lighting Tech" />
      <CardDetails name="Project Manager" />
    </div>
  );
}

function Scenic() {
  return (
    <div>
      <CardDetails name="Mobile Hotspot (up to 15 devices)" />
      <CardDetails name="Event WIFI Network (more than 15 devices)" />
      <CardDetails name="Laptops-PC" />
      <CardDetails name="Laptops-Mac" />
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

type RequirementInputProps = {
  label: string;
};

function OtherRequirements() {
  return (
    <div>
      <RequirementInput label="Other Requirements" />
      <RequirementInput label="Other Requirements" />
      <RequirementInput label="Other Requirements" />
      <RequirementInput label="Other Requirements" />
      <RequirementInput label="Other Requirements" />
    </div>
  );
}

function RequirementInput(props: RequirementInputProps) {
  return (
    <div>
      <Input label={props.label} />
    </div>
  );
}

function Input(props: { label: string }) {
  return (
    <div className="grid grid-cols-2 gap-4  content-center">
      <div>
        {/* <p className="text-[15px] font-medium">{props.label}</p> */}

        <input
          type="text"
          placeholder={props.label}
          className="border rounded-lg p-2 mb-4 border border-[#E4E4E4]"
        />
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
  );
}
export default index;
