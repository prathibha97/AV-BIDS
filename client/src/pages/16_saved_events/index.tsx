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

import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

import EventListingCard from "./components/eventListingCard";

function index() {
  return (
    <div className="container mx-auto">
      <section className="bg-[#fff] px-8 py-8 rounded-xl drop-shadow mb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold mb-6">Saved Events</h2>
          <div className="w-48">
            <Select label="Select Version" className="!bg-[#F3F1FB]">
              <Option>Date Posted</Option>
              <Option>Expiring Soonest</Option>
            </Select>
          </div>
        </div>

        <div className="mt-8">
          <EventListingCard />
        </div>

        <div className="flex justify-end">
          <nav className="mt-8">
            <ul className="flex">
              <li>
                <a
                  className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                  href="#"
                  aria-label="Previous"
                >
                  <span className="material-icons text-sm">
                    <MdArrowBackIosNew />
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="mx-1 flex h-9 w-9 items-center justify-center rounded-full bg-primary p-0 text-sm text-white shadow-md transition duration-150 ease-in-out"
                  href="#"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                  href="#"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                  href="#"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  className="mx-1 flex h-9 w-9 items-center justify-center rounded-full border border-blue-gray-100 bg-transparent p-0 text-sm text-blue-gray-500 transition duration-150 ease-in-out hover:bg-light-300"
                  href="#"
                  aria-label="Next"
                >
                  <span className="material-icons text-sm">
                    <MdArrowForwardIos />
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default index;
