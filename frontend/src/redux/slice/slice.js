import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const getAllData = createAsyncThunk('users/getusers', async () => {
  const response = await axios.get('http://localhost:5000/users')
  return response.data
})

export const postData = createAsyncThunk('users/postuser', async (newdata) => {
  const response = await axios.post(`http://localhost:5000/users`, newdata)
  return response.data

})

export const deleteData = createAsyncThunk('users/deleteuser', async (id) => {
  const response = await axios.delete(`http://localhost:5000/users/${id}`)
  console.log('deleted')
  return response.data

})


const initialState = {
  products: [],
  basketprod: JSON.parse(localStorage.getItem("cart")) || [],
  wishlistprod: JSON.parse(localStorage.getItem("wishlist")) || []
}

export const counterSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addTocart: (state, action) => {
      console.log(action.payload)
      const { _id, prodname, detail, imagecard } = action.payload
      let cartProdIndex = state.basketprod.findIndex((prod) => prod._id === _id)
      if (cartProdIndex !== -1) {
        state.basketprod[cartProdIndex].count += 1
      }
      else {
        state.basketprod = [
          ...state.basketprod,
          { _id, prodname, detail, imagecard, count: 1 }
        ]
      }
      localStorage.setItem("cart", JSON.stringify(state.basketprod))
    },

    remvTocart: (state, action) => {
      console.log(action.payload)
      const { _id } = action.payload
      let cartProdIndex = state.basketprod.findIndex((prod) => prod._id === _id)
      if (cartProdIndex !== -1) {
        if (state.basketprod[cartProdIndex].count > 1) {

          state.basketprod[cartProdIndex].count -= 1
        }
        else {
          state.basketprod = state.basketprod.filter((prod) => prod._id !== _id)
        }
        localStorage.setItem("cart", JSON.stringify(state.basketprod))
      }
    },
    deleteCart: (state, action) => {
      const { _id } = action.payload
      state.basketprod = state.basketprod.filter((prod) => prod._id !== _id)
      localStorage.setItem("cart", JSON.stringify(state.basketprod))
    },


    addToWish: (state, action) => {
      console.log(action.payload)
      const { _id, prodname, detail, imagecard } = action.payload
      let cartProdIndex = state.wishlistprod.findIndex((prod) => prod._id === _id)
      if (cartProdIndex !== -1) {
        state.wishlistprod = state.wishlistprod.filter((prod) => prod._id !== _id)
      }
      else {
        state.wishlistprod = [
          ...state.wishlistprod,
          { _id, prodname, detail, imagecard }

        ]
      }
      localStorage.setItem("wishlist", JSON.stringify(state.wishlistprod))
    },


  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.products = [...action.payload];
    })
    builder.addCase(postData.fulfilled, (state, action) => {
      state.products.push(action.payload);
    })
    builder.addCase(deleteData.fulfilled, (state, action) => {
      state.products = state.products.filter((prod) => prod._id !== action.payload._id)
    })
  },
})

export const { addTocart, addToWish, remvTocart, deleteCart } = counterSlice.actions

export default counterSlice.reducer