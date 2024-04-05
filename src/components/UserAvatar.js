import React from "react";
import userProfile from "../assets/user.png";

function UserAvatar({isSearch}) {
  return <img className={`${isSearch ? " md:hidden " : " "}  w-6 h-6 cursor-pointer`} src={userProfile} alt="user" />;
}

export default UserAvatar;
