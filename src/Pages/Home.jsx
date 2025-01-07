import React, { useEffect } from 'react'
import Header from '../Components/Header'
import { Link } from 'react-router-dom'
import { fetchProducts } from '../redux/slices/productSlice'
import { useDispatch } from 'react-redux'

const Home = () => {
  const dispatch =useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])


  return (
    <>
    <Header insideHome={true}/>
    <div style={{padding:'100px'}} className='container px-4 mx-auto'>
        <div className='grid grid-cols-4 gap-4'>
            <div className='rounded border p-2 shadow'>
            <img width={'100%'} height={'200px'} src="https://tse1.mm.bing.net/th?id=OIP.jv53y4MAqO7XRbrZWhOfHgHaEK&pid=Api&P=0&h=180" alt=''/>
                <div className='text-center'>
                    <h3 className='text-xl font-bold'>product name</h3>
                    <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>View more...</Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home