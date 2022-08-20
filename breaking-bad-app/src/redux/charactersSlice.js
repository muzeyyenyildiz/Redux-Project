import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCharacters = createAsyncThunk('characters/getCharacters', async ()=>{
  const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}characters?limit=10`)
  return res.data
});


export const charactersSlice = createSlice({
  name: 'characters',
  initialState: {
    items:[]
  },
  reducers: {},
  extraReducers:{
    [fetchCharacters.fulfilled]: (state,action) =>{
      console.log(action.payload)
    }
  }
   
  
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = charactersSlice.actions

export default charactersSlice.reducer