import React from "react";
import youtubeLogo from "../assets/youtube-logo.svg";
import hambugerIcon from "../assets/hamburger-icon.svg";
import { useDispatch} from "react-redux";
import { toggleMenu } from "../utils/appSlice";

function Logo() {
  const dispatch = useDispatch();

  function handleToggleMenu() {
    dispatch(toggleMenu());
  }

  return (
    <div className="w-32 flex gap-4 justify-center items-center">
      <img
        onClick={() => handleToggleMenu()}
        className="w-28 cursor-pointer"
        alt=""
        src={hambugerIcon}
      />

      <img src={youtubeLogo} alt="logo" />
    </div>
  );
}

export default Logo;
