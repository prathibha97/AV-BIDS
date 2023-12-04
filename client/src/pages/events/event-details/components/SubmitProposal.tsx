import { Button } from '@material-tailwind/react';
import { FC, useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { setAlertWithTimeout } from '../../../../app/features/alerts/alertSlice';
import { useAppDispatch } from '../../../../app/hooks';
import UPLOAD_ICON from '../../../../assets/10_event_details_page/Upload icon.png';

interface SubmitProposalProps {
  handleOpen: () => void;
}

export const SubmitProposal: FC<SubmitProposalProps> = ({ handleOpen }) => {
  const dispatch = useAppDispatch();
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // Take the first file for simplicity.
    const file = acceptedFiles[0];
    setUploadedFile(file);
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleFileUpload = () => {
    try {
      console.log(uploadedFile);
      handleOpen();
      dispatch(
        setAlertWithTimeout({
          message: 'Proposal submited',
          color: 'green',
          open: true,
        })
      );
    } catch (error) {
      console.log(error);
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
