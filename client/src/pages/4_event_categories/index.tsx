import React from "react";
import { Button } from "@material-tailwind/react";
import EVENT_01 from "../../assets/4_event_categories/event_categories_01.png";
import EVENT_02 from "../../assets/4_event_categories/event_categories_02.png";

import { MdEast } from "react-icons/md";

function index() {
  return (
    <div className="mx-auto">
      <section className="mb-12">
        <div className="text-primary bg-[#F3F1FB] text-center py-16">
          <h2>Event Categories</h2>
        </div>
      </section>

      <section className=" px-4 mb-24">
        <h2 className="text-primary text-2xl mb-8 text-center">
          Corporate Event Categories
        </h2>
        <div className="flex justify-center items-center">
          <div className="grid md:grid-cols-2 gap-4 content-center ">
            <div className="mx-auto flex justify-center items-center">
              <div>
                <div className="flex gap-8 mb-6  justify-center items-center  ">
                  <div>
                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Awards</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Banquet</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Board Meeting</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Breakout Session</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Conference</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Congress</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Consumer Trade </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Holiday Party</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>
                        Industry and Consumer <br></br>Trade Show
                      </p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Industry Trade Show</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>International Meeting</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Networking</p>
                    </div>
                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Plenary General </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 ">
                    <MdEast className="text-purple_two mb-0.5" />
                    <p>Product Launch</p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <MdEast className="text-purple_two mb-0.5" />
                    <p>Reception</p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <MdEast className="text-purple_two mb-0.5" />
                    <p>Retreat</p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <MdEast className="text-purple_two mb-0.5" />
                    <p>Seminar</p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <MdEast className="text-purple_two mb-0.5" />
                    <p>Workshop</p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <MdEast className="text-purple_two mb-0.5" />
                    <p>Press </p>
                  </div>

                  <Button
                    variant="filled"
                    size="sm"
                    className="lg:inline-block bg-primary rounded-btn py-3 px-6 mt-6"
                  >
                    <span className=" text-white">View Corporate Events</span>
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <img src={EVENT_01} alt="aad" className="w-full object-contain" />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <div className="flex justify-center items-center">
          <div className="grid md:grid-cols-2 gap-32 content-center">
            <div>
              <div>
                <img
                  src={EVENT_02}
                  alt="aad"
                  className="w-full object-contain"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div>
                <h2 className="text-primary text-2xl mb-8 text-center">
                  Non-Corporate Event Categories
                </h2>
                <div className="flex gap-8 ">
                  <div>
                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Charity Event </p>
                    </div>

                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Exhibition </p>
                    </div>

                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Fashion Show </p>
                    </div>

                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Festival</p>
                    </div>

                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Function </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Fundraiser </p>
                    </div>

                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Meetups </p>
                    </div>

                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Sports/Competition </p>
                    </div>

                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Wedding </p>
                    </div>

                    <div className="flex items-center gap-2 ">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Worship Service</p>
                    </div>
                  </div>
                </div>

                <div>
                  <Button
                    variant="filled"
                    size="sm"
                    className="lg:inline-block bg-primary rounded-btn py-3 px-6 mt-6"
                  >
                    <span className="text-white">View Corporate Events</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default index;
