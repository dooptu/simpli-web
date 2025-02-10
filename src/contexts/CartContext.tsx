"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { ProductModule } from "@/modules/products/ProductModule";
import { CartProductModel } from "@/modules/cart/CartModule";

interface CartContextType {
  cart: CartProductModel[];
  addToCart: (product: ProductModule) => void;
  removeFromCart: (product_id: string) => void;
  changeQuantity: (product_id: string, quantity: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartProductModel[]>([]);

  const addToCart = (product: ProductModule) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product?.product_id === product.product_id
      );
  
      if (existingIndex !== -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingIndex] = {
          ...updatedCart[existingIndex],
          quantity: updatedCart[existingIndex].quantity + 1,
        };
        return updatedCart;
      }
  
      const newCartItem = new CartProductModel(
        "user_123", // Giả lập user_id
        1,
        product.price,
        product
      );
  
      return [...prevCart, newCartItem];
    });
  };
  

  const removeFromCart = (product_id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.product?.product_id !== product_id));
  };

  const changeQuantity = (product_id: string, quantity: number) => {
    setCart((prevCart) => {
      return prevCart.map((item) =>
        item.product?.product_id === product_id
          ? { ...item, quantity: Math.max(quantity, 1) } // Không cho số lượng < 1
          : item
      );
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, changeQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
