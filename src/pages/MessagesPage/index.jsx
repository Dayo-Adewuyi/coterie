import React, { useState } from "react";
import UniquePage from "../../Components/UniquePage";
import MessageHead from "./MessageHead";
import MessageBody from "./MessageBody";

const MessagesPage = () => {
  const conversations = [
    {
      image: "/baka.jfif",
      userName: "Oghenetega",
      time: "45mins ago",
      lastMessage: "I refuse to abandon any hope!!!",
      isActive: true,
    },
    {
      image: "/baka.jfif",
      userName: "Dayo_mah gee@234",
      time: "3 days ago",
      lastMessage: "Cry me a river",
      isActive: false,
    },
    {
      image: "/baka.jfif",
      userName: "maybeDestiny!@",
      time: "1 month ago",
      lastMessage: "Ouch",
      isActive: false,
    },
  ];

  const [conversationsArray, setConverstationArray] = useState(conversations);
  return (
    <>
      <UniquePage>
        <div className=" flex border-l border-r w-full">
          <div className="w-[35%]">
            <MessageHead conversationsArray={conversationsArray} />
          </div>
          <div className="w-[65%]">
            <MessageBody conversationsArray={conversationsArray} />
          </div>
        </div>
      </UniquePage>
    </>
  );
};

export default MessagesPage;
