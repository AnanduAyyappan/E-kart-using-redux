import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import View from './Pages/View'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Home from './Pages/Home'
import Pnf from './Pages/Pnf'
import Footer from './Components/Footer'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/:id/view' element={<View/>}/>
      <Route path='/*' element={<Pnf/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
