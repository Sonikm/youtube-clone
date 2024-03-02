import React from "react";
import { useSelector } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHome } from "@fortawesome/free-solid-svg-icons";
const Slidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  // Early return
  if (!isMenuOpen) return;

  return (
    <div className="col-span-1 shadow-md  border-r flex flex-col gap-3 p-4 ">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <div>
        <h3 className="font-bold text-lg">Subscriptions</h3>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
          <li>Your clips</li>
        </ul>
      </div>

      <div>
        <h3 className="font-bold text-lg">Watch Later</h3>
        <ul>
          <li>Music</li>
          <li>Sports</li>
          <li>Gaming</li>
          <li>Movies</li>
          <li>Your clips</li>
        </ul>
      </div>
    </div>
  );
};

export default Slidebar;
