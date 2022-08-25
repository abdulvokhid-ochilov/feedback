import React from "react";
import Image from "next/image";
import Up from "../assets/shared/icon-up.svg";

const UpvoteButton = ({ page }: { page: string }) => {
  const style =
    page === "roadmap"
      ? "rounded-lg bg-[#F2F4FE] h-fit p-2 flex flex-row  items-center space-x-2  space-y-0  hover:bg-[#CFD7FF] hover:cursor-pointer"
      : "rounded-lg bg-[#F2F4FE] h-fit p-2 flex flex-row sm:flex-col items-center space-x-2 sm:space-x-0 space-y-0 sm:space-y-1 hover:bg-[#CFD7FF] hover:cursor-pointer";

  return (
    <div className={style}>
      <Image src={Up} alt="vote" />
      <p className="text-[#3A4374] text-sm font-semibold">112</p>
    </div>
  );
};

export default UpvoteButton;
