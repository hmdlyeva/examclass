import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios"

export const getAllData = createAsyncThunk('users/getusers', async () => {
  const response = await axios.get('http://localhost:5000/users')
  return response.data
})

const initialState = {
  products: []
}

export const counterSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      console.log('payload: ',action.payload)
      state.products = [...action.payload];
    })
  },
})

export const { } = counterSlice.actions

export default counterSlice.reducer