import React from 'react'
import Header from '../Components/Header'


const View = () => {
  return (
    <>
    <Header/>
    <div className='flex flex-col mx-5'>
        <div className='grid grid-col-2 items-center h-screen'>
            <img width={'450px'} height={'200px'} src="" alt=""/>
            <h1 className='font-bold'>PID :id</h1>
            <h1 className='text-5xl font-bold'>Poduct Name</h1>
            <h4 className='font bold text-red-600 text-2xl'>$ 250</h4>
            <h4>Brand : brand</h4>
            <h4>Category : catgory</h4>
            <p>
                <span className='font-bold'>Description</span>:
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate amet perferendis omnis provident voluptate, atque eveniet tempora? Quod sunt iure rerum perferendis aperiam, nisi ab magni maiores eum harum earum?
                Quis, mollitia quo. Quas pariatur expedita delectus eligendi architecto ipsum doloremque quisquam doloribus veniam eos ullam accusamus atque facilis quia ipsam possimus iste harum, debitis unde nulla repellendus at! Rem?
                Reprehenderit corporis ex officiis fugit illo facere aspernatur dolorum? Placeat, impedit? Neque maxime accusamus ut id, rerum voluptas nam fugiat suscipit saepe nulla soluta in animi non magnam dolores iste.
                <div className='flex justify-between mt-5'>
                <button className='bg-blue-600 text-white p-2'>Add to wishlist</button>
                <button className='bg-green-600 text-white p-2'>Add to Cart</button>
                </div>
            </p>
        </div>
    </div>
    </>
  )
}

export default View