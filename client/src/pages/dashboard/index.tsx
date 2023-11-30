import { AlertProps } from '@material-tailwind/react';
import { useState } from 'react';
import { useGetCurrentUser } from '../../app/hooks/useUser';
import AlertBox from '../../components/alert-box';
import EditProfile from './components/edit-profile';
import MemberTable from './components/member-table';
import ResetPassword from './components/reset-password';
import UploadInsurance from './components/upload-insurance';

function Index() {
  const user = useGetCurrentUser();
  const [message, setMessage] = useState<string | null>(null);
  const [color, setColor] = useState<AlertProps['color']>('green');
  const [open, setOpen] = useState(false);

  return (
    <div className='container mx-auto'>
      <AlertBox
        color={color}
        variant='ghost'
        text={message!}
        open={open}
        setOpen={setOpen}
      />
      <div className='z-1'>
        <EditProfile
          user={user}
          setMessage={setMessage}
          setOpen={setOpen}
          setColor={setColor}
        />
      </div>

      <div>
        <MemberTable user={user} />
      </div>

      {user?.userType === 'PROVIDER' && <UploadInsurance />}
      <ResetPassword />
    </div>
  );
}

export default Index;
