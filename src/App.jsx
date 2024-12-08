import React from 'react'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
// In your App.js or index.js
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import AboutUs from './Pages/AboutUs';
import Footer from './Components/Footer';
import Signup from './Pages/Signup';
import './App.css'
import LoginPage from './Pages/LoginPage';
import ContactUs from './Pages/ContactUs';
import Homepage from './Pages/Homepage';
import ProfilePage from './Pages/ProfilePage';


const App = () => {
  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Homepage/>}>
        <Route path='/' element={<Home/>}/>

       <Route path='/about' element={<AboutUs/>}/>
     
      
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/userprofile' element={<ProfilePage/>}/>
      </Route>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/Login' element={<LoginPage/>}/>
    </Routes>
   
     
    </BrowserRouter>
  )
}

export default App
