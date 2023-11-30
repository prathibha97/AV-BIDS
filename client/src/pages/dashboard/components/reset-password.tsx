import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Input } from '@material-tailwind/react';
import { colors } from '@material-tailwind/react/types/generic';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { clearUser, updateUser } from '../../../app/features/user/userSlice';
import { useAppDispatch } from '../../../app/hooks';
import { useGetCurrentUser } from '../../../app/hooks/useUser';
import api from '../../../utils/api';
import {
  ResetPasswordFormSchema,
  ResetPasswordFormValues,
} from '../../../utils/validations/reset-password-form-validation';

interface ResetPasswordProps {
  setMessage: React.Dispatch<React.SetStateAction<string | null>>;
  setAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setColor: React.Dispatch<React.SetStateAction<colors | undefined>>;
}

const ResetPassword: FC<ResetPasswordProps> = ({
  setAlertOpen,
  setColor,
  setMessage,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const user = useGetCurrentUser();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(ResetPasswordFormSchema),
    defaultValues: {
      password: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (values: ResetPasswordFormValues) => {
    try {
      const { data } = await api.post('/auth/reset-password', {
        email: user?.email,
        password: values.newPassword,
      });
      dispatch(updateUser(data.user));
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

  const handleDeleteAccount = async () => {
    try {
      await api.delete(`/users/${user?._id}`);
      navigate('/');
      dispatch(clearUser());
      localStorage.removeItem('userInfo');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className='bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6'>
      <h2 className='text-[20px] font-semibold mb-4'>Change Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid grid-cols-1 gap-4'>
          <div>
            <p className='mb-2'>Current password</p>

            <div className='w-72 bg-input_background rounded-full'>
              <Input
                className='rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
                labelProps={{
                  className: 'hidden',
                }}
                containerProps={{ className: 'min-w-[100px]' }}
                type='password'
                placeholder='********'
                crossOrigin=''
                {...register('password')}
              />
              {errors.password && <span>Password is required</span>}
            </div>
          </div>

          <div>
            <p className='mb-2'>New Password</p>
            <div className='w-72 bg-input_background rounded-full'>
              <Input
                className='rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
                labelProps={{
                  className: 'hidden',
                }}
                containerProps={{ className: 'min-w-[100px]' }}
                type='password'
                placeholder='New Password'
                crossOrigin=''
                {...register('newPassword')}
              />
              {errors.password && <span>New Password is required</span>}
            </div>
          </div>
          <div>
            <p className='mb-2'>Confirm New Password</p>
            <div className='w-72 bg-input_background rounded-full'>
              <Input
                className='rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10'
                labelProps={{
                  className: 'hidden',
                }}
                containerProps={{ className: 'min-w-[100px]' }}
                type='password'
                placeholder='Confirm New Password'
                crossOrigin=''
                {...register('confirmPassword')}
              />
              {errors.password && <span>Passwords does not match</span>}
            </div>
          </div>
        </div>

        <div className='flex items-center justify-between mt-4'>
          <Button
            variant='filled'
            color='indigo'
            size='sm'
            type='button'
            className='w-30 py-3 mt-4 px-6 bg-[#E12929] font-poppins rounded-full'
            onClick={handleDeleteAccount}
          >
            <span className='text-white normal-case'>Delete Account</span>
          </Button>

          <Button
            variant='filled'
            color='indigo'
            size='sm'
            className='w-30 py-3 mt-4 px-6 bg-primary font-poppins rounded-full'
            type='submit'
          >
            <span className='text-white normal-case'>Submit</span>
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ResetPassword;
