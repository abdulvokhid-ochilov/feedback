import React from "react";
import FeedbackCard from "../../components/FeedbackCard";
import Left from "../../assets/shared/icon-arrow-left.svg";
import Image from "next/image";
import AddComment from "../../components/AddComment";
import Comments from "../../components/Comments";

const FeedbackDetail = () => {
  return (
    <main className="xl:w-[1200px] m-auto  min-h-[100vh] flex flex-col md:gap-6 gap-3 p-3 md:p-6 ">
      <div className="w-full md:w-[689px] xl:w-[824px] mx-auto flex justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Image src={Left} alt="back" />
          <p className="text-[#647196] font-bold text-xs hover:cursor-pointer hover:underline">
            Go Back
          </p>
        </div>
        <div>
          <div className="w-[160px] h-[44px] bg-[#4661E6] hover:bg-[#7C91F9] hover:cursor-pointer text-xs  font-bold py-2  px-2 sm:px-4 md:px-4 flex items-center justify-evenly rounded-lg text-white">
            <p> Add Feedback</p>
          </div>
        </div>
      </div>
      <FeedbackCard />
      <Comments />
      <AddComment />
    </main>
  );
};

export default FeedbackDetail;
