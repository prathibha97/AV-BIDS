import { Button, Card } from '@material-tailwind/react';
import { FC, useState } from 'react';
import OTC from '../../../assets/forgot_password/otc.png';
import LOGO from '../../../assets/register/logo.png';

interface OtpInputProps {
  handleNextStep: () => void;
}

const OtpInput: FC<OtpInputProps> = ({ handleNextStep }) => {
  const [verificationCode, setVerificationCode] = useState([
    '',
    '',
    '',
    '',
    '',
  ]);
  const [message, setMessage] = useState('');

  const handleInputChange = (index: number, value: string) => {
    const updatedCode = [...verificationCode];
    updatedCode[index] = value;

    if (value !== '' && index < 4) {
      document.getElementById(`inputField${index + 1}`)?.focus();
    }

    setVerificationCode(updatedCode);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const enteredCode = verificationCode.join('');
    if (enteredCode === '12345') {
      setMessage('Successful');
      handleNextStep();
    } else {
      setMessage('Invalid Verification Code!');
    }
  };

return (
  <div className='bg-[#f3f1fb] h-screen'>
    <div className='flex flex-col items-center justify-center h-screen bg-[#f3f1fb]'>
      <div>
        <div className='flex items-center justify-center mb-6'>
          <img src={LOGO} alt='aad' className=' w-[150px] object-contain' />
        </div>
        <Card
          color='white'
          className=' m-4 sm:mb-0 sm:w-[25rem]  grid  px-8 pt-8 pb-8'
        >
          <div className='flex items-center justify-center mb-6'>
            <img src={OTC} alt='aad' className='object-scale-down w-[80px]' />
          </div>

          <h2 className='text-[25px] text-primary text-center mb-4'>
            Enter Verification Code
          </h2>

          <p className='text-primary_font_color text-center'>
            Enter the 5 digits code that we have sent through your email
          </p>
          <form
            className='mt-8 mb-2 w-full max-w-screen-lg '
            onSubmit={handleSubmit}
          >
            <div className='flex items-center gap-6 justify-between'>
              {verificationCode.map((digit, index) => (
                <input
                  key={index}
                  type='text'
                  id={`inputField${index}`}
                  className={`bg-[#fff] border-2 p-2 w-[45px] h-[45px] border-black text-center ${
                    message === 'Invalid Verification Code!'
                      ? 'border-red-500'
                      : message === 'Successful'
                      ? 'border-green-500'
                      : 'border-black'
                  }`}
                  value={digit}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                />
              ))}
            </div>
            {message && (
              <p
                className={`text-center mt-4 ${
                  message === 'Successful' ? 'text-green-500' : 'text-red-500'
                }`}
              >
                {message}
              </p>
            )}
            <Button
              className='mt-6 bg-primary rounded-full'
              fullWidth
              type='submit'
            >
              <h6 className='normal-case'>Continue</h6>
            </Button>
            <div className='flex items-center justify-center gap-2 mt-6'>
              <p className='text-[14px] mt-0.5'>
                Haven't received the code?
                <span className='text-[#8645FF] ml-1 cursor-pointer underline'>
                  Resend
                </span>
              </p>
            </div>
          </form>
        </Card>
      </div>
    </div>
  </div>
);
};

export default OtpInput;
