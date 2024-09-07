import { createSlice } from '@reduxjs/toolkit'


export const videoSlice = createSlice({
  name: 'videos',
  initialState : {
    y_videos : [],
  },
  reducers: {
     addVideos : (state, action) => {
        state.y_videos = action.payload
     }
  },
})


export const { addVideos } = videoSlice.actions;

export default videoSlice.reducer