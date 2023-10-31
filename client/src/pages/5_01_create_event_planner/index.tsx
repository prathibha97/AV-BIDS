import LOGO from '../../assets/register/logo.png';

import { zodResolver } from '@hookform/resolvers/zod';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Input,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import api from '../../utils/api';
import {
  RegisterFormSchema,
  RegisterFormValues,
} from '../../utils/validations/register-form-validation';

export default function CheckoutForm() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('PLANNER');
  const [checked, setChecked] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
  });

  const onSubmit = async (values: RegisterFormValues) => {
    try {
      const { data } = await api.post('/auth/register', {
        ...values,
        userType,
      });

      if (data.userType === 'PROVIDER') {
        navigate('/provider-dashboard');
      } else {
        navigate('/planner-dashboard');
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

        {/* <Card className="w-full max-w-[24rem]"> */}
        <Card className='w-[28rem]'>
          <CardHeader
            color='white'
            floated={false}
            shadow={false}
            className='m-0 grid place-items-center px-4 pt-8 pb-0 text-center'
          >
            <h2 className='text-[30] text-primary'>Create Account</h2>
          </CardHeader>
          <CardBody>
            <Tabs value={userType} className='overflow-visible'>
              <TabsHeader className='relative z-0 border border-[#E0E0E0] rounded-3xl '>
                <Tab
                  value='PLANNER'
                  onClick={() => {
                    setUserType('PLANNER');
                    setChecked(false);
                  }}
                >
                  <h2 className='text-[16px]'>Event Planner</h2>
                </Tab>
                <Tab
                  value='PROVIDER'
                  onClick={() => {
                    setUserType('PROVIDER');
                    setChecked(false);
                  }}
                >
                  <h2 className='text-[16px]'>AV Provider</h2>
                </Tab>
              </TabsHeader>
              <TabsBody
                className='!overflow-x-hidden !overflow-y-visible'
                animate={{
                  initial: {
                    x: userType === 'PLANNER' ? 400 : -400,
                  },
                  mount: {
                    x: 0,
                  },
                  unmount: {
                    x: userType === 'PLANNER' ? 400 : -400,
                  },
                }}
              >
                <TabPanel value='PLANNER' className='p-0'>
                  <form
                    className='mt-6 flex flex-col gap-4'
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div>
                      <Input
                        type='text'
                        placeholder='First Name'
                        className=' !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full'
                        labelProps={{
                          className: 'before:content-none after:content-none',
                        }}
                        crossOrigin='anonymous'
                        {...register('firstName')}
                      />
                      {errors.firstName && (
                        <span className='text-red-500'>
                          First Name is required
                        </span>
                      )}
                    </div>
                    <div>
                      <Input
                        type='text'
                        placeholder='Last Name'
                        className=' !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full'
                        labelProps={{
                          className: 'before:content-none after:content-none',
                        }}
                        crossOrigin='anonymous'
                        {...register('lastName')}
                      />
                      {errors.lastName && (
                        <span className='text-red-500'>
                          Last Name is required
                        </span>
                      )}
                    </div>
                    <div>
                      <Input
                        type='email'
                        placeholder='Email Address'
                        className=' !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full'
                        labelProps={{
                          className: 'before:content-none after:content-none',
                        }}
                        crossOrigin='anonymous'
                        {...register('email')}
                      />
                      {errors.email && (
                        <span className='text-red-500'>Email is required</span>
                      )}
                    </div>
                    <div className='mb-4'>
                      <Input
                        type='password'
                        placeholder='Password'
                        className=' !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full'
                        labelProps={{
                          className: 'before:content-none after:content-none',
                        }}
                        crossOrigin='anonymous'
                        {...register('password')}
                      />
                      {errors.password && (
                        <span className='text-red-500'>
                          Password is required
                        </span>
                      )}
                    </div>

                    <Checkbox
                      label={
                        <p color='blue-gray' className='text-[14px]'>
                          By hitting the "Create Account" button,<br></br> you
                          agree to the
                          <span className='text-secondary underline mx-[5px]'>
                            Terms of Service
                          </span>
                          &<br></br>
                          <span className='text-secondary underline'>
                            Privacy Policy
                          </span>
                        </p>
                      }
                      crossOrigin=''
                      onClick={() => setChecked(!checked)}
                    />

                    <Button
                      size='lg'
                      className='rounded-full bg-primary mt-2'
                      type='submit'
                      disabled={checked === false}
                    >
                      Create Account
                    </Button>
                    <p className='mt-2 flex items-center justify-center gap-2 text-[14px]'>
                      Have an account?{' '}
                      <span
                        className='text-secondary underline cursor-pointer'
                        onClick={() => navigate('/6_existing_user')}
                      >
                        Sign In
                      </span>
                    </p>
                  </form>
                </TabPanel>
                <TabPanel value='PROVIDER' className='p-0'>
                  <form
                    className='mt-6 flex flex-col gap-4'
                    onSubmit={handleSubmit(onSubmit)}
                  >
                    <div>
                      <Input
                        type='text'
                        placeholder='First Name'
                        className=' !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full'
                        labelProps={{
                          className: 'before:content-none after:content-none',
                        }}
                        crossOrigin='anonymous'
                        {...register('firstName')}
                      />
                      {errors.firstName && (
                        <span className='text-red-500'>
                          First Name is required
                        </span>
                      )}
                    </div>
                    <div>
                      <Input
                        type='text'
                        placeholder='Last Name'
                        className=' !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full'
                        labelProps={{
                          className: 'before:content-none after:content-none',
                        }}
                        crossOrigin='anonymous'
                        {...register('lastName')}
                      />
                      {errors.lastName && (
                        <span className='text-red-500'>
                          Last Name is required
                        </span>
                      )}
                    </div>
                    <div>
                      <Input
                        type='email'
                        placeholder='Email Address'
                        className=' !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full'
                        labelProps={{
                          className: 'before:content-none after:content-none',
                        }}
                        crossOrigin='anonymous'
                        {...register('email')}
                      />
                      {errors.email && (
                        <span className='text-red-500'>Email is required</span>
                      )}
                    </div>
                    <div className='mb-4'>
                      <Input
                        type='password'
                        placeholder='Password'
                        className=' !border-t-blue-gray-200 focus:!border-t-gray-900 bg-[#f3f1fb] rounded-full'
                        labelProps={{
                          className: 'before:content-none after:content-none',
                        }}
                        crossOrigin='anonymous'
                        {...register('password')}
                      />
                      {errors.password && (
                        <span className='text-red-500'>
                          Password is required
                        </span>
                      )}
                    </div>

                    <Checkbox
                      label={
                        <p color='blue-gray' className='text-[14px]'>
                          By hitting the "Create Account" button,<br></br> you
                          agree to the
                          <span className='text-secondary underline mx-[5px]'>
                            Terms of Service
                          </span>
                          &<br></br>
                          <span className='text-secondary underline'>
                            Privacy Policy
                          </span>
                        </p>
                      }
                      crossOrigin=''
                      onClick={() => setChecked(!checked)}
                    />

                    <Button
                      size='lg'
                      className='rounded-full bg-primary mt-2'
                      type='submit'
                      disabled={checked === false}
                    >
                      Create Account
                    </Button>
                    <p className='mt-2 flex items-center justify-center gap-2 text-[14px]'>
                      Have an account?{' '}
                      <span
                        className='text-secondary underline cursor-pointer'
                        onClick={() => navigate('/6_existing_user')}
                      >
                        Sign In
                      </span>
                    </p>
                  </form>
                </TabPanel>
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
