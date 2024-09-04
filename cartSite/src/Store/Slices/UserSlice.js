import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userDatas:[],
}

export const userSliceCreation = createSlice({
    name:'users',
    initialState,
    reducers:{
        Adduserdata: (state,action)=>{ state.userDatas = [...state.userDatas,action.payload]}
    }
})

export const {Adduserdata} = userSliceCreation.actions;
export default userSliceCreation.reducer;