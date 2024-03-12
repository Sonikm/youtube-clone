import React from "react";
import userProfile from "../assets/user.png";

function UserAvatar() {
  return <img className="w-6 h-6 cursor-pointer" src={userProfile} alt="user" />;
}

export default UserAvatar;
