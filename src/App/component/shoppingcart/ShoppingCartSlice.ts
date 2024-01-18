import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
        },
        extraReducers: (builder)=> {
            builder.addCase(fetchProducts.fulfilled , (state,action) =>{
                return state = action.payload
            })
        }
    }
)

export const addProduct = createAsyncThunk(
    "shoppingCart/addProduct", 
    async (product : StyleProduct)=>{
        try {
            
            const newProduct = {...product, quantity: 1}
            const res = await axios.post("http://localhost:3000/api/shoppingcart", newProduct)
        } catch (error) {
            console.log(error)
        }
    }
)
export const fetchProducts = createAsyncThunk(
    "shoppingCart/fetchProducts",
    async ()=>{
        try {
            const response=await axios.get('http://localhost:3000/api/shoppingcart')
            console.log(response.data)
            return response.data;
        } catch (err) {
            console.log(err)
        }
    }
)

export const {addToCart} = shoppingCartSlice.actions

export default shoppingCartSlice.reducer