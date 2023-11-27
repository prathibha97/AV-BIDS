import { Button } from '@material-tailwind/react';
import { FC } from 'react'
import { MdDeleteOutline } from 'react-icons/md';

import PLUS_ICON from '../../../assets/11_dashboard/plus.png';
import DISCOVER from '../../../assets/17_billing/Discover.png';
import MASTER from '../../../assets/17_billing/Mastercard.png';
import VISA from '../../../assets/17_billing/Visa.png';

interface CardsOnFileProps {
  
}

const CardsOnFile: FC<CardsOnFileProps> = ({}) => {
  return (
    <section className='bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6'>
      <div className='flex items-center justify-between mb-6'>
        <div className='w-72'>
          <h2 className='text-[18px] font-semibold text-left'>Card on File</h2>
        </div>

        <Button
          variant='outlined'
          size='sm'
          className='hidden lg:inline-block rounded-btn '
        >
          <div className='flex items-center gap-2 px-2'>
            <img
              src={PLUS_ICON}
              alt='aad'
              className='object-contain w-[20px]'
            />
            <span className='text-black normal-case text-center'>Add Card</span>
          </div>
        </Button>
      </div>

      <div className='grid grid-cols-5 gap-4 justify-items-end'>
        <div className='justify-self-start'>
          <div className='flex items-center gap-6'>
            <img src={VISA} alt='aad' className='object-contain w-[49px]' />
            <p className='font-semibold'>Visa (**** 0000)</p>
          </div>
        </div>
        <div>
          <p className='text-[15px]'>Expiration Date 00/00</p>
        </div>
        <div>
          <p className='text-[15px]'>Debit Card</p>
        </div>
        <div>
          <p className='text-[15px] text-[#888888]'>DEFAULT</p>
        </div>
        <div>
          <MdDeleteOutline size={24} className='text-[#DE5753]' />
        </div>

        <div className='justify-self-start'>
          <div className='flex items-center gap-6'>
            <img src={MASTER} alt='aad' className='object-contain w-[49px]' />
            <p className='font-semibold'>MasterCard (**** 0000)</p>
          </div>
        </div>
        <div>
          <p className='text-[15px]'>Expiration Date 00/00</p>
        </div>
        <div>
          <p className='text-[15px]'>Debit Card</p>
        </div>
        <div>
          <p className='text-[15px] text-[#8645FF] underline'>Make Default</p>
        </div>
        <div>
          <MdDeleteOutline size={24} className='text-[#DE5753]' />
        </div>

        <div className='justify-self-start'>
          <div className='flex items-center gap-6'>
            <img src={DISCOVER} alt='aad' className='object-contain w-[49px]' />
            <p className='font-semibold'>Discover (**** 0000)</p>
          </div>
        </div>
        <div>
          <p className='text-[15px]'>Expiration Date 00/00</p>
        </div>
        <div>
          <p className='text-[15px]'>Debit Card</p>
        </div>
        <div>
          <p className='text-[15px] text-[#8645FF] underline'>Make Default</p>
        </div>
        <div>
          <MdDeleteOutline size={24} className='text-[#DE5753]' />
        </div>
      </div>
    </section>
  );
}

export default CardsOnFile