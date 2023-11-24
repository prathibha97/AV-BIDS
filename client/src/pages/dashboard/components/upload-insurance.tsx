import { Button } from '@material-tailwind/react';
import { FC } from 'react'
import DELETE from '../../../assets/15_dashboard/delete.png';
import EDIT from '../../../assets/15_dashboard/edit.png';

interface UploadInsuranceProps {
  
}

const UploadInsurance: FC<UploadInsuranceProps> = ({}) => {
  return (
    <section className='bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6'>
      <h2 className='text-[20px] font-semibold mb-4'>
        Upload Your Proof of Insurance *
      </h2>

      <div className='bg-[#F3F1FB] px-4 py-10 border-dashed border-2 border-[#e7daff] mb-4 rounded-md'>
        <div className='flex items-center justify-center text-center'>
          <div>
            <p className='font-semibold text-[17px] mb-2'>
              Drop files here to upload
            </p>
            <p className='text-[15px] '>
              To upload file size is (Max 5Mb) and allowed file types are (.doc,
              .docx, .pdf)
            </p>
            <Button
              variant='filled'
              color='indigo'
              size='sm'
              className='rounded-md w-41 py-2 mt-4 px-4 bg-primary font-poppins'
            >
              <span className='text-white'>Upload File</span>
            </Button>
          </div>
        </div>
      </div>

      <div className='bg-[#F3F1FB] p-8 flex items-center w-[120px] rounded-md'>
        <div>
          <p className='font-semibold text-[17px] mb-2 text-center'>COI</p>
          <div className='flex items-center gap-2'>
            <img src={EDIT} alt='aad' className='object-scale-down w-[20px]' />
            <img
              src={DELETE}
              alt='aad'
              className='object-scale-down w-[20px]'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default UploadInsurance