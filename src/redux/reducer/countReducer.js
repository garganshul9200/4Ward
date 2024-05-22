import { createSlice } from "@reduxjs/toolkit";

const countReducer=createSlice({
    name:'hello',
    initialState:{
        val:0
    },
    reducers:{
        add:(state,action)=>{
            state.val=action.payload +1
        },

        subtract:(state, action)=>{
            state.val = action.payload-1
        }
    }
})
export const {add}=countReducer.actions
export default countReducer.reducer


    

    



