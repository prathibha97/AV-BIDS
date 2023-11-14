import { Button } from "@material-tailwind/react";
import { MdDeleteOutline } from "react-icons/md";

import { useState } from "react";

// Renamed the function to start with an uppercase letter
function DeleteMember() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [open_1, setOpen_1] = useState(false);

  const handleOpen_1 = () => setOpen_1(!open_1);
  return (
    <div>
      <div className="flex items-center justify-center mb-4 mx-6 ">
        <div>
          <div className="flex items-center justify-center mb-8">
            <h2 className="text-[22px] font-semibold  text-black text-center">
              Remove Member
            </h2>
          </div>

          <div className="flex items-center justify-center mb-5">
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
              Are you sure to delete Alex Account? <br></br>All Changes will be
              lost
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-center gap-8 mb-6">
        <Button
          variant="filled"
          color="indigo"
          size="sm"
          className="rounded-md w-24 py-3 mt-4  bg-[#D0D0D0] font-poppins rounded-full"
        >
          <span className="text-white  normal-case text-center">Cancel</span>
        </Button>

        <Button
          variant="filled"
          color="indigo"
          size="sm"
          className="rounded-md w-24 py-3 mt-4 px-8 bg-primary font-poppins normal-case rounded-full "
        >
          <span className="text-white normal-case ">Yes</span>
        </Button>
      </div>
    </div>
  );
}

export default DeleteMember;
