import { configureStore } from '@reduxjs/toolkit'
import sideBarreducer from "./sideBarSlice"

export const aapStore = configureStore({
  reducer: {
    sideBar: sideBarreducer
  },
})