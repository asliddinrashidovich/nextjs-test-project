"use client"; 

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// const getData = async () => {
//   const {data} = await axios.get('https://fakestoreapi.com/products');
//   return data 
// }

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
    // filterByCategory: (state, action: PayloadAction<string>) => {
    //   state.items = state.items.filter((item) => item.category === action.payload);
    // },
    // removeFromLiked: (state, action: PayloadAction<number>) => {
    //   state.items = state.items.filter((item) => item.id !== action.payload);
    // },
  },
});

export const {setProductFilter } = productsSliceAll.actions;
export const productsSlice = productsSliceAll.reducer
