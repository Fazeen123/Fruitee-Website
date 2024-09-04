import {configureStore} from '@reduxjs/toolkit'
import CartSliceReducer from './Slices/CartSlice'
import UserDatasReducer from './Slices/UserSlice'
import FooterSliceReducer from './Slices/footerSlice'

export const Store =configureStore({
    reducer:{
        AddItem:CartSliceReducer,
        Userdatas:UserDatasReducer,
        footerContect:FooterSliceReducer,
    }
})

export default Store