import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

export const addCart = createSlice({
    name: 'addCart',
    initialState,
    reducers: {
        addcart: (state,action) => {
            state.cart.push(action.payload)
        },
    }
})

export const {addcart} = addCart.actions
export default addCart.reducer

// export const addCart = createAsyncThunk('addCart', async (param) => {
//     const response = await axios.post('https://fakestoreapi.com/carts', {
//         userId: localStorage.getItem('userid'),
//         date: new Date().toJSON().slice(0, 10),
//         products: param.productObj
//     })
//     return response.data
// })

// export const allCart = createAsyncThunk('allCart', async () => {
//     return axios.get(`https://fakestoreapi.com/carts/user/${localStorage.getItem('userid')}`).then(res => res.data)
// })

// export const newCart = createSlice({
//     name: 'newcart',
//     initialState,
//     extraReducers: {
//         [addCart.fulfilled]: (state,action) => {
//             return {
//                 ...state,
//                 cart: action.payload,
//             }
//         }
//     }
// })

// export const getAllCart = createSlice({
//     name: 'allcart',
//     initialState,
//     extraReducers: {
//         [allCart.fulfilled]: (state,action) => {
//             state.allcart = action.payload
//         }
//     }
// })

// export default combineReducers({
//     newcart: newCart.reducer,
//     allcart: getAllCart.reducer,
// })