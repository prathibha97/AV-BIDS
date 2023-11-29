import { Button, Textarea } from '@material-tailwind/react';
import { useState } from 'react';

export function SubmitProposal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <div>
      <div className='flex items-center justify-center mb-4 mx-6 '>
        <div>
          <div className='flex items-center justify-center mb-8'>
            <h2 className='text-[22px] font-semibold  text-black text-center'>
              Submit Proposal
            </h2>
          </div>

          <div className='mb-5'>
            <p className='font-medium mb-2'>Message</p>
            <div className='w-96'>
              <Textarea label='Type your message' className='!bg-[#F3F1FB]' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center text-center gap-8 mb-6'>
        <Button
          variant='filled'
          color='indigo'
          size='sm'
          className='w-24 py-3 mt-4  bg-[#D0D0D0] font-poppins rounded-full'
          onClick={handleOpen}
        >
          <span className='text-white  normal-case text-center'>Cancel</span>
        </Button>

        <Button
          variant='filled'
          color='indigo'
          size='sm'
          className='w-24 py-3 mt-4 px-8 bg-primary font-poppins normal-case rounded-full '
          // onClick={handleDelete}
        >
          <span className='text-white normal-case '>Yes</span>
        </Button>
      </div>
    </div>
  );
}

export default SubmitProposal;
