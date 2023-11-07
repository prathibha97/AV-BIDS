import { Button, Input, Option, Select } from '@material-tailwind/react';
import DELETE_BUTTON from '../../../assets/12_edit_event/ep_delete.png';
import RichTextEditor from './rich-text-editor';

const StepOne = () => {
  return (
    <div>
      <p className='font-medium text-[18px] mb-4'>Event Details</p>

      <div className='grid grid-cols-2 gap-x-16 gap-y-4 font-medium text-[16px] text-[#353535]'>
        <div className='col-span-2'>
          <p className='mb-2'>Event Title </p>
          <div className='mb-5'>
            <Input
              label='Ex: 2023 Meeting Expo San Deigo'
              crossOrigin=''
              className='rounded-md bg-[#eeebfa]'
            />
          </div>
        </div>
        <div className='col-span-2'>
          <p className='mb-2'>Event Description </p>
          <div className='mb-5'>
            <RichTextEditor />
          </div>
        </div>
        <div className=''>
          <p className='mb-2'>Event Type </p>
          <div className='mb-5'>
            <Select label='In-Person' className='bg-[#eeebfc]'>
              <Option>Option 01</Option>
              <Option>Option 02</Option>
              <Option>Option 03</Option>
              <Option>Option 04</Option>
              <Option>Option 05</Option>
            </Select>
          </div>
        </div>
        <div className=''>
          <p className='mb-2'>Event Category </p>
          <div className='mb-5'>
            <Select label='Coporate' className='bg-[#eeebfc]'>
              <Option>Option 01</Option>
              <Option>Option 02</Option>
              <Option>Option 03</Option>
              <Option>Option 04</Option>
              <Option>Option 05</Option>
            </Select>
          </div>
        </div>
        <div className=''>
          <p className='mb-2'>Event Sub Category</p>
          <div className=' mb-5'>
            <Select label='General Meeting' className='bg-[#eeebfc]'>
              <Option>Option 01</Option>
              <Option>Option 02</Option>
              <Option>Option 03</Option>
              <Option>Option 04</Option>
              <Option>Option 05</Option>
            </Select>
          </div>
        </div>
        <div className=''>
          <p className='mb-2'>Event Budget</p>
          <div className=' mb-8'>
            <Select label='$70,000 - $150,000' className='bg-[#eeebfc]'>
              <Option>Option 01</Option>
              <Option>Option 02</Option>
              <Option>Option 03</Option>
              <Option>Option 04</Option>
              <Option>Option 05</Option>
            </Select>
          </div>
        </div>
      </div>

      <p className='font-medium text-[18px] mb-4'>Address & Location</p>

      <div className='grid grid-cols-2 gap-x-16 gap-y-4 mb-4 font-medium text-[16px] text-[#353535]'>
        <div className=''>
          <p className='mb-2'>Venue Name</p>
          <div className='mb-5'>
            <Input
              label='Venue Name'
              crossOrigin=''
              className='rounded-md bg-[#eeebfb]'
            />
          </div>
        </div>

        <div className='...'>
          <p className='mb-2'>Address</p>
          <div className='mb-5'>
            <Input
              label='Address'
              crossOrigin=''
              className='rounded-md bg-[#eeebfb]'
            />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-x-16 gap-y-4 font-medium text-[16px] text-[#353535]'>
        <div className='...'>
          <p className='mb-2'>City </p>
          <div className='mb-5'>
            <Input
              label='Enter City'
              crossOrigin=''
              className='rounded-md bg-[#eeebfb]'
            />
          </div>
        </div>

        <div className='...'>
          <p className='mb-2'>State</p>
          <div className='mb-5'>
            <Select label='Select State' className='bg-[#eeebfc]'>
              <Option>Option 01</Option>
              <Option>Option 02</Option>
              <Option>Option 03</Option>
              <Option>Option 04</Option>
              <Option>Option 05</Option>
            </Select>
          </div>
        </div>

        <div className='...'>
          <p className='mb-2'>Zip</p>
          <div className='mb-8'>
            <Input
              label='Enter Zip Code'
              crossOrigin=''
              className='rounded-md bg-[#eeebfb]'
            />
          </div>
        </div>
      </div>


      <p className='font-medium text-[18px] mb-4'>File Attachment</p>

      <div className='grid grid-cols-2 gap-x-16 gap-y-4 font-medium text-[18px] text-black mb-2 '>
        <div className='flex items-center gap-24'>
          <p>guideline and requirements.doc</p>
          <img
            src={DELETE_BUTTON}
            alt='aad'
            className='object-scale-down w-[34px]'
          />
        </div>
        <div className='flex items-center gap-24'>
          <p>guideline and requirements.doc</p>
          <img
            src={DELETE_BUTTON}
            alt='aad'
            className='object-scale-down w-[34px]'
          />
        </div>
        <div className='flex items-center gap-24'>
          <p>guideline and requirements.doc</p>
          <img
            src={DELETE_BUTTON}
            alt='aad'
            className='object-scale-down w-[34px]'
          />
        </div>
        <div className='flex items-center gap-24'>
          <p>guideline and requirements.doc</p>
          <img
            src={DELETE_BUTTON}
            alt='aad'
            className='object-scale-down w-[34px]'
          />
        </div>
      </div>

      <Button
        variant='filled'
        color='indigo'
        size='sm'
        className='rounded-md py-2 mt-4 px-4 bg-primary font-poppins'
      >
        <span className='text-white normal-case font-medium'>Upload File</span>
      </Button>
    </div>
  );
};

export default StepOne;
