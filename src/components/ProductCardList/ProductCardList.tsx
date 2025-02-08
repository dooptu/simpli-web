"use client";
import { ShoppingCart, Star } from "lucide-react";
import { useEffect, useState } from "react";

const products = [
    {
        id: 1,
        image: "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
        title: "Cà phê Latte",
        description: "Hương vị đậm đà với lớp bọt sữa mịn màng.",
        price: "49,000 VND",
        rating: 4.5,
        tag: "HOT",
    },
    {
        id: 2,
        image: "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
        title: "Trà sữa trân châu",
        description: "Trà sữa hoà quyện cùng trân châu dai giòn.",
        price: "55,000 VND",
        rating: 5.0,
        tag: "NEW",
    },
    {
        id: 3,
        image: "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
        title: "Burger bò phô mai",
        description: "Thịt bò nướng than hồng, kết hợp cùng phô mai tan chảy.",
        price: "79,000 VND",
        rating: 4.7,
        tag: "HOT",
    },
    {
        id: 4,
        image: "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
        title: "Sinh tố bơ",
        description: "Bơ tươi nguyên chất, vị béo ngậy, giàu dinh dưỡng.",
        price: "45,000 VND",
        rating: 4.8,
        tag: "NEW",
    },
    {
        id: 5,
        image: "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
        title: "Bánh mì Việt Nam",
        description: "Bánh mì giòn rụm, nhân thịt nguội, rau sống tươi ngon.",
        price: "35,000 VND",
        rating: 4.6,
        tag: "HOT",
    },
    {
        id: 6,
        image: "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
        title: "Matcha Latte",
        description: "Matcha nguyên chất, sữa tươi béo ngậy, vị thanh mát.",
        price: "50,000 VND",
        rating: 4.9,
        tag: "NEW",
    },
    {
        id: 7,
        image: "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
        title: "Phở bò truyền thống",
        description: "Nước dùng đậm đà, bánh phở mềm, thịt bò tươi ngon.",
        price: "65,000 VND",
        rating: 4.8,
        tag: "HOT",
    },
    {
        id: 8,
        image: "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
        title: "Trà chanh sả",
        description: "Vị chua nhẹ, hương thơm sả, giúp giải nhiệt.",
        price: "30,000 VND",
        rating: 4.7,
        tag: "NEW",
    },
];

export default function ProductCardList() {

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) {
      return <div className="h-96 flex items-center justify-center text-lg">Đang tải...</div>;
    }

    return (
        <div className="w-full max-w-6xl mx-auto py-10">
            <h2 className="text-4xl font-bold text-center mb-6 text-yellow-600">✨ Sản phẩm mới & Nổi bật ✨</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {products.slice(0, 8).map((product) => (
                    <div
                        key={product.id}
                        className="relative bg-white shadow-xl rounded-xl overflow-hidden p-4 hover:shadow-2xl transition transform hover:scale-105"
                    >
                        {/* Tag HOT/NEW */}
                        <span
                            className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold text-white rounded-full ${product.tag === "HOT" ? "bg-red-600 fire-animation" : "bg-blue-500 blink-animation"
                                }`}
                        >
                            {product.tag}
                        </span>

                        {/* Hình ảnh */}
                        <div className="relative w-full h-52">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="rounded-lg w-full h-52"
                            />
                        </div>

                        {/* Nội dung */}
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
                            <p className="text-gray-600 text-sm mt-1">{product.description}</p>

                            {/* Đánh giá sao */}
                            <div className="flex items-center mt-2">
                                {[...Array(5)].map((_, index) => {
                                    const filled = index < Math.floor(product.rating);
                                    return (
                                        <Star
                                            key={index}
                                            className="w-5 h-5"
                                            style={{ fill: filled ? "#FACC15" : "#D1D5DB", color: filled ? "#FACC15" : "#D1D5DB" }}
                                        />
                                    );
                                })}
                                <span className="ml-2 text-sm text-gray-500">({product.rating})</span>
                            </div>

                            {/* Giá và nút đặt hàng */}
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-xl font-bold text-yellow-600">{product.price}</span>
                                <button className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition">
                                    <ShoppingCart className="w-5 h-5" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Khu vực "Xem thêm" */}
            <div className="mt-8 flex justify-center">
                <button className="px-6 py-3 text-yellow-600 font-semibold border border-yellow-600 rounded-lg hover:bg-yellow-600 hover:text-white transition">
                    Xem thêm
                </button>
            </div>

            {/* Animations */}
            <style jsx>{`
        @keyframes fire {
          0% { transform: scale(1); opacity: 1; box-shadow: 0 0 10px rgba(255, 69, 0, 0.7); }
          50% { transform: scale(1.1); opacity: 0.9; box-shadow: 0 0 15px rgba(255, 69, 0, 0.9); }
          100% { transform: scale(1); opacity: 1; box-shadow: 0 0 10px rgba(255, 69, 0, 0.7); }
        }

        .fire-animation {
          animation: fire 1s infinite alternate ease-in-out;
        }

        @keyframes blink {
          0% { opacity: 1; }
          50% { opacity: 0.4; }
          100% { opacity: 1; }
        }

        .blink-animation {
          animation: blink 1.5s infinite;
        }
      `}</style>
        </div>
    );
}
