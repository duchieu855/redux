import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StyleProduct {
        	id: number;
        	title: string;
        	thumbnailUrl: string;
            price:number;
            quantity: number;
}

const initialState :StyleProduct[] = []

export const shoppingCartSlice = createSlice(
    {
        name:"shoppingCart",
        initialState,
        reducers: {
            addToCart:(state , action :PayloadAction<StyleProduct> ) => {
                const product = action.payload ;
                if(state.some((item) => item.id === product.id)) {
                    const index = state.findIndex((item) => item.id===product.id)
                     state[index].quantity += 1
                     return state
                } else {
                    return [...state,product]
                }
            }
        }
    }
)

export const {addToCart} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer