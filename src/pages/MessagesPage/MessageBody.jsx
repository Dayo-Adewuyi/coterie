import React, { useState } from "react";
import DetailPanel from "./DetailPanel";
import ConversationMessages from "./ConversationMessages";

const MessageBody = ({ conversationsArray }) => {
  return (
    <div className="border-l border-r w-full">
      <DetailPanel conversationsArray={conversationsArray} />
      <ConversationMessages conversationsArray={conversationsArray} />
    </div>
  );
};

export default MessageBody;
