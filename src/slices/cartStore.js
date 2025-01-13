// import { configureStore } from "@reduxjs/toolkit";
// import productSlice from './productSlice'
// import wishlistSlice from './cartSlice'


// const cartStore =configureStore({
//     reducer:{
//             productReducer: productSlice,
//             wishlistReducer: wishlistSlice
//     }
// })
// export default cartStore


import { configureStore } from "@reduxjs/toolkit";
import productSlice from './productSlice';
import wishlistSlice from './wishlistSlice'; // Correct the import if needed
import cartSlice from './cartSlice'

const cartStore = configureStore({
  reducer: {
    productReducer: productSlice,
    wishlistReducer: wishlistSlice,
    cartReducer:cartSlice
  },
});

export default cartStore;
