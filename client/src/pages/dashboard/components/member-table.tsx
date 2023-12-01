import { Button, Card, Dialog, Typography } from "@material-tailwind/react";

import { MdDeleteOutline, MdEdit, MdOutlineCancel } from "react-icons/md";

import { FC, useEffect, useState } from "react";

import PLUS_ICON from "../../../assets/11_dashboard/plus.png";
import { Member, User } from "../../../types";
import api from "../../../utils/api";

import { colors } from "@material-tailwind/react/types/generic";
import { setMember } from "../../../app/features/members/memberSlice";
import { updateUser } from "../../../app/features/user/userSlice";
import { useAppDispatch } from "../../../app/hooks";
import AddNewMember from "../components/add-new-member";
import DeleteMember from "../components/delete-member";
import EditMember from "../components/edit-members";

const TABLE_HEAD = ["Name", "Role", "Email", ""];

interface MemberTableProps {
  user: User | null;
  setMessage: React.Dispatch<React.SetStateAction<string | null>>;
  setAlertOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setColor: React.Dispatch<React.SetStateAction<colors | undefined>>;
}

const MemberTable: FC<MemberTableProps> = ({
  user,
  setColor,
  setMessage,
  setAlertOpen,
}) => {
  const dispatch = useAppDispatch();

  const [userData, setUserData] = useState<User | null>(null);
  const [open, setOpen] = useState(false);
  const [open_1, setOpen_1] = useState(false);
  const [open_2, setOpen_2] = useState(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await api.get(`/users/${user?._id}`);
        setUserData(() => data); // Use a function to set the state
        dispatch(updateUser(data));
      } catch (error) {
        console.error("Error fetching user Data:", error);
      }
    };

    fetchUserData();
  }, [open, open_1, open_2, user?._id, dispatch]);

  const handleOpen = () => setOpen(!open);
  const handleOpen_1 = () => setOpen_1(!open_1);
  const handleOpen_2 = () => setOpen_2(!open_2);

  const handleMemberAdded = () => {
    setOpen(!open);
  };

  const handleMemberDeleted = () => {
    setOpen_1(!open_1);
  };

  const handleMemberEdited = () => {
    setOpen_1(!open_2);
  };

  const selectMemberToDelete = (member: Member) => {
    setOpen_1(!open_1);
    dispatch(setMember(member));
  };

  const selectMemberToEdit = (member: Member) => {
    setOpen_2(!open_2);
    dispatch(setMember(member));
  };

  return (
    <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6 mx-2 min-w-[530px]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[20px] font-semibold">Members</h2>

        <>
          <Button
            onClick={handleOpen}
            variant="outlined"
            size="sm"
            className="hidden lg:inline-block rounded-btn "
          >
            <div className="flex items-center gap-2">
              <img src={PLUS_ICON} alt="aad" className="object-contain" />
              <span className="text-black normal-case font-semibold">
                Add New Member
              </span>
            </div>
          </Button>
        </>

        <Dialog open={open} handler={handleOpen} size="xs">
          <div className="flex justify-end p-3">
            <MdOutlineCancel
              size={32}
              className="text-black cursor-pointer"
              onClick={handleOpen}
            />
          </div>
          <AddNewMember
            onMemberAdded={handleMemberAdded}
            setColor={setColor}
            setMessage={setMessage}
            setAlertOpen={setAlertOpen}
          />
        </Dialog>

        <Dialog open={open_1} handler={handleOpen_1} size="xs">
          <div className="flex justify-end p-3">
            <MdOutlineCancel
              size={32}
              className="text-black cursor-pointer"
              onClick={handleOpen_1}
            />
          </div>
          <DeleteMember
            handleOpen={handleOpen_1}
            onDeleteMember={handleMemberDeleted}
            setColor={setColor}
            setMessage={setMessage}
            setAlertOpen={setAlertOpen}
          />
        </Dialog>

        <Dialog open={open_2} handler={handleOpen_2} size="xs">
          <div className="flex justify-end p-3">
            <MdOutlineCancel
              size={32}
              className="text-black cursor-pointer"
              onClick={handleOpen_2}
            />
          </div>
          <EditMember
            handleMemberEdited={handleMemberEdited}
            handleOpen={handleOpen_2}
            setColor={setColor}
            setMessage={setMessage}
            setAlertOpen={setAlertOpen}
          />
        </Dialog>
      </div>

      <div>
        <Card className="h-full w-full shadow-none rounded-xl ">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-[#e7daff] p-4"
                  >
                    <p className="font-medium leading-none text-black">
                      {head}
                    </p>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {user?.members?.length! > 0 ? (
                user?.members.map((member) => (
                  <tr key={member._id}>
                    <td className={"p-4 border-b border-blue-gray-50"}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {member.name}
                      </Typography>
                    </td>
                    <td className={"p-4 border-b border-blue-gray-50"}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {member.role}
                      </Typography>
                    </td>
                    <td className={"p-4 border-b border-blue-gray-50"}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {member.email}
                      </Typography>
                    </td>
                    <td className={"p-4 border-b border-blue-gray-50"}>
                      <Typography
                        as="a"
                        href="#"
                        variant="small"
                        color="blue-gray"
                        className="font-medium"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <MdEdit
                            size={24}
                            className="text-[#A2A1A7]"
                            onClick={() => selectMemberToEdit(member)}
                          />
                          <MdDeleteOutline
                            size={24}
                            className="text-[#A2A1A7]"
                            onClick={() => selectMemberToDelete(member)}
                          />
                        </div>
                      </Typography>
                    </td>
                  </tr>
                ))
              ) : (
                <p className="mt-6">Add a member to display</p>
              )}
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  );
};

export default MemberTable;
