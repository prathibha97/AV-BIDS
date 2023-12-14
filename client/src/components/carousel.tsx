// src/Carousel.tsx
import { differenceInDays, parseISO } from "date-fns";
import React, { RefObject } from "react";
import {
  MdArrowBack,
  MdArrowForward,
  MdBookmarkBorder,
  MdLens,
  MdOutlineCalendarMonth,
} from "react-icons/md";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ICON from "../../src/assets/icon.png";
import { Event } from "../types";

interface CarouselProps {
  data: Event[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: Math.min(data.length, 4),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef: RefObject<Slider> = React.createRef();

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const currentDate = new Date();

  return (
    <div>
      <h2 className="text-black text-center sm:text-left">
        Recently Posted Events
      </h2>
      {/* Buttons for navigation */}
      <div className="flex items-center justify-end gap-4 mb-2 mr-6 mt-4 sm:mt-0">
        <div>
          <div className="flex  items-center justify-center rounded-full w-8 h-8 sm:w-12 sm:h-12 bg-primary ">
            <MdArrowBack size={24} className="text-white" onClick={nextSlide} />
          </div>
        </div>

        <div>
          <div className="flex  items-center justify-center rounded-full w-8 h-8 sm:w-12 sm:h-12 bg-primary ">
            <MdArrowForward
              size={24}
              className="text-white"
              onClick={prevSlide}
            />
          </div>
        </div>
      </div>

      {/* Slider component */}
      <Slider ref={sliderRef} {...settings}>
        {data.map((event, index) => (
          <div key={index} className="p-4">
            <div className="bg-[#F3F1FB] w-full  h-[440px] rounded-lg  p-4 ">
              <div className="flex items-center justify-between">
                <div className="px-4">
                  <div className="flex items-center gap-3 mb-6">
                    <img src={ICON} alt="aad" className="" />
                    <div className="grow">
                      <h2 className="text-[18px] mb-2">{event.title}</h2>

                      <div className="flex items-center gap-2">
                        <MdOutlineCalendarMonth className="text-[26px] text-[#8645FF]" />
                        <p className="text-[15px] mt-1">
                          {event.eventStartDate} to {event.eventEndDate}
                        </p>
                      </div>
                    </div>
                    <MdBookmarkBorder className="text-[26px] text-[#C5BDBD] " />
                  </div>

                  <h6 className="text-[18px] mb-2">
                    {event.eventCategory}, {event.eventSubCategory}
                  </h6>

                  <div className="flex items-center gap-2 mb-6">
                    <p>
                      {event.address.city}, {event.address.state}
                    </p>
                    <MdLens className="text-[#D8D0FA] text-[15px]" />
                    <p className="text-[15px]">
                      {differenceInDays(
                        parseISO(event.proposalDueDate),
                        currentDate
                      )}{" "}
                      days left
                    </p>
                  </div>

                  <div className="bg-[#DDD8F6] w-max rounded-lg text-center py-1 px-3 mb-6">
                    <p className="font-medium">{event.eventType}</p>
                  </div>

                  <h2 className="text-[18px] mb-6">{event.eventBudget}</h2>

                  <div className="bg-[#C9C0F3] w-max py-3 px-6 rounded-full mb-4 text-[#181059] font-bold cursor-pointer text-center">
                    Apply Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
