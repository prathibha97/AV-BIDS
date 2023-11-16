import EVENTDETAILS_01 from "../../assets//10_event_details_page/exclamation-circle.png";
import EVENTDETAILS_02 from "../../assets//10_event_details_page/carbon_time.png";
import EVENTDETAILS_03 from "../../assets//10_event_details_page/Rectangle 3759.png";
import EVENTDETAILS_04 from "../../assets//10_event_details_page/location.png";
import EVENTDETAILS_05 from "../../assets//10_event_details_page/Rectangle 3760.png";
import SPAM_ICON from "../../assets//10_event_details_page/spam.png";
import DOWN_ARROW from "../../assets//10_event_details_page/down-arrow.png";
import STAR_ICON from "../../assets//10_event_details_page/Star.png";
import STAR_OUTLINE from "../../assets//10_event_details_page/star-outline.png";
import { Textarea, Button, Input } from "@material-tailwind/react";

export function index() {
  return (
    <div className="mx-auto mb-8">
      {/* ------------------------------------------------------------------------------------- GRID STARTS HERE ------------------------------------------------------------------------------ */}
      <div className="grid sm:grid-cols-3 gap-4 content-center">
        {/* ---------------------------- GRID 01 STARTS ------------------------------------- */}

        <div className="col-span-2 flex justify-center items-center px-8">
          <section>
            <div>
              <div className="bg-[#FFE8E8] p-4 rounded-lg mb-4">
                <div className="flex items-center gap-2">
                  <img
                    src={EVENTDETAILS_01}
                    alt="aad"
                    className="object-scale-down w-[25px]"
                  />
                  <p className="text-[16px] text-[#C31717]">
                    This event has expired
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-primary text-[30px] mb-4 text-center sm:text-left">
                  General Session & 4 Breakouts
                </h2>
              </div>
              <div className="flex justify-center mb-4 gap-8">
                <div className="flex items-center gap-2">
                  <img
                    src={EVENTDETAILS_02}
                    alt="aad"
                    className="object-scale-down w-[22px]"
                  />
                  <p className="text-[16px]">Posted on 6/28/2023</p>
                </div>

                <div className="flex items-center gap-2">
                  <img
                    src={EVENTDETAILS_02}
                    alt="aad"
                    className="object-scale-down w-[22px]"
                  />
                  <p className="text-[16px]">Updated on 6/28/2023</p>
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
                <h2 className="text-[20px] mb-4">Description</h2>
                <div>
                  <p className="text-[16px] leading-7">
                    This event will empower and equip Christian Educators and
                    Administrators, home school families, and anyone who wants
                    to transform education. Want to start a school? Form a micro
                    school? Home school your children? Create Kingdom culture in
                    your classroom? This Conference Is For You if:
                  </p>

                  <div className="text-[17px]">
                    <li>
                      You want to see kids saved from the current system of
                      indoctrination
                    </li>
                    <li>You want a plan of action to move forward</li>
                    <li>
                      You want to use your church property to host a school or
                      co-op
                    </li>
                    <li>You want to network with like-minded reformers</li>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-[20px] mb-4">
                  Submit a question about the event
                </h2>
                <p className="text-[16px] mb-2">Description</p>
                <div>
                  <div className="w-full">
                    <textarea
                      placeholder="Description"
                      className="p-4 bg-input_background border border-[#E4E4E4] w-full rounded-lg h-[145px]"
                    />
                  </div>

                  <div className="flex justify-end mb-16">
                    <Button
                      variant="filled"
                      color="indigo"
                      size="sm"
                      className="rounded-full w-30 py-3 px-6 mt-4  bg-primary font-poppins"
                    >
                      <span className="text-white normal-case">Submit</span>
                    </Button>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-[20px] mb-4">
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
                        <p className="text-[16px]">
                          Event Date: 10/10/2023 - 10/15/2023
                        </p>
                        <p className="text-[16px]">$70,000 - $150,000</p>
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
                        <div className="bg-[#E4FFEA] rounded-full w-28 mb-4">
                          <p className="text-[#178751] text-[14px] text-center font-semibold px-4 py-1">
                            In Person
                          </p>
                        </div>
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
                        <p className="text-[16px]">
                          Event Date: 10/10/2023 - 10/15/2023
                        </p>
                        <p className="text-[16px]">$70,000 - $150,000</p>
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
                        <div className="bg-[#E4FFEA] rounded-full w-28 mb-4">
                          <p className="text-[#178751] text-[14px] text-center font-semibold px-4 py-1">
                            Virtual
                          </p>
                        </div>
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
          <section>
            <div className="">
              <Button
                variant="filled"
                color="indigo"
                size="sm"
                className="rounded-full w-full py-4 mt-4 px-8 bg-primary font-poppins"
              >
                <span className="text-white normal-case text-[18px] text-center">
                  Submit Proposal
                </span>
              </Button>

              <Button
                variant="outlined"
                size="sm"
                className="rounded-full w-full py-4 mt-4 px-8 font-poppins"
              >
                <span className="text-black normal-case text-center text-[18px]">
                  Save Event
                </span>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-3 mb-6 my-8">
              <img
                src={SPAM_ICON}
                alt="aad"
                className="object-scale-down w-[24px]"
              />
              <p className="text-[16px] underline text-center">Flag as spam</p>
            </div>
            <div className="grid grid-cols-2 gap-4 bg-[#F3F1FB] p-6 rounded-lg">
              <div>
                <div>
                  <h2 className="text-[16px]">Event Type</h2>
                  <p className="text-[16px]">In-Person</p>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="text-[16px]">Budget</h2>
                  <p className="text-[16px]">$70,000 - $150,000</p>
                </div>
              </div>

              <div>
                <div>
                  <h2 className="text-[16px]">Event Category</h2>
                  <p className="text-[16px]">Corporate</p>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="text-[16px]">Location</h2>
                  <p className="text-[16px]">Phoenix, AZ</p>
                </div>
              </div>

              <div>
                <div>
                  <h2 className="text-[16px]">Sub Category</h2>
                  <p className="text-[16px]">General Meeting</p>
                </div>
              </div>
              <div>
                <div>
                  <h2 className="text-[16px]">Proposals Due</h2>
                  <p className="text-[16px]">August 24, 2023</p>
                </div>
              </div>
            </div>
            <div className="bg-[#F3F1FB] mt-8 p-6 rounded-lg">
              <h2 className="text-[20px] mb-4">Attachments</h2>

              <div className="flex items-center justify-between   bg-[#fff] rounded-lg p-6 mb-4">
                <p className="text-[16px]">AV Requirements.pdf</p>
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-purple_two">
                  <img
                    src={DOWN_ARROW}
                    alt="aad"
                    className="object-scale-down w-[15px]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between  bg-[#fff] rounded-lg p-6 mb-4">
                <p className="text-[16px]">AV room layout.Doc</p>
                <div className="flex items-center justify-center rounded-full w-10 h-10 bg-purple_two">
                  <img
                    src={DOWN_ARROW}
                    alt="aad"
                    className="object-scale-down w-[15px]"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between bg-[#fff] rounded-lg p-6">
                <p className="text-[16px]">Event Content.Xls</p>

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
              <h2 className="text-[20px] mb-6">About the event planner</h2>
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
                  <p className="text-16px">4.59 of 99 reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-12 mt-4">
                <div>
                  <h2 className="text-[16px]">United States</h2>
                  <p className="text-[16px]">United States</p>
                </div>

                <div>
                  <h2 className="text-[16px]">85 Events Posted</h2>
                  <p className="text-[16px]">2 currently listed</p>
                </div>
              </div>
              <p className="text-[16px] mt-6">Member since 03/19/2023 </p>
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
