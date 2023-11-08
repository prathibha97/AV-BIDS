import { Button, Input, Option, Select } from '@material-tailwind/react';
import { FC, useState } from 'react';
import { UseFormRegister, UseFormReturn } from 'react-hook-form';
import DELETE_BUTTON from '../../../assets/12_edit_event/ep_delete.png';
import { EventFormFormValues } from '../../../utils/validations/event-form-validation';
import RichTextEditor from './rich-text-editor';

interface StepOneProps {
  control: UseFormReturn<any>['control'];
  register: UseFormRegister<EventFormFormValues>;
  updateFormData: any;
}

const StepOne: FC<StepOneProps> = ({ control, register, updateFormData }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (e: any) => {
    const files = e.target.files;
    const updatedFiles = [...uploadedFiles];

    for (let i = 0; i < files.length; i++) {
      // @ts-ignore
      updatedFiles.push(files[i]);
    }

    setUploadedFiles(updatedFiles);
  };

  const handleInputChange = (name: string, value: string) => {
    updateFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelect = (name: string, value: string) => {
    updateFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div>
      <p className='font-medium text-[18px] mb-4'>Event Details</p>

      <form>
        <div className='grid grid-cols-2 gap-x-16 gap-y-4 font-medium text-[16px] text-[#353535]'>
          <div className='col-span-2'>
            <p className='mb-2'>Event Title </p>
            <div className='mb-5'>
              <Input
                label='Ex: 2023 Meeting Expo San Deigo'
                crossOrigin=''
                className='rounded-md bg-[#eeebfa]'
                {...register('title')}
                onChange={(e: any) => {
                  handleInputChange('title', e.target.value);
                }}
              />
            </div>
          </div>
          <div className='col-span-2'>
            <p className='mb-2'>Event Description </p>
            <div className='mb-5'>
              {/* @ts-ignore */}
              <RichTextEditor
                control={control}
                handleInputChange={handleInputChange}
              />
            </div>
          </div>
          <div className=''>
            <p className='mb-2'>Event Type </p>
            <div className='mb-5'>
              <Select
                label='In-Person'
                className='bg-[#eeebfc]'
                name='eventType'
                onChange={(e: any) => {
                  handleSelect('eventType', e);
                }}
              >
                <Option value='Option 01'>Option 01</Option>
                <Option value='Option 02'>Option 02</Option>
                <Option value='Option 03'>Option 03</Option>
                <Option value='Option 04'>Option 04</Option>
                <Option value='Option 05'>Option 05</Option>
              </Select>
            </div>
          </div>
          <div className=''>
            <p className='mb-2'>Event Category </p>
            <div className='mb-5'>
              <Select
                label='Coporate'
                className='bg-[#eeebfc]'
                name='eventType'
                onChange={(e: any) => {
                  handleSelect('eventCategory', e);
                }}
              >
                <Option value='Option 01'>Option 01</Option>
                <Option value='Option 02'>Option 02</Option>
                <Option value='Option 03'>Option 03</Option>
                <Option value='Option 04'>Option 04</Option>
                <Option value='Option 05'>Option 05</Option>
              </Select>
            </div>
          </div>
          <div className=''>
            <p className='mb-2'>Event Sub Category</p>
            <div className=' mb-5'>
              <Select
                label='General Meeting'
                className='bg-[#eeebfc]'
                name='eventType'
                onChange={(e: any) => {
                  handleSelect('eventSubCategory', e);
                }}
              >
                <Option value='Option 01'>Option 01</Option>
                <Option value='Option 02'>Option 02</Option>
                <Option value='Option 03'>Option 03</Option>
                <Option value='Option 04'>Option 04</Option>
                <Option value='Option 05'>Option 05</Option>
              </Select>
            </div>
          </div>
          <div className=''>
            <p className='mb-2'>Event Budget</p>
            <div className=' mb-8'>
              <Select
                label='$70,000 - $150,000'
                className='bg-[#eeebfc]'
                name='eventType'
                onChange={(e: any) => {
                  handleSelect('eventBudget', e);
                }}
              >
                <Option value='Option 01'>Option 01</Option>
                <Option value='Option 02'>Option 02</Option>
                <Option value='Option 03'>Option 03</Option>
                <Option value='Option 04'>Option 04</Option>
                <Option value='Option 05'>Option 05</Option>
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
                {...register('address.venueName')}
                onChange={(e: any) => {
                  handleSelect('address.venueName', e.target.value);
                }}
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
                {...register('address.venueAddress')}
                onChange={(e: any) => {
                  handleSelect('address.venueAddress', e.target.value);
                }}
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
                {...register('address.city')}
                onChange={(e: any) => {
                  handleSelect('address.city', e.target.value);
                }}
              />
            </div>
          </div>

          <div className='...'>
            <p className='mb-2'>State</p>
            <div className='mb-5'>
              <Select
                label='Select State'
                className='bg-[#eeebfc]'
                name='address.state'
                onChange={(e: any) => {
                  handleSelect('address.state', e);
                }}
              >
                <Option value='Option 01'>Option 01</Option>
                <Option value='Option 02'>Option 02</Option>
                <Option value='Option 03'>Option 03</Option>
                <Option value='Option 04'>Option 04</Option>
                <Option value='Option 05'>Option 05</Option>
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
                {...register('address.zipCode')}
                onChange={(e: any) => {
                  handleSelect('address.zipCode', e.target.value);
                }}
              />
            </div>
          </div>
        </div>

        <p className='font-medium text-[18px] mb-4'>File Attachment</p>

        {uploadedFiles.length > 0 ? (
          <div className='grid grid-cols-2 gap-x-16 gap-y-4 font-medium text-[18px] text-black mb-2'>
            {uploadedFiles.map((file, index) => (
              <div key={index} className='flex items-center gap-24'>
                {/* @ts-ignore */}
                <p>{file.name}</p>
                <img
                  src={DELETE_BUTTON}
                  alt='delete'
                  className='object-scale-down w-[34px]'
                />
              </div>
            ))}
          </div>
        ) : (
          <p>No files uploaded</p>
        )}

        <Button
          variant='filled'
          color='indigo'
          size='sm'
          className='rounded-md py-2 mt-4 px-4 bg-primary font-poppins'
        >
          <label className='text-white normal-case font-medium'>
            Upload File
            <input
              type='file'
              accept='.pdf, .doc, .docx, .jpg, .jpeg, .png'
              onChange={handleFileUpload}
              className='hidden' // This hides the file input element
            />
          </label>
        </Button>
      </form>
    </div>
  );
};

export default StepOne;
