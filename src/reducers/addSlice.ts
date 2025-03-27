import { ProductTypes } from "@/interface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


export const addProduct = createAsyncThunk(
    "products/addProduct",
    async (product: ProductTypes) => {
        await axios.put('https://67e38f432ae442db76d08ec2.mockapi.io/a-store-products', product);
    }
) 
 
const addProductSlice = createSlice({
    name: 'add',
    initialState: {
        items: [] as ProductTypes[]
    },
    reducers: {
        setProducts: (state, action: PayloadAction<ProductTypes[]>) => {
            state.items = action.payload
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(addProduct.fulfilled, (state, action : PayloadAction<ProductTypes>) => {
    //         state.items.push(action.payload)
    //     })
    // }
})


export const {} = addProductSlice.actions
export const addNewProduct = addProductSlice.reducer