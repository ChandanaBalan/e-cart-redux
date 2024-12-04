import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name : 'wishlist',
    initialState : [],
    reducers:{
        //to add items to the state
        addWishlistItems : (state, action)=>{
            state.push(action.payload)
        }
    }
})

export const {addWishlistItems} = wishlistSlice.actions

export default wishlistSlice.reducer