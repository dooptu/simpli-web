"use client";
import { X, Trash } from "lucide-react";
import clsx from "clsx";
import { useCartRightMenu } from "@/hooks/useCartRightMenu";
import Image from "next/image";
import { useCart } from "@/contexts/CartContext";
import { formatNumberWithDots } from "@/utils/helpers";

export default function CartRightMenu() {
  const { isOpen, closeMenu } = useCartRightMenu();
  const { cart, removeFromCart, changeQuantity } = useCart();

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shippingCost = 50;
  const freeShippingThreshold = 70;
  const remainingForFreeShipping = freeShippingThreshold - subtotal;

  return (
    <div className={clsx("fixed inset-0 z-50 flex", isOpen ? "visible" : "invisible")}> 
      {/* Overlay */}
      <div 
        className={clsx("fixed inset-0 bg-black/50 transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0")}
        onClick={closeMenu}
      />

      {/* Cart Panel */}
      <div 
        className={clsx("fixed right-0 top-0 w-96 bg-white shadow-lg transform transition-transform duration-300 h-full flex flex-col", isOpen ? "translate-x-0" : "translate-x-full")}
      >
        {/* Header */}
        <div className="p-4 flex justify-between items-center border-b">
          <h2 className="text-lg font-semibold">Your Cart</h2>
          <button onClick={closeMenu}>
            <X size={24} className="text-gray-600 hover:text-gray-900" />
          </button>
        </div>

        {/* Free Shipping Progress */}
        <div className="p-4 text-sm text-gray-700">
          {remainingForFreeShipping > 0 ? (
            <p>You're <strong>{remainingForFreeShipping.toFixed(2)}</strong> away from free shipping!</p>
          ) : (
            <p className="text-green-600 font-semibold">You qualify for free shipping!</p>
          )}
          <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
            <div 
              className="bg-green-500 h-2 rounded-full" 
              style={{ width: `{Math.min((subtotal / freeShippingThreshold) * 100, 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Cart Items */}
        <div className="p-4 flex-1 overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.cart_item_id} className="flex items-center gap-4 py-3 border-b">
                  <img src={item.product?.image} alt={item.product?.name} width={50} height={50} className="rounded" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold">{item.product?.name}</p>
                    <p className="text-xs text-gray-500">Price: {formatNumberWithDots(item.price)}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button 
                        className="border px-2 py-1 text-sm" 
                        onClick={() => changeQuantity(item.product?.product_id, item.quantity - 1)}
                      >-</button>
                      <span className="text-sm">{item.quantity}</span>
                      <button 
                        className="border px-2 py-1 text-sm" 
                        onClick={() => changeQuantity(item.product?.product_id, item.quantity + 1)}
                      >+</button>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.product?.product_id)}>
                    <Trash size={18} className="text-red-500" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Summary Section */}
        <div className="p-4 border-t">
          <div className="flex justify-between text-sm">
            <span>Subtotal</span>
            <span>{formatNumberWithDots(subtotal)}</span>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>Shipping</span>
            <span>{subtotal >= freeShippingThreshold ? "Free" : formatNumberWithDots(shippingCost)}</span>
          </div>
          <div className="flex justify-between text-lg font-semibold mt-2">
            <span>Total</span>
            <span>{formatNumberWithDots(subtotal + (subtotal >= freeShippingThreshold ? 0 : shippingCost))}</span>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex flex-col gap-2">
            <button className="bg-black text-white py-2 rounded">Checkout</button>
            <button className="border py-2 rounded">Keep Shopping</button>
            <button className="bg-yellow-500 text-black py-2 rounded font-semibold">PayPal</button>
          </div>
        </div>
      </div>
    </div>
  );
}
