import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  MdHomeFilled,
  MdOutlineTrendingUp,
  MdNewspaper,
  MdLiveTv,
  MdComputer,
  MdShoppingCart,
  MdSportsCricket,
  MdSportsHockey,
} from "react-icons/md";
import { BsCameraReels, BsCodeSquare, BsEmojiLaughing } from "react-icons/bs";
import { RiReactjsFill, RiFootballLine } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { GrYoga, GrGamepad } from "react-icons/gr";
import MyContext from "../utils/searchTextContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { text, setText } = useContext(MyContext);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;
  return (
    <div className=" p-5 w-48 shadow-lg  ">
      <ul>
        <Link to="/">
          <li className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer">
            <MdHomeFilled />
            <span className="pl-3 "> Home</span>
          </li>
        </Link>

        <li
          onClick={(e) => {
            const searchTerm = "short";
            setText("Short");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <BsCameraReels />
          <span className="pl-3">Shorts</span>
        </li>

        <li
          onClick={(e) => {
            const searchTerm = "trending";
            setText("Trending");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <MdOutlineTrendingUp />
          <span className="pl-3">Trending</span>
        </li>
      </ul>

      <h1 className=" px-6 text-lg font-medium p-2 ">Explore</h1>
      <ul>
        <li
          onClick={(e) => {
            const searchTerm = "news";
            setText("News");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <MdNewspaper />
          <span className="pl-3">News</span>{" "}
        </li>
        <li
          onClick={(e) => {
            const searchTerm = "reactjs";
            setText("reactjs");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <RiReactjsFill />
          <span className="pl-3"> Reactjs</span>
        </li>

        <li
          onClick={(e) => {
            const searchTerm = "live";
            setText("live");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <MdLiveTv />
          <span className="pl-3"> Live</span>
        </li>

        <li
          onClick={(e) => {
            const searchTerm = "coding";
            setText("coding");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <BsCodeSquare />
          <span className="pl-3"> Coding</span>
        </li>

        <li
          onClick={(e) => {
            const searchTerm = "comedy";
            setText("comedy");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <BsEmojiLaughing />
          <span className="pl-3"> Comedy</span>
        </li>

        <li
          onClick={(e) => {
            const searchTerm = "technology";
            setText("technology");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <MdComputer />
          <span className="pl-3"> Technology</span>
        </li>

        <li
          onClick={(e) => {
            const searchTerm = "javascript";
            setText("javascript");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <SiJavascript />
          <span className="pl-3"> JavaScript</span>
        </li>

        <li
          onClick={(e) => {
            const searchTerm = "shopping";
            setText("shopping");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <MdShoppingCart />
          <span className="pl-3"> Shopping</span>
        </li>

        <li
          onClick={(e) => {
            const searchTerm = "game";
            setText("game");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <GrGamepad />
          <span className="pl-3"> Game</span>
        </li>

        <li
          onClick={(e) => {
            const searchTerm = "yoga";
            setText("yoga");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <GrYoga />
          <span className="pl-3"> Yoga</span>
        </li>

        <li
          onClick={(e) => {
            const searchTerm = "cricket";
            setText("cricket");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <MdSportsCricket />
          <span className="pl-3"> Cricket</span>
        </li>

        <li
          onClick={(e) => {
            const searchTerm = "football";
            setText("football");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <RiFootballLine />
          <span className="pl-3"> Football</span>
        </li>

        <li
          onClick={(e) => {
            const searchTerm = "hockey";
            setText("hockey");
            navigate(`/search/${searchTerm}`);
          }}
          className="flex p-2 items-center px-6 hover:bg-gray-100 rounded-lg cursor-pointer"
        >
          <MdSportsHockey />
          <span className="pl-3"> Hockey</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
