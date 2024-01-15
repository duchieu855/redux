import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../component/container/counter/counterSlice";

import shoppingCartSlice from "../component/shoppingcart/ShoppingCartSlice";



export const store = configureStore(
    {
        reducer: {
            counter : counterSlice,
            shoppingCart: shoppingCartSlice
          },
    }
)

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch


