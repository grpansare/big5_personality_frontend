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


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
    </Routes>
    <Footer/>
     
    </BrowserRouter>
  )
}

export default App
