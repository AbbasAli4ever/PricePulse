import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../assets/Images/balancing-1868051_1280.jpg";
import Image2 from "../assets/Images/flowers-8055013_1280.jpg";
import Image3 from "../assets/Images/jaclyn-moy-ugZxwLQuZec-unsplash.jpg";
import { PrevArrow, NextArrow } from "./CustomArrows";

const HomeCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
  };

  return (
    <div className="w-full mx-auto h-[300px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] mt-16 z-0">
      <Slider {...settings}>
        <div>
          <div
            className="w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] bg-cover bg-no-repeat flex flex-col items-center justify-center"
            style={{ backgroundImage: `url(${Image1})` }}
          >
            <h2 className="text-5xl font-bold text-white animate-spin-clockwise">Summer Sale 2024</h2>
            <p className="text-2xl font-bold text-white mt-4 animate-slide-right">Explore This Summer Sale of 2024</p>
            <a href="" className="mt-5 py-1 px-6 md:py-3 md:px-12 bg-black text-white rounded-full hover:bg-red-900 animate-spin-anticlockwise">Shop Now</a>
          </div>
        </div>
        <div>
          <div
            className="w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${Image2})` }}
          ></div>
        </div>
        <div>
          <div
            className="w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px] 2xl:h-[650px] bg-cover bg-no-repeat"
            style={{ backgroundImage: `url(${Image3})` }}
          ></div>
        </div>
      </Slider>
    </div>
  );
};

export default HomeCarousel;
