import { createSlice } from "@reduxjs/toolkit";


const menuSlice = createSlice({

    name:"menu",
    initialState:{
        items :[]
    },

    reducers:{

        setData :(state,action)=>{
            state.items =action.payload
        }
    }
})

    export const {setData} = menuSlice.actions;

export default menuSlice.reducer;