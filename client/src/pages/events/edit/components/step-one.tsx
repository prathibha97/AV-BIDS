import { Button, Input, Option, Select } from '@material-tailwind/react';
import axios from 'axios';
import { FC, useState } from 'react';
import { UseFormRegister, UseFormReturn } from 'react-hook-form';
import DELETE_BUTTON from '../../../../assets/12_edit_event/ep_delete.png';
import {
  eventBudgetOptions,
  eventCategories,
  eventSubCategories,
  eventTypes,
  usStates,
} from '../../../../constants';
import api from '../../../../utils/api';
import { EventFormFormValues } from '../../../../utils/validations/event-form-validation';
import RichTextEditor from './rich-text-editor';

interface UploadedFile extends File {
  fileName: string;
  url?: string; // Set to optional as it will be updated after upload
  progress: number;
}


interface StepOneProps {
  control: UseFormReturn<any>['control'];
  register: UseFormRegister<EventFormFormValues>;
  updateFormData: any;
}

const StepOne: FC<StepOneProps> = ({ control, register, updateFormData }) => {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const updatedFiles = Array.from(files);
      // @ts-ignore
      setUploadedFiles((prevFiles) => [...prevFiles, ...updatedFiles]);

      // Iterate over the newly added files and update formData
      for (let i = 0; i < updatedFiles.length; i++) {
        await uploadFileToS3(files[i], i);
      }
    }
  };

  const uploadFileToS3 = async (file: File, index: number) => {
    // @ts-ignore
    const fileExtension = file.name.split('.').pop().toLowerCase();

    if (fileExtension) {
      try {
        // Get S3 upload config
        const uploadConfig = await api.get('/upload?type=' + fileExtension);

        // Upload file to S3
        await axios.put(uploadConfig.data.url, file, {
          headers: {
            'Content-Type': file.type,
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              // @ts-ignore
              (progressEvent.loaded * 100) / progressEvent.total
            );

            setUploadedFiles((prevFiles) =>
              prevFiles.map((prevFile, i) =>
                i === index
                  ? { ...prevFile, progress: percentCompleted }
                  : prevFile
              )
            );
          },
        });

        // Update form data or do any other actions with the uploaded file info
        updateFormData((prevData: any) => ({
          ...prevData,
          // Add logic to store file info as needed
          files: [
            ...(prevData.files || []), // Previous files, if any
            {
              fileName: file.name,
              url: uploadConfig.data.key,
            },
          ],
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setUploadedFiles((prevFiles) =>
          prevFiles.map((prevFile, i) =>
            i === index ? { ...prevFile, progress: 0 } : prevFile
          )
        );
      }
    }
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
                {eventTypes.map((type) => (
                  <Option key={type.value} value={type.value}>
                    {type.label}
                  </Option>
                ))}
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
                {eventCategories.map((category) => (
                  <Option key={category.value} value={category.value}>
                    {category.label}
                  </Option>
                ))}
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
                {eventSubCategories.map((category) => (
                  <Option key={category.value} value={category.value}>
                    {category.label}
                  </Option>
                ))}
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
                {eventBudgetOptions.map((budget) => (
                  <Option key={budget.value} value={budget.value}>
                    {budget.label}
                  </Option>
                ))}
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
                {usStates.map((state) => (
                  <Option key={state.value} value={state.value}>
                    {state.label}
                  </Option>
                ))}
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
              <div key={index} className='mb-4'>
                <div className='flex items-center gap-4'>
                  <p>{file.name}</p>
                  <img
                    src={DELETE_BUTTON}
                    alt='delete'
                    className='object-scale-down w-[34px]'
                  />
                </div>
                <div className='relative pt-1'>
                  <div className='flex mb-2 items-center justify-between'>
                    <div>
                      <span className='text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200'>
                        {file.progress}%
                      </span>
                    </div>
                  </div>
                  <div className='flex h-2 mb-4 overflow-hidden bg-gray-200 rounded'>
                    <div
                      style={{ width: `${file.progress}%` }}
                      className='shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-teal-500'
                    ></div>
                  </div>
                </div>
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
              multiple
            />
          </label>
        </Button>
      </form>
    </div>
  );
};

export default StepOne;
