import React from 'react'
import {Link } from "react-router-dom"
import { logout } from '../redux/slices/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import './Navbar.css'

const Navbar = () => {
    const dispatch=useDispatch()
    const {isAuth}=useSelector(state=>state.user)
  return ( <>{
        isAuth? 
        <div className="navigationBar" id="nv">
        <Link to ="/contacts"  style= { { textDecoration: 'none'}}>Contacts</Link>
        <Link to ="/menus"  style= { { textDecoration: 'none' }}>Menus</Link>
        <Link to ="/order"  style= { { textDecoration: 'none' }}>Order</Link>
        <button style={{backgroundColor:'rgb(221, 26, 22)',width:'200px',borderRadius:'20px'}} onClick={()=>dispatch(logout())}>Log out</button></div> 
        :<div>
        <div className="navigationBar" id="nv">
        <div><Link to="/login"  style= { { textDecoration: 'none' }}>Login</Link></div>
        <div><Link to ="/register"  style= { { textDecoration: 'none' }}>Register</Link></div>
        <div> <Link to ="/contacts"  style= { { textDecoration: 'none' }}>Contacts</Link></div>
        <div><Link to ="/menus"  style= { { textDecoration: 'none' }}>Menus</Link></div>
        
       
        
        
        
        </div>
        
        </div>
        }
   
   </> )
}

export default Navbar