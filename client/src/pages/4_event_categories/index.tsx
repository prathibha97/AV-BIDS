import React from "react";
import { Button } from "@material-tailwind/react";
import eventCategories from "../../assets/4_event_categories/event_categories_01.png";
import eventCategories_02 from "../../assets/4_event_categories/event_categories_02.png";
import { MdArrowForward } from "react-icons/md";
import { MdEast } from "react-icons/md";
import { Link } from "react-router-dom";

function index() {
  return (
    <div className="mx-auto">
      <section className="mb-4 sm:mb-12">
        <div className="text-primary bg-[#F3F1FB] text-center py-16">
          <h2>Event Categories</h2>
        </div>
      </section>

      <section className=" px-4 mb-8 sm:mb-24">
        <div className="flex justify-center items-center">
          <div className="grid md:grid-cols-2 gap-4 content-center ">
            <div className="mx-auto flex justify-center items-center">
              <div>
                <div className="flex items-center block sm:hidden mb-4">
                  <img
                    src={eventCategories}
                    alt="Event categories page main img"
                    className="w-full object-contain"
                  />
                </div>
                <h2 className="text-primary text-2xl mb-8 text">
                  Corporate Event Categories
                </h2>
                <div className="sm:flex gap-8 sm:mb-6  items-center justify-center">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Awards</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Banquet</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Board Meeting</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Breakout Session</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Conference</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Congress</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Consumer Trade </p>
                    </div>
                  </div>
                  <div className="">
                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Holiday Party</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>
                        Industry and Consumer <br></br>Trade Show
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Industry Trade Show</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>International Meeting</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Networking</p>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Plenary General </p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <MdEast className="text-purple_two mb-0.5" />
                    <p>Product Launch</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MdEast className="text-purple_two mb-0.5" />
                    <p>Reception</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MdEast className="text-purple_two mb-0.5" />
                    <p>Retreat</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MdEast className="text-purple_two mb-0.5" />
                    <p>Seminar</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MdEast className="text-purple_two mb-0.5" />
                    <p>Workshop</p>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <MdEast className="text-purple_two mb-0.5" />
                    <p>Press </p>
                  </div>

                  <div className="flex items-center justify-center sm:justify-start">
                    <Link to="/events">
                      <Button
                        variant="filled"
                        size="sm"
                        className="lg:inline-block bg-primary rounded-btn py-3 px-6 mt-6"
                      >
                        <div className="flex items-center">
                          <p className="text-white normal-case font-semibold text-[12px] sm:text-[14px]">
                            View Corporate Events
                          </p>
                          <MdArrowForward
                            size={20}
                            className="text-[#fff] ml-4"
                          />
                        </div>
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center hidden sm:block">
              <img
                src={eventCategories}
                alt="Event categories page main img"
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8 px-4">
        <div className="flex justify-center items-center">
          <div className="grid md:grid-cols-2 sm:gap-32 gap-6 content-center">
            <div>
              <div>
                <img
                  src={eventCategories_02}
                  alt="Event categories section two img"
                  className="w-full object-contain"
                />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div>
                <h2 className="text-primary text-2xl mb-8 text-center">
                  Non-Corporate Event Categories
                </h2>
                <div className="sm:flex items-center gap-8 ">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Charity Event </p>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Exhibition </p>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Fashion Show </p>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Festival</p>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Function </p>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Fundraiser </p>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Meetups </p>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Sports/Competition </p>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Wedding </p>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <MdEast className="text-purple_two mb-0.5" />
                      <p>Worship Service</p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-center sm:justify-start">
                    <Button
                      variant="filled"
                      size="sm"
                      className="lg:inline-block bg-primary rounded-btn py-3 px-6 mt-6"
                    >
                      <div className="flex items-center">
                        <p className="text-white normal-case font-semibold text-[12px] sm:text-[14px]">
                          View Non-Corporate Events
                        </p>
                        <MdArrowForward
                          size={20}
                          className="text-[#fff] ml-4"
                        />
                      </div>
                    </Button>
                  </div>
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
