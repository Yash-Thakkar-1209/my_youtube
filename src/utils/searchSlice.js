import { createSlice } from '@reduxjs/toolkit'


export const searchSlice = createSlice({
  name: 'search',
  initialState : {
   
  },
  reducers: {
   
    addToCache: (state, action) => {
      // Merge Two Objects
        // state = Object.assign(state, action.payload);

        // OR

          return { ...state, ...action.payload }; // Return a new object
    }
  },
})


export const { addToCache } = searchSlice.actions;

export default searchSlice.reducer