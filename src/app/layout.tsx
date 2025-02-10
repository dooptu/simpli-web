import React from "react";
import MainLayout from "@/layouts/MainLayout";

import "@/styles/globals.css";
import CartRightMenu from "@/components/RightMenu/CartRightMenu";
import { CartProvider } from "@/contexts/CartContext";
// import './globals.css'

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <MainLayout></MainLayout>
          <CartRightMenu />
        </CartProvider>
      </body>
    </html>
  );
}
