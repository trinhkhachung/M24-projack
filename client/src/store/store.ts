import reducer from "./reducer/reducer";
import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
    reducer:{
        reducer
    }
})
export default store