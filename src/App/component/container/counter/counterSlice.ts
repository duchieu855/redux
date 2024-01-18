import {  createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"



interface CounterState {
    value: number
}

const initialState : CounterState = {
    value:0
} 

export const counterSlice = createSlice(
    {
        name: "counter",
        initialState,
        reducers: {
           
            incrementByAmount : (state,action : PayloadAction<number>) => {state.value += action.payload}
        }
    }
)


export const {incrementByAmount} = counterSlice.actions



export default counterSlice.reducer