// import { createSlice } from "@reduxjs/toolkit";

// const wishlistSlice =createSlice({
//     name:'wishlist',
//     initialState:[],
//     reducers:{
//         addToWishlist: (state,actionFromView)=>{
//             state.push(actionFromView)
//         },
//         removeItem: (state,actionFromWishlist)=>{
//             return state.filter(item=>item.id!=actionFromWishlist.payload)
//         }
//     }
// })

// export const {addToWishlist,removeItem}=wishlistSlice.actions
// export default wishlistSlice.reducer


import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: [],
  reducers: {
    addToWishlist: (state, actionFromWishlist) => {
      // Add item to wishlist (action.payload should contain the item)
      state.push(actionFromWishlist.payload);
    },
    removeItem: (state, actionFromWishlist) => {
      // Remove item from wishlist by filtering out the matching ID
      return state.filter((item) => item.id !== actionFromWishlist.payload);
    },
  },
});

export const { addToWishlist, removeItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
