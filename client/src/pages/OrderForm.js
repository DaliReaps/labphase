import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch,useSelector } from 'react-redux'
import {postorder } from '../redux/slices/orderSlice'
import { useNavigate } from 'react-router-dom'
const OrderForm = ({id}) => {
const navigate=useNavigate()
const {isAuth}=useSelector(state=>state.user)
const dispatch=useDispatch()
const { register, handleSubmit, formState: { errors } } = useForm();
const onSubmit = data => {!isAuth? navigate("/register"):dispatch(postorder({...data,orderid:id}))
console.log(data)}
  return (
<div>
 <form onSubmit={handleSubmit(onSubmit)}>
    <input style={{width:'100px'}} type="text" placeholder="Number of Items" {...register("numberOfItems", {required: true})} />
    <input style={{width:'100px'}} type="submit" />
  </form>
</div>
  )
}

export default OrderForm