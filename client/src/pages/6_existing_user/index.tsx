import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Card,
  Checkbox,
  Input,
  Typography,
} from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import LOGO from '../../assets/register/logo.png';
import api from '../../utils/api';
import {
  LoginFormSchema,
  LoginFormValues,
} from '../../utils/validations/login-form-validation';
import { useAppDispatch } from '../../app/hooks';
import { setUser } from '../../app/features/user/userSlice';

export function Index() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(LoginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: LoginFormValues) => {
    try {
      const { data } = await api.post('/auth/login', { ...values });

      console.log(data.user);
      dispatch(setUser(data.user))
      if (data.user.userType === 'PROVIDER') {
        navigate('/provider-dashboard');
      } else {
        navigate('/homedashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='flex items-center justify-center h-screen bg-[#f3f1fb]'>
      <div>
        <div className='flex items-center justify-center mb-6'>
          <img src={LOGO} alt='aad' className=' w-[150px] object-contain' />
        </div>

        <Card color='white' className='m-0 grid  px-8 pt-8 pb-8'>
          <p className='text-[30px] text-primary'>Welcome Back!</p>
          <h2 className='text-[30px] text-primary'>Sign In</h2>
          <form
            className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className='mb-1 flex flex-col gap-6'>
              {/* <Input
                size="lg"
                placeholder="Username"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900  rounded-full bg-[#223323]"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                crossOrigin="anonymous"
              /> */}

              <div>
                {' '}
                <Input
                  placeholder='email'
                  className=' !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fc] rounded-full'
                  labelProps={{
                    className: 'before:content-none after:content-none',
                  }}
                  crossOrigin='anonymous'
                  {...register('email')}
                />
                {errors.email && <span>Email is required</span>}
              </div>

              <div>
                {' '}
                <Input
                  type='password'
                  placeholder='Password'
                  className=' !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fc] rounded-full'
                  labelProps={{
                    className: 'before:content-none after:content-none',
                  }}
                  crossOrigin='anonymous'
                  {...register('password')}
                />
                {errors.password && <span>Password is required</span>}
              </div>
            </div>

            <div className='flex items-center justify-between'>
              <div>
                {' '}
                <Checkbox
                  label={
                    <div className='flex justify-between gap-32'>
                      <h6 className='flex items-center font-normal text-[14px]'>
                        Remember me
                      </h6>

                      {/* <h6 className="flex items-center font-normal text-[14px] text-[#8645FF] underline">
                    Forgot Password
                  </h6> */}
                    </div>
                  }
                  crossOrigin='anonymous'
                  containerProps={{ className: '-ml-2.5' }}
                />
              </div>

              <h6 className='font-normal text-[14px] text-[#8645FF] underline'>
                Forgot Password?
              </h6>
            </div>

            <Button
              className='mt-6 bg-primary rounded-full'
              fullWidth
              type='submit'
            >
              <h6>Login</h6>
            </Button>
            <Typography color='gray' className='mt-4 text-center font-normal'>
              <p className='text-[14px]'>
                {' '}
                Don’t have an Account?{' '}
                <span
                  className='text-[#8645FF] underline cursor-pointer'
                  onClick={() => navigate('/5_01_create_event_planner')}
                >
                  Sign Up
                </span>
              </p>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
}

export default Index;
