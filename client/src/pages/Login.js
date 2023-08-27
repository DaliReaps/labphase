import React from 'react'
import { useForm } from 'react-hook-form';
import{useDispatch} from "react-redux"
import { signin } from '../redux/slices/userSlice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom'
const Login = () => {
  const navigate=useNavigate()
  const {isAdmin}=useSelector(state=>state.user)
  const dispatch=useDispatch()
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {console.log(data);
  dispatch(signin(data))}
  useEffect(()=>{if (isAdmin) navigate("/dashboard")},[isAdmin])
  console.log(errors);
  return (
    <div style={{
      backgroundImage:"url('https://cdn.wallpapersafari.com/49/52/3gLEdk.jpg')"
      ,backgroundSize:"100vw",
      height:"700px",
      backgroundRepeat:"no-repeat"
  }}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="email" placeholder="Email" {...register("email", {required: true})} />
      <input type="password" placeholder="Password" {...register("password", {required: true, max: 20, min: 6})} />
      <input type="submit" />
    </form>
    </div>
  )
}

export default Login