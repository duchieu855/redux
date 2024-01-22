import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../component/container/counter/counterSlice";
import fetchProductListSlice from "../component/container/counter/fetchProductList"
import shoppingCartSlice from "../component/shoppingcart/ShoppingCartSlice";
import {containerApi} from "../component/container/fetchDataProduct"
import {setupListeners}   from "@reduxjs/toolkit/query"

export const store = configureStore(
    {
        reducer: {
            counter : counterSlice,
            shoppingCart: shoppingCartSlice,
            fetchProductList: fetchProductListSlice,
            [containerApi.reducerPath]: containerApi.reducer

          },
          middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(containerApi.middleware);
          }
    }
)

setupListeners(store.dispatch)
export type RootState = ReturnType <typeof store.getState>
export type AppDispatch = typeof store.dispatch




