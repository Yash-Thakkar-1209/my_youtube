import React, { useEffect } from 'react'
import {YOUTUBE_VIDEOS_API} from "../utils/constants"
import { useDispatch } from 'react-redux'
import { addVideos } from '../utils/videoSlice';

const useGetVideos = () => {
   
  const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
    // getSearchData();
  },[])

  const getVideos = async () => {

    const data = await fetch(YOUTUBE_VIDEOS_API );
    const json = await data.json();
    dispatch(addVideos(json.items))
  }

  // const getSearchData = async () => {

  //   const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=namaste");
  //   const json = await data.json();
  //   console.log(json)
  // }


}

export default useGetVideos