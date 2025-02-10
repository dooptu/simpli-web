import { create } from "zustand";

interface CartMenuState {
  isOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const useCartRightMenu = create<CartMenuState>((set) => ({
  isOpen: false,
  openMenu: () => set({ isOpen: true }),
  closeMenu: () => set({ isOpen: false }),
}));
