import React from "react";
import Image from "next/image";
import UpvoteButton from "./UpvoteButton";
import Comment from "../assets/shared/icon-comments.svg";

const FeedbackCard = () => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 flex flex-col sm:flex-row sm:space-x-6 hover:cursor-pointer w-[340px] sm:w-[689px] xl:w-[824px] mx-auto h-fit">
      <div className="hidden sm:block">
        <UpvoteButton />
      </div>
      <div className="w-full">
        <h1 className="mb-2 sm:mb-1  text-[#3A4374] hover:text-[#4661E6] text-sm md:text-base font-bold tracking-wide ">
          Add tags for solutions
        </h1>
        <p className="mb-3 sm:mb-2 text-xs md:text-sm text-[#647196]">
          Easier to search for solutions based on a specific stack.
        </p>
        <span className=" font-semibold text-[12px] text-[#4661e6] bg-[#F2F4FF] hover:bg-[#4661e6] hover:text-white hover:cursor-pointer px-3 py-2  rounded-[10px] w-fit">
          Enhancement
        </span>
      </div>
      <div className="mt-4 sm:mt-0 flex items-center justify-between">
        <div className="sm:hidden">
          <UpvoteButton />
        </div>
        <div className="flex flex-row items-center space-x-2">
          <Image src={Comment} alt="comment" width={24} height={22} />
          <p className="text-[#3A4374] text-sm font-semibold">2</p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
