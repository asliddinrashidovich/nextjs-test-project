"use client"; 

import { ProductTypes } from "@/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface LikedState {
  items: ProductTypes[];
}

export const initialState: LikedState = {
  items: [],
};


export const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    addToLiked: (state, action: PayloadAction<ProductTypes>) => {
      const existsIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (existsIndex !== -1) {
        state.items.splice(existsIndex, 1);
      } else {
        state.items.push(action.payload); 
      }
    },
    removeFromLiked: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToLiked, removeFromLiked } = likedSlice.actions;
export const likeAdder = likedSlice.reducer
