import { useAppSelector } from "../../app/hooks";
import { RootState } from "../../app/store";
import EditProfile from "./components/edit-profile";
import MemberTable from "./components/member-table";
import ResetPassword from "./components/reset-password";

function Index() {
  const user = useAppSelector((state: RootState) => state.user.user);

  return (
    <div className='container mx-auto'>
      <EditProfile user={user} />
      <MemberTable user={user} />
      <ResetPassword />
    </div>
  );
}

export default Index;
