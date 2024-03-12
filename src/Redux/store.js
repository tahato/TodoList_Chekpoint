import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './Slices/TaaskSlice'
export default configureStore({
    reducer:{
        task:taskReducer,
    },
})