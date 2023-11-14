import React from "react";

import {
  Button,
  Input,
  Card,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";

import AVATAR from "../../assets/11_dashboard/avatar.png";

import PLUS_ICON from "../../assets/11_dashboard/plus.png";

import DELETE from "../../assets/15_dashboard/delete.png";

import EDIT from "../../assets/15_dashboard/edit.png";
import VISA from "../../assets/17_billing/Visa.png";
import MASTER from "../../assets/17_billing/Mastercard.png";
import DISCOVER from "../../assets/17_billing/Discover.png";

import { MdDeleteOutline } from "react-icons/md";

// ------------------------------------Table Contents--------------------------------------------------
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
// ------------------------------------Table Contents--------------------------------------------------

function index() {
  return (
    <div className="container mx-auto">
      <h2 className="text-[20px] font-semibold mb-4">Billing & Membership</h2>
      <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6">
        <div>
          <div className="grid grid-cols-2  gap-8">
            <div className="w-72">
              <h2 className="text-[18px] font-semibold text-left">
                Billing Details
              </h2>
            </div>
            <div></div>

            <div className="2">
              <p className="text-[16px] mb-2">Street Address</p>
              <div>
                <Input
                  label="Street Address"
                  crossOrigin=""
                  className=" bg-[#f0edfc]"
                />
              </div>
            </div>

            <div className="2">
              <p className="text-[16px] mb-2">Street Address</p>
              <div>
                <Input
                  label="Street Address"
                  crossOrigin=""
                  className=" bg-[#f0edfc]"
                />
              </div>
            </div>

            <div className="2">
              <p className="text-[16px] mb-2">Unit Number</p>
              <div>
                <Input
                  label="Unit Number"
                  crossOrigin=""
                  className=" bg-[#f0edfc]"
                />
              </div>
            </div>

            <div className="2">
              <p className="text-[16px] mb-2">City</p>
              <div>
                <Input label="City" crossOrigin="" className=" bg-[#f0edfc]" />
              </div>
            </div>

            <div className="2">
              <p className="text-[16px] mb-2">Postal Code</p>
              <div>
                <Input
                  label="Unit Number"
                  crossOrigin=""
                  className=" bg-[#f0edfc]"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <Button
              variant="filled"
              color="indigo"
              size="sm"
              className="rounded-md w-30 py-3 mt-4 px-6 bg-primary font-poppins rounded-full"
            >
              <span className="text-white">Save Billing</span>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6">
        <div className="flex items-center justify-between">
          <div className="w-72">
            <h2 className="text-[18px] font-semibold text-left">
              Card on File
            </h2>
          </div>

          <Button
            variant="outlined"
            size="sm"
            className="hidden lg:inline-block rounded-btn "
          >
            <div className="flex items-center gap-2 px-2">
              <img
                src={PLUS_ICON}
                alt="aad"
                className="object-contain w-[20px]"
              />
              <span className="text-black normal-case text-center">
                Add Card
              </span>
            </div>
          </Button>
        </div>

        <div className="grid grid-cols-5 gap-4">
          <div>
            <div className="flex items-center gap-6">
              <img src={VISA} alt="aad" className="object-contain w-[49px]" />
              <p className="font-semibold">Visa (**** 0000)</p>
            </div>
          </div>
          <div>
            <p className="text-[15px]">Expiration Date 00/00</p>
          </div>
          <div>
            <p className="text-[15px]">Debit Card</p>
          </div>
          <div>
            <p className="text-[15px] text-[#888888]">DEFAULT</p>
          </div>
          <div>
            <MdDeleteOutline size={24} className="text-[#DE5753]" />
          </div>

          <div>
            <div className="flex items-center gap-6">
              <img src={MASTER} alt="aad" className="object-contain w-[49px]" />
              <p className="font-semibold">MasterCard (**** 0000)</p>
            </div>
          </div>
          <div>
            <p className="text-[15px]">Expiration Date 00/00</p>
          </div>
          <div>
            <p className="text-[15px]">Debit Card</p>
          </div>
          <div>
            <p className="text-[15px] text-[#8645FF] underline">Make Default</p>
          </div>
          <div>
            <MdDeleteOutline size={24} className="text-[#DE5753]" />
          </div>

          <div>
            <div className="flex items-center gap-6">
              <img
                src={DISCOVER}
                alt="aad"
                className="object-contain w-[49px]"
              />
              <p className="font-semibold">Discover (**** 0000)</p>
            </div>
          </div>
          <div>
            <p className="text-[15px]">Expiration Date 00/00</p>
          </div>
          <div>
            <p className="text-[15px]">Debit Card</p>
          </div>
          <div>
            <p className="text-[15px] text-[#8645FF] underline">Make Default</p>
          </div>
          <div>
            <MdDeleteOutline size={24} className="text-[#DE5753]" />
          </div>
        </div>
      </section>

      <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6"></section>

      <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6"></section>
    </div>
  );
}

export default index;
