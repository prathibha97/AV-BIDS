import EditProfile from './components/edit-profile';
import MemberTable from './components/member-table';
import ResetPassword from './components/reset-password';

function Index() {
  return (
    <div className='container mx-auto'>
      <EditProfile />
      <MemberTable />
      <ResetPassword />
    </div>
  );
}

export default Index;
