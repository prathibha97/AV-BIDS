import React from "react";
import { Button } from "@material-tailwind/react";
import ABOUTUS_01 from "../../assets/about us/AboutUs_01.png";

function index() {
  return (
    <div className="container mx-auto">
      <section className="mb-8">
        <h2 className="text-primary text-center mb-8">About Us</h2>
        <div className="grid sm:grid-cols-2 gap-4 content-center px-4 bg-[#F3F1FB] rounded-lg">
          <div className="flex justify-center items-center">
            <div>
              <img
                src={ABOUTUS_01}
                alt="aad"
                className="w-[500px] object-scale-down mb-4"
              />
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div>
              <h2 className="text-primary text-[40px] mb-6 text-center sm:text-left">
                AV Bids was created to address one industry problem:
                communication
              </h2>
              <p className="text-center sm:text-left">
                AV companies should not have to cold call and email for new
                clients, we set out to streamline new client lead-capture.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-8">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-[#F5FBF1] px-8 py-8 rounded-lg">
            <Button
              variant="filled"
              color="green"
              size="sm"
              className="rounded-full w-32 py-2 px-0 bg-[#B5F9C4] font-poppins mb-6"
            >
              <span className="text-black text-[#178751] ">Our Mission</span>
            </Button>
            <h2 className="text-[35px]">
              Our mission is simplify the communication process on both sides,
              while creating a fair and competitive formula for new business.{" "}
            </h2>
          </div>

          <div className="bg-[#FBF1F6] px-8 py-8 rounded-lg">
            <Button
              variant="filled"
              color="pink"
              size="sm"
              className="rounded-full w-32 py-2 px-0 bg-[#F6BFDB] font-poppins mb-6"
            >
              <span className="text-black text-[#B83FC2]">Our Vision</span>
            </Button>
            <h2 className="text-[35px]">
              Create a platform where meeting planners can easily find av
              providers and vice versa; to change the old ways of new client
              capture.
            </h2>
          </div>
        </div>
      </section>

      <section className="mb-8">
        {/* <div className="grid grid-cols-4 gap-8 rounded-lg px-16 py-8 bg-primary text-white mb-6">
          <div>
            {" "}
            <div>
              <h2>50</h2>
              <h6 className="font-normal">Meeting Planners</h6>
            </div>
          </div>

          <div>
            <div>
              <h2>200+</h2>
              <h6 className="font-normal">Event Listings</h6>
            </div>
          </div>
          <div>
            <div>
              <h2>300+</h2>
              <h6 className="font-normal">AV Companies</h6>
            </div>
          </div>
          <div>
            <div>
              <h2>200+</h2>
              <h6 className="font-normal">Proposals Sent</h6>
            </div>
          </div>
        </div> */}
        {/* <div className="sm:flex justify-between bg-primary text-white rounded-lg px-16 py-8"> */}
        <div className="flex justify-center items-center bg-primary text-white rounded-lg px-2 py-8 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-4 w-full ">
            <div>
              <div>
                <h2>50</h2>
                <h6 className="font-normal">Meeting Planners</h6>
              </div>
            </div>

            <div>
              <div>
                <h2>200+</h2>
                <h6 className="font-normal">Event Listings</h6>
              </div>
            </div>
            <div>
              <div>
                <h2>300+</h2>
                <h6 className="font-normal">AV Companies</h6>
              </div>
            </div>
            <div>
              {" "}
              <div>
                <h2>200+</h2>
                <h6 className="font-normal">Proposals Sent</h6>
              </div>
            </div>
          </div>

          {/* <div>
            <h2>50</h2>
            <h6 className="font-normal">Meeting Planners</h6>
          </div>
          <div>
            <h2>200+</h2>
            <h6 className="font-normal">Event Listings</h6>
          </div>

          <div>
            <h2>300+</h2>
            <h6 className="font-normal">AV Companies</h6>
          </div>
          <div>
            <h2>200+</h2>
            <h6 className="font-normal">Proposals Sent</h6>
          </div> */}
        </div>
      </section>

      <section className="bg-purple_two px-16 py-16 rounded-3xl mb-12">
        <Button
          variant="filled"
          color="green"
          size="sm"
          className="rounded-full w-60 py-2 px-0 bg-[#B5F9C4] font-poppins mb-4 "
        >
          <span className="text-black text-[#178751]">
            We Can’t Wait For You To Try It!
          </span>
        </Button>
        <h2 className="text-white">
          Join us as we transform the AV industry — one event at a time.
        </h2>
        <Button
          variant="filled"
          size="sm"
          className="lg:inline-block bg-primary rounded-btn py-3 px-6 mt-6"
        >
          <span className=" text-white">See Event Listings</span>
        </Button>
      </section>
    </div>
  );
}

export default index;
