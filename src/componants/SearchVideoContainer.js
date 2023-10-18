import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import MyContext from "../utils/searchTextContext";
import { SEARCH_URL, GOOGLE_API_KEY } from "../utils/Constant";
import Sidebar from "./Sidebar";
import SearchVideoCard from "./SearchVideoCard";
import { Shimmar } from "./Shimmar";

const SearchVideoContainer = () => {
  const [searchVideo, setSearchVideo] = useState([]);

  const params = useParams();
  const { text, setText } = useContext(MyContext);

  const getSearchVideo = async () => {
    const data = await fetch(
      SEARCH_URL + params.searchTerm + "&type=video&key=" + GOOGLE_API_KEY
    );
    const json = await data.json();
    // console.log(json);
    setSearchVideo(json.items);
  };

  useEffect(() => {
    getSearchVideo();
  }, [params.searchTerm]);

  if (!searchVideo) return null;

  return searchVideo.length === 0 ? (
    <Shimmar />
  ) : (
    <div className="flex">
      <Sidebar />
      <div className="flex  w-full flex-wrap ml-8">
        {searchVideo.map((searchVideo) => (
          <Link
            key={searchVideo.id.videoId}
            to={"/watch?v=" + searchVideo.id.videoId}
          >
            <SearchVideoCard info={searchVideo} />
          </Link>
        ))}
      </div>
    </div>
  );
};
export default SearchVideoContainer;
