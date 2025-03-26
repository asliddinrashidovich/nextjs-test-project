import { cartReducer } from "@/reducers/cartSlice";
import { likeAdder } from "@/reducers/likedSlice";
import { productsSlice } from "@/reducers/productsSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        liked: likeAdder,
        products: productsSlice,
    }
    // devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


