import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  logo,
  user_icon,
  YOUTUBE_SEARCH_SUGGESTIONS_API,
} from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideBar } from "../utils/sideBarSlice";
import { addToCache } from "../utils/searchSlice"

const Header = () => {
  const dispatch = useDispatch();

  const [searchQuery, setSearchQuery] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search)

  useEffect(() => {
    // Debouncing...

    const timer = setTimeout(() => {
        if(searchCache[searchQuery]) {
            setSuggestions(searchCache[searchQuery]);
        }
        else{
            getSearchSuggestions();
        }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log("Api Call -> " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const json = await data.json();
    console.log(json[1]);
    setSuggestions(json[1]);

    // Update

    dispatch(addToCache({
      [searchQuery]: json[1],
    }))
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <GiHamburgerMenu
          className="h-9 w-6 cursor-pointer"
          onClick={() => dispatch(toggleSideBar())}
        />

        <img className="h-8 mx-2 " src={logo} alt="Logo" />
      </div>

      <div className="col-span-10">
        <div>
          <input
            className="w-1/2 border border-gray-400 rounded-l-full p-2 px-5"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 rounded-r-full p-2">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="fixed bg-white py-2 px-5 w-[41rem] shadow-lg rounded-lg border border-gray-100 ">
            <ul>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-2 shadow-sm hover:bg-gray-100 "
                >
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img className="h-8" src={user_icon} alt="User" />
      </div>
    </div>
  );
};

export default Header;
