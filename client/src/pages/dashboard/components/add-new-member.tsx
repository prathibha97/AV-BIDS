import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@material-tailwind/react';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import api from '../../../utils/api';
import {
  MemberFormSchema,
  MemberFormValues,
} from '../../../utils/validations/member-form-validation';

interface AddNewMemberProps {
  onMemberAdded: () => void;
}
const AddNewMember: FC<AddNewMemberProps> = ({ onMemberAdded }) => {
  const { register, handleSubmit, reset } = useForm<MemberFormValues>({
    resolver: zodResolver(MemberFormSchema),
    defaultValues: {
      name: '',
      email: '',
      role: '',
    },
  });

  const onSubmit = async (values: MemberFormValues) => {
    try {
      await api.post('/members', { ...values });
      onMemberAdded();
      reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className='flex items-center justify-center mb-6'>
        <div>
          <h2 className='text-[20px] font-semibold mb-5 text-black text-center'>
            Add Member
          </h2>
          <p className='text-black mb-1'>Name</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='w-72 mb-4 bg-input_background rounded-full'>
              <Input
                placeholder='Dixie Normus'
                className='!border !border-gray-300  text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
                labelProps={{
                  className: 'hidden',
                }}
                containerProps={{ className: 'min-w-[100px]' }}
                crossOrigin=''
                {...register('name')}
              />
            </div>

            <p className='text-black mb-1'>
              Role <span className='text-[#DE5753]'>*</span>
            </p>
            <div className='w-72 mb-4 rounded-full bg-input_background'>
              <Input
                placeholder='Event Planner'
                className='!border !border-gray-300  text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
                labelProps={{
                  className: 'hidden',
                }}
                containerProps={{ className: 'min-w-[100px]' }}
                crossOrigin=''
                {...register('role')}
              />
            </div>

            <p className='text-black mb-1'>
              Email <span className='text-[#DE5753]'>*</span>
            </p>
            <div className='w-72 mb-4 rounded-full bg-input_background'>
              <Input
                placeholder='dixie@anitameetings.com'
                className='!border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full'
                labelProps={{
                  className: 'hidden',
                }}
                containerProps={{ className: 'min-w-[100px]' }}
                crossOrigin=''
                {...register('email')}
              />
            </div>

            <div className='flex items-center justify-end'>
              <Button
                variant='filled'
                color='indigo'
                size='sm'
                className='rounded-full w-32 py-3 mt-2  bg-primary font-poppins'
                type='submit'
              >
                <span className='text-white rounded-lg normal-case '>
                  Add Member
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewMember;
