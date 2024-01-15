
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"


export const fetchData = createAsyncThunk(
    'list/product',
    async (payload) => {
        try {
            const response = await fetch("https://4ea31e68a6a44a538f4841f2092345e5.api.mockbin.io/", {method: "POST",headers: {
                'Access-Control-Allow-Origin':'*'
              }})
              const data = await response.json()
            return data
        } catch (error) {
                console.log(error)
        }
       
    }
)


const initialState = []

export const listSlice = createSlice(
    {
        name: "list",
        initialState,
        reducers: {
           
            incrementByAmount : (state,action : PayloadAction<number>) => {state.value += action.payload}
        },
        extraReducers: (builder) => {
            // Add reducers for additional action types here, and handle loading state as needed
            builder.addCase(fetchData.fulfilled, (state, action) => {
              // Add user to the state array
              return action.payload
            })
          },
    }
)

export const {incrementByAmount} = listSlice.actions



export default listSlice.reducer