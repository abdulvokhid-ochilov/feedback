import React from "react";
import Image from "next/image";
import Plus from "../assets/shared/icon-plus.svg";

const AddFeedbackButton = () => {
  return (
    <div className="w-[160px] h-[44px] bg-[#AD1FEA] hover:bg-[#C75AF6] hover:cursor-pointer text-xs  font-bold py-2  px-2 sm:px-4 md:px-4 flex items-center justify-evenly rounded-lg">
      <Image src={Plus} alt="plus" /> <p> Add Feedback</p>
    </div>
  );
};

export default AddFeedbackButton;
