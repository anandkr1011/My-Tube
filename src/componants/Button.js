import React from "react";

/* const Button = ({ name }) => {
  return (
    <div>
      <button className="m-2 px-5 py-2 bg-gray-200 rounded-xl">{name}</button>
    </div>
  );
}; */

const Button = (props) => {
  const myList = props.list;
  return (
    <div>
      <div className="flex ">
        {myList.map((item, index) => (
          <button className="m-2 px-2  bg-slate-200 rounded-lg" key={index}>
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Button;
