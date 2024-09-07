import { createSlice } from '@reduxjs/toolkit'


export const sideBarSlice = createSlice({
  name: 'sideBar',
  initialState : {
    showSlideBar: true,
  },
  reducers: {
     toggleSideBar : (state, action) => {
        state.showSlideBar = !state.showSlideBar 
     },
     closeSideBar: (state) => {
      state.showSlideBar = false
     }
  },
})


export const {  toggleSideBar, closeSideBar } = sideBarSlice.actions;

export default sideBarSlice.reducer