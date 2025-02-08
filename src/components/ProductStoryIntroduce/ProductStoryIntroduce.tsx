"use client";
import { useState, useEffect, useRef } from "react";

const products = [
  {
    title: "CÀ PHÊ",
    description:
      "Sự kết hợp hoàn hảo giữa hạt cà phê Robusta & Arabica thượng hạng được trồng trên những vùng cao nguyên Việt Nam màu mỡ, qua những bí quyết rang xay độc đáo, Highlands Coffee chúng tôi tự hào giới thiệu những dòng sản phẩm Cà phê mang hương vị đậm đà và tinh tế.",
    image: "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029774/img/xyx2mgfyy9rbvqjykmim.png",
    bgColor: "bg-black",
    textColor: "text-white",
  },
  {
    title: "FREEZE",
    description:
      "Sảng khoái với thức uống đá xay phong cách Việt. Freeze là thức uống đá xay mát lạnh được pha chế từ những nguyên liệu thuần túy của Việt Nam.",
    image: "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029774/img/xyx2mgfyy9rbvqjykmim.png",
    bgColor: "bg-gradient-to-b from-blue-100 to-white",
    textColor: "text-green-700",
  },
  {
    title: "TRÀ",
    description:
      "Hương vị tự nhiên, thơm ngon của Trà Việt với phong cách hiện đại tại Highlands Coffee sẽ giúp bạn gợi mở vị giác của bản thân và tận hưởng một cảm giác thật khoan khoái, tươi mới.",
    image: "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029774/img/xyx2mgfyy9rbvqjykmim.png",
    bgColor: "bg-green-200",
    textColor: "text-white",
  },
];

export default function ProductStoryIntroduce() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);
  const [hasMounted, setHasMounted] = useState(false);

  // Đánh dấu khi đã render trên client
  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return; // Đợi đến khi component mount

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = sectionRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleSections((prev) => {
              if (!prev.includes(index)) {
                return [...prev, index];
              }
              return prev;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [hasMounted]);

  if (!hasMounted) return null; // Ngăn chặn lỗi hydration

  return (
    <div className="w-full">
      {products.map((product, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) sectionRefs.current[index] = el;
          }}
          className={`flex flex-col md:flex-row items-center justify-between p-10 opacity-0 transform transition-all duration-700 ease-in-out ${
            product.bgColor
          } ${index % 2 === 1 ? "md:flex-row-reverse" : ""} ${
            visibleSections.includes(index) ? "opacity-100 translate-y-0" : "translate-y-10"
          }`}
        >
          <div className="md:w-1/2 text-center md:text-left p-6">
            <h2 className={`text-4xl font-bold mb-4 ${product.textColor}`}>{product.title}</h2>
            <p className={`text-lg ${product.textColor}`} style={{zIndex: 10}}>{product.description}</p>
            <button
              className={`${
                product.textColor
              } mt-4 px-6 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-black transition`}
            >
              KHÁM PHÁ THÊM
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.title}
              style={{width: '300px', marginTop: '-170px'}}
              className="rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
