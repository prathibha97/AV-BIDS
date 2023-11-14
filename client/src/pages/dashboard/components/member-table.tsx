import {
  Button,
  Card,
  Typography,
  Dialog,
  Input,
} from "@material-tailwind/react";

import { MdDeleteOutline } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

import { useEffect, useState } from "react";

import PLUS_ICON from "../../../assets/11_dashboard/plus.png";
import { Member } from "../../../types";
import api from "../../../utils/api";

const TABLE_HEAD = ["Name", "Role", "Email", ""];

const TABLE_ROWS = [
  {
    name: "Dixie Normus",
    Role: "Manager",
    email: "dixie@anitameetings.com",
  },
  {
    name: "Jane Smith",
    Role: "Developer",
    email: "dixie@anitameetings.com",
  },
  {
    name: "Jane Smith",
    Role: "Executive",
    email: "dixie@anitameetings.com",
  },
  {
    name: "Jane Smith",
    Role: "Developer",
    email: "dixie@anitameetings.com",
  },
  {
    name: "Jane Smith",
    Role: "Manager",
    email: "dixie@anitameetings.com",
  },
];

const MemberTable = () => {
  const [members, setMembers] = useState<Member[]>([]);

  useEffect(() => {
    const fetchMembers = async () => {
      const { data } = await api.get("/members");
      return setMembers(data);
    };
    fetchMembers();
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [open_1, setOpen_1] = useState(false);

  const handleOpen_1 = () => setOpen_1(!open_1);

  return (
    <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[20px] font-semibold">Members</h2>
        {/* <Button
          variant="outlined"
          size="sm"
          className="hidden lg:inline-block rounded-btn "
        >
          <div className="flex items-center gap-2">
            <img src={PLUS_ICON} alt="aad" className="object-contain" />
            <span className="text-black normal-case">Add New Member</span>
          </div>
        </Button> */}

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

        {/* -----------------------------------------This is for the "Add New Member" button"------------------------------------------------------ */}
        <Dialog open={open} handler={handleOpen}>
          <div className="flex justify-end p-3">
            <MdOutlineCancel
              size={32}
              className="text-black cursor-pointer"
              onClick={handleOpen}
            />
          </div>
          <div className="flex items-center justify-center py-6">
            <div>
              <h2 className="text-[20px] font-semibold mb-5 text-black text-center">
                Add Member
              </h2>
              <p className="text-black mb-1">Name</p>
              <div className="w-72 mb-4">
                <Input
                  label="UDixie Normus"
                  crossOrigin=""
                  variant="outlined"
                  className="bg-[#F3F1FC] border-1 border-[#E4E4E4] shadow-none"
                />
              </div>

              <p className="text-black mb-1">Role</p>
              <div className="w-72 mb-4">
                <Input
                  label="Event Planner"
                  crossOrigin=""
                  className="bg-[#F3F1FC] border-1 border-[#E4E4E4]"
                />
              </div>
              <p className="text-black mb-1">Email</p>
              <div className="w-72 mb-4">
                <Input
                  label="dixie@anitameetings.com"
                  crossOrigin=""
                  className="bg-[#F3F1FC] border-1 border-[#E4E4E4]"
                />
              </div>

              <div className="flex items-center justify-end">
                <Button
                  variant="filled"
                  color="indigo"
                  size="sm"
                  className="rounded-md w-32 py-3 mt-2  bg-primary font-poppins"
                >
                  <span className="text-white rounded-lg normal-case ">
                    Add Member
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Dialog>

        {/* ----------------------------------------------------This is for Edit and delete member------------------------------------------------------- */}
        <Dialog open={open_1} handler={handleOpen_1}>
          <div className="flex justify-end p-3">
            <MdOutlineCancel
              size={32}
              className="text-black cursor-pointer"
              onClick={handleOpen_1}
            />
          </div>

          <div className="flex items-center justify-center mb-4 ">
            <div>
              <div className="flex items-center justify-center mb-5">
                <h2 className="text-[22px] font-semibold  text-black text-center">
                  Remove Member
                </h2>
              </div>

              <div className="flex items-center justify-center mb-3">
                <div className="flex items-center justify-center rounded-full w-16 h-16 bg-[#DE5753]">
                  <MdDeleteOutline size={32} className="text-white " />
                </div>
              </div>

              <div>
                <h2 className="text-[20px] font-semibold mb-5 text-black text-center">
                  Are you sure to Remove Member?
                </h2>
              </div>

              <div>
                <p className="text-center">
                  Are you sure to delete Alex Account? All Changes will be lost
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center text-center gap-8 mb-6">
            <Button
              variant="filled"
              color="indigo"
              size="sm"
              className="rounded-md w-24 py-3 mt-4  bg-primary font-poppins"
            >
              <span className="text-white rounded-lg normal-case text-center">
                Cancel
              </span>
            </Button>

            <Button
              variant="filled"
              color="indigo"
              size="sm"
              className="rounded-md w-24 py-3 mt-4 px-8 bg-primary font-poppins"
            >
              <span className="text-white rounded-lg normal-case ">Yes</span>
            </Button>
          </div>
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
              {members.map(({ name, role, email }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {role}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {email}
                      </Typography>
                    </td>
                    <td className={classes}>
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
                            onClick={handleOpen_1}
                          />
                          <MdDeleteOutline
                            size={24}
                            className="text-[#A2A1A7]"
                            onClick={handleOpen_1}
                          />
                        </div>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </section>
  );
};

export default MemberTable;
