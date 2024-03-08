import React, { useEffect, useState } from "react";
import Message from "./Message";
import { useDispatch, useSelector } from "react-redux";
import { addMessages } from "../utils/chatSlice";
import { generateRandomNames, generateRandomText } from "../utils/helper";

function ChatMessages() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const message = useSelector((store) => store.chat.message);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(
        addMessages({
          name: generateRandomNames(170),
          text: generateRandomText(),
        })
      );
    }, 1500);

    return () => clearInterval(interval);
  }, [dispatch]);

  function postMessage(e) {
    e.preventDefault();

    dispatch(
      addMessages({
        name: "Soni kumari",
        text: text,
      })
    );
    setText("");
  }
  return (
    <div className="flex flex-col gap-4">
      <div className=" flex flex-col-reverse h-[400px] overflow-y-scroll border border-red-400 ">
        {message.map((message, index) => (
          <Message name={message.name} text={message.text} key={index} />
        ))}
      </div>
      <form
        className="flex  w-full p-2 bg-slate-200 "
        onSubmit={(e) => postMessage(e)}
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="chat.."
          className="flex-1 placeholder:text-lg text-lg p-2"
        />
        <button className="p-2 text-lg font-bold bg-red-400">Post</button>
      </form>
    </div>
  );
}

export default ChatMessages;
