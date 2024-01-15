import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productListSlice = createSlice({
  name: "productList",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<any>) => {
      const product = action.payload;

      state.push(product);
      return state;
    },
  },
});

export const { addToCart } = productListSlice.actions;

export default productListSlice.reducer;
