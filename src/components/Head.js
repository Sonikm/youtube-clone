import React from "react";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import UserProfile from "./UserProfile";

const Head = () => {

  return (
    <div className="flex justify-between items-center shadow-md p-4 px-10">
      <Logo />
      <SearchBar />
      <UserProfile />
    </div>
  );
};

export default Head;
