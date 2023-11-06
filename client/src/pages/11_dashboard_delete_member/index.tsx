import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";

import { MdDeleteOutline } from "react-icons/md";

export function index() {
  return (
    <Card className="mt-6 w-96 p-6">
      <div className="">
        <div>
          <div>
            <h2 className="text-[20px] font-semibold mb-5 text-black">
              Remove Member
            </h2>
          </div>

          <div className="flex items-center justify-center mb-3">
            <div className="flex items-center justify-center rounded-full w-16 h-16 bg-[#DE5753]">
              <MdDeleteOutline size={24} className="text-white" />
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

        <div className="flex items-center justify-between text-center">
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
      </div>

      <div className="flex items-center justify-end"></div>
    </Card>
  );
}

export default index;
