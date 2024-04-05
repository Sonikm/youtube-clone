import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComments } from "../utils/liveChatSlice";
import Chat from "./Chat";
import clearIcon from "../assets/clear_icon.svg";
import clearIconDark from "../assets/clear_icon_dark.svg";
import rightArrowIcon from "../assets/right-arrow.svg";
import rightArrowIconDark from "../assets/right-arrow-dark.svg";
import { fetchData } from "../utils/helper";
import user from '../assets/user.jpg';
import useTheme from "../contexts/ThemeContext";
import { RANDOMUSER } from "../utils/constent";

function LiveChat({ setIsShowChats }) {
  const [chat, setChat] = useState("");
  const dispatch = useDispatch();
  const liveChats = useSelector((store) => store.chats.chats);
  const { themeMode } = useTheme();

  useEffect(()=> {
    const timer = setInterval(() => {
      getRandomChats();
    }, 1000);
    async function getRandomChats(){
       const data = await fetchData(RANDOMUSER);
       dispatch(addComments({
        name: data.results[0].name.first,
        message: "Lorem ipsum dolor sit amet.",
        profilePicture: data.results[0].picture.thumbnail,
       }))
    }

    return () => clearInterval(timer);
  },[])



  function handlePostChat(e) {
    setChat(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addComments({
      name: "Soni Kumari",
      message: chat,
      profilePicture: "https://lh3.googleusercontent.com/a/ACg8ocJgSNf54tJcHd1PdwUPffxFnfZRSb4JpYt_asonVAD3tZ8LA0Og4g=s432-c-no",
     }))
    setChat("");

  }



  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="w-[450px]  font-semibold dark:scrollbar-dark  flex overflow-hidden flex-col justify-center items-center rounded-lg  border border-gray-300 dark:border-[--secondary] dark:text-white rounded-b-3xl "
    >
      <div className="  font-semibold w-full px-3  p-2 flex justify-between items-center  border-b border-gray-300 dark:border-[--secondary] dark:text-white">
        <span>Live Chats</span>
        <div
          onClick={() =>setIsShowChats(false)}
          className="cursor-pointer hover:bg-gray-200 dark:hover:bg-[--primaryGrayDark] rounded-full p-2"
        >
          <img src={themeMode === 'dark' ? clearIconDark : clearIcon} alt="" />
        </div>
      </div>
      <div className="w-full h-[450px] border  flex flex-col justify-end dark:border-[--secondary] dark:text-white ">
        <div className="flex  gap-2  p-4 px-6 overflow-y-scroll flex-col-reverse ">
          {liveChats.map((user, index) => (
            <Chat user={user} key={index} />
          ))}
        </div>
        <div className="border-t border-gray-300 dark:border-[--secondary] p-4 py-3  flex justify-between items-center gap-2">
          <img className="rounded-full w-10 cursor-pointer border-2 " src={user} alt=""/>
          <input
            value={chat}
            onChange={(e) => handlePostChat(e)}
            className=" pl-6 border-none dark:bg-[--primaryGrayDark] dark:placeholder:text-[#999999] outline-none w-full h-full text-gray-500 dark:text-white bg-gray-200  rounded-full  "
            type="text"
            placeholder="Chat..."
          />
          <img className="cursor-pointer hover:bg-gray-200 dark:hover:bg-[--primaryGrayDark] rounded-full w-12 p-2 border-2 border-gray-200 dark:border-[--secondary] " src={themeMode === 'dark' ? rightArrowIconDark : rightArrowIcon} alt=""/>
        </div>
      </div>
    </form>
  );
}

export default LiveChat;
