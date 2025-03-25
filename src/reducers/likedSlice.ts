"use client"; 

import { ProductTypes } from "@/interface";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";



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
      state.items.push(action.payload);
    },
    removeFromLiked: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToLiked, removeFromLiked } = likedSlice.actions;
export const likeAdder = likedSlice.reducer
