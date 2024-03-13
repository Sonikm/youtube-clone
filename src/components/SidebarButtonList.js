import React from "react";
import homeIcon from "../assets/home.svg";
import homeIconDark from "../assets/home-dark.svg";
import shortsIconDark from "../assets/shorts-dark.svg";
import shortsIcon from "../assets/shorts.svg";
import subscriptionsDark from "../assets/subscriptions-dark.svg";
import subscriptions from "../assets/subscriptions.svg";
import useTheme from "../contexts/ThemeContext";
import SidebarButton from "./SidebarButton";
import HorizontalLine from "./HorizontalLine";
import rightArrow from "../assets/right-arrow.svg";
import rightArrowDark from "../assets/right-arrow-dark.svg";
import yourChannel from "../assets/your-chennel.svg";
import yourChannelDark from "../assets/your-chennel-dark.svg";
import history from "../assets/history.svg";
import historyDark from "../assets/history-dark.svg";
import yourClips from "../assets/your-clips.svg";
import yourClipsDark from "../assets/your-clips-dark.svg";
import yourLives from "../assets/your-live.svg";
import yourLivesDark from "../assets/your-live-dark.svg";
import watchLater from "../assets/watch-later.svg";
import watchLaterDark from "../assets/watch-later-dark.svg";
import fashion from "../assets/fashion-beauty.svg";
import fashionDark from "../assets/fashion-beauty-dark.svg";
import games from "../assets/games.svg";
import gamesDark from "../assets/games-dark.svg";
import help from "../assets/help.svg";
import helpDark from "../assets/help-dark.svg";
import learning from "../assets/learning.svg";
import learningDark from "../assets/learning-dark.svg";
import music from "../assets/music.svg";
import musicDark from "../assets/music-dark.svg";
import news from "../assets/news.svg";
import newsDark from "../assets/news-dark.svg";
import podcasts from "../assets/podcasts.svg";
import podcastsDark from "../assets/podcasts-dark.svg";
import reportHistory from "../assets/report-history.svg";
import reportHistoryDark from "../assets/report-history-dark.svg";
import sendFeedback from "../assets/send-feedback.svg";
import sendFeedbackDark from "../assets/send-feedback-dark.svg";
import settings from "../assets/settings.svg";
import settingsDark from "../assets/settings-dark.svg";
import shopping from "../assets/shopping.svg";
import shoppingDark from "../assets/shopping-dark.svg";
import showMore from "../assets/show-more.svg";
import showMoreDark from "../assets/show-more-dark.svg";
import sport from "../assets/sport.svg";
import sportDark from "../assets/sport-dark.svg";
import trending from "../assets/trending.svg";
import trendingDark from "../assets/trending-dark.svg";
import youtubeKid from "../assets/youtube-kid.svg";
import youtubeKidDark from "../assets/youtube-kid-dark.svg";
import youtubeMusic from "../assets/youtube-music.svg";
import youtubeMusicDark from "../assets/youtube-music-dark.svg";
import youtubePremium from "../assets/youtube-premium.svg";
import youtubePremiumDark from "../assets/youtube-premium-dark.svg";
import youtubeStudio from "../assets/youtube-studio.svg";
import youtubeStudioDark from "../assets/youtube-studio-dark.svg";
import yourVideo from "../assets/your-video.svg";
import yourVideoDark from "../assets/your-video-dark.svg";
import films from "../assets/films.svg";
import filmsDark from "../assets/films-dark.svg";

function SidebarButtonList() {
  const { themeMode } = useTheme();
  return (
    <div className={` ${themeMode === 'dark' ? "scrollbar-dark" : ""} h-full px-6 p-2  py-4 overflow-y-scroll   pr-4`}>
      <div className="flex flex-col gap-1">
        <SidebarButton
          icon={themeMode === "dark" ? homeIconDark : homeIcon}
          text={"Home"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? shortsIconDark : shortsIcon}
          text={"Shorts"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? subscriptionsDark : subscriptions}
          text={"Subscriptions"}
        />
      </div>
      <HorizontalLine />
      <div>
        <div className="flex  hover:bg-gray-200 dark:text-white dark:hover:bg-[#272727] items-center rounded-xl justify-start gap-2 cursor-pointer p-2 mb-1">
          <h3 className="font-semibold">You </h3>
          <img className="w-4 " src={themeMode === 'dark' ? rightArrowDark : rightArrow} alt="" />
        </div>
        <SidebarButton
          icon={themeMode === "dark" ? yourChannelDark : yourChannel}
          text={"Your channel"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? historyDark : history}
          text={"History"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? yourVideoDark : yourVideo}
          text={"Your videos"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? watchLaterDark : watchLater}
          text={"Watch Later"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? yourClipsDark : yourClips}
          text={"Your clips"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? showMoreDark : showMore}
          text={"Show more"}
        />
      </div>
      <HorizontalLine />
      <div>
        <h3 className="font-semibold my-2 dark:text-white ">Explore </h3>
        <SidebarButton
          icon={themeMode === "dark" ? trendingDark : trending}
          text={"Trending"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? shoppingDark : shopping}
          text={"Shopping"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? musicDark : music}
          text={"Music"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? filmsDark : films}
          text={"Films"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? yourLivesDark : yourLives}
          text={"Live"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? gamesDark : games}
          text={"Gaming"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? newsDark : news}
          text={"News"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? sportDark : sport}
          text={"Sport"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? learningDark : learning}
          text={"Learning"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? fashionDark : fashion}
          text={"Fashion & beauty"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? podcastsDark : podcasts}
          text={"Podcasts"}
        />
      </div>
      <HorizontalLine />
      <div>
        <h3 className="font-semibold my-2 dark:text-white">More from YouTube </h3>
        <SidebarButton
          icon={themeMode === "dark" ? youtubePremiumDark : youtubePremium}
          text={"YouTube Premium"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? youtubeStudioDark : youtubeStudio}
          text={"YouTube Studio"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? youtubeMusicDark : youtubeMusic}
          text={"YouTube Music"}
        />
        <SidebarButton
          icon={themeMode === "dark" ? youtubeKidDark : youtubeKid}
          text={"YouTube Kids"}
        />
        <HorizontalLine />
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
      <div className="h-20"></div>
    </div>
  );
}

export default SidebarButtonList;
