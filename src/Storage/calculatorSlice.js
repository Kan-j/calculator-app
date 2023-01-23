import { createSlice } from "@reduxjs/toolkit";

export const calculations = createSlice({
    name: "calculations",
    initialState: {
        num : "0"
        
    },
    reducers: {
        PerformOperation: (state, action) => {
            state.num = action.payload
        },
    }
})




export const {PerformOperation} = calculations.actions
export const selectAllCalculations = (state) => state.calculations
export default calculations.reducer

// Reset: {
//     reducer: (state, action) => {
//         state.calc.append(action.payload)
//     },
//     prepare: (value) => {
//         return {
//             payload: {
//                 value: value
//             }
//         }
//     }

// }