import { createSlice } from '@reduxjs/toolkit'


export const searchSlice = createSlice({
  name: 'search',
  initialState : {
   
  },
  reducers: {
   
    addToCache: (state, action) => {
      // Merge Two Objects
        state = Object.assign(state, action.payload)
    }
  },
})


export const { addToCache } = searchSlice.actions;

export default searchSlice.reducer