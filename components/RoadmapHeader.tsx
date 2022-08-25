import React from "react";
import AddFeedbackButton from "./AddFeedbackButton";
import Image from "next/image";
import Left from "../assets/shared/icon-left.svg";

const RoadmapHeader = () => {
  return (
    <div className="bg-[#373F68] text-white p-2 sm:p-3 md:p-4 w-full sm:w-[689px] xl:w-[1110px] h-[100px] sm:h-[112px] flex flex-row items-center justify-between sm:rounded-lg mx-auto ">
      <div className="flex flex-col gap-1">
        <div className="flex flex-row gap-2 items-center">
          <Image src={Left} alt="back" />
          <p className="text-[#fff] font-bold text-xs hover:cursor-pointer hover:underline">
            Go Back
          </p>
        </div>
        <h1 className="text-sm md:text-base font-bold tracking-wide ">
          Roadmap
        </h1>
      </div>
      <AddFeedbackButton />
    </div>
  );
};

export default RoadmapHeader;
