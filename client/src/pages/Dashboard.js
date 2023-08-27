import React from 'react'
import './Dashboard.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { getmenus,addmenu,deletemenu,updatemenu } from '../redux/slices/menuSlice'
import { logout,getusers,updateusers,deleteuser } from '../redux/slices/userSlice'
import { getorders,deleteorder } from '../redux/slices/orderSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Form from "./Form.js"
import UserForm from "./UserForm.js"
import  "./UserCard.css"


const Dashboard = () => {
  const dispatch=useDispatch()
  const {allusers}=useSelector(state=>state.user)
  const {menudata,isLoading}=useSelector(state=>state.menu)
  const {orderdata}=useSelector(state=>state.order)
  const  [etat,setEtat]=useState({})
  useEffect(()=>{dispatch(getusers()) 
                 dispatch(getmenus())
                 dispatch(getorders())
  },[])
  
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {dispatch(addmenu(data))
    console.log(data)
    }
  
  return (
    <div className='container'>
      
      <div className='navbar'>
        <ul style={{display:'flex',flexDirection:'column'}}>
          <li onClick={()=>setEtat("Users")}>Users</li>
          <li onClick={()=>setEtat("Menus")}>Menus</li>
          <li onClick={()=>setEtat("Orders")}>Orders</li>
          <li onClick={()=>dispatch(logout())} >Logout</li>
        </ul>
      </div>
      <div className='content'>
      
      
        
{(etat=="Users")? <div><h2>Users</h2><div style={{display:'flex', flexWrap:'wrap',minWidth:'80vw'}}>
  
{allusers.map(el=><li className="cards_item" style={{maxWidth:'30%'}}>
      <div className="card">
        <div className="card_image"><img src="https://www.mts-wetlab.com/wp-content/uploads/2019/07/mts-testimonials-man.png" alt="person-icon "/></div>
        <div className="card_content">
          <div className="card_text">
            
                <p>Firstname:{el.firstname}</p>
                <p>Lastname:{el.lastname}</p>
                <p>Email:{el.email}</p>
                <p>Age:{el.age}</p>
                <p>Role:{el.role}</p>
                <Popup trigger=
                {<button style={{backgroundColor:'rgb(176, 176, 84)',width:'100px',borderRadius:'20px'}}> Update user </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                            <UserForm id={el._id}/>
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
            <button style={{backgroundColor:'rgb(176, 176, 84)',width:'100px',borderRadius:'20px'}} onClick={()=>dispatch(deleteuser(el._id))}>Delete </button>

          </div>
        </div>
      </div>
    </li>)}
    </div> </div>:
 (etat=="Menus")?<div><h2>Menus</h2><div style={{display:'flex', flexWrap:'wrap'}}>
  
  <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Menu name" {...register("name", {required: true})} />
      <input type="text" placeholder="Menu description" {...register("description", {required: true})} />
      <input type="text" placeholder="Menu category" {...register("category", {required: true})} />
      <input type="text" placeholder="Image link" {...register("img", {required: true})} />
      <input type="text" placeholder="Menu price" {...register("price", {required: true})} />
      <input type="submit" style={{backgroundColor:'rgb(176, 176, 84)',width:'200px',borderRadius:'20px'}}/>
    </form>
{menudata.map(el=><div className='menu'>
  
      <div style={{textAlign:'left'}}>
        <div style={{display:'flex',flexDirection:'row',left:'0'}}><h3> Name:</h3><h4> {el.name}</h4></div>
        <div style={{display:'flex',flexDirection:'row',left:'0',width:'80%'}}><h3> Description:</h3><h4> {el.description}</h4></div>
        <div style={{display:'flex',flexDirection:'row',left:'0'}}><h3> Category:</h3><h4> {el.category}</h4></div>
        <div style={{display:'flex',flexDirection:'row',left:'0'}}><h3> Price:</h3><h4> {el.price}$</h4></div>
      <h3>{el.rating}</h3>
      
      <div style={{display:'flex',justifyContent:'space-around',width:'60vw'}}>
      <Popup trigger=
                {<button style={{backgroundColor:'rgb(176, 176, 84)',width:'200px',borderRadius:'20px'}}> Update menu </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                            <Form id={el._id} />
                            </div>
                            <div>
                                <button onClick=
                                    {() => close()}>
                                        Close 
                                </button>
                            </div>
                        </div>
                    )
                }
            </Popup>
      
      <button  style={{backgroundColor:'rgb(176, 176, 84)',width:'200px',borderRadius:'20px'}} onClick={()=>dispatch(deletemenu(el.name))}>Delete </button>
      </div></div>
      <img src={`${el.img}`} style={{height:'300px',width:'300px'}}/>
      
      
      
      </div>)}
 </div></div>:(etat=="Orders")?<div><h2 >Orders</h2><div style={{minHeight: '100vh',minWidth:'80vw'}}>
 {orderdata.map(el=><div className='order' style={{display:'flex', flexWrap:'wrap'}}>
 <div style={{display:'flex',flexDirection:'row',left:'0'}}><h3> Name of item:</h3><h4> {el.item.name}</h4></div>
 <div style={{display:'flex',flexDirection:'row',left:'0'}}><h3> Number of items:</h3><h4> {el.numberOfItems}</h4></div>
 <div style={{display:'flex',flexDirection:'row',left:'0'}}><h3> Ordered At:</h3><h4> {el.createAt}</h4></div>
 <div style={{display:'flex',flexDirection:'row',left:'0'}}><h3> Client:</h3><h4> {el.owner.firstname}  {el.owner.lastname}</h4></div>
      
      <button style={{backgroundColor:'rgb(176, 176, 84)',width:'200px',borderRadius:'20px'}} onClick={()=>dispatch(deleteorder(el._id))}>Delete </button>
      </div>)}
  
  </div></div>
  :<div   style={{minWidth:'80vw',backgroundSize:'cover',backgroundRepeat:'no-repeat',backgroundImage:'url("https://image.freepik.com/free-vector/workspace-background-design_1322-50.jpg")'}}>
    <br></br><br></br><h1 style={{left:'0'}}>Work Space</h1></div> }
      </div>
     
      </div>
  )
}

export default Dashboard