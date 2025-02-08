"use client";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "@/components/Carousel/Carousel";
import Header from "@/components/Header/Header";
import ProductCardList from "@/components/ProductCardList/ProductCardList";
import ProductStoryIntroduce from "@/components/ProductStoryIntroduce/ProductStoryIntroduce";
import Footer from "@/components/Footer/Footer";
import BranchInfo from "../BranchesInfo/BranchesInfo";

export default function HomeLayout() {
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement; // Ép kiểu target thành HTMLElement
          const index = Number(target.dataset.index); // Truy cập dataset.index
  
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, index])]); // Tránh trùng lặp
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
  }, []);
  

  return (
    <div>
      <header className="bg-orange-500 p-4 text-white text-center">
        <h1>The Coffee House</h1>
      </header>

      {[Header, Carousel, ProductCardList, ProductStoryIntroduce, BranchInfo].map(
        (Component, index) => (
          <div
            key={index}
            ref={(el) => {
              if (el) sectionRefs.current[index] = el;
            }}
            data-index={index} // Gán index vào dataset
            className={`opacity-0 translate-y-10 transition-all duration-700 ease-in-out ${
              visibleSections.includes(index) ? "opacity-100 translate-y-0" : ""
            }`}
          >
            <Component />
          </div>
        )
      )}
      <Footer></Footer>
    </div>
  );
}
