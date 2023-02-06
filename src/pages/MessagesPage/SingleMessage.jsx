import React, { useState } from "react";

const SingleMessage = ({ message }) => {
  return (
    <div
      className={`flex my-1 ${
        message.sender ? "justify-start" : "justify-end"
      }`}
    >
      <div
        className={`max-w-[80%] rounded-3xl text-white px-4 py-3 ${
          message.sender ? "bg-[#ccd2d7]" : "bg-[#1d9bf0]"
        }`}
      >
        <p>{message.content}</p>
      </div>
    </div>
  );
};

export default SingleMessage;
