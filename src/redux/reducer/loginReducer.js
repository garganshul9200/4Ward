import { createSlice } from "@reduxjs/toolkit";

export const loginReducer = createSlice({
    name: 'loginReducer',
    initialState: {
        status: false,
    },

    reducers: {
        checker:(state, action) => {
            state.status = action.payload
        }
    }

})

export const {checker} = loginReducer.actions
export default loginReducer.reducer