import './App.css';
import React,{Component} from 'react';
import {Route,Routes} from 'react-router-dom';
import {Box} from '@mui/material';
import Navbar from './component/Navbar'
import Footer from './component/Footer';
import Home from './Pages/Home';
import ExerciseDetsil from './Pages/ExerciseDetsil';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Checkout from './component/Checkout';
import { AuthProvider, UserAuth } from './context/UserAuth';
import HeroBanner from './component/HeroBanner';
import PrivateRoute from './context/PrivateRoute';
import SideNavbar from './component/SideNavbar'
import Review from './component/Review';




 



function App() {
  
  return (
    
   <Box width='400px' sx={{width:{xl:'1488px'}}}m='auto'> 
   
   <AuthProvider>
    {/* <SideNavbar/> */}
    <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Index/>}/> */} 
        <Route path='/' element={<Login/>} />
        <Route path='/Home' element={<PrivateRoute> <Home/> </PrivateRoute>} />
        <Route path='/exercise/:id' element={<Checkout/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/HeroBanner' element={<HeroBanner/>} />
        <Route path='/Review' element={<Review/>} />
        
      </Routes>
      <Footer/>
      </AuthProvider>
      
   </Box>
  );
}

export default App;
