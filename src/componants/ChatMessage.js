import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-centre shadow-sm p-2 ">
      <img
        className="h-6"
        alt="user-iocn"
        src="https://cdn-icons-png.flaticon.com/512/709/709722.png"
      />
      <span className="font-bold px-2">{name}</span>
      <span className="px-2">{message}</span>
    </div>
  );
};

export default ChatMessage;
