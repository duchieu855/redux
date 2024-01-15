import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../component/container/counter/counterSlice";

import shoppingCartSlice from "../component/shoppingcart/ShoppingCartSlice";
import productListSlice from "../component/shoppingcart/slice/product-list-slice";
import listSlice from "../component/container/slice/listSlice";



export const store = configureStore(
    {
        reducer: {
            counter : counterSlice,
            shoppingCart: shoppingCartSlice,
            productList: productListSlice,
            list: listSlice
          },
    }
)

export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch


