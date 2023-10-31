import React from "react";
import CONTACT_US from "../../assets/7_contact_us/Call center-pana 1.png";
import CONTACT_US_01 from "../../assets/7_contact_us/Email.png";
import CONTACT_US_02 from "../../assets/7_contact_us/Phone.png";
import CONTACT_US_03 from "../../assets/7_contact_us/location.png";

import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Select,
  Option,
  Textarea,
} from "@material-tailwind/react";

import { MdOutlineSpeakerNotes } from "react-icons/md";

function index() {
  return (
    <div className="container mx-auto">
      <section className="py-8 md:py-16 grid md:grid-cols-2 content-center">
        <div className="px-0 md:px-8 lg:px-16 flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <Button
            variant="filled"
            color="green"
            size="sm"
            className="rounded-full w-28 py-2 px-4 bg-[#B5F9C4] font-poppins mb-3"
          >
            <span className="text-[#178751]">Contact Us</span>
          </Button>
          <h2 className="text-primary mb-3">Get in touch today</h2>
          <p>
            Let us know how we can help or answer any questions. We would love
            to hear feedback about the site as well so we can make the user
            experience better.
          </p>

          <div className="mt-6">
            <div className="flex items-center gap-16 mb-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full w-12 h-12 bg-[#F3F1FB]">
                  <img
                    src={CONTACT_US_01}
                    alt="aad"
                    className="object-scale-down"
                  />
                </div>

                <p>info@avbids.com</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full w-12 h-12 bg-[#F3F1FB]">
                  <img
                    src={CONTACT_US_02}
                    alt="aad"
                    className=" object-scale-down"
                  />
                </div>
                <p>(623) 420-6666</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center rounded-full w-12 h-12 bg-[#F3F1FB]">
                <img
                  src={CONTACT_US_03}
                  alt="aad"
                  className=" object-scale-down"
                />
              </div>
              <p>Phoenix, Arizona</p>
            </div>
          </div>
          <img
            src={CONTACT_US}
            alt="aad"
            className="w-[547px] object-scale-down"
          />
        </div>

        <div className="flex justify-center items-center">
          <div>
            <Card color="transparent" shadow={false}>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 bg-[#F3F1FB] p-6  rounded-xl">
                <div className="mb flex flex-col gap-2 ">
                  <Typography variant="h6" color="blue-gray" className="">
                    Name
                  </Typography>
                  <Input
                    placeholder="Name"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white rounded-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    crossOrigin=""
                  />
                  <Typography variant="h6" color="blue-gray" className="mt-3">
                    Email
                  </Typography>
                  <Input
                    placeholder="example@email.com"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white rounded-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    crossOrigin=""
                  />
                  <Typography variant="h6" color="blue-gray" className="mt-3">
                    Phone
                  </Typography>
                  <Input
                    type="tel"
                    placeholder="(123) 456-789"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white rounded-full"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    crossOrigin=""
                  />
                </div>

                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mt-5 mb-2"
                >
                  Subject
                </Typography>
                <div className="border-none">
                  <Select
                    label="Feedback"
                    className="bg-white rounded-full border-none"
                  >
                    <Option>Feedback</Option>
                    <Option>Services</Option>
                    <Option>Help & Support</Option>
                    <Option>Other</Option>
                  </Select>
                </div>

                <Typography
                  variant="h6"
                  color="blue-gray"
                  className="mt-5 mb-2"
                >
                  Message
                </Typography>
                <div className="">
                  <Textarea
                    placeholder="Please type your message"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 bg-white rounded-xl"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <Button className="mt-6 bg-primary rounded-full" fullWidth>
                  Submit
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
