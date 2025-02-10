"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ShoppingCart, User, Search, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useCartRightMenu } from "@/hooks/useCartRightMenu";

const categories = [
  {
    id: "coffee",
    name: "Cà phê",
    image:
      "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
  },
  {
    id: "tea",
    name: "Trà",
    image:
      "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
  },
  {
    id: "juice",
    name: "Nước ép",
    image:
      "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
  },
  {
    id: "food",
    name: "Đồ ăn",
    image:
      "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
  },
];

const recommendedProducts = {
  coffee: [
    {
      id: 1,
      name: "Cà phê sữa",
      price: "40,000đ",
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
    },
    {
      id: 2,
      name: "Espresso",
      price: "35,000đ",
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
    },
  ],
  tea: [
    {
      id: 3,
      name: "Trà đào",
      price: "45,000đ",
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
    },
    {
      id: 4,
      name: "Trà sữa trân châu",
      price: "50,000đ",
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
    },
  ],
  juice: [
    {
      id: 5,
      name: "Nước cam",
      price: "40,000đ",
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
    },
    {
      id: 6,
      name: "Sinh tố bơ",
      price: "55,000đ",
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
    },
  ],
  food: [
    {
      id: 7,
      name: "Bánh mì nướng",
      price: "30,000đ",
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
    },
    {
      id: 8,
      name: "Croissant",
      price: "35,000đ",
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
    },
  ],
};

export default function Header() {
  const [selectedCategory, setSelectedCategory] =
    useState<keyof typeof recommendedProducts>("coffee");
  const { openMenu } = useCartRightMenu();

  return (
    <header className="bg-white shadow-md pb-4">
      <div className="container mx-auto flex items-center justify-between px-28">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-black">
          <img
            src="https://res.cloudinary.com/db3e8z5di/image/upload/v1739030755/img/xuc9usmqigsxfuqpawgm.png"
            alt="Logo"
            className="h-20 w-20"
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link href="/" className="hover:text-blue-600 font-medium">
            Trang chủ
          </Link>

          {/* Dropdown Menu */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 hover:text-blue-600 font-medium outline-none focus:ring-0">
              Menu <ChevronDown size={16} />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="fixed inset-x-0 top-full w-screen max-h-[400px] bg-white flex shadow-lg overflow-y-auto z-50">
              {/* Danh mục bên trái */}
              <div className="w-1/4 bg-gray-100 p-4">
                <h2 className="text-sm font-semibold mb-3">Danh mục</h2>
                <ul>
                  {categories.map((category) => (
                    <li
                      key={category.id}
                      className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer text-sm ${
                        selectedCategory === category.id
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-200"
                      }`}
                      onClick={() =>
                        setSelectedCategory(
                          category.id as "coffee" | "tea" | "juice" | "food"
                        )
                      }
                    >
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-8 h-8 rounded-md"
                      />
                      <span>{category.name}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sản phẩm gợi ý bên phải */}
              <div className="w-3/4 p-4">
                <h2 className="text-sm font-semibold mb-3">Sản phẩm gợi ý</h2>
                <div className="grid grid-cols-3 gap-3">
                  {recommendedProducts[selectedCategory].map((product) => (
                    <div
                      key={product.id}
                      className="bg-gray-100 p-3 rounded-lg shadow hover:shadow-lg"
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-24 object-cover rounded-md mb-2"
                      />
                      <h3 className="text-sm font-semibold">{product.name}</h3>
                      <p className="text-blue-600 font-bold text-sm">
                        {product.price}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/about" className="hover:text-blue-600 font-medium">
            Về chúng tôi
          </Link>
          <Link href="/stores" className="hover:text-blue-600 font-medium">
            Chi nhánh
          </Link>
        </nav>

        {/* Search Bar */}
        <div className="relative">
          <Input
            type="text"
            placeholder="Tìm kiếm đồ uống..."
            className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:ring focus:ring-blue-300"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={18}
          />
        </div>

        {/* User Actions */}
        <div className="flex items-center gap-4">
          {/* Đăng nhập & Đăng ký */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <User size={24} className="cursor-pointer hover:text-blue-600" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/auth/login">Đăng nhập</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/auth/register">Đăng ký</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Giỏ hàng */}

          <button onClick={openMenu}>
            <ShoppingCart
              size={24}
              className="cursor-pointer hover:text-blue-600"
            />
          </button>
        </div>

        {/* Right Menu Component */}
      </div>
    </header>
  );
}
