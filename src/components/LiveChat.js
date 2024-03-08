import React from "react";
import ChatMessages from "./ChatMessages";

function LiveChat() {
  return (
    <div className=" border-2 border-black bg-gray-100 w-[400px]  h-[550px] mx-6 p-4  ">
      <h2 className="font-bold text-2xl mb-4">Live Chat</h2>

      <ChatMessages />
    </div>
  );
}

export default LiveChat;
