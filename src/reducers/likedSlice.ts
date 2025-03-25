"use client"; 

import { ProductTypes } from "@/interface";
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// **Mahsulot turi**
interface Product {
  id: number;
  title: string;
  image: string;
  liked?: boolean; // Like holati
}

// **API orqali Like holatini yangilash**
export const toggleLike = createAsyncThunk(
  "cart/toggleLike",
  async (product: ProductTypes) => {
    const updatedProduct = { ...product, liked: !product.liked };
    await axios.put(`https://fakestoreapi.com/products/${product.id}`, updatedProduct);
    return updatedProduct; // ✅ Yangilangan ma'lumot Redux'ga qaytadi
  }
);

export const likedSlice = createSlice({
  name: "liked",
  initialState: {
    items: [] as Product[],
  },
  reducers: {
    setProducts: (state, action: PayloadAction<ProductTypes[]>) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(toggleLike.fulfilled, (state, action: PayloadAction<Product>) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index].liked = action.payload.liked;
      }
    });
  },
});

export const { setProducts } = likedSlice.actions;
export const likeAdder = likedSlice.reducer
