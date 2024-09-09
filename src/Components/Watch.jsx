import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeSideBar } from "../utils/sideBarSlice";
import { useSearchParams } from "react-router-dom";
import CommentContainer from "./CommentContainer";

const Watch = () => {
  const dispatch = useDispatch();

  let [searchParams, setSearchParams] = useSearchParams();

  console.log(searchParams.get("v"))

  useEffect(() => {
    dispatch(closeSideBar());
  });


  return (
    <div>
    <div>
    <iframe
        width="900"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v") }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
    <CommentContainer />
    </div>
  );
};

export default Watch;
