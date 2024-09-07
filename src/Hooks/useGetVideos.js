import React, { useEffect } from 'react'
import {YOUTUBE_VIDEOS_API} from "../utils/constants"
import { useDispatch } from 'react-redux'
import { addVideos } from '../utils/videoSlice';

const useGetVideos = () => {
   
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos()
  },[])

  const getVideos = async () => {

    const data = await fetch(YOUTUBE_VIDEOS_API );
    const json = await data.json();
    dispatch(addVideos(json.items))
  }


}

export default useGetVideos