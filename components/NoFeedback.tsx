import React from "react";
import Image from "next/image";
import AddFeedbackButton from "./AddFeedbackButton";
import Empty from "../assets/suggestions/illustration-empty.svg";

const NoFeedback = () => {
  return (
    <div className="bg-white rounded-lg mt-4 flex flex-col items-center gap-8 py-16 px-6 sm:py-20 sm:px-20 md:w-[689px] xl:w-[824px] sm:mx-auto">
      <Image src={Empty} alt="empty" width={130} height={130} />
      <div className="flex flex-col space-y-4 items-center">
        <h1 className="text-lg font-bold text-[#3A4374]">
          There is no feedback yet.
        </h1>
        <div className="flex flex-col items-center text-[#647196] text-xs xl:text-sm">
          <p className="text-center">
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </p>
        </div>
      </div>
      <AddFeedbackButton />
    </div>
  );
};

export default NoFeedback;
