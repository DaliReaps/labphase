import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'
import {updateuser } from '../redux/slices/userSlice'
const UserForm = ({id}) => {
const dispatch=useDispatch()
const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => {dispatch(updateuser({...data,userid:id}))}
  return (
<div style={{width:'40%',justifyContent:'center'}}>
 <form  onSubmit={handleSubmit(onSubmit)}>
    <input style={{width:'100px'}} type="text" placeholder="User firstname" {...register("firstname", {required: true})} />
    <input style={{width:'100px',alignItems: 'center'}} type="text" placeholder="User lastname" {...register("lastname", {required: true})} />
    <input style={{width:'100px'}} type="text" placeholder="User role" {...register("role", {required: true})} />
    <input style={{width:'100px'}} type="text" placeholder="User email" {...register("email", {required: true})} />
    <input style={{width:'100px'}} type="text" placeholder="User age" {...register("age", {required: true})} />
    <input style={{width:'100px'}} type="submit" />
  </form>
</div>
  )
}

export default UserForm