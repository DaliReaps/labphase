import logo from './logo.svg';
import './App.css';
import { Routes ,Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register'
import Menus from './pages/Menus'
import Contacts from './pages/Contacts'
import Navbar from './component/Navbar'
import {useSelector} from "react-redux"
import Dashboard from './pages/Dashboard'
import Order from './pages/Order';
function App() {
  const {isAdmin}=useSelector(state=>state.user)
  return (
    <div className="App" >
     {(isAdmin)?  null: <Navbar/>} 
      
      <Routes>
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/menus' element={<Menus/>} />
        <Route path='/contacts' element={<Contacts/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/order' element={<Order/>} />

      </Routes>
    </div>
  );
}

export default App;
