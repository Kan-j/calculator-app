import { configureStore } from "@reduxjs/toolkit";
import calculatorReducer from "./calculatorSlice"
export const store = configureStore({
    reducer: {
        calculations : calculatorReducer
    }
})