import {createSlice,createAsyncThunk, configureStore} from"@reduxjs/toolkit"
import axios from "axios"

export const getmenus= createAsyncThunk("/api/getmenu",
async(info,rejectWithValue)=>{
    try {
    const res=await axios.get("/getmenu")
    console.log(res.data)
    return res.data
} catch (errors) {
    return rejectWithValue(errors)
}
})
export const addmenu= createAsyncThunk("/api/addmenu",
async(info,{rejectWithValue,dispatch})=>{
    try {
    const res=await axios.post("/addmenu",info,{
        headers:{
            token:localStorage.getItem("token")
        }})
        dispatch(getmenus())
    return res.data
} catch (errors) {
    return rejectWithValue(errors)
}
})

export const deletemenu= createAsyncThunk("/api/deletemenu/:id",
async(info,{rejectWithValue,dispatch})=>{
    try {
    const res=await axios.delete(`/deletemenu/${info}`,{
        headers:{
            token:localStorage.getItem("token")
        }})
    dispatch(getmenus())
    return res.data
} catch (errors) {
    return rejectWithValue(errors)
}
})


export const updatemenu= createAsyncThunk("/api/updatemenu/:id",
async(info,{rejectWithValue,dispatch})=>{
    try {
    const res=await axios.put(`/updatemenu/${info.menuid}`,info,{
        headers:{
            token:localStorage.getItem("token")
        }})
    dispatch(getmenus())
    return res.data
} catch (errors) {
    return rejectWithValue(errors)
}
})


const menuSlice=createSlice({
    name:"menu",
    initialState:{
        menudata:[{}],
        menus:[],
        isLoading:false,
        
    },
    reducers:{},
    extraReducers:{
    [getmenus.pending]:(state)=>{state.isLoading=true},

    [getmenus.fulfilled]:(state,action)=>{
    state.isLoading=false
    state.menudata=action.payload.menuget
    },

    [getmenus.rejected]:(state)=>{
    state.isLoading=false 
    },

    [addmenu.pending]:(state)=>{state.isLoading=true},

    [addmenu.fulfilled]:(state,action)=>{
    state.isLoading=false},
   [addmenu.rejected]:(state)=>{state.isLoading=false 
   },

    [deletemenu.pending]:(state)=>{state.isLoading=true},

    [deletemenu.fulfilled]:(state,action)=>{
    state.isLoading=false},

    [deletemenu.rejected]:(state)=>{state.isLoading=false 
    },[updatemenu.pending]:(state)=>{state.isLoading=true},

    [updatemenu.fulfilled]:(state,action)=>{
    state.isLoading=false},

    [updatemenu.rejected]:(state)=>{state.isLoading=false 
    }}
    
    
})


export default menuSlice.reducer
