import reducer from "./reducer/reducer";
import { configureStore } from "@reduxjs/toolkit";
const store:any = configureStore({
    reducer:{
        reducer
    }
})
export default store