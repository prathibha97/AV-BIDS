import { Button } from '@material-tailwind/react';
import axios from 'axios';
import { FC, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { setAlertWithTimeout } from '../../../../app/features/alerts/alertSlice';
import { useAppDispatch } from '../../../../app/hooks';
import UPLOAD_ICON from '../../../../assets/10_event_details_page/Upload icon.png';
import { Event, User } from '../../../../types';
import api from '../../../../utils/api';

interface SubmitProposalProps {
  handleOpen: () => void;
  event: Event | null;
  user: User | null;
}

export const SubmitProposal: FC<SubmitProposalProps> = ({
  handleOpen,
  event,
  user,
}) => {
  const dispatch = useAppDispatch();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Take the first file for simplicity.
    const file = acceptedFiles[0];
    setUploadedFile(file);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

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

      handleOpen();
      const { data } = await api.post(`/proposals`, {
        documents: {
          url: uploadConfig.data.key,
          fileName: uploadedFile.name,
        },
        event: event?._id,
        provider: user?._id,
      });

      dispatch(
        setAlertWithTimeout({
          message: data.message,
          color: 'green',
          open: true,
        })
      );
    } catch (error: any) {
      if (error.response) {
        handleOpen();
        dispatch(
          setAlertWithTimeout({
            message: error.response.data.error,
            color: 'red',
            open: true,
          })
        );
      } else if (error.request) {
        console.log('No response received from the server.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error while setting up the request:', error.message);
      }
    }
  };
  return (
    <div className='m-5'>
      <div
        {...getRootProps()}
        className='bg-[#F3F1FB] px-4 py-10 border-dashed border-2 border-[#e7daff] mb-4 rounded-md cursor-pointer'
      >
        <div className='flex items-center justify-center '>
          <img
            src={UPLOAD_ICON}
            alt='aad'
            className='object-scale-down w-[50px]'
          />
        </div>
        <input {...getInputProps()} />
        <div className='flex items-center justify-center text-center'>
          <div>
            <p className='font-semibold text-[17px] mb-2'>
              {uploadedFile
                ? 'File uploaded!'
                : 'Drag files here or click to upload'}
            </p>
            {uploadedFile && (
              <div className='flex flex-col'>
                <p>File Name: {uploadedFile.name}</p>
                <p>File Size: {uploadedFile.size} bytes</p>
                <img
                  src={URL.createObjectURL(uploadedFile)}
                  alt='File Preview'
                  className='flex items-center justify-center max-h-40 mt-2 object-contain'
                />
              </div>
            )}
            {!uploadedFile && (
              <p className='text-[15px]'>
                To upload file size is (Max 5Mb) and allowed file types are
                (.doc, .docx, .pdf)
              </p>
            )}
          </div>
        </div>
      </div>
      <div className='flex'>
        <Button
          className='mx-6 mb-6 w-[485px] bg-primary'
          onClick={handleFileUpload}
        >
          Upload Files
        </Button>
      </div>
    </div>
  );
};

export default SubmitProposal;
