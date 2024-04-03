import React from "react";

function Chat({ user }) {

  const {name, message, profilePicture} = user;

  return (
    <div className="flex gap-3 text-sm">
     <img className="rounded-full h-7 w-7" src={profilePicture} alt=""/>
      <div className="flex flex-col justify-start">
        <span className="text-gray-500 dark:text-[#999999]">{name}</span>
        <p className="text-black dark:text-white  "> {message}</p>
      </div>
    </div>
  );
}

export default Chat;
