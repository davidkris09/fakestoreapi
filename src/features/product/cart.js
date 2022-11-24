import { createSlice, current } from "@reduxjs/toolkit";

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
        addsameproduct: (state, action) => {
            let update = current(state.cart).map(value => {
                if(value.select.id === action.payload.select.id){
                    return {...value, count: ++action.payload.count} 
                }
                return value
            })
            state.cart = update
        },
        removecart: (state,action) => {
            let id = state.cart.indexOf(action.payload)
            state.cart.splice(id, 1)
        }
    }
})

export const {addcart, addsameproduct, removecart} = addCart.actions
export default addCart.reducer