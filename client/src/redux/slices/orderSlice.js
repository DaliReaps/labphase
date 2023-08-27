import {createSlice,createAsyncThunk, configureStore} from"@reduxjs/toolkit"
import axios from "axios"

export const getorders= createAsyncThunk("/api/getorders",
async(info,rejectWithValue)=>{
    try {
    const res=await axios.get("/getorders",{
        headers:{
            token:localStorage.getItem("token")
        }})
    console.log(res.data)
    return res.data
} catch (errors) {
    return rejectWithValue(errors)
}
})

export const deleteorder= createAsyncThunk("/api/deleteorder/:id",
async(info,{rejectWithValue,dispatch})=>{
    try {
    const res=await axios.delete(`/deleteorder/${info}`,{
        headers:{
            token:localStorage.getItem("token")
        }})
    dispatch(getorders())
    return res.data
} catch (errors) {
    return rejectWithValue(errors)
}
})

// export const getusers= createAsyncThunk("/api/postorder",
// async(info,{rejectWithValue})=>{
//     try {
//     const res=await axios.post(`/postorder/${info}`,{
//         headers:{
//             token:localStorage.getItem("token")
//         }
//     })
//     console.log(res.data)
//     return res.data
// } catch (errors) {
//     return rejectWithValue(errors)
// }
// })

export const postorder= createAsyncThunk("/api/postorder",
async(info,rejectWithValue)=>{
    try {
    const res=await axios.post(`/postorder/${info.orderid}`,info,{
        headers:{
            token:localStorage.getItem("token")
        }
    })
    return res.data
} catch (errors) {
    return rejectWithValue(errors)
}
})

const orderSlice=createSlice({
    name:"order",
    initialState:{
        orderdata:[{}],
        isLoading:false,
        
    },
    reducers:{},
    extraReducers:{
    [getorders.pending]:(state)=>{state.isLoading=true},

    [getorders.fulfilled]:(state,action)=>{
    state.isLoading=false
    state.orderdata=action.payload.orderget
    },

    [getorders.rejected]:(state)=>{
    state.isLoading=false 
    },

    [deleteorder.pending]:(state)=>{state.isLoading=true},

    [deleteorder.fulfilled]:(state,action)=>{
    state.isLoading=false
    
    
    
   },

    [deleteorder.rejected]:(state)=>{state.isLoading=false 
    }}
    
})


export default orderSlice.reducer
