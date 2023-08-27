import {configureStore} from '@reduxjs/toolkit'
import userReducer from "./slices/userSlice"
import menuReducer from "./slices/menuSlice"
import orderReducer from "./slices/orderSlice"

export default configureStore({reducer:{user:userReducer, menu:menuReducer, order:orderReducer}})