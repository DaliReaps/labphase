import React from 'react'
import Popup from 'reactjs-popup';
import './Menus.css'
import 'reactjs-popup/dist/index.css';
import OrderForm from './OrderForm.js';
import {useSelector,useDispatch}from 'react-redux'
import { useEffect ,useState} from 'react'
import { getmenus } from '../redux/slices/menuSlice'
import { useNavigate } from 'react-router-dom'


const Menus = () => {
  const {isAuth}=useSelector(state=>state.user)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(getmenus())},[])
  const {menudata,isLoading}=useSelector(state=>state.menu)
  const orderclick=(el)=>{console.log("hi")
  }
  return (
    <div className='menus' >
      <div >
      <h1>Have a look at our menus</h1>
      </div >
 <div className='appetizermenu'> 
 <h1>Appetizers</h1>
 <img style={{width:'100vw',height:'300px'}}
src="https://www.ntc.edu/sites/default/files/styles/news/public/2023-06/food-and-catering-news-header.jpg"
alt="new"
/>
  { menudata.filter(x=>x.category=="appetizer").map(el=><div >
     
    <div style={{display:'flex',justifyContent : 'space-between' }}><h3>{el.name}</h3><h3>{el.price}$</h3></div>  
          <div style={{display:'flex',justifyContent : 'space-between' }}><h5>{el.description}</h5> <h3>{el.rating}</h3></div>
      
  <Popup trigger=
                {<button style={{backgroundColor:'rgb(176, 176, 84)',width:'200px',borderRadius:'20px'}}> Add to Order </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                            <OrderForm id={el._id} />
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
      <hr /> 
      </div>  ) 
       }</div>
<div className='mainmenu'>
<h1>Main Dish</h1>
    <img style={{width:'100vw',height:'300px'}}
src="https://www.freewebheaders.com/wp-content/gallery/food/popular-food-meal-website-header.jpg"
alt="new"
/> { menudata.filter(x=>x.category=="mainmenu").map(el=><div >
    
    <div style={{display:'flex',justifyContent : 'space-between' }}><h3>{el.name}</h3><h3>{el.price}$</h3></div>  
          <div style={{display:'flex',justifyContent : 'space-between' }}><h5>{el.description}</h5> <h3>{el.rating}</h3></div>
          <Popup trigger=
                {<button style={{backgroundColor:'rgb(176, 176, 84)',width:'200px',borderRadius:'20px'}}> Add to Order </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                            <OrderForm id={el._id} />
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
      <hr /> 
      </div>  ) 
      }</div>

      <div className='drinkmenu'>
      <h1>Drinks</h1>
      <img style={{width:'100vw',height:'300px'}}
src="https://www.freewebheaders.com/wp-content/gallery/drinks/assorted-summer-drink-cocktails-website-header.jpg"
alt="new"
/>
      { menudata.filter(x=>x.category=="drinks").map(el=><div >
     
        <div style={{display:'flex',justifyContent : 'space-between' }}><h3>{el.name}</h3><h3>{el.price}$</h3></div>  
          <div style={{display:'flex',justifyContent : 'space-between' }}><h5>{el.description}</h5> <h3>{el.rating}</h3></div>
          <Popup trigger=
                {<button style={{backgroundColor:'rgb(176, 176, 84)',width:'200px',borderRadius:'20px'}}> Add to Order </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                            <OrderForm id={el._id} />
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
     <hr /> 
     </div>  ) 
     }</div>
      
      <div className='dessertmenu' >
      <h1>Desserts</h1>
      <img style={{width:'100vw',height:'300px'}}
src="https://www.freewebheaders.com/wp-content/gallery/desserts/fruits-dessert-header.jpg"
alt="new"
/>
         { menudata.filter(x=>x.category=="dessert").map(el=><div  >
          <div style={{display:'flex',justifyContent : 'space-between' }}><h3>{el.name}</h3><h3>{el.price}$</h3></div>  
          <div style={{display:'flex',justifyContent : 'space-between' }}><h5>{el.description}</h5> <h3>{el.rating}</h3></div>
     
     
     
          <Popup trigger=
                {<button style={{backgroundColor:'rgb(176, 176, 84)',width:'200px',borderRadius:'20px'}}> Add to Order </button>}
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div className='content'>
                            <OrderForm id={el._id} />
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
     <hr /> 
     

     
     </div>  ) 
     }</div>
      
      
    </div>
  )
}

export default Menus