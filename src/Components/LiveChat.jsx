import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";
import { getRandomMessage, getRandomName } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");

  const dispatch = useDispatch();

  const messages = useSelector((store) => store.chat.message);

  useEffect(() => {
    const i = setInterval(() => {
      console.log("API Poliing");
      dispatch(
        addChat({
          name: getRandomName(),
          message: getRandomMessage(20) + "🚀",
        })
      );
    }, 2000);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className=" h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg flex flex-col gap-3 overflow-y-scroll flex-col-reverse">
        {messages.map((chat) => (
          <ChatMessage name={chat.name} message={chat.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();
            dispatch(
              addChat({
                name: "Yash Thakkar",
                message: liveMessage,
              })
            );
          setLiveMessage("");
        }}
      >
        <input
          type="text"
          className="w-96 px-2"
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 mx-2 bg-green-200 rounded-md">Send</button>
      </form>
    </>
  );
};

export default LiveChat;
