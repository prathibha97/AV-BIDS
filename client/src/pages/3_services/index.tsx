import React from "react";
import { Button } from "@material-tailwind/react";
import SERVICES_Main_image from "../../assets/3_services/Wall post-amico 1.png";
import ICON_01 from "../../assets/3_services/icon1.png";
import ICON_02 from "../../assets/3_services/icon2.png";
import ICON_03 from "../../assets/3_services/icon3.png";
import ICON_04 from "../../assets/3_services/icon4.png";
import { Link } from "react-router-dom";

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
              <p className="text-[16px] mb-6 text-primary_font_color">
                Yes, AV Bids offers paid services to help event planners plan
                and prepare their events for success.
              </p>
              <Link to="/contact-us">
                <Button
                  variant="filled"
                  size="sm"
                  className="lg:inline-block bg-primary rounded-btn  py-3 sm:py-4 px-6"
                >
                  <p className="text-white normal-case text-center font-semibold text-[10px] sm:text-[14px]">
                    Contact Us Today
                  </p>
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mt-8 sm:mt-4">
            <img
              src={SERVICES_Main_image}
              alt="Services section main img"
              className="w-[300px] sm:w-[400px] object-scale-down"
            />
          </div>
        </div>
      </section>
      <section className="my-8">
        <h2 className="text-primary mb-6 text-center">Our Services</h2>
        <div className="flex justify-center items-center mx-4">
          <div className="grid sm:grid-cols-2 gap-4 content-center w-[1000px]">
            <div className=" bg-[#F3F1FB] rounded-lg p-8 flex flex-col items-center sm:items-start">
              <div className="flex items-center justify-center rounded-full w-12 h-12 bg-[#67EFA5] mb-2">
                <img
                  src={ICON_01}
                  alt="Presentation Design"
                  className="w-[30px]"
                />
              </div>
              <h6 className="mb-4 text-[#000] font-extrabold">
                Presentation Design
              </h6>
              <p className="text-center sm:text-left text-primary_font_color">
                We know event planners have a big enough work load, and sifting
                through dozens if not hundreds of presentations is definitely
                not an option for them. Let AV Bids handle that, we’ll optimize,
                format, and even design any presentation with a fast turnaround
                time.
              </p>
            </div>

            <div className=" bg-[#F3F1FB] rounded-lg p-8 flex flex-col items-center sm:items-start ">
              <div className="flex items-center justify-center rounded-full w-12 h-12 bg-[#B3A0FF] mb-2">
                <img src={ICON_02} alt="Event Layout" className="w-[30px]" />
              </div>

              <h6 className=" mb-4 text-[#000] font-extrabold">Event Layout</h6>
              <p className="text-center sm:text-left text-primary_font_color">
                Using CADD design software we can create a layout of your event
                space. This includes table layout, audio visual equipment
                layout, and stage layout.
              </p>
            </div>

            <div className=" bg-[#F3F1FB] rounded-lg p-8 flex flex-col items-center sm:items-start">
              <div className="flex items-center justify-center rounded-full w-12 h-12 bg-[#FFACED] mb-2">
                <img src={ICON_03} alt="3d Rendering" className="w-[30px]" />
              </div>

              <h6 className=" mb-4 text-[#000] font-extrabold">3d Rendering</h6>
              <p className="text-center sm:text-left text-primary_font_color">
                Need help designing a stage design? We use 3d design software to
                create a stunning and one of kind set design.
              </p>
            </div>

            <div className=" bg-[#F3F1FB] rounded-lg p-8 flex flex-col items-center sm:items-start">
              <div className="flex items-center justify-center rounded-full w-12 h-12 bg-[#FFEAA0] mb-2">
                <img src={ICON_04} alt="Consultation" className="w-[30px]" />
              </div>

              <h6 className=" mb-4 text-[#000] font-extrabold">Consultation</h6>
              <p className="text-center sm:text-left text-primary_font_color">
                Not sure where to start with audio visual requirements for your
                event? We offer free consultations to help you determine what
                equipment you should ask for on your event listing.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-6 mb-8 sm:mt-10 sm:mb-12">
          <Link to="/contact-us">
            <Button
              variant="filled"
              size="sm"
              className="lg:inline-block bg-[#8645FF] rounded-btn py-3 px-6"
            >
              <p className="text-white normal-case text-center font-semibold text-[10px] sm:text-[14px]">
                Contact Us Today
              </p>
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default index;
