import { configureStore } from "@reduxjs/toolkit";
import {mainReducer} from "./slices/slice";


const store = configureStore({
    reducer:{
        main:mainReducer
    }
});

export {
    store
}