import React from "react";
import UserProfile from "./UserProfile";

function Comments({ data }) {
  const { name, text } = data;
  return (
    <div className="pt-4 flex gap-2 bg-slate-100 m-2">
      <UserProfile />
      <div className="">
        <p className="font-bold"> {name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default Comments;
