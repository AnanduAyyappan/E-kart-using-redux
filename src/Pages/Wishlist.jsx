import React from 'react'
import Header from '../Components/Header'
import { removeItem } from '../slices/wishlistSlice'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../slices/cartSlice'

const Wishlist = () => {
    const userCart=useSelector(state=>state.cartReducer)
    const dispatch=useDispatch()
    const userWishlist=useSelector(state=>state.wishlistReducer)

const handleCart=(product)=>{
    dispatch(removeItem(product.id))
    dispatch(addToCart(product))
    const existingProduct=userCart?.find(item=>item?.id==product.id)
    if(existingProduct){
      alert("The product quantity is incrementing!!!")
    }else{
      alert("product added to cart!!!")
    }
  }

  return (
<>
<Header/>
<div style={{padding:'100px'}} className='px-5'>
    {
    userWishlist?.length>0?
    <>
    <h1 className='text-4xl font-bold text-red-600'>My wishlist</h1>
    <div className='grid grid-cols-4 gap-4'>
        {
            userWishlist?.map(product=>(
        <div className='rounded border p-2 shadow'>
        <img width={'100%'} height={'200px'} src={product?.thumbnail} alt=''/>
                <div className='text-center'>
                    <h3 className='text-xl font-bold'>{product?.title}</h3>
                    <div className='text-xl justify-evenly mt-3'>
                    <button onClick={()=>dispatch(removeItem(product?.id))}className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-500'></i></button>
                    <button onClick={()=>handleCart(product)}className='text-xl'><i className='fa-solid fa-cart-plus text-green-500'></i></button>
               </div>
                </div>
        </div>))
}
    </div>
    </>
    :
    <div className='flex justify-center items-center h-screen'>
        <img src="https://www.adanione.com/~/media/Foundation/Adani/emptyImages/empty_cart.gif" alt=""/>
        <h1 className='text-3xl text-red-600'>Your wishlist is empty!!!</h1>
</div>
}
</div>
</>  
)
}

export default Wishlist