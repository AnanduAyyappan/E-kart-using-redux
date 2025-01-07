import React from 'react'
import Header from '../Components/Header'

const Wishlist = () => {
  return (
<>
<Header/>
<div style={{padding:'100px'}} className='px-5'>
    <>
    <h1 className='text-4xl font-bold text-red-600'>My wishlist</h1>
    <div className='grid grid-cols-4 gap-4'>
        <div className='rounded border p-2 shadow'>
        <img width={'100%'} height={'200px'} src="https://tse1.mm.bing.net/th?id=OIP.jv53y4MAqO7XRbrZWhOfHgHaEK&pid=Api&P=0&h=180" alt=''/>
                <div className='text-center'>
                    <h3 className='text-xl font-bold'>product name</h3>
                    <button className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-500'></i></button>
                    <button className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-500'></i></button>
                </div>
        </div>
    </div>
    </>
</div>
</>  
)
}

export default Wishlist