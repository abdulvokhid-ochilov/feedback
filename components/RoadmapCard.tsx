import React from "react";
import Image from "next/image";
import UpvoteButton from "./UpvoteButton";
import Comment from "../assets/shared/icon-comments.svg";

const RoadmapCard = ({ type }: { type: string }) => {
  const color =
    (type === "planned" && "[#f49f85]") ||
    (type === "in-progress" && "[#AD1FEA]") ||
    (type === "live" && "[#62BCFA]");

  return (
    <div
      className={`bg-white rounded p-5 sm:p-3 md:p-4 xl:p-5 flex flex-col  hover:cursor-pointer w-[327px] sm:w-[223px] xl:w-[350px] mx-auto h-fit border-t-4 border-${color}`}
    >
      <div className="w-full">
        <p className="mb-2 flex items-center gap-4 text-xs md:text-sm text-[#647196] capitalize">
          <span
            className={`bg-${color} w-1.5 h-1.5 inline-block rounded-full`}
          ></span>{" "}
          {type}
        </p>
        <h1 className="mb-2  text-[#3A4374] hover:text-[#4661E6] text-sm md:text-base font-bold tracking-wide ">
          Add tags for solutions
        </h1>
        <p className="mb-3 text-xs md:text-sm text-[#647196]">
          Easier to search for solutions based on a specific stack.
        </p>
        <span className=" font-semibold text-[12px] text-[#4661e6] bg-[#F2F4FF]  px-3 py-2  rounded-[10px] w-fit">
          Enhancement
        </span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="">
          <UpvoteButton page="roadmap" />
        </div>
        <div className="flex flex-row items-center space-x-2">
          <Image src={Comment} alt="comment" width={24} height={22} />
          <p className="text-[#3A4374] text-sm font-semibold">2</p>
        </div>
      </div>
    </div>
  );
};

export default RoadmapCard;
