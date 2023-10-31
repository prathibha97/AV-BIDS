import React from "react";
import { Button } from "@material-tailwind/react";
import AVPROVIDER_1 from "../../assets/AV Providers/Credit card-rafiki 1.png";
import AVPROVIDER_2 from "../../assets/AV Providers/Login-rafiki 1.png";
import AVPROVIDER_3 from "../../assets/AV Providers/Search-rafiki (1) 1.png";
import AVPROVIDER_4 from "../../assets/AV Providers/Files sent-rafiki 1.png";
import Done_Icon from "../../assets/AV Providers/done-icon.png";

function index() {
  return (
    // <div>index</div>
    <div className="mx-auto">
      <section className="bg-primary mb-8 content-center">
        <div className="grid lg:grid-cols-2 gap-4 content-center">
          <div className="flex flex-col justify-center items-center px-8">
            <div className="justify-center items-center text-center lg:text-left">
              <div className="mb-4">
                <Button
                  variant="filled"
                  color="green"
                  size="sm"
                  className="rounded-full w-40 py-3 px-4 bg-[#B5F9C4] font-poppins"
                >
                  <span className="text-black">For AV Providers</span>
                </Button>
              </div>
              <h2 className="font-poppins font-extrabold text-[50px] text-[#fff] mb-8 ">
                Why pay for AV Bids?
              </h2>
              <div className="font-poppins font-normal text-[22px] text-[#fff] mb-8">
                We offer a unique listing site that is specific to the events
                industry. We wanted to create a platform that connects av
                providers to event planners to help companies get new clients
                without having to cold call.
              </div>
              <div className=" mb-8">
                <div className="flex gap-3">
                  <div className="mt-1">
                    <img
                      src={Done_Icon}
                      alt="aad"
                      className="w-[23px] object-contain"
                    />
                  </div>

                  <p className="mb-8 text-[22px] text-[#fff]">
                    Browse event listings that actively need proposals and
                    simply submit yours.
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1">
                    <img
                      src={Done_Icon}
                      alt="aad"
                      className="w-[23px] object-contain"
                    />
                  </div>
                  <p className="mb-8 text-[22px] text-[#fff]">
                    Add up to three members for your organization
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="mt-1">
                    <img
                      src={Done_Icon}
                      alt="aad"
                      className="w-[23px] object-contain"
                    />
                  </div>
                  <p className="mb-0 text-[22px] text-[#fff]">
                    Chat with event planners and send invoices all from our site
                  </p>
                </div>
              </div>
              <button className="bg-[#8645FF] text-white rounded-full py-2 px-4 text-center font-bold text-lg hover:bg-[#8645FF] focus:outline-none focus:ring-2 focus:ring-[#8645FF]">
                Get Started
              </button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-16 sm:mt-8 md:mt-0">
            <img
              src={AVPROVIDER_1}
              alt="aad"
              className="w-full object-scale-down"
            />
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center mb-4">
          <Button
            variant="filled"
            color="green"
            size="sm"
            className="rounded-full w-40 py-3 px-4 bg-[#B5F9C4] font-poppins"
          >
            <span className="text-black">Our Process</span>
          </Button>
        </div>

        <div>
          <h2 className="text-primary text-center mb-4">How to get started?</h2>
          <div className="font-poppins font-normal text-[20px] text-[#353535] text-center mb-8">
            We make it simple and easy to start getting more proposals sent to
            you without having to reach out independently yourself
          </div>

          <div>
            <div className="grid lg:grid-cols-3 gap-8 px-8">
              <div>
                <div className="">
                  <div className="flex justify-center align-items">
                    <img
                      src={AVPROVIDER_2}
                      alt="aad"
                      className="lg:w-full object-scale-down"
                    />
                  </div>
                  <div className="text-center font-poppins font-bold text-[25px] text-[#000000] mb-4">
                    create your account
                  </div>
                  <div className="text-center font-poppins font-normal text-[20px] text-[#000000] p-8 pt-0">
                    Add as much detail about you or your organization as you
                    want. You can even add additional members who will have
                    access to your account.
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-center align-items">
                  <img
                    src={AVPROVIDER_3}
                    alt="aad"
                    className="lg:w-full object-scale-down"
                  />
                </div>
                <div className="text-center font-poppins font-bold text-[25px] text-[#000000] mb-4">
                  Post an event
                </div>
                <div className="text-center font-poppins font-normal text-[20px] text-[#000000] p-8 pt-0">
                  Put in as much info about your event as you wish. We offer a
                  variety of input boxes about your event. If we are missing
                  anything or you already your event info on a document, you can
                  upload your document.
                </div>
              </div>

              <div>
                <div className="flex justify-center align-items">
                  <img
                    src={AVPROVIDER_4}
                    alt="aad"
                    className="lg:w-full object-scale-down"
                  />
                </div>
                <div className="text-center font-poppins font-bold text-[25px] text-[#000000] mb-4">
                  Choose the best proposal
                </div>
                <div className="text-center font-poppins font-normal text-[20px] text-[#000000] p-8 pt-0">
                  After you post you event, you can expect multiple proposals to
                  be submit to you. From here you can determine if you want the
                  lowest bid or best value.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto">
        <section className="py-6 ">
          <div className="bg-[#181059] py-8 px-4 rounded-lg">
            <h2 className="text-center text-[#fff] mb-4">
              Our results in numbers
            </h2>
            <p className="text-center text-sm text-[#fff] mb-8">
              This visual aid represents the time and resources saved using AV
              Bids
            </p>

            <div className="flex justify-center items-center mb-8">
              <div>
                <div className="grid grid-rows-2 text-center lg:flex lg:gap-[114px] mb-6">
                  <div className="">
                    <h2 className="text-[30px] text-[#fff]  ">
                      9<span className="text-purple_two">+</span>
                    </h2>
                  </div>
                  <div>
                    <p className="text-[20px] text-[#fff]">
                      Hours spent per week on client acquisition
                    </p>
                  </div>
                </div>

                <div className="grid grid-rows-2 text-center lg:flex lg:gap-8 mb-6">
                  <div>
                    <h2 className="text-[30px] text-[#fff]  ">
                      $1,000<span className="text-purple_two">+</span>
                    </h2>
                  </div>
                  <div>
                    <p className="text-[20px] text-[#fff]">
                      Amount spent per week on client acquisition
                    </p>
                  </div>
                </div>

                <div className="grid grid-rows-2 text-center lg:flex lg:gap-[83px] ">
                  <div>
                    <h2 className="text-[30px] text-[#fff]">
                      35<span className="text-purple_two">%</span>
                    </h2>
                  </div>
                  <div>
                    <p className="text-[20px] text-[#fff]">
                      Company growth potential each year using AV Bids
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="flex justify-center items-center ">
              <div className="grid grid-cols-2 gap-4 ">
                <div className="">
                  <h2 className="text-[30px] text-[#fff]  ">
                    9<span className="text-purple_two">+</span>
                  </h2>
                </div>

                <div>
                  <p className="text-[20px] text-[#fff]">
                    Hours spent per week on client acquisition
                  </p>
                </div>

                <div>
                  <h2 className="text-[30px] text-[#fff]  ">
                    $1,000<span className="text-purple_two">+</span>
                  </h2>
                </div>
                <div>
                  <p className="text-[20px] text-[#fff]">
                    Amount spent per week on client acquisition
                  </p>
                </div>

                <div>
                  <h2 className="text-[30px] text-[#fff]">
                    35<span className="text-purple_two">%</span>
                  </h2>
                </div>
                <div>
                  <p className="text-[20px] text-[#fff]">
                    Company growth potential each year using AV Bids
                  </p>
                </div>
              </div>
            </div> */}
            <div className="flex justify-center items-center gap-6">
              <div>
                <Button
                  variant="outlined"
                  size="sm"
                  className="hidden lg:inline-block rounded-btn py-3 px-4 "
                >
                  <span className=" text-white">
                    Client Acquisitions averages
                  </span>
                </Button>
              </div>
              <div>
                <Button
                  variant="filled"
                  size="sm"
                  className="hidden lg:inline-block bg-[#8645FF] rounded-btn py-3 px-6"
                >
                  <span className=" text-white">Get Started</span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default index;
