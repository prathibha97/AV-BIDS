import { Button, Input } from '@material-tailwind/react';

import { zodResolver } from '@hookform/resolvers/zod';
import { colors } from '@material-tailwind/react/types/generic';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { clearMember } from '../../../app/features/members/memberSlice';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { RootState } from '../../../app/store';
import api from '../../../utils/api';
import {
  MemberFormSchema,
  MemberFormValues,
} from '../../../utils/validations/member-form-validation';

interface EditMembersProps {
  handleMemberEdited: () => void;
  handleOpen: () => void;
  setMessage: React.Dispatch<React.SetStateAction<string | null>>;
  setAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setColor: React.Dispatch<React.SetStateAction<colors | undefined>>;
}
const EditMembers: FC<EditMembersProps> = ({
  handleMemberEdited,
  handleOpen,
  setAlertOpen,
  setColor,
  setMessage,
}) => {
  const dispatch = useAppDispatch();
  const member = useAppSelector((state: RootState) => state.member.member);

  const { register, handleSubmit, reset } = useForm<MemberFormValues>({
    resolver: zodResolver(MemberFormSchema),
    defaultValues: {
      name: member?.name,
      email: member?.email,
      role: member?.role,
    },
  });

  const onSubmit = async (values: MemberFormValues) => {
    try {
      const { data } = await api.put(`/members/${member?._id}`, { ...values });
      handleMemberEdited();
      handleOpen();
      reset();
      dispatch(clearMember());
      const message = data.message;
      setMessage(message);
      setAlertOpen(true);

      // Set a timer to clear the error message after 5 seconds
      setTimeout(() => {
        setAlertOpen(false);
        setMessage(null);
      }, 5000);
    } catch (error: any) {
      if (error.response) {
        const errorMessage = error.response.data.error;
        setMessage(errorMessage);
        setColor('red');
        setAlertOpen(true);
        handleOpen();

        // Set a timer to clear the error message after 5 seconds
        setTimeout(() => {
          setAlertOpen(false);
          setMessage(null);
          setColor('green');
        }, 5000);
      } else if (error.request) {
        console.log('No response received from the server.');
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error while setting up the request:', error.message);
      }
    }
  };
  return (
    <div>
      <div className='flex items-center justify-center mb-6'>
        <div>
          <h2 className='text-[20px] font-semibold mb-5 text-black text-center'>
            Edit Member
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className='text-black mb-1'>Name</p>
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
                type='submit'
                className='rounded-full w-32 py-3 mt-2  bg-primary font-poppins'
              >
                <span className='text-white rounded-lg normal-case '>
                  Edit Member
                </span>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditMembers;
