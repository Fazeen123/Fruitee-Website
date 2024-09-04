import {createSlice} from '@reduxjs/toolkit'

const initialState={
    checkContect:"",
}

export const createCheckContactSlice = createSlice({
    name:'checkContect',
    initialState,
    reducers:{
        checkingContact: (state,action)=> { state.checkContect = action.payload },
    }
})

export const {checkingContact} = createCheckContactSlice.actions;
export default createCheckContactSlice.reducer;



