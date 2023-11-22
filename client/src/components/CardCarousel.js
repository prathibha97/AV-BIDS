// src/Carousel.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ICON from "../../src/assets/icon.png";
import {
  MdOutlineCalendarMonth,
  MdLens,
  MdBookmarkBorder,
} from "react-icons/md";

import {
  MdAccessTime,
  MdArrowBack,
  MdArrowForward,
  MdCalendarMonth,
} from "react-icons/md";

const Carousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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

  const sliderRef = React.createRef();

  const nextSlide = () => {
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <div>
      {/* <div className="mt-4 text-center">
        <button
          onClick={prevSlide}
          className="mr-2 px-4 py-2 bg-gray-500 text-white rounded"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Next
        </button>
      </div> */}

      <div className="flex items-center justify-end gap-4 mb-2">
        <div className="hidden sm:block">
          <div className="flex  items-center justify-center rounded-full w-12 h-12 bg-primary ">
            <MdArrowBack size={24} className="text-white" onClick={nextSlide} />
          </div>
        </div>

        <div className="hidden sm:block">
          <div className="flex  items-center justify-center rounded-full w-12 h-12 bg-primary ">
            <MdArrowForward
              size={24}
              className="text-white"
              onClick={prevSlide}
            />
          </div>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {data.map((item, index) => (
          <div key={index} className="p-4">
            {/* Your updated card content goes here */}
            <div className="bg-[#F3F1FB] w-full h-[360px] flex-grow rounded-lg aspect-card p-4">
              <div className="flex items-center justify-between">
                <div className="flex-grow px-4">
                  {/* <img
                    src={item.imgSrc}
                    alt=""
                    className="w-8 aspect-square rounded-full"
                  /> */}

                  <div className="flex items-center gap-3 mb-6">
                    <img src={ICON} alt="aad" className="" />
                    <div className="grow">
                      <h2 className="text-[18px] mb-2">{item.title}</h2>

                      <div className="flex items-center gap-2">
                        <MdOutlineCalendarMonth className="text-[26px] text-[#8645FF]" />
                        <p className="text-[15px] mt-1">{item.date}</p>
                      </div>
                    </div>
                    <MdBookmarkBorder className="text-[26px] text-[#C5BDBD] " />
                  </div>

                  <h6 className="text-[18px] mb-2">{item.title_two}</h6>

                  <div className="flex items-center gap-2 mb-6">
                    <p>{item.location}</p>
                    <MdLens className="text-[#D8D0FA] text-[15px]" />
                    <p className="text-[15px]">3 days left</p>
                  </div>

                  <div className="bg-[#DDD8F6] w-max rounded-lg text-center py-1 px-3 mb-6">
                    <p className="font-medium">{item.hybrid}</p>
                  </div>

                  <h2 className="text-[18px] mb-6">{item.price}</h2>
                  <div className="bg-[#C9C0F3] w-max py-3 px-6 rounded-full">
                    <h2 className="text-[16px] text-primary">{item.button}</h2>
                  </div>
                </div>
              </div>
              {/* <div className="my-4">
                <h6>{item.category}</h6>
                <p className="text-xs">
                  {item.location}{" "}
                  <span className="text-secondary text-xl -mb-2">•</span>{" "}
                  {item.daysLeft}
                </p>
              </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
