import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"



interface StyleProductList {
    id: number;
	title: string;
	thumbnailUrl: string;
	price: number;
	quantity: number;
}

const initialState : StyleProductList[] = []

export const productList = createSlice(
    {
        name: "fetchProductList",
        initialState,
        reducers: {
           
        },
        extraReducers:  
        builder => builder.addCase(fetchProductList.fulfilled, (state,action)=> {
            return state=action.payload
        }).addCase(loadProductList.fulfilled, (state,action)=> {
            console.log("state",state,"action", action)
            return action.payload
        })
    }
)

export const fetchProductList = createAsyncThunk(
    "fetchProductList/fetchProductList",
    async ()=>{
        try{
            const res = await axios.get("http://localhost:3000/api/products")
            return res.data;
        }catch (err) {
            console.log(err)
        }
    }
)
export const loadProductList = createAsyncThunk(
    "fetchProductList/loadProductList",
    async ()=>{
        try{
            const res = await axios.get("http://localhost:3000/api/products")
            console.log("loadProductList",res)
            return res.data;
        }catch (err) {
            console.log(err)
        }
    }
)

export const updateProductList = createAsyncThunk(
    "fetchProductList/updateProductList",
    async(id : number)=>{
        try {
        const res = await axios.post("http://localhost:3000/api/products", {id})

            console.log("update",res.data);
            
        } catch (err) {
            console.log(err)
        }
    }
)



export default productList.reducer