import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Body() {
  return (
    <div className="flex gap-10 p-3">
      <Header />
      <Sidebar />
      <div className="mt-[120px] ml-[100px]">
        <Outlet />
      </div>
    </div>
  );
}

export default Body;
