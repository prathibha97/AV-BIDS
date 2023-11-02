import EVENTDETAILS_01 from "../../assets/13_event_details_page/exclamation-circle.png";
import EVENTDETAILS_02 from "../../assets/13_event_details_page/carbon_time.png";
import EVENTDETAILS_03 from "../../assets/13_event_details_page/Rectangle 3759.png";
import EVENTDETAILS_04 from "../../assets/13_event_details_page/location.png";
import EVENTDETAILS_05 from "../../assets/13_event_details_page/Rectangle 3760.png";

import SPAM_ICON from "../../assets/13_event_details_page/spam.png";
import DOWN_ARROW from "../../assets/13_event_details_page/down-arrow.png";
import STAR_ICON from "../../assets/13_event_details_page/Star.png";
import STAR_OUTLINE from "../../assets/13_event_details_page/star-outline.png";

import { Textarea, Button } from "@material-tailwind/react";

export function index() {
  return (
    <div className="mx-auto mb-8">
      {/* ------------------------------------------------------------------------------------- GRID STARTS HERE ------------------------------------------------------------------------------ */}
      <div className="grid lg:grid-cols-3 gap-4 content-center">
        {/* ---------------------------- GRID 01 STARTS ------------------------------------- */}

        <div className="col-span-2 flex justify-center items-center px-8">
          <section>
            <div>
              <div className="bg-[#FFE8E8] p-4 rounded-lg mb-4">
                <div className="flex items-center gap-2">
                  <img
                    src={EVENTDETAILS_01}
                    alt="aad"
                    className="object-scale-down w-[34px]"
                  />
                  <p className="text-[20px] text-[#C31717]">
                    This event has expired
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-primary text-[40px] mb-4">
                  General Session & 4 Breakouts
                </h2>
              </div>
              <div className="flex mb-4 gap-8">
                <div className="flex items-center gap-2">
                  <img
                    src={EVENTDETAILS_02}
                    alt="aad"
                    className="object-scale-down w-[32px]"
                  />
                  <p className="text-[18px]">Posted on 6/28/2023</p>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src={EVENTDETAILS_02}
                    alt="aad"
                    className="object-scale-down w-[32px]"
                  />
                  <p className="text-[18px]">Updated on 6/28/2023</p>
                </div>
              </div>
              <div className="mb-6">
                <img
                  src={EVENTDETAILS_03}
                  alt="aad"
                  className="object-scale-down"
                />
              </div>
              <div className="bg-[#F3F1FB] p-6 mb-16 rounded-lg">
                <h2 className="text-[22px] mb-4">Description</h2>
                <div>
                  <p className="text-[20px]">
                    This event will empower and equip Christian Educators and
                    Administrators, home school families, and anyone who wants
                    to transform education. Want to start a school? Form a micro
                    school? Home school your children? Create Kingdom culture in
                    your classroom? This Conference Is For You if:<br></br> You
                    want to see kids saved from the current system of
                    indoctrination
                    <br></br> You want a plan of action to move forward<br></br>{" "}
                    You want to use your church property to host a school or
                    co-op ​<br></br>- You want to network with like-minded
                    reformers
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-[22px] mb-4">
                  Submit a question about the event
                </h2>
                <p className="text-[20px] mb-2">Description</p>
                <div className="rounded-lg">
                  <div className="mb-6">
                    <Textarea label="Description" className="bg-[#f1eefc]" />
                  </div>

                  <div className="flex justify-end mb-16">
                    <Button
                      variant="filled"
                      color="indigo"
                      size="sm"
                      className="rounded-full w-30 py-3 px-6 mt-4  bg-primary font-poppins"
                    >
                      <span className="text-white">Submit</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-[22px] mb-4">
                  Other events by this client
                </h2>

                <div>
                  <div className="flex items-center bg-[#fff] gap-8 rounded-lg mb-6">
                    <div>
                      <img
                        src={EVENTDETAILS_03}
                        alt="aad"
                        className="object-scale-down w-[181px] h-[121px]"
                      />
                    </div>

                    <div>
                      <h2 className="text-[20px]">
                        General Session & 4 Breakouts
                      </h2>

                      <div className="flex gap-36">
                        <p className="text-[18px]">
                          Event Date: 10/10/2023 - 10/15/2023
                        </p>
                        <p className="text-[18px]">$70,000 - $150,000</p>
                      </div>

                      <div className="flex items-center gap-16 mt-4">
                        <div className="flex gap-2 items-center">
                          <img
                            src={EVENTDETAILS_04}
                            alt="aad"
                            className="object-scale-down w-[20px]"
                          />
                          <p className="text-[16px] text-[#9381FF]">
                            Phoenix, Arizona
                          </p>
                        </div>

                        <p className="text-[16px]">
                          Corporate, General Meeting
                        </p>
                        <Button
                          variant="filled"
                          color="green"
                          size="sm"
                          className="rounded-full w-30 py-2 px-3 bg-[#B5F9C4] font-poppins"
                        >
                          <h2 className="text-[#178751] text-[12px]">
                            In-Person
                          </h2>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center  bg-[#fff]  gap-8 rounded-lg">
                    <div>
                      <img
                        src={EVENTDETAILS_05}
                        alt="aad"
                        className="object-scale-down w-[181px]"
                      />
                    </div>

                    <div>
                      <h2 className="text-[20px]">Virtual Sales Training</h2>

                      <div className="flex gap-36">
                        <p className="text-[18px]">
                          Event Date: 10/10/2023 - 10/15/2023
                        </p>
                        <p className="text-[18px]">$70,000 - $150,000</p>
                      </div>

                      <div className="flex items-center gap-16 mt-4">
                        <div className="flex gap-2 items-center">
                          <img
                            src={EVENTDETAILS_04}
                            alt="aad"
                            className="object-scale-down w-[20px]"
                          />
                          <p className="text-[16px] text-[#9381FF]">
                            Phoenix, Arizona
                          </p>
                        </div>

                        <p className="text-[16px]">
                          Corporate, General Meeting
                        </p>
                        <Button
                          variant="filled"
                          color="green"
                          size="sm"
                          className="rounded-full w-30 py-2 px-3 bg-[#B5F9C4] font-poppins"
                        >
                          <h2 className="text-[#178751] text-[12px]">
                            Virtual
                          </h2>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ---------------------------- GRID  ENDS ------------------------------------- */}

        {/* ---------------------------- GRID 02 STARTS ------------------------------------- */}
        <div className="flex justify-center items-center">
          {" "}
          <section>
            <div className="mb-4">
              <Button
                variant="filled"
                color="indigo"
                size="sm"
                className="rounded-full w-full py-4 mt-4 px-8 bg-primary font-poppins"
              >
                <span className="text-white">Submit Proposal</span>
              </Button>

              <Button
                variant="outlined"
                size="sm"
                className="rounded-full w-full py-4 mt-4 px-8 font-poppins"
              >
                <span className=" text-black">Save Event</span>
              </Button>
            </div>

            <div className="flex items-center gap-3 mb-6 ">
              <img
                src={SPAM_ICON}
                alt="aad"
                className="object-scale-down w-[24px]"
              />
              <p className="text-[18px] underline">Flag as spam</p>
            </div>
            <div className="grid grid-cols-2 gap-4 bg-[#F3F1FB] p-6 rounded-lg">
              <div>
                <div>
                  <h2 className="text-[18px]">Event Type</h2>
                  <p className="text-[18px]">In-Person</p>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="text-[18px]">Budget</h2>
                  <p className="text-[18px]">$70,000 - $150,000</p>
                </div>
              </div>

              <div>
                <div>
                  <h2 className="text-[18px]">Event Category</h2>
                  <p className="text-[18px]">Corporate</p>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="text-[18px]">Location</h2>
                  <p className="text-[18px]">Phoenix, AZ</p>
                </div>
              </div>

              <div>
                <div>
                  <h2 className="text-[18px]">Sub Category</h2>
                  <p className="text-[18px]">General Meeting</p>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="text-[18px]">Proposals Due</h2>
                  <p className="text-[18px]">August 24, 2023</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F3F1FB] mt-8 p-6 rounded-lg">
              <h2 className="text-[22px]">Attachments</h2>

              <div className="flex items-center gap-20 bg-[#fff] rounded-lg p-6 mb-4">
                <p className="text-[18px]">AV Requirements.pdf</p>
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-purple_two">
                  <img
                    src={DOWN_ARROW}
                    alt="aad"
                    className="object-scale-down w-[15px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-20 bg-[#fff] rounded-lg p-6 mb-4">
                <p className="text-[18px]">AV room layout.Doc</p>
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-purple_two">
                  <img
                    src={DOWN_ARROW}
                    alt="aad"
                    className="object-scale-down w-[15px]"
                  />
                </div>
              </div>

              <div className="flex items-center gap-20 bg-[#fff] rounded-lg p-6">
                <p className="text-[18px]">Event Content.Xls</p>
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-purple_two">
                  <img
                    src={DOWN_ARROW}
                    alt="aad"
                    className="object-scale-down w-[15px]"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#F3F1FB] mt-8 p-6 rounded-lg">
              <h2 className="text-[22px] mb-6">About the event planner</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <img
                    src={STAR_ICON}
                    alt="aad"
                    className="object-scale-down w-[26px]"
                  />
                  <img
                    src={STAR_ICON}
                    alt="aad"
                    className="object-scale-down w-[26px]"
                  />
                  <img
                    src={STAR_ICON}
                    alt="aad"
                    className="object-scale-down w-[26px]"
                  />
                  <img
                    src={STAR_ICON}
                    alt="aad"
                    className="object-scale-down w-[26px]"
                  />
                  <img
                    src={STAR_OUTLINE}
                    alt="aad"
                    className="object-scale-down w-[26px]"
                  />
                </div>
                <div>
                  <p className="text-18px">4.59 of 99 reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-12 mt-4">
                <div>
                  <h2 className="text-[18px]">United States</h2>
                  <p className="text-[18px]">United States</p>
                </div>

                <div>
                  <h2 className="text-[18px]">85 Events Posted</h2>
                  <p className="text-[18px]">2 currently listed</p>
                </div>
              </div>
              <p className="text-[18px] mt-6">Member since 03/19/2023 </p>
            </div>
          </section>
        </div>

        {/* ---------------------------- GRID 02 ENDS ------------------------------------- */}
      </div>
      {/* ------------------------------------------------------------------------------------- GRID ENDS HERE ------------------------------------------------------------------------------ */}
    </div>
  );
}

export default index;
