import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    value: [],
}

export const fetchCategoryID = createAsyncThunk('filter/fetchCategoryID', async (list) => {
    return axios.get(`https://fakestoreapi.com/products/category/${list}`)
          .then(res => res.data)
})

export const filter = createSlice({
    name: 'filter',
    initialState,
    extraReducers: {
        [fetchCategoryID.fulfilled]: (state,action) => {
            return {
                ...state,
                value: action.payload
            }
        }
    }
})

export default filter.reducer