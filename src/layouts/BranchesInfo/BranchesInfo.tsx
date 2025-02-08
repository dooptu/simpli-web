"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const branches = [
  {
    id: 1,
    name: "Chi nhánh Quận 1",
    address: "123 Nguyễn Huệ, Quận 1, TP.HCM",
    phone: "0123 456 789",
    description:
      "Tọa lạc ngay trung tâm thành phố, chi nhánh Quận 1 mang đến không gian hiện đại, sang trọng với hương vị cà phê đậm đà.",
    image: "https://trungnguyenlegendcafe.net/wp-content/uploads/2020/08/005-min-1-scaled.jpg",
  },
  {
    id: 2,
    name: "Chi nhánh Quận 3",
    address: "456 Võ Văn Tần, Quận 3, TP.HCM",
    phone: "0987 654 321",
    description:
      "Với không gian rộng rãi và phong cách thiết kế ấm cúng, chi nhánh Quận 3 là nơi lý tưởng để gặp gỡ và thư giãn.",
    image: "https://trungnguyenlegend.com/wp-content/uploads/2022/10/1010-1.jpg",
  },
  {
    id: 3,
    name: "Chi nhánh Hà Nội",
    address: "789 Kim Mã, Ba Đình, Hà Nội",
    phone: "0909 123 456",
    description:
      "Giữ trọn nét truyền thống kết hợp hiện đại, chi nhánh Hà Nội mang đến một không gian tinh tế và thân thiện.",
    image: "https://phumyhungngaynay.com/wp-content/uploads/2024/08/1-1-1024x683.png",
  },
];

export default function BranchInfo() {
  const [selectedBranch, setSelectedBranch] = useState<typeof branches[0] | null>(null);

  useEffect(() => {
    setSelectedBranch(branches[0]); // Chỉ set giá trị khi client đã sẵn sàng
  }, []);

//   if (!isClient) {
//     return <div className="h-96 flex items-center justify-center text-lg">Đang tải...</div>;
//   }

  return (
    <section className="w-full text-gray-900 py-14 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Hệ Thống Chi Nhánh</h2>

        <motion.div
          key={selectedBranch?.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white flex flex-col md:flex-row items-center"
        >
          <div className="md:w-1/2 flex flex-col justify-between">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-3">{selectedBranch?.name}</h3>
              <p className="text-lg text-gray-700 mb-2">📍 {selectedBranch?.address}</p>
              <p className="text-lg text-gray-700 mb-4">☎️ {selectedBranch?.phone}</p>
              <p className="text-base text-gray-600">{selectedBranch?.description}</p>
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-900 mb-2">Chọn chi nhánh:</label>
              <select
                className="w-full text-gray-900 text-lg px-4 py-2 rounded-md shadow-md focus:outline-none"
                onChange={(e) => {
                  const branch = branches.find((b) => b.id === Number(e.target.value));
                  if (branch) setSelectedBranch(branch);
                }}
                value={selectedBranch?.id}
              >
                {branches.map((branch) => (
                  <option key={branch.id} value={branch.id}>
                    {branch.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <motion.img
            src={selectedBranch?.image}
            alt={selectedBranch?.name}
            className="w-full md:w-1/2 h-72 object-cover rounded-lg mt-6 md:mt-0 md:ml-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
