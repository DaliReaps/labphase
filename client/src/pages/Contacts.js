import React from 'react'
import './Contacts.css'
import instalogo from'../instagram.png'
import phonelogo from'../phone.png'
import gmaillogo from'../gmail.png'
import facebooklogo from'../facebook.png'
const Contacts = () => {
  
  return (
    <div className='contact' style={{
      backgroundImage:"url('https://cdn.wallpapersafari.com/49/52/3gLEdk.jpg')"
      ,backgroundSize:"100vw",
      height:"700px",
      backgroundRepeat:"no-repeat"
  }}>
    <div className='horizontaldiv'><img src={instalogo}/><h1>Follow our instagram page </h1></div>
    <div className='horizontaldiv'><img src={gmaillogo}/><h1>chaouch.dali1212@gmail.com</h1></div>
    <div className='horizontaldiv'><img src={phonelogo}/><h1>216 29513774</h1></div>
    <div className='horizontaldiv'><img src={facebooklogo}/><h1>Follow our facebook page </h1></div>
    </div>
  )
}

export default Contacts