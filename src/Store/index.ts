import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./Slice/uiSlice";
import authSlice from "./Slice/authSlice";
import restrantSlice from "./Slice/restrantSlice";
import searchSlice from "./Slice/searchSlice";
import cartSlice from './Slice/cartSlice';


const store=configureStore({

    reducer:{
        ui:uiSlice,
        auth:authSlice,
        restrants:restrantSlice,
        cart:cartSlice,
        search:searchSlice
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;