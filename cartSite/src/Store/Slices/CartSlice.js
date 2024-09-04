import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    items:[]
}

export const CartSlice = createSlice ({
    name:"items",
    initialState,
    reducers:{
        AddItem:(state,action) =>{  state.items = [...state.items,action.payload]},
        RemoveItem:(state,action) =>{ state.items = state.items.filter((curr)=> curr.id!==action.payload)},
        totalAmount:(state,action) =>{}
    }
})

export const {AddItem,RemoveItem} = CartSlice.actions;
export default CartSlice.reducer;