import { createSlice, createAsyncThunk, combineReducers } from "@reduxjs/toolkit";
import axios from 'axios'

const initialState = {
    loading: false,
    token: '',
}

export const authLogin = createAsyncThunk('auth/login', async (param) => {
    const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username: param.username,
        password: param.password
    })
    return response.data.token
})

export const authRegister = createAsyncThunk('auth/register', async (param) => {
    const response = await axios.post('https://fakestoreapi.com/users', {
        email: param.email,
        username: param.username,
        password: param.password,
        name: {
            firstname: param.firstname,
            lastname: param.lastname
        },
        phone: param.phone,
        address: {
            city: param.city,
            street: param.street,
            number: param.number,
            zipcode: param.zipcode,
            geolocation: {
                lat: param.lat,
                long: param.long
            }
        }
    })
    return JSON.parse(response.config.data)
})

export const getAllAccount = createAsyncThunk('auth/getAllAccount', async () => {
    return axios.get('https://fakestoreapi.com/users').then(res => res.data)
})

export const login = createSlice({
    name: 'login',
    initialState,
    reducers: {},
    extraReducers: {
        [authLogin.pending]: state => {
            state.loading = true
        },
        [authLogin.fulfilled]: (state,action) => {
            localStorage.setItem('token', JSON.stringify(action.payload))
            return {
                ...state,
                loading: false,
                token: action.payload
            }
        },
        [authLogin.rejected]: state => {
            state.loading = true
        }
    }
})

export const register = createSlice({
        name: 'register',
        initialState: {register: []},
        reducers: {},
        extraReducers: {
            [authRegister.pending]: state => {
                state.loading = true
            },
            [authRegister.fulfilled]: (state,action) => {
                return{
                    ...state,
                    loading: false,
                    register: action.payload
                }
            },
            [authRegister.rejected]: state => {
                state.loading = true
            }
        }
})

export const allAccount = createSlice({
    name: 'all',
    initialState: {all: []},
    extraReducers: {
        [getAllAccount.fulfilled]: (state,action) => {
            return {
                ...state,
                all: action.payload
            }
        }
    }
})

export default combineReducers({
    isLogin: login.reducer,
    isRegister: register.reducer,
    isAll: allAccount.reducer
})