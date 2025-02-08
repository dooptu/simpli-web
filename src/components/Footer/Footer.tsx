"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-28">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Cột 1: Logo và giới thiệu */}
          <div>
            <h2 className="text-2xl font-bold mb-4">The Coffee House</h2>
            <p className="text-gray-400">
              Thưởng thức hương vị tuyệt vời từ những hạt cà phê chất lượng cao.
            </p>
          </div>

          {/* Cột 2: Đường dẫn nhanh */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Về chúng tôi</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Giới thiệu</a></li>
              <li><a href="#" className="hover:text-white">Cửa hàng</a></li>
              <li><a href="#" className="hover:text-white">Tin tức</a></li>
              <li><a href="#" className="hover:text-white">Tuyển dụng</a></li>
            </ul>
          </div>

          {/* Cột 3: Hỗ trợ khách hàng */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hỗ trợ khách hàng</h3>
            <ul className="text-gray-400 space-y-2">
              <li><a href="#" className="hover:text-white">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-white">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-white">Hướng dẫn mua hàng</a></li>
              <li><a href="#" className="hover:text-white">Liên hệ</a></li>
            </ul>
          </div>

          {/* Cột 4: Liên hệ và mạng xã hội */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <p className="text-gray-400">Hotline: <span className="font-semibold">1900 6750</span></p>
            <p className="text-gray-400">Email: support@thecoffeehouse.com</p>

            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebookF /></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
              <a href="#" className="text-gray-400 hover:text-white text-xl"><FaYoutube /></a>
            </div>
          </div>
        </div>

        {/* Dòng bản quyền */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
          © 2025 The Coffee House. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
