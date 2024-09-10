import { configureStore } from '@reduxjs/toolkit'
import sideBarreducer from "./sideBarSlice"
import videosreducer from "./videoSlice"
import searchreducer from "./searchSlice"
import chatreducer from "./chatSlice"

export const aapStore = configureStore({
  reducer: {
    sideBar: sideBarreducer,
    videos : videosreducer,
    search : searchreducer,
    chat : chatreducer
  },
})