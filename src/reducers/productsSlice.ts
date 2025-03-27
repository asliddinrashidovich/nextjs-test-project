"use client"; 

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProdcutsAllTypes {
  items: string;
}

export const initialState: ProdcutsAllTypes = {
  items: '',
};


export const productsSliceAll = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProductFilter: (state, action: PayloadAction<string>) => {
      console.log('asda', action.payload)
      state.items = action.payload;
    },
  },
});

export const {setProductFilter } = productsSliceAll.actions;
export const productsSlice = productsSliceAll.reducer
