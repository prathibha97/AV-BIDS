import { useGetCurrentUser } from "../../app/hooks/useUser";
import EditProfile from "./components/edit-profile";
import MemberTable from "./components/member-table";
import ResetPassword from "./components/reset-password";
import UploadInsurance from "./components/upload-insurance";

function Index() {
  const user = useGetCurrentUser();

  return (
    <div className="container mx-auto">
      <div className="z-1">
        <EditProfile user={user} />
      </div>

      <div>
        <MemberTable user={user} />
      </div>

      {user?.userType === "PROVIDER" && <UploadInsurance />}
      <ResetPassword />
    </div>
  );
}

export default Index;
