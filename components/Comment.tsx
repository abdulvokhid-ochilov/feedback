import React from "react";
import Image from "next/image";
import Profile from "../assets/user-images/image-elijah.jpg";
import PostReply from "./PostReply";
import { useState } from "react";

const Comment = () => {
  const [showReply, setShowReply] = useState(false);
  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <div className="flex items-center gap-4 sm:gap-6">
          <Image
            src={Profile}
            alt="profile img"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <h2 className="text-[#3A4374]  text-xs md:text-sm font-bold tracking-wide">
              Elijah Moss
            </h2>
            <span className="mt-2 mb-3 sm:mb-2 text-xs text-[#647196">
              @hexagon.bestagon
            </span>
          </div>
        </div>
        <p
          onClick={() => setShowReply(!showReply)}
          className="text-[#4661E6] hover:cursor-pointer hover:underline text-xs md:text-sm font-bold tracking-wide"
        >
          Reply
        </p>
      </div>
      <div className="sm:ml-16">
        <p className="mb-3 sm:mb-2 text-xs md:text-sm text-[#647196]">
          Also, please allow styles to be applied based on system preferences. I
          would love to be able to browse Frontend Mentor in the evening after
          my device’s dark mode turns on without the bright background it
          currently has.
        </p>
        {showReply && <PostReply />}
      </div>
      <hr />
    </div>
  );
};

export default Comment;
