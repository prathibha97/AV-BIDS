import { Button, Spinner } from '@material-tailwind/react';
import {
  AddressElement,
  useElements,
  useStripe,
} from '@stripe/react-stripe-js';
import { FC, useEffect, useState } from 'react';
import { useGetCurrentUser } from '../../../app/hooks/useUser';
import api from '../../../utils/api';

interface BillingDetailsProps {}

const BillingDetails: FC<BillingDetailsProps> = () => {
  const stripe = useStripe();
  const elements = useElements();
  const user = useGetCurrentUser();

  const [customer, setCustomer] = useState(null);

  useEffect(() => {
    const fetchStripeClient = async () => {
      const { data } = await api.get(
        `/stripe/retrieve-customer/${user?.subscription.customerId}`
      );
      return setCustomer(data);
    };
    fetchStripeClient();
  }, [user?.subscription.customerId]);

  if (!stripe || !elements) {
    return (
      <div className='flex items-center justify-center h-full'>
        <Spinner />
      </div>
    );
  }

  const handleSave = async () => {
    const addressElement = elements.getElement('address');
    // @ts-ignore
    const { complete, value } = await addressElement?.getValue();

    if (complete) {
      await api.put(
        `/stripe/update-customer/${user?.subscription.customerId}`,
        {
          address: value.address,
          name: 'Peter Parker',
        }
      );
      console.log(value);
    }
  };

  return (
    <section className='bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6'>
      <div className='w-72 mb-5'>
        <h2 className='text-[18px] font-semibold text-left'>Billing Details</h2>
      </div>
      <AddressElement
        options={{
          mode: 'shipping',
          allowedCountries: ['US'],
          defaultValues: {
            // @ts-ignore
            name: customer?.name,
            // @ts-ignore
            address: customer && customer?.address,
          },
        }}
      />

      <div className='flex justify-end'>
        <Button
          variant='filled'
          color='indigo'
          size='sm'
          className='w-30 py-3 mt-4 px-6 bg-primary font-poppins rounded-full'
          onClick={() => handleSave()}
        >
          <span className='text-white'>Save Billing</span>
        </Button>
      </div>
    </section>
  );
};

export default BillingDetails;
