// src/Carousel.tsx
import React, { RefObject } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ICON from "../../src/assets/icon.png";
import {
  MdOutlineCalendarMonth,
  MdLens,
  MdBookmarkBorder,
  MdArrowBack,
  MdArrowForward,
} from "react-icons/md";

interface CarouselItem {
  title: string;
  date: string;
  title_two: string;
  location: string;
  hybrid: string;
  price: string;
  button: string;
}

interface CarouselProps {
  data: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const settings: Settings = {
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

  return (
    <div>
      {/* Buttons for navigation */}
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

      {/* Slider component */}
      <Slider ref={sliderRef} {...settings}>
        {data.map((item, index) => (
          <div key={index} className="p-4">
            {/* Your updated card content goes here */}
            <div className="bg-[#F3F1FB] w-full h-[360px] flex-grow rounded-lg aspect-card p-4">
              <div className="flex items-center justify-between">
                <div className="flex-grow px-4">
                  {/* Card content */}
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
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
