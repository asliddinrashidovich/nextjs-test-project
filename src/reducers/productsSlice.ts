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
  },
});

export const {setProductFilter } = productsSliceAll.actions;
export const productsSlice = productsSliceAll.reducer
