"use client";
import { useCart } from "@/contexts/CartContext";
import {
  CategoryModule,
  ProductModule,
  RatingModule,
  ToppingModule,
} from "@/modules/products/ProductModule";
import { _truncateText } from "@/utils/helpers";
import { ShoppingCart, Star } from "lucide-react";
import { useEffect, useState } from "react";

const milkTeaCategory: CategoryModule = {
  category_id: "1",
  name: "Trà Sữa",
  created_at: 1707523200,
  updated_at: 1707523200,
  products: [
    // Các sản phẩm hiện có (101, 102, 103)
    {
      product_id: "101",
      name: "Trà Sữa Trân Châu Đen",
      description: "Trà sữa truyền thống kết hợp với trân châu đen dai ngon.",
      price: 35000,
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
      attribute: 1,
      created_at: 1707523200,
      updated_at: 1707523200,
      ratings: [
        {
          rating_id: "401",
          user_id: "u101",
          created_at: 1707523300,
          updated_at: 1707523300,
        },
        {
          rating_id: "402",
          user_id: "u102",
          created_at: 1707523400,
          updated_at: 1707523400,
        },
        {
          rating_id: "403",
          user_id: "u103",
          created_at: 1707523500,
          updated_at: 1707523500,
        },
      ],
      toppings: [
        {
          topping_id: "301",
          name: "Trân Châu Đen",
          price: 5000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "302",
          name: "Thạch Dừa",
          price: 7000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "303",
          name: "Pudding Trứng",
          price: 8000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "304",
          name: "Kem Cheese",
          price: 10000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
      ],
      addRating: function (rating: RatingModule): void {
        throw new Error("Function not implemented.");
      },
      addTopping: function (topping: ToppingModule): void {
        throw new Error("Function not implemented.");
      },
    },
    {
      product_id: "102",
      name: "Trà Sữa Matcha",
      description:
        "Trà sữa vị matcha thơm ngon, kết hợp với nhiều topping hấp dẫn.",
      price: 40000,
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
      attribute: 1,
      created_at: 1707523200,
      updated_at: 1707523200,
      ratings: [
        {
          rating_id: "404",
          user_id: "u104",
          created_at: 1707523600,
          updated_at: 1707523600,
        },
        {
          rating_id: "405",
          user_id: "u105",
          created_at: 1707523700,
          updated_at: 1707523700,
        },
        {
          rating_id: "406",
          user_id: "u106",
          created_at: 1707523800,
          updated_at: 1707523800,
        },
      ],
      toppings: [
        {
          topping_id: "301",
          name: "Trân Châu Đen",
          price: 5000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "305",
          name: "Trân Châu Trắng",
          price: 6000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "306",
          name: "Thạch Cà Phê",
          price: 7000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "307",
          name: "Kem Cheese",
          price: 10000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
      ],
      addRating: function (rating: RatingModule): void {
        throw new Error("Function not implemented.");
      },
      addTopping: function (topping: ToppingModule): void {
        throw new Error("Function not implemented.");
      },
    },
    {
      product_id: "103",
      name: "Trà Sữa Socola",
      description:
        "Trà sữa vị socola đậm đà, phù hợp cho những ai yêu thích vị ngọt.",
      price: 38000,
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
      attribute: 1,
      created_at: 1707523200,
      updated_at: 1707523200,
      ratings: [
        {
          rating_id: "407",
          user_id: "u107",
          created_at: 1707523900,
          updated_at: 1707523900,
        },
        {
          rating_id: "408",
          user_id: "u108",
          created_at: 1707524000,
          updated_at: 1707524000,
        },
        {
          rating_id: "409",
          user_id: "u109",
          created_at: 1707524100,
          updated_at: 1707524100,
        },
      ],
      toppings: [
        {
          topping_id: "303",
          name: "Pudding Trứng",
          price: 9000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "308",
          name: "Thạch Socola",
          price: 9000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "309",
          name: "Thạch Dừa",
          price: 7000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "310",
          name: "Kem Socola",
          price: 11000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
      ],
      addRating: function (rating: RatingModule): void {
        throw new Error("Function not implemented.");
      },
      addTopping: function (topping: ToppingModule): void {
        throw new Error("Function not implemented.");
      },
    },

    // Thêm 5 sản phẩm mới
    {
      product_id: "104",
      name: "Trà Sữa Dâu Tây",
      description: "Trà sữa vị dâu tây thơm ngon, kết hợp với topping hấp dẫn.",
      price: 42000,
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
      attribute: 1,
      created_at: 1707523200,
      updated_at: 1707523200,
      ratings: [
        {
          rating_id: "410",
          user_id: "u110",
          created_at: 1707524200,
          updated_at: 1707524200,
        },
        {
          rating_id: "411",
          user_id: "u111",
          created_at: 1707524300,
          updated_at: 1707524300,
        },
      ],
      toppings: [
        {
          topping_id: "311",
          name: "Thạch Dâu Tây",
          price: 8000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "312",
          name: "Trân Châu Trắng",
          price: 6000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "313",
          name: "Kem Dâu Tây",
          price: 12000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
      ],
      addRating: function (rating: RatingModule): void {
        throw new Error("Function not implemented.");
      },
      addTopping: function (topping: ToppingModule): void {
        throw new Error("Function not implemented.");
      },
    },
    {
      product_id: "105",
      name: "Trà Sữa Caramel",
      description: "Trà sữa vị caramel ngọt ngào, hương vị độc đáo.",
      price: 37000,
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
      attribute: 1,
      created_at: 1707523200,
      updated_at: 1707523200,
      ratings: [
        {
          rating_id: "412",
          user_id: "u112",
          created_at: 1707524400,
          updated_at: 1707524400,
        },
        {
          rating_id: "413",
          user_id: "u113",
          created_at: 1707524500,
          updated_at: 1707524500,
        },
      ],
      toppings: [
        {
          topping_id: "314",
          name: "Thạch Caramel",
          price: 7000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "315",
          name: "Trân Châu Đen",
          price: 5000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "316",
          name: "Kem Caramel",
          price: 11000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
      ],
      addRating: function (rating: RatingModule): void {
        throw new Error("Function not implemented.");
      },
      addTopping: function (topping: ToppingModule): void {
        throw new Error("Function not implemented.");
      },
    },
    {
      product_id: "106",
      name: "Trà Sữa Hồng Trà",
      description: "Hồng trà đậm đà kết hợp với sữa thơm ngon.",
      price: 30000,
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
      attribute: 1,
      created_at: 1707523200,
      updated_at: 1707523200,
      ratings: [
        {
          rating_id: "414",
          user_id: "u114",
          created_at: 1707524600,
          updated_at: 1707524600,
        },
        {
          rating_id: "415",
          user_id: "u115",
          created_at: 1707524700,
          updated_at: 1707524700,
        },
      ],
      toppings: [
        {
          topping_id: "317",
          name: "Trân Châu Đen",
          price: 5000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "318",
          name: "Thạch Hồng Trà",
          price: 6000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "319",
          name: "Kem Cheese",
          price: 10000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
      ],
      addRating: function (rating: RatingModule): void {
        throw new Error("Function not implemented.");
      },
      addTopping: function (topping: ToppingModule): void {
        throw new Error("Function not implemented.");
      },
    },
    {
      product_id: "107",
      name: "Trà Sữa Mắc Ca",
      description: "Trà sữa kết hợp với hương vị mắc ca thơm béo.",
      price: 45000,
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
      attribute: 1,
      created_at: 1707523200,
      updated_at: 1707523200,
      ratings: [
        {
          rating_id: "416",
          user_id: "u116",
          created_at: 1707524800,
          updated_at: 1707524800,
        },
        {
          rating_id: "417",
          user_id: "u117",
          created_at: 1707524900,
          updated_at: 1707524900,
        },
      ],
      toppings: [
        {
          topping_id: "320",
          name: "Hạt Mắc Ca",
          price: 10000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "321",
          name: "Thạch Dừa",
          price: 7000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "322",
          name: "Kem Mắc Ca",
          price: 12000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
      ],
      addRating: function (rating: RatingModule): void {
        throw new Error("Function not implemented.");
      },
      addTopping: function (topping: ToppingModule): void {
        throw new Error("Function not implemented.");
      },
    },
    {
      product_id: "108",
      name: "Trà Sữa Okinawa",
      description: "Trà sữa vị đường đen Okinawa đặc trưng.",
      price: 40000,
      image:
        "https://res.cloudinary.com/db3e8z5di/image/upload/v1739029912/img/dq4nc5a8qffbuwwh3mfp.png",
      attribute: 1,
      created_at: 1707523200,
      updated_at: 1707523200,
      ratings: [
        {
          rating_id: "418",
          user_id: "u118",
          created_at: 1707525000,
          updated_at: 1707525000,
        },
        {
          rating_id: "419",
          user_id: "u119",
          created_at: 1707525100,
          updated_at: 1707525100,
        },
      ],
      toppings: [
        {
          topping_id: "323",
          name: "Trân Châu Đen",
          price: 5000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "324",
          name: "Thạch Okinawa",
          price: 8000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
        {
          topping_id: "325",
          name: "Kem Cheese",
          price: 10000,
          attribute: 1,
          created_at: 1707523200,
          updated_at: 1707523200,
        },
      ],
      addRating: function (rating: RatingModule): void {
        throw new Error("Function not implemented.");
      },
      addTopping: function (topping: ToppingModule): void {
        throw new Error("Function not implemented.");
      },
    },
  ],
  addProduct: function (product: ProductModule): void {
    throw new Error("Function not implemented.");
  },
};

export default function ProductCardList() {
  const [isClient, setIsClient] = useState(false);
  const { addToCart } = useCart();
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="h-96 flex items-center justify-center text-lg">
        Đang tải...
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <h2 className="text-4xl font-bold text-center mb-6 text-yellow-600">
        ✨ Sản phẩm mới & Nổi bật ✨
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {milkTeaCategory.products.slice(0, 8).map((product) => (
          <div
            key={product.product_id}
            className="relative bg-white shadow-xl rounded-xl overflow-hidden p-4 hover:shadow-2xl transition transform hover:scale-105"
          >
            {/* Tag HOT/NEW */}
            <span
              className={`absolute top-3 right-3 px-3 py-1 text-xs font-bold text-white rounded-full ${
                product.attribute === 1
                  ? "bg-red-600 fire-animation"
                  : "bg-blue-500 blink-animation"
              }`}
            >
              {product.attribute === 1 ? "HOT" : "NEW"}
            </span>

            {/* Hình ảnh */}
            <div className="relative w-full h-52">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-lg w-full h-52"
              />
            </div>

            {/* Nội dung */}
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {product.name}
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                {_truncateText(product.description, 65)}
              </p>

              {/* Đánh giá sao */}
              <div className="flex items-center mt-2">
                {[...Array(5)].map((_, index) => {
                  const filled = index < Math.floor(product.ratings?.length || 0);
                  return (
                    <Star
                      key={index}
                      className="w-5 h-5"
                      style={{
                        fill: filled ? "#FACC15" : "#D1D5DB",
                        color: filled ? "#FACC15" : "#D1D5DB",
                      }}
                    />
                  );
                })}
                <span className="ml-2 text-sm text-gray-500">
                  ({product.ratings?.length || 0})
                </span>
              </div>

              {/* Giá và nút đặt hàng */}
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xl font-bold text-yellow-600">
                  {product.price}
                </span>
                <button onClick={() => addToCart(product)} className="px-4 py-2 bg-yellow-500 text-white font-semibold rounded-lg shadow-lg hover:bg-yellow-600 transition">
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
          0% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 10px rgba(255, 69, 0, 0.7);
          }
          50% {
            transform: scale(1.1);
            opacity: 0.9;
            box-shadow: 0 0 15px rgba(255, 69, 0, 0.9);
          }
          100% {
            transform: scale(1);
            opacity: 1;
            box-shadow: 0 0 10px rgba(255, 69, 0, 0.7);
          }
        }

        .fire-animation {
          animation: fire 1s infinite alternate ease-in-out;
        }

        @keyframes blink {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            opacity: 1;
          }
        }

        .blink-animation {
          animation: blink 1.5s infinite;
        }
      `}</style>
    </div>
  );
}
