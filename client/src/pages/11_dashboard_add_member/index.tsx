import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Input,
} from "@material-tailwind/react";

export function index() {
  return (
    <div className="flex justify-center items-center h-screen">
      {" "}
      <Card className="mt-6 w-96 p-6 shadow-none">
        <div className="flex items-center justify-center">
          <div>
            <h2 className="text-[20px] font-semibold mb-5 text-black">
              Add Member
            </h2>

            <p className="text-black mb-2">Name</p>
            <div className="w-72 mb-4">
              <Input label="UDixie Normus" crossOrigin="" />
            </div>

            <p className="text-black mb-2">Role</p>
            <div className="w-72 mb-4">
              <Input label="Event Planner" crossOrigin="" />
            </div>

            <p className="text-black mb-2">Email</p>
            <div className="w-72 mb-4">
              <Input label="dixie@anitameetings.com" crossOrigin="" />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-end">
          <Button
            variant="filled"
            color="indigo"
            size="sm"
            className="rounded-md w-36 py-4 mt-4 px-8 bg-primary font-poppins"
          >
            <span className="text-white rounded-lg normal-case ">
              Add Member
            </span>
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default index;
