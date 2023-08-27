import React from 'react'
import {useSelector,useDispatch}from 'react-redux'
import { useEffect ,useState} from 'react'
import { selforder } from '../redux/slices/userSlice'
const Order = () => {
const {orderdata}=useSelector(state=>state.user)
const dispatch=useDispatch()
  useEffect(()=>{dispatch(selforder())},[])
  return (
    <div>
        {orderdata.map(el=><div >
            <h3>{el.numberOfItems}</h3>
            <h3>{el.item.name}</h3>

        </div>)}
    </div>
  )
}

export default Order