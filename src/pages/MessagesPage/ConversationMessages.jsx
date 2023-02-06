import React, { useState } from "react";
import SingleMessage from "./SingleMessage";

const ConversationMessages = ({ conversationsArray }) => {
  const sampleConversation = [
    { sender: 0, content: "Hello, how are you doing" },
    { sender: 1, content: "Hi" },
    {
      sender: 0,
      content: "Nice to meet you. have you used this product before?",
    },
    {
      sender: 0,
      content:
        "Do you like it's features so far? This is a test build as we look to get our MVP out there.",
    },
    {
      sender: 0,
      content:
        "We re looking forward to your feedback as we try to understand how to make the product better for all users.",
    },
    {
      sender: 1,
      content:
        "What do I like about the product? I like that I can remain anonymous. It makes me feel safe.",
    },
    {
      sender: 1,
      content:
        "I also like how quite fast donating to creators feels. This way, I don't have to worry about credit cards or payment hiccups.",
    },
    {
      sender: 0,
      content:
        "Okay. This is the whole idea of our product. We would like to invite you to our beta version.",
    },
    { sender: 0, content: "Can I have your email? if you don't mind?" },
    {
      sender: 0,
      content:
        "We promise not to spam your email inbox with unnecessary information.",
    },
  ];

  return (
    <>
      <div className="w-full px-4">
        {sampleConversation.map((message) => {
          return <SingleMessage message={message} />;
        })}
      </div>
    </>
  );
};

export default ConversationMessages;
