import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Body() {
  const isVisibleButtonList = useSelector(store => store.app.isVisible)
  return (
    <div className="flex gap-10 p-3">
      <Header />
      <Sidebar />
      <div className={`${isVisibleButtonList ? "mt-[120px]": " mt-20 "}  ml-[100px] sm:ml-2`}>
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
