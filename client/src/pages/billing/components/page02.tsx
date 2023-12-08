import BillingDetails from "./billing-details";
import CardsOnFile from "./cards-on-file";
import CurrentPlan from "./current-plan";

import React from "react";
import { Button, Input, Checkbox } from "@material-tailwind/react";

interface Page02Props {
  onNext: () => void;
  onPrev: () => void;
}

const Page02: React.FC<Page02Props> = ({ onNext, onPrev }) => {
  return (
    <div>
      <div className="bg-[#f7f6fd] px-20 py-10">
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

                  <div className="w-[500px]">
                    <div className="flex items-center justify-between ">
                      <p className="font-semibold">Add New Card</p>
                      <div className="flex items-center justify-between gap-2 cursor-pointer">
                        <p className="mt-0.5 ">Choose From Saved Card</p>
                      </div>
                    </div>
                    <p className="mb-1 text-[#353535]">Name on Card</p>
                    <div className="w-full rounded-full bg-input_background mb-4">
                      <Input
                        type="email"
                        placeholder="Name on Card"
                        className="!border !border-gray-300 !bg-input_background rounded-full text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{
                          className: "hidden",
                        }}
                        containerProps={{ className: "min-w-[100px]" }}
                        crossOrigin=""
                      />
                    </div>

                    <p className="mb-1 text-[#353535]">Card Number</p>
                    <div className="w-full rounded-full bg-input_background mb-4">
                      <Input
                        type="email"
                        placeholder="Card Number"
                        className="!border !border-gray-300 !bg-input_background rounded-full text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                        labelProps={{
                          className: "hidden",
                        }}
                        containerProps={{ className: "min-w-[100px]" }}
                        crossOrigin=""
                      />
                    </div>

                    <div className="flex items-center justify-center justify-between mb-6">
                      <div>
                        <p className="text-[#353535] mb-1">MM/YY</p>
                        <div className=" rounded-full bg-input_background !w-[14rem]">
                          <Input
                            type="email"
                            placeholder="MM/YY"
                            className="!border !border-gray-300 w-full !w-[14rem] !bg-input_background rounded-full text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                            labelProps={{
                              className: "hidden",
                            }}
                            containerProps={{ className: "min-w-[100px]" }}
                            crossOrigin=""
                          />
                        </div>
                      </div>

                      <div>
                        <p className="text-[#353535] mb-1">CVV</p>
                        <div className=" rounded-full bg-input_background !w-[14rem]">
                          <Input
                            type="email"
                            placeholder="MM/YY"
                            className="!border !border-gray-300 !w-[14rem] !bg-input_background rounded-full text-gray-900 shadow-lg shadow-gray-900/5 ring-4 ring-transparent placeholder:text-gray-500 focus:!border-gray-900 focus:!border-t-gray-900 focus:ring-gray-900/10"
                            labelProps={{
                              className: "hidden",
                            }}
                            containerProps={{ className: "min-w-[100px]" }}
                            crossOrigin=""
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-end">
                      <Button className="w-36 rounded-full bg-primary normal-case">
                        Save Card
                      </Button>
                    </div>
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
      </div>
      <div>
        <Button onClick={onPrev} className="bg-primary normal-case">
          Previous
        </Button>

        <Button onClick={onNext} className="bg-primary normal-case">
          Next
        </Button>
      </div>
    </div>
  );
};

export default Page02;
