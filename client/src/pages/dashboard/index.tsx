import { setAlert } from '../../app/features/alerts/alertSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useGetCurrentUser } from '../../app/hooks/useUser';
import { RootState } from '../../app/store';
import AlertBox from '../../components/alert-box';
import EditProfile from './components/edit-profile';
import MemberTable from './components/member-table';
import ResetPassword from './components/reset-password';
import UploadInsurance from './components/upload-insurance';

function Index() {
  const user = useGetCurrentUser();
  const dispatch = useAppDispatch();
  const { message, color, open } = useAppSelector(
    (state: RootState) => state.alert
  );

  return (
    <div className='container mx-auto'>
      <AlertBox
        color={color}
        variant='ghost'
        text={message!}
        open={open}
        setOpen={() =>
          dispatch(setAlert({ open: false, message: '', color: 'green' }))
        }
      />
      <div className='z-1'>
        <EditProfile user={user} />
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
