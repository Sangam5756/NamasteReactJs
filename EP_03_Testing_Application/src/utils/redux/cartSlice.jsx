import { createSlice, current } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: []
    },

    reducers: {
        addItems: (state, action) => {
            state.items.push(action.payload)
        },
        removeItems: (state) => {
            state.items.pop();
        },
        clearItems: (state) => {
            // console.log(state)
            // console.log(current(state))
            // state.items.length = 0;
            return {items:[]};
        }

    }
})

export const { addItems, removeItems, clearItems } = cartSlice.actions;

export default cartSlice.reducer;