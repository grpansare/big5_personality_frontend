import React from 'react'
import Home from './Pages/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './Components/Header';
import AboutUs from './Pages/AboutUs';
import LoginPage from './Pages/LoginPage';
import Footer from './Components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
    <Footer/>
     
    </BrowserRouter>
  )
}

export default App 