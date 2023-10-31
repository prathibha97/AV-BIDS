import React from "react";
import { Button } from "@material-tailwind/react";
import SERVICES_01 from "../../assets/3_services/Wall post-amico 1.png";
import ICON_01 from "../../assets/3_services/icon1.png";
import ICON_02 from "../../assets/3_services/icon2.png";
import ICON_03 from "../../assets/3_services/icon3.png";
import ICON_04 from "../../assets/3_services/icon4.png";

function index() {
  return (
    <div className="container mx-auto">
      <section>
        <div className="grid md:grid-cols-2 content-center py-8 px-4">
          <div className="flex flex-col justify-center items-center px-8 text-center sm:text-left">
            <div className="mb-6">
              <h2 className="text-primary">
                Does AV Bids offer audio visual services?
              </h2>
            </div>

            <div>
              <p className="text-[20px] mb-6">
                Yes, AV Bids offers paid services to help event planners plan
                and prepare their events for success.
              </p>

              <Button
                variant="filled"
                size="sm"
                className="lg:inline-block bg-primary rounded-btn py-3 px-6"
              >
                <span className=" text-white">Contact Us Today</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-4">
            <img
              src={SERVICES_01}
              alt="aad"
              className="w-[500px] object-scale-down"
            />
          </div>
        </div>
      </section>
      <section className="my-8">
        <h2 className="text-primary mb-6 text-center">Our Services</h2>
        <div className="flex justify-center items-center mx-4">
          <div className="grid sm:grid-cols-2 gap-4 content-center w-[1000px]">
            <div className=" bg-[#F3F1FB] rounded-lg p-8 flex flex-col items-center sm:items-start">
              <img src={ICON_01} alt="aad" className="mb-4 w-[45px]" />
              <h6 className=" mb-4">Presentation Design</h6>
              <p className="text-center sm:text-left">
                We know event planners have a big enough work load, and sifting
                through dozens if not hundreds of presentations is definitely
                not an option for them. Let AV Bids handle that, we’ll optimize,
                format, and even design any presentation with a fast turnaround
                time.
              </p>
            </div>

            <div className=" bg-[#F3F1FB] rounded-lg p-8 flex flex-col items-center sm:items-start ">
              <img
                src={ICON_02}
                alt="aad"
                className="object-scale-down  mb-4"
              />
              <h6 className=" mb-4">Event Layout</h6>
              <p className="text-center sm:text-left">
                Using CADD design software we can create a layout of your event
                space. This includes table layout, audio visual equipment
                layout, and stage layout.
              </p>
            </div>

            <div className=" bg-[#F3F1FB] rounded-lg p-8 flex flex-col items-center sm:items-start">
              <img src={ICON_03} alt="aad" className="object-scale-down" />
              <h6 className=" mb-4">3d Rendering</h6>
              <p className="text-center sm:text-left">
                Need help designing a stage design? We use 3d design software to
                create a stunning and one of kind set design.
              </p>
            </div>

            <div className=" bg-[#F3F1FB] rounded-lg p-8 flex flex-col items-center sm:items-start">
              <img src={ICON_04} alt="aad" className="object-scale-down mb-4" />
              <h6 className=" mb-4">Consultation</h6>
              <p className="text-center sm:text-left">
                Not sure where to start with audio visual requirements for your
                event? We offer free consultations to help you determine what
                equipment you should ask for on your event listing.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-12 mb-16">
          <Button
            variant="filled"
            size="sm"
            className="lg:inline-block bg-[#8645FF] rounded-btn py-3 px-6"
          >
            <span className=" text-white">Contact Us Today</span>
          </Button>
        </div>
      </section>
    </div>
  );
}

export default index;
