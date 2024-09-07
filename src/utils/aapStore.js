import { configureStore } from '@reduxjs/toolkit'
import sideBarreducer from "./sideBarSlice"
import videosreducer from "./videoSlice"

export const aapStore = configureStore({
  reducer: {
    sideBar: sideBarreducer,
    videos : videosreducer
  },
})