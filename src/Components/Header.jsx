import React from 'react'
import { Link } from 'react-router-dom'
import Wishlist from '../Pages/Wishlist'

const Header = ({insideHome}) => {
  return (
    <nav className='flex bg-violet-600 fixed w-full p-5 text-white'>
        <Link className='text-2xl font-bold' to={'/'}><i className="fa-solid fa-truck-fast me-1"></i>E-cart</Link>
        <ul className='flex-1 text-right'>
          { insideHome &&
        <li className='list-none inline-block px-5'><input style={{width:'300px'}} className='rounded p-2' type='text' placeholder='Search product here...'></input></li>
          }
        <li className='list-none inline-block px-5'><Link to={'/cart'}><i className='fa-solid fa-heart text-red-600'></i>Wishlist<span className='bg-black text-white rounded p-1'>0</span></Link></li>
        <li className='list-none inline-block px-5'><Link to={'/wishlist'}><i className='fa-solid fa-cart-plus text-red-600'></i>Wishlist<span className='bg-black text-white rounded p-1'>0</span></Link></li>
        </ul>
    </nav>
  )
}

export default Header