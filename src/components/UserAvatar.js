import React from "react";
import userProfile from "../assets/user-profile.svg";

function UserAvatar() {
  return <img className="w-6 cursor-pointer" src={userProfile} alt="user" />;
}

export default UserAvatar;
