"use client"; // Redux client komponentda ishlaydi

import { ProductTypes } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface CartState {
  items: ProductTypes[];
}

export const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<ProductTypes>) => {
      const existsIndex = state.items.some((item) => item.id === action.payload.id);
      if (!existsIndex) {
        state.items.push(action.payload);
      } 
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer
