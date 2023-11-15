import { Button, Input } from "@material-tailwind/react";

import { useState } from "react";

// Renamed the function to start with an uppercase letter
function EditMembers() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const [open_1, setOpen_1] = useState(false);

  const handleOpen_1 = () => setOpen_1(!open_1);
  return (
    <div>
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-[22px] font-semibold  text-black text-center">
          Edit Member
        </h2>
      </div>
      <div className="flex items-center justify-center mb-6">
        <div className="grid grid-cols-2 justify-items-center gap-8">
          <div>
            <div className="flex flex-col items-center gap-4 mx-6">
              {/* <img
                src={`https://av-bids-bucket.s3.ap-south-1.amazonaws.com/${user?.imageUrl}`}
                alt="aad"
                className="object-scale-down w-[67px]"
              /> */}
              <Button
                variant="filled"
                color="indigo"
                size="sm"
                className="rounded-md w-full py-2 mt-4 px-2 bg-primary font-poppins"
              >
                <span className="text-white normal-case font-normal">
                  Upload New Photo
                </span>
              </Button>
              <Input type="file" accept="image/*" crossOrigin="" />
            </div>
          </div>
          <div></div>
          <div>
            <div>
              <p className="text-[16px] mb-2">First Name</p>
              <div className="w-72 bg-input_background rounded-full">
                <Input
                  className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                  crossOrigin=""
                  placeholder="John Smith"
                />
              </div>
            </div>
          </div>

          <div>
            <p className="text-[16px] mb-2">Last Name</p>
            <div className="w-72 bg-input_background rounded-full">
              <Input
                className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                labelProps={{
                  className: "hidden",
                }}
                containerProps={{ className: "min-w-[100px]" }}
                placeholder="John Smith"
                crossOrigin=""
              />
            </div>
          </div>

          <div>
            <div>
              <p className="text-[16px] mb-2">Email Address</p>
              <div className="w-72 bg-input_background rounded-full">
                <Input
                  className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                  placeholder="info@anitameetings.com"
                  crossOrigin=""
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="text-[16px] mb-2">Company</p>
              <div className="w-72 bg-input_background rounded-full">
                <Input
                  className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                  placeholder="Anita Meetings LLC"
                  crossOrigin=""
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="text-[16px] mb-2">Phone Number</p>
              <div className="w-72 bg-input_background rounded-full">
                <Input
                  className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                  placeholder="+880 01723801729"
                  crossOrigin=""
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <p className="text-[16px] mb-2">Website</p>
              <div className="w-72 bg-input_background rounded-full">
                <Input
                  className="rounded-full !border !border-gray-300 text-gray-900 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10 rounded-full"
                  labelProps={{
                    className: "hidden",
                  }}
                  containerProps={{ className: "min-w-[100px]" }}
                  placeholder="www.anitameetings.com"
                  crossOrigin=""
                />
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      <div className="flex items-center justify-center text-center gap-16 mb-6 ">
        <Button
          variant="filled"
          size="sm"
          className="w-28 py-3 mt-4  bg-[#D0D0D0] font-poppins rounded-full"
          onClick={handleOpen_1}
        >
          <span className="text-white  normal-case text-center">Cancel</span>
        </Button>

        <Button
          variant="filled"
          size="sm"
          className="w-28 py-3 mt-4 px-8 bg-primary font-poppins normal-case rounded-full "
        >
          <span className="text-white normal-case">Update</span>
        </Button>
      </div>
    </div>
  );
}

export default EditMembers;
