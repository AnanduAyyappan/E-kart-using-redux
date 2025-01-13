import React, { useEffect, useState } from 'react';
import Header from '../Components/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist } from '../slices/wishlistSlice';
import { addToCart } from '../slices/cartSlice';

const View = () => {
  const useCart=useSelector(state=>state.cartReducer)
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const dispatch=useDispatch()
  const userWishlist=useSelector(state=>state.wishlistReducer)
  console.log(id);
  console.log(product);
  
  

  useEffect(() => {
    if (sessionStorage.getItem('allproducts')) {
      const allProducts = JSON.parse(sessionStorage.getItem('allproducts'));
      const selectedProduct = allProducts.find((item) => item.id == id);
      setProduct(selectedProduct);
    }
  }, [id]);


  const handleWishlist=()=>{
    const existingProduct=userWishlist?.find(item=>item?.id==id)
    if(existingProduct){
      alert("product already in your wishlist!!!")
    }else{
      dispatch(addToWishlist(product))
    }
  }


  const handleCart = () => {
    console.log("Adding product to cart:", product); // Debugging
    dispatch(addToCart(product));
    const existingProduct = useCart?.find((item) => item?.id == id);
    if (existingProduct) {
      alert("The product quantity is incrementing!!!");
    } else {
      alert("Product added to cart!!!");
    }
  };
  
  return (
    <>
      <Header />
      <div className="flex flex-col mx-5">
        <div className="grid grid-col-2 items-center h-screen">
          <div>
            <img width="450px" height="150px" src={product?.thumbnail} alt="" />
            <div className="flex justify-between mt-5">
              <button onClick={handleWishlist} className="bg-blue-600 text-white p-2">Add to wishlist</button>
              <button onClick={handleCart} className="bg-green-600 text-white p-2">Add to Cart</button>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold">PID: {product?.id}</h3>
            <h1 className="text-5xl font-bold">{product?.title}</h1>
            <h4 className="font-bold text-red-600 text-2xl">$ {product?.price}</h4>
            <h4>Brand: {product?.brand}</h4>
            <h4>Category: {product?.category}</h4>
            <p>
              <span className="font-bold">Description</span>: {product?.description}
            </p>
            <h3 className="font-bold">Client Reviews</h3>
            {product?.reviews?.length > 0 ? (
  product?.reviews.map((item, index) => (
    <div key={index} className="shadow-border p-2 mb-2">
      <h5>
        <span className="font-bold">{item?.reviewerName}</span>: <span>{item?.comment}</span>
      </h5>
      <p>
        Rating: {item?.rating}
        <i className="fa-solid fa-star text-yellow-400"></i>
      </p>
    </div>
  ))
) : (
  <div>No Reviews yet!!!</div>
)}

          </div>
        </div>
      </div>
    </>
  );
};

export default View;
