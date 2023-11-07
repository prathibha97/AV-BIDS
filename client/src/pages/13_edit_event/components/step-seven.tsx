import { Textarea } from "@material-tailwind/react";
import CardDetails from "./card-details";

const StepSeven = () => {
  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Staff</p>
        <Staff />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Scenic</p>
        <Scenic />
      </div>
      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Other Requirements</p>
        <OtherRequirements />
      </div>

      <div className='bg-[#F3F1FB] rounded-lg p-6'>
        <p className='text-[18px] font-medium mb-4'>Comments</p>
        <p className='text-[15px] font-medium mb-3 '>Description</p>

        <div>
          <Textarea
            label='Description'
            className='bg-white border border-[#E4E4E4]'
          />
        </div>
      </div>
    </div>
  );
}
 
export default StepSeven;

function Staff() {
  return (
    <div>
      <CardDetails name='Audio Tech' />
      <CardDetails name='Video Tech' />
      <CardDetails name='Lighting Tech' />
      <CardDetails name='Project Manager' />
    </div>
  );
}

function Scenic() {
  return (
    <div>
      <CardDetails name='Mobile Hotspot (up to 15 devices)' />
      <CardDetails name='Event WIFI Network (more than 15 devices)' />
      <CardDetails name='Laptops-PC' />
      <CardDetails name='Laptops-Mac' />
    </div>
  );
}

type RequirementInputProps = {
  label: string;
};

function OtherRequirements() {
  return (
    <div>
      <RequirementInput label='Other Requirements' />
      <RequirementInput label='Other Requirements' />
      <RequirementInput label='Other Requirements' />
      <RequirementInput label='Other Requirements' />
      <RequirementInput label='Other Requirements' />
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
    <div className='grid grid-cols-2 gap-4  content-center'>
      <div>
        {/* <p className="text-[15px] font-medium">{props.label}</p> */}

        <input
          type='text'
          placeholder={props.label}
          className='border rounded-lg p-2 mb-4 border border-[#E4E4E4]'
        />
      </div>

      <div>
        <div className='flex items-center gap-4'>
          <div className='flex items-center justify-center rounded-full w-7 h-7 bg-white text-[#888888]'>
            <p className='font-medium text-black'>-</p>
          </div>
          <p>0</p>
          <div className='flex items-center justify-center rounded-full w-7 h-7 bg-white text-[#888888]'>
            <p className='font-medium text-black'>+</p>
          </div>
        </div>
      </div>
    </div>
  );
}