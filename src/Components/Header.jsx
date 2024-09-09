import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { logo, user_icon } from "../utils/constants";
import { useDispatch } from "react-redux";
import { toggleSideBar } from "../utils/sideBarSlice";
import { MdSafetyCheck } from "react-icons/md";
import { isPending } from "@reduxjs/toolkit";

const Header = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {

    // Make A APi Call After Ever Key Press
    // But if the difference between 2 Api Calls is < 200ms
    // decline the api call


    // Debouncing...

    const timer = setTimeout(() => getSuggestions(), 200);

    return () => {
        clearTimeout(timer);
    }

  }, [searchQuery]);


// - key - i
//    - Re-render the search component
//    - useEffect();
//    -start timer => make api call after 200 ms

// - key press ip
//   -destroy the component (useEffect return method)
//   -re render the component
//   - useEffect()
//   - start timer => make a api call afetr 200ms

// - setTimeout(200) - make an api call

  const getSuggestions = async () => {
    console.log("Api Call -> " + searchQuery);
    const data = await fetch("http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=" + searchQuery);
    const json = await data.json();
    console.log(json[1]);
  }


  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <GiHamburgerMenu
          className="h-9 w-6 cursor-pointer"
          onClick={() => dispatch(toggleSideBar())}
        />

        <img className="h-8 mx-2 " src={logo} alt="Logo" />
      </div>

      <div className="col-span-10 text-center">
        <input
          className="w-1/2 border border-gray-400 rounded-l-full p-2"
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button className="border border-gray-400 rounded-r-full p-2">
          Search
        </button>
      </div>

      <div className="col-span-1">
        <img className="h-8" src={user_icon} alt="User" />
      </div>
    </div>
  );
};

export default Header;
