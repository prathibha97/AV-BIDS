import { useState } from "react";
import { Button, Input, Checkbox } from "@material-tailwind/react";

import DISCOVER from "../../../assets/17_billing/Discover.png";
import MASTER from "../../../assets/17_billing/Mastercard.png";
import VISA from "../../assets/17_billing/Visa.png";

import { MdAddCircleOutline } from "react-icons/md";

function index() {
  return (
    <div className="w-full h-screen overflow-auto bg-[#f7f6fd] px-20 py-10">
      <div className="grid grid-cols-3 gap-x-16">
        <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6 col-span-2">
          <h2 className="text-[20px] font-semibold mb-4">
            Monthly subscription for Standard Plan
          </h2>

          <p className="mb-4">Billing information</p>

          <div className="flex items-center gap-2 mb-4">
            <img src={VISA} alt="Visa" />
            <p>**** **** **** 0000</p>
          </div>

          <p>85302</p>
          <p>United States</p>
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
  );
}

export default index;
