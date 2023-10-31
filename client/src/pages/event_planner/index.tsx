import React from "react";
import { Button } from "@material-tailwind/react";
import EVENTPLANNER_1 from "../../assets/event planner/Add User-rafiki 1.png";
import EVENTPLANNER_2 from "../../assets/event planner/create your account.png";
import EVENTPLANNER_3 from "../../assets/event planner/post an event.png";
import EVENTPLANNER_4 from "../../assets/event planner/choose the best proposal.png";
import Done_Icon from "../../assets/AV Providers/done-icon.png";

function index() {
  return (
    // <div>event_planner</div>
    <div className="container mx-auto">
      <section className="my-8 md:my-16 grid md:grid-cols-2 content-center bg-secondary">
        <div className="md:px-8 lg:px-16 flex flex-col justify-center items-center md:items-start text-center md:text-left  p-8 pt-12  md:pt-8">
          <h2 className="text-primary">Why post your events on AV Bids?</h2>
          <p className="text-[#353535] my-4">
            We are a unique listing site that is specific to the events
            industry. We created a platform that connects av providers to event
            managers to not only get a fairer quote, but to network and develop
            new business relationships.
          </p>

          <div className="flex flex-col gap-3 mb-6">
            <div className="flex gap-3">
              <img
                src={Done_Icon}
                alt="aad"
                className="w-[26px] object-contain"
              />
              <p className="text-[#353535]">
                Always free for event managers to post events
              </p>
            </div>

            <div className="flex  gap-3">
              <img
                src={Done_Icon}
                alt="aad"
                className="w-[26px] object-contain"
              />
              <p className="text-[#353535]">
                Add up to two members for your organization for free
              </p>
            </div>

            <div className="flex  gap-3">
              <img
                src={Done_Icon}
                alt="aad"
                className="w-[26px] object-contain"
              />
              <p className="text-[#353535]">
                Chat with and check portfolios of av companies you want to work
                with
              </p>
            </div>
          </div>

          <Button
            variant="filled"
            color="indigo"
            size="sm"
            className="rounded-md w-36 py-4 mt-4 px-8 bg-primary font-poppins"
          >
            <span className="text-white">Get Started</span>
          </Button>
        </div>
        <img
          src={EVENTPLANNER_1}
          alt="aad"
          className="w-full object-scale-down"
        />
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
            <div className="grid md:grid-cols-3 gap-8 px-8">
              <div className=" bg-[#F3F1FB]">
                <div className="">
                  <div className="flex justify-center align-items">
                    <img
                      src={EVENTPLANNER_2}
                      alt="aad"
                      className="w-full object-scale-down"
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

              <div className="bg-[#F3F1FB]">
                <div className="flex justify-center align-items">
                  <img
                    src={EVENTPLANNER_3}
                    alt="aad"
                    className="w-full object-scale-down"
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

              <div className="bg-[#F3F1FB]">
                <div className="flex justify-center align-items">
                  <img
                    src={EVENTPLANNER_4}
                    alt="aad"
                    className="w-full object-scale-down"
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

      <section className=" my-8">
        <div className="">
          <h2 className="text-primary text-center mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-white mt-4">
            Browse the events listing page, and submit your proposal. No more
            cold calling or emailing for new clients.
          </p>
        </div>
      </section>
    </div>
  );
}

export default index;
