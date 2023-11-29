import { useState } from "react";
import { Button, Card, CardBody, Input } from "@material-tailwind/react";

import DISCOVER from "../../../assets/17_billing/Discover.png";
import MASTER from "../../../assets/17_billing/Mastercard.png";
import VISA from "../../../assets/17_billing/Visa.png";

import { MdOutlineCancel } from "react-icons/md";

function index() {
  return (
    <div className="grid grid-cols-3 gap-x-16">
      <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6 col-span-2">
        <h2 className="text-[20px] font-semibold mb-4">Billing Period</h2>

        <div>
          <div>
            <div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p>Yearly </p>
                </div>

                <div>
                  <p>--------------</p>
                </div>
                <div>
                  <p>$349/month</p>
                </div>

                <div>
                  <p>Monthly </p>
                </div>

                <div>
                  <p>--------------</p>
                </div>
                <div>
                  <p>$399/month</p>
                </div>
              </div>

              <p>Choose Card</p>
              <p>Add Card</p>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div>
          <p>Order Summary</p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-[#353535]">$399 per month</p>
            </div>

            <div>
              <p className="text-[#353535]">$399.00</p>
            </div>
            <div>
              <p className="text-[#000000] font-bold">Total</p>
            </div>

            <div>
              <p className="text-[#000000] font-bold">$399.00</p>
            </div>

            <Button className="bg-purple_two rounded-full mb-6">
              <p className="font-semibold">Review Order</p>
            </Button>
          </div>

          <p className="text-[#353535]">
            You’ll be charged $399.00 monthly until you cancel the subscription.
          </p>
        </div>
      </div>
    </div>
  );
}

export default index;
