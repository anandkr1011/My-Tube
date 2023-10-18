import React, { useEffect, useState } from "react";
import { toggleMenu } from "../utils/aapSlice";
import { useDispatch, useSelector } from "react-redux";

import { YOUTUBE_SEARCH_API } from "../utils/Constant";
import { cacheResults } from "../utils/searchSlice";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { Link } from "react-router-dom";

const Head = () => {
  const { transcript } = useSpeechRecognition();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSugestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSugestion = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      // console.log(json[1]);
      setSuggestions(json[1]);
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery) {
      <Link to="`/search/${searchQuery}`"></Link>;
      setSearchQuery("");
    }
  };

  useEffect(() => {
    if (transcript) {
      <Link to="`/search/${transcript}`"></Link>;
      setSearchQuery(transcript);
    }
  }, [transcript]);

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="hamburger"
          src="https://t3.ftcdn.net/jpg/01/09/45/80/240_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg"
        />
        <a href="/">
          <img
            className="h-8 mx-2"
            alt="youtube-logo"
            src="data:image/png;base64,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"
          />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <input
          value={searchQuery}
          className=" px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          placeholder="Search"
          onChange={(e) => setSearchQuery((prevSearchQuery) => e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
        />
        <button
          className="border border-gray-400 p-2 rounded-r-full bg-gray-100"
          onClick={(e) => {
            handleSearch(e);
          }}
        >
          🔍
        </button>

        <button
          className="p-[8px] ml-6 rounded-full bg-gray-200 hover:bg-gray-300"
          onClick={SpeechRecognition.startListening}
        >
          🎙️
        </button>

        {showSuggestions && (
          <ul className="fixed bg-white my-0 py-2 px-3 w-1/3 shadow-lg  rounded-lg border border-gray-10">
            {suggestions.map((s) => (
              <li key={s} className="py-2   hover:bg-gray-100">
                🔍 {s}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <img
          className="h-8 col-span-1"
          alt="user-iocn"
          src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
        />
      </div>
    </div>
  );
};

export default Head;
