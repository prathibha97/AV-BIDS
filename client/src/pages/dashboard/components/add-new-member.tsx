import { Button, Input } from "@material-tailwind/react";

import { useState } from "react";

// Renamed the function to start with an uppercase letter
function AddNewMember() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [open_1, setOpen_1] = useState(false);

  const handleOpen_1 = () => setOpen_1(!open_1);
  return (
    <div>
      <div className="flex items-center justify-center mb-6">
        <div>
          <h2 className="text-[20px] font-semibold mb-5 text-black text-center">
            Add Member
          </h2>
          <p className="text-black mb-1">Name</p>
          <div className="w-72 mb-4">
            <Input
              placeholder="Dixie Normus"
              className="!border !border-gray-300 bg-input_background2 text-gray-900    ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
              crossOrigin=""
            />
          </div>

          <p className="text-black mb-1">
            Role <span className="text-[#DE5753]">*</span>
          </p>
          <div className="w-72 mb-4">
            <Input
              placeholder="Event Planner"
              className="!border !border-gray-300 bg-input_background2 text-gray-900    ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
              crossOrigin=""
            />
          </div>

          <p className="text-black mb-1">
            Email <span className="text-[#DE5753]">*</span>
          </p>
          <div className="w-72 mb-4">
            <Input
              placeholder="dixie@anitameetings.com"
              className="!border !border-gray-300 bg-input_background2 text-gray-900    ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
              labelProps={{
                className: "hidden",
              }}
              containerProps={{ className: "min-w-[100px]" }}
              crossOrigin=""
            />
          </div>

          <div className="flex items-center justify-end">
            <Button
              variant="filled"
              color="indigo"
              size="sm"
              className="rounded-full w-32 py-3 mt-2  bg-primary font-poppins"
            >
              <span className="text-white rounded-lg normal-case ">
                Add Member
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddNewMember;
