import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SideBar = () => {

  const showSlideBar = useSelector((store) => store.sideBar.showSlideBar);

  // Early Return..

  if(!showSlideBar) return null; 
  
  // Another Way 👆🏼 to Show Component.

  return (
    <div className="p-5 shadow-lg w-48">
      <Link to="/"><h1 className="font-bold">Home</h1></Link>
      <ul>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default SideBar;
