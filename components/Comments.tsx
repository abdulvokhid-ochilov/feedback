import React from "react";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 flex flex-col  w-[340px] sm:w-[689px] space-y-4 xl:w-[824px] mx-auto h-fit">
      <h1 className="text-[#3A4374]  text-sm md:text-base font-bold tracking-wide">
        4 Comments
      </h1>

      <Comment />
      <Comment />
      <div className="ml-6 sm:ml-8 flex flex-col space-y-4">
        <Comment />
        <Comment />
      </div>
    </div>
  );
};

export default Comments;
