import React from "react";
import CloseSidebar from "./CloseSidebar";
import { useSelector } from "react-redux";
import OpenSidebar from "./OpenSidebar";

function Sidebar() {
  const isOpenSidebar = useSelector((store) => store.app.isOpenSidebar);

  return isOpenSidebar ? <OpenSidebar /> : <CloseSidebar />;
}

export default Sidebar;
