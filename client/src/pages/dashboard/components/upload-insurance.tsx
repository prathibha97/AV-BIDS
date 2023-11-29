import { Button } from '@material-tailwind/react';
import axios from 'axios';
import { FC, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { updateUser } from '../../../app/features/user/userSlice';
import { useAppDispatch } from '../../../app/hooks';
import { useGetCurrentUser } from '../../../app/hooks/useUser';
import DELETE from '../../../assets/15_dashboard/delete.png';
import EDIT from '../../../assets/15_dashboard/edit.png';
import api from '../../../utils/api';

interface UploadInsuranceProps {}

const UploadInsurance: FC<UploadInsuranceProps> = () => {
  const user = useGetCurrentUser();
  const dispatch = useAppDispatch();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Take the first file for simplicity.
    const file = acceptedFiles[0];
    setUploadedFile(file);
  }, []);

  const handleFileUpload = async () => {
    try {
      if (!uploadedFile) {
        console.error('No file uploaded');
        return;
      }

      const fileExtension = uploadedFile.name.split('.').pop()?.toLowerCase();

      if (!fileExtension) {
        console.error('Invalid file extension');
        return;
      }

      const uploadConfig = await api.get(`/upload?type=${fileExtension}`);

      await axios.put(uploadConfig.data.url, uploadedFile, {
        headers: {
          'Content-Type': uploadedFile.type,
        },
      });

      const { data } = await api.put(`/users/${user?._id}`, {
        insurance: uploadConfig.data.key,
      });

      dispatch(updateUser(data));
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const handleCOIDelete = async () => {
    try {
      const { data } = await api.put(`/users/${user?._id}`, {
        insurance: null,
      });
      dispatch(updateUser(data));
    } catch (error) {
      console.log(error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <section className='bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6'>
      <h2 className='text-[20px] font-semibold mb-4'>
        Upload Your Proof of Insurance *
      </h2>

      <div
        {...getRootProps()}
        className='bg-[#F3F1FB] px-4 py-10 border-dashed border-2 border-[#e7daff] mb-4 rounded-md cursor-pointer'
      >
        <input {...getInputProps()} />
        <div className='flex items-center justify-center text-center'>
          <div>
            <p className='font-semibold text-[17px] mb-2'>
              {uploadedFile
                ? 'File uploaded!'
                : 'Drag files here or click to upload'}
            </p>
            {uploadedFile && (
              <div>
                <p>File Name: {uploadedFile.name}</p>
                <p>File Size: {uploadedFile.size} bytes</p>
                <img
                  src={URL.createObjectURL(uploadedFile)}
                  alt='File Preview'
                  className='max-h-40 mt-2'
                />
              </div>
            )}
            {!uploadedFile && (
              <p className='text-[15px]'>
                To upload file size is (Max 5Mb) and allowed file types are
                (.doc, .docx, .pdf)
              </p>
            )}
            <Button
              variant='filled'
              color='indigo'
              size='sm'
              className='rounded-md w-40 py-2 mt-4 px-2 bg-primary font-poppins'
              onClick={handleFileUpload}
            >
              Upload File
            </Button>
          </div>
        </div>
      </div>

      {user?.insurance && (
        <div className='bg-[#F3F1FB] p-8 flex flex-col items-center w-[120px] rounded-md relative'>
          <p className='font-semibold text-[17px] mb-2 text-center'>COI</p>
          <div className='flex items-center gap-2 mb-2 absolute top-0 left-0 right-0'>
            <button className='absolute top-0 right-0 p-1'>
              <img
                src={EDIT}
                alt='aad'
                className='object-scale-down w-[20px]'
              />
            </button>
            <button
              className='absolute top-0 left-0 p-1'
              onClick={() => handleCOIDelete()}
            >
              <img
                src={DELETE}
                alt='aad'
                className='object-scale-down w-[20px]'
              />
            </button>
          </div>
          <img
            src={`https://av-bids-bucket.s3.ap-south-1.amazonaws.com/${user.insurance}`}
            alt='Insurance Copy Preview'
            className='max-h-40'
          />
        </div>
      )}
    </section>
  );
};

export default UploadInsurance;
