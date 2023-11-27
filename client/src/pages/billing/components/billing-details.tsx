import { Button, Input } from '@material-tailwind/react'
import { FC } from 'react'

interface BillingDetailsProps {
  
}

const BillingDetails: FC<BillingDetailsProps> = ({}) => {
  return <section className='bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6'>
        <div>
          <div className='grid grid-cols-2  gap-8'>
            <div className='w-72'>
              <h2 className='text-[18px] font-semibold text-left'>
                Billing Details
              </h2>
            </div>
            <div></div>

            <div className='2'>
              <p className='text-[16px] mb-2'>Street Address</p>
              <div>
                <Input
                  label='Street Address'
                  crossOrigin=''
                  className=' bg-[#f0edfc]'
                />
              </div>
            </div>

            <div className='2'>
              <p className='text-[16px] mb-2'>Street Address</p>
              <div>
                <Input
                  label='Street Address'
                  crossOrigin=''
                  className=' bg-[#f0edfc]'
                />
              </div>
            </div>

            <div className='2'>
              <p className='text-[16px] mb-2'>Unit Number</p>
              <div>
                <Input
                  label='Unit Number'
                  crossOrigin=''
                  className=' bg-[#f0edfc]'
                />
              </div>
            </div>

            <div className='2'>
              <p className='text-[16px] mb-2'>City</p>
              <div>
                <Input label='City' crossOrigin='' className=' bg-[#f0edfc]' />
              </div>
            </div>

            <div className='2'>
              <p className='text-[16px] mb-2'>Postal Code</p>
              <div>
                <Input
                  label='Unit Number'
                  crossOrigin=''
                  className=' bg-[#f0edfc]'
                />
              </div>
            </div>
          </div>

          <div className='flex justify-end'>
            <Button
              variant='filled'
              color='indigo'
              size='sm'
              className='w-30 py-3 mt-4 px-6 bg-primary font-poppins rounded-full'
            >
              <span className='text-white'>Save Billing</span>
            </Button>
          </div>
        </div>
      </section>
}

export default BillingDetails