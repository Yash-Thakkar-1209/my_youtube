import { createSlice } from '@reduxjs/toolkit'


export const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState : {
    showSlideBar: true,
  },
  reducers: {
     toggleSideBar : (state, action) => {
        state.showSlideBar = !state.showSlideBar 
     }
  },
})


export const {  toggleSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer