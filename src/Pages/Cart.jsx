import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, emptyCart, incrementQuantity, removeCartItem } from '../slices/cartSlice'

const Cart = () => {
    const [cartTotal,setCartTotal]=useState(0)
    const userCart = useSelector((state) => state.cartReducer);
    console.log("Cart State in Component: ", userCart);
    
    const dispatch=useDispatch()
    const navigate=useNavigate()
useEffect(()=>{
    if(userCart?.length>0){
        setCartTotal(userCart?.map(item=>item.totalPrice).reduce((a1,a2)=>a1+a2))
    }
},[userCart])

const handleDecrementQuantity=(product)=>{
    if(product?.quantity>1)
    {
        dispatch(decrementQuantity(product?.id))
    }else{
        dispatch(removeCartItem(product?.id))
    }
}

const checkOut=()=>{
    emptyCart()
    alert("Thank you for purchasing with us.........") 
    navigate('/')
}

  return (
<>
<Header/>
<div style={{paddingTop:'100px'}} className='px-5'>
    {
        userCart?.length>0?
    <>
    <h1 className='text-5xl font-bold text-blue-600'>Cart summary</h1>
    <div className='grid grid-col-3 gap-4 mt-5'>
        <div className='col-span-2 border rounded p-5 shadow'>
        <table className='table-auto w-full'>
                <thead>
                    <tr>
                <td className='font-semibold'>#</td>
                <td className='font-semibold'>Name</td>
                <td className='font-semibold'>Image</td>
                <td className='font-semibold'>Quantity</td>
                <td className='font-semibold'>Price</td>
                <td className='font-semibold'>...</td>
                </tr>
                </thead>
                <tbody>
    {userCart?.map((product, index) => (
        <tr key={product.id}> {/* Use unique `key` */}
            <td>{index + 1}</td>
            <td>{product?.title}</td>
            <td>
                <img width="40px" height="70px" src={product?.thumbnail} alt="" />
            </td>
            <td>
                <div>
                    <button onClick={() => handleDecrementQuantity(product)}>-</button>
                    <input
                        style={{ width: "40px" }}
                        type="text"
                        className="border p-1 rounded mx-2"
                        value={product?.quantity}
                        readOnly
                    />
                    <button onClick={() => dispatch(incrementQuantity(product.id))}>+</button>
                </div>
            </td>
            <td>${product?.totalPrice}</td>
            <td>
                <button
                    className="text-red-600"
                    onClick={() => dispatch(removeCartItem(product.id))}
                >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
    ))}
</tbody>

            </table>
            <div className='float-right mt-5'>
                <button className='bg-red-600 rounded p-2 text-white' onClick={()=>dispatch(emptyCart())}>Empty cart</button>
                <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>Shop More..</Link>
            </div>
            <div className='col-span-1'>
                    <div className='border rounded shadow p-5'>
                        <h2 className='text-2xl font bold my-4'>Total Amount : <span className='text-red-600'>{cartTotal}</span></h2>
                    <hr/>
                    <button className='bg-green-600 rounded p-2 text-white w-full mt-4' onClick={checkOut}>Check Out</button>
                    </div>
            </div>
        </div>
    </div>
    </>
    :
    <div className='flex justify-center items-center h-screen'>
        <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt=""/>
        <h1 className='text-3xl text-red-600'>Your cart is empty!!!</h1>
</div>
}
</div>
</>
)
}

export default Cart