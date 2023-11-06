import { Button, Checkbox, Input } from "@material-tailwind/react";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { RegisterFormSchema, RegisterFormValues } from "../../../utils/validations/register-form-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../../utils/api";

interface ProviderAccountFormProps {
  userType:string;
}

const ProviderAccountForm: FC<ProviderAccountFormProps> = ({userType}) => {
  const navigate = useNavigate();
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
      } else if (data.userType === 'PLANNER') {
        navigate('/homedashboard');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
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
          <span className='text-red-500'>First Name is required</span>
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
          <span className='text-red-500'>Last Name is required</span>
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
          <span className='text-red-500'>Password is required</span>
        )}
      </div>

      <Checkbox
        label={
          <p color='blue-gray' className='text-[14px]'>
            By hitting the "Create Account" button,<br></br> you agree to the
            <span className='text-secondary underline mx-[5px]'>
              Terms of Service
            </span>
            &<br></br>
            <span className='text-secondary underline'>Privacy Policy</span>
          </p>
        }
        crossOrigin=''
        onClick={() => setChecked((prev) => !prev)}
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
  );
};
 
export default ProviderAccountForm;