import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux'
import {updatemenu } from '../redux/slices/menuSlice'
const Form = ({id}) => {
const dispatch=useDispatch()
const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => {dispatch(updatemenu({...data,menuid:id}))}
  return (
<div>
 <form onSubmit={handleSubmit(onSubmit)}>
    <input style={{width:'100px'}} type="text" placeholder="Menu name" {...register("name", {required: true})} />
    <input style={{width:'100px'}} type="text" placeholder="Menu description" {...register("description", {required: true})} />
    <input style={{width:'100px'}} type="text" placeholder="Menu category" {...register("category", {required: true})} />
    <input style={{width:'100px'}} type="text" placeholder="Image link" {...register("img", {required: true})} />
    <input style={{width:'100px'}} type="text" placeholder="Menu price" {...register("price", {required: true})} />
    <input style={{width:'100px'}} type="submit" />
  </form>
</div>
  )
}

export default Form