import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Cricket",
  "Scccer",
  "Coking",
  "News",
  "Love",
  "Music",
  "Dance",
  "Hockey",
];

const ButtonList = () => {
  return (
    <div className="flex">
      <Button list={list} />
      {/* <Button name="Gaming" />
      <Button name="Songs" />
      <Button name="Cricket" />
      <Button name="Scccer" />
      <Button name="Coking" />
      <Button name="News" />
      <Button name="Love" /> */}
    </div>
  );
};

export default ButtonList;
