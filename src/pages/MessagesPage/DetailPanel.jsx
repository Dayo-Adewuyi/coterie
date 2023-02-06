import React, { useState } from "react";
import {
  ArrowSmallLeftIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

const DetailPanel = ({ conversationsArray }) => {
  return (
    <>
      <div className="w-full ">
        <div className="flex items-center justify-between py-2 px-3 sticky top-0 z-50 border-b">
          <div className="flex justify-between">
            <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 cursor-pointer">
              <ArrowSmallLeftIcon className="h-5" />
            </div>
            <h2 className="text-lg sm:text-xl font-bold">
              {conversationsArray[1].userName}
            </h2>
          </div>
          <div className="hoverAnimation w-9 h-9 flex items-center justify-center xl:px-0 cursor-pointer">
            <EllipsisVerticalIcon className="h-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPanel;
