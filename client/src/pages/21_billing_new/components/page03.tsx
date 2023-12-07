import React from "react";
import { Button, Checkbox, Select, Option } from "@material-tailwind/react";
import { MdAddCircleOutline } from "react-icons/md";

interface Page02Props {
  onNext: () => void;
  onPrev: () => void;
}

const Page02: React.FC<Page02Props> = ({ onNext, onPrev }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Page 3</h1>
      <div className="grid grid-cols-3 gap-x-16">
        <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6 col-span-2">
          <h2 className="text-[20px] font-semibold mb-4">Billing Period</h2>

          <div>
            <div>
              <div>
                <div className="grid grid-cols-2 gap-4 w-[550px] mb-8">
                  <div className="flex items-center gap-11">
                    <div className="flex items-center">
                      <Checkbox
                        defaultChecked
                        ripple={false}
                        className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                        color="purple"
                        crossOrigin=""
                      />
                      <p>Yearly </p>
                    </div>

                    <div>
                      <p>--------------</p>
                    </div>
                  </div>

                  <div>
                    <p className="mt-2">$349/month</p>
                  </div>

                  <div className="flex items-center gap-8">
                    <div className="flex items-center">
                      <Checkbox
                        defaultChecked
                        ripple={false}
                        className="h-5 w-5 rounded-full border-gray-900/20 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0"
                        color="purple"
                        crossOrigin=""
                      />
                      <p>Monthly</p>
                    </div>

                    <div>
                      <p>--------------</p>
                    </div>
                  </div>

                  <div>
                    <p className="mt-2">$399/month</p>
                  </div>
                </div>

                <div className="flex items-center gap-36 mb-4">
                  <p className="font-semibold">Choose Card</p>
                  <div className="flex items-center gap-2 cursor-pointer">
                    <MdAddCircleOutline className="text-[18px]" />
                    <p className="mt-0.5">Add Card</p>
                  </div>
                </div>

                <div className="w-[350px] bg-input_background rounded-lg">
                  <Select label="XXX-25223">
                    <Option>option 1</Option>
                    <Option>option 2</Option>
                    <Option>option 3</Option>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div>
          <div>
            <p className="text-[28px] font-semibold mb-4">Order Summary</p>
            <div className="grid grid-cols-2 gap-y-4 w-[400px]">
              <div>
                <p className="text-[#353535]">$399 per month</p>
              </div>

              <div>
                <p className="text-[#353535] text-right ">$399.00</p>
              </div>
              <div>
                <p className="text-[#000000] font-bold border-b-2 border-[#D4D2DF]">
                  Total
                </p>
              </div>

              <div className="">
                <p className="text-[#000000] font-bold text-right border-b-2 border-[#D4D2DF]">
                  $399.00
                </p>
              </div>

              <Button className="bg-purple_two rounded-full mb-4 col-span-2 w-full">
                <p className="font-semibold normal-case text-[15px]">
                  Review Order
                </p>
              </Button>

              <div className="col-span-2">
                <p className="text-[#353535]">
                  You’ll be charged $399.00 monthly until you cancel the
                  subscription.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button onClick={onPrev} className="bg-primary normal-case">
        Previous
      </Button>

      <Button onClick={onNext} className="bg-primary normal-case">
        Next
      </Button>
    </div>
  );
};

export default Page02;
