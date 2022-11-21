import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    product: [],
}

export const singleProduct = createAsyncThunk('singleProduct', async (id) => {
    return axios.get(`https://fakestoreapi.com/products/${id}`)
          .then(res => res.data)
})

export const product = createSlice({
    name: 'product',
    initialState,
    extraReducers: {
        [singleProduct.fulfilled]: (state,action) => {
            state.product= action.payload
        }
    }
})

export default product.reducer