import { combineReducers, configureStore } from "@reduxjs/toolkit";
import account from "../features/auth/auth";
import { persistReducer,FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist'
import storage from "redux-persist/lib/storage";
import counterSlice from "../features/counter/counterSlice";
import filter from "../features/product/filter";
import product from "../features/product/singleProduct"
import addCart from "../features/product/cart";
import { persistStore } from 'redux-persist';

const persistedConfig = {
    key: 'app',
    storage,
}

const combinedReducers = combineReducers({
    counter: counterSlice,
    filter: filter,
    singleProduct: persistReducer(persistedConfig, product),
    cart: persistReducer(persistedConfig, addCart),
    auth: account,
})

export const store = configureStore({
    reducer: combinedReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    })
})

export const persistor = persistStore(store)