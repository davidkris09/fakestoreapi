import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    total: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        reset: state => {
            state.value = 0
        },
        plusproduct: state => {
            state.total += 1
        },
        removeproduct: state => {
            state.total -= 1
        }
    }
})

export const {increment, decrement, reset, plusproduct, removeproduct} = counterSlice.actions
export default counterSlice.reducer