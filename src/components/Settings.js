import React from "react";
import user from "../assets/user.jpg";
import { useFirebase } from "../contexts/firebase";
import HorizontalLine from "./HorizontalLine";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import SidebarButton from "./SidebarButton";
import useTheme from "../contexts/ThemeContext";
import history from "../assets/history.svg";
import historyDark from "../assets/history-dark.svg";
import help from "../assets/help.svg";
import helpDark from "../assets/help-dark.svg";
import reportHistory from "../assets/report-history.svg";
import reportHistoryDark from "../assets/report-history-dark.svg";
import sendFeedback from "../assets/send-feedback.svg";
import sendFeedbackDark from "../assets/send-feedback-dark.svg";
import settings from "../assets/settings.svg";
import settingsDark from "../assets/settings-dark.svg";

import yourVideo from "../assets/your-video.svg";
import yourVideoDark from "../assets/your-video-dark.svg";

function Settings() {
  const firebase = useFirebase();
  const { themeMode } = useTheme();
  return (
    <div className=" w-[350px] overflow-hidden dark:bg-black h-screen   rounded-3xl absolute right-[10px] p-6 top-10 z-[100] bg-white">
      <div className="flex gap-4 ">
        <img
          className="w-14 bg-gray-300 h-14 rounded-full "
          src={user}
          alt=""
        />
        <div className="dark:text-white ">
          <p className="whitespace-nowrap text-lg font-semibold">
            {firebase.user.email}
          </p>
          <p className="whitespace-nowrap text-blue-600">View your channel</p>
        </div>
      </div>
      <HorizontalLine />
      <div className="flex flex-col gap-2 dark:text-white ">
        <div className="flex flex-row px-4 dark:text-white  justify-start  items-center gap-6 hover:bg-gray-200 dark:hover:bg-[#272727] cursor-pointer rounded-xl p-2">
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <button onClick={()=> firebase.signOutUser()} className="font-semibold">Sign out</button>
        </div>
        <SidebarButton
          icon={themeMode === "dark" ? historyDark : history}
          text={"History"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? yourVideoDark : yourVideo}
          text={"Your videos"}
        />

        <HorizontalLine />
        <div>
          <h3 className="font-semibold my-2 dark:text-white">
            More from YouTube{" "}
          </h3>

          <SidebarButton
            icon={themeMode === "dark" ? settingsDark : settings}
            text={"Settings"}
          />
          <SidebarButton
            icon={themeMode === "dark" ? reportHistoryDark : reportHistory}
            text={"Report history"}
          />
          <SidebarButton
            icon={themeMode === "dark" ? helpDark : help}
            text={"Help"}
          />
          <SidebarButton
            icon={themeMode === "dark" ? sendFeedbackDark : sendFeedback}
            text={"Send Feedback"}
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;
