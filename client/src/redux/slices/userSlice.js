import {createSlice,createAsyncThunk, configureStore} from"@reduxjs/toolkit"
import axios from "axios"

export const signup= createAsyncThunk("/api/register",
async(info,rejectWithValue)=>{
    try {
    const res=await axios.post("/register",info)
    return res.data
} catch (errors) {
    return rejectWithValue(errors.response.data.msg)
}
})
export const signin= createAsyncThunk("/api/login",
async(info,rejectWithValue)=>{
    try {
    const res=await axios.post("/login",info)
    return res.data
} catch (errors) {
    return rejectWithValue(errors)
}
})


export const getusers= createAsyncThunk("/api/getusers",
async(info,rejectWithValue)=>{
    try {
    const res=await axios.get("/getusers",{
        headers:{
            token:localStorage.getItem("token")
        }
    })
    console.log(res.data)
    return res.data
} catch (errors) {
    return rejectWithValue(errors)
}
})

export const deleteuser= createAsyncThunk("/api/deleteuser/:id",
async(info,{rejectWithValue,dispatch})=>{
    try {
    const res=await axios.delete(`/deleteuser/${info}`,{
        headers:{
            token:localStorage.getItem("token")
        }})
    dispatch(getusers())
    return res.data
} catch (errors) {
    return rejectWithValue(errors)
}
})


export const updateuser= createAsyncThunk("/api/updateuser/:id",
async(info,{rejectWithValue,dispatch})=>{
    try {
    const res=await axios.put(`/updateuser/${info.userid}`,info,{
        headers:{
            token:localStorage.getItem("token")
        }})
    dispatch(getusers())
    return res.data
} catch (errors) {
    return rejectWithValue(errors)
}
})

export const selforder= createAsyncThunk("/api/selforder",
async(info,rejectWithValue)=>{
    try {
    const res=await axios.get("/selforder",{
        headers:{
            token:localStorage.getItem("token")
        }
    })
    console.log(res.data)
    return res.data
} catch (errors) {
    return rejectWithValue(errors)
}
})

const userSlice=createSlice({
    name:"user",
    initialState:{
        userdata:[],
        allusers:[{}],
        orderdata:[],
        isLoading:false,
        token:localStorage.getItem("token")||null,
        isAuth:localStorage.getItem("isAuth")||false,
        isAuth:localStorage.getItem("isAdmin")||false
    },
    reducers:{logout:(state)=>{
            localStorage.removeItem('isAuth')
            localStorage.removeItem('token')
            state.isAuth=false
            state.token=null
            state.isAdmin=false


    }},
    extraReducers:{[signup.pending]:(state)=>{state.isLoading=true},
    [signup.fulfilled]:(state,action)=>{state.isLoading=false
    state.userdata=action.payload.user
    state.token=action.payload.token
    localStorage.setItem("token",state.token)
    localStorage.setItem("isAuth",state.isAuth)
},
[signup.rejected]:(state)=>{state.isLoading=false 
    state.isAuth=false
state.token=null},
[signin.pending]:(state)=>{state.isLoading=true},
    [signin.fulfilled]:(state,action)=>{
        (action.payload.user.role==="admin")? 
        state.isAdmin=true : state.isAdmin=false
        localStorage.setItem("admin",state.isAdmin)
    state.isLoading=false
    state.userdata=action.payload.user
    state.token=action.payload.token
    state.isAuth=true
    localStorage.setItem("token",state.token)
    localStorage.setItem("isAuth",state.isAuth)
},
[signin.rejected]:(state)=>{state.isLoading=false 
state.isAuth=false
state.token=null
state.isAdmin=false},


[getusers.pending]:(state)=>{state.isLoading=true},
[getusers.fulfilled]:(state,action)=>
{state.isLoading=false
state.allusers=action.payload.usersget
},
[getusers.rejected]:(state)=>{state.isLoading=false 
},
[deleteuser.pending]:(state)=>{state.isLoading=true},
[deleteuser.fulfilled]:(state,action)=>
{state.isLoading=false
},
[deleteuser.rejected]:(state)=>{state.isLoading=false 
},

[selforder.pending]:(state)=>{state.isLoading=true},
[selforder.fulfilled]:(state,action)=>{state.isLoading=false
state.orderdata=action.payload.orderself
},
[selforder.rejected]:(state)=>{state.isLoading=false 
}


}
    
})






export default userSlice.reducer
export const {logout}=userSlice.actions