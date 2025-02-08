"use client";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";

const slides = [
  {
    id: 1,
    image: "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029774/img/xyx2mgfyy9rbvqjykmim.png",
    title: "Cà phê Latte",
    description: "Hương vị đậm đà, ngọt ngào với lớp bọt sữa mịn màng.",
    buttonText: "Đặt ngay",
  },
  {
    id: 2,
    image: "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029774/img/xyx2mgfyy9rbvqjykmim.png",
    title: "Trà sữa trân châu",
    description: "Hương vị thơm ngon, trà sữa hoà quyện cùng trân châu dai giòn.",
    buttonText: "Khám phá ngay",
  },
  {
    id: 3,
    image: "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029774/img/xyx2mgfyy9rbvqjykmim.png",
    title: "Burger bò phô mai",
    description: "Thịt bò nướng than hồng, kết hợp cùng phô mai tan chảy.",
    buttonText: "Thử ngay",
  },
  {
    id: 4,
    image: "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029774/img/xyx2mgfyy9rbvqjykmim.png",
    title: "Sinh tố bơ",
    description: "Bơ tươi nguyên chất, vị béo ngậy, giàu dinh dưỡng.",
    buttonText: "Gọi ngay",
  },
];

export default function Carousel() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return <div className="h-96 flex items-center justify-center text-lg">Đang tải...</div>;
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="swiper-slide flex flex-col lg:flex-row items-center justify-center h-screen bg-black text-white px-6 lg:px-16">
              {/* Text Section */}
              <div className="text-center lg:text-left lg:w-1/2">
                <h2 className="text-3xl lg:text-5xl font-bold mb-4">{slide.title}</h2>
                <p className="text-base lg:text-lg mb-6">{slide.description}</p>
                <button className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition">
                  {slide.buttonText}
                </button>
              </div>

              {/* Image Section */}
              <div className="flex justify-center lg:justify-end w-full lg:w-1/2 mt-6 lg:mt-0">
                <img
                  src={slide.image}
                  alt={slide.title}
                  width={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
