import React from "react";

const AddComment = () => {
  return (
    <div className="bg-white rounded-lg p-4 sm:p-6 flex flex-col  w-[340px] sm:w-[689px] space-y-4 xl:w-[824px] mx-auto h-fit">
      <h1 className="text-[#3A4374]  text-sm md:text-base font-bold tracking-wide ">
        Add Comment
      </h1>
      <div>
        <textarea
          className="bg-[#F7F8FD] w-full rounded h-[100px] p-4 text-xs sm:text-sm outline outline-transparent outline-offset-1 focus:outline-[#4661E6] resize-none"
          placeholder="Type your comment here"
        />
      </div>
      <div className="flex flex-row justify-between items-center">
        <p className="mt-2 mb-3 sm:mb-2 text-xs md:text-sm text-[#647196]">
          250 characters left
        </p>
        <div className="w-[160px] h-[44px] bg-[#AD1FEA] hover:bg-[#C75AF6] hover:cursor-pointer text-xs  font-bold py-2  px-2 sm:px-4 md:px-4 flex items-center justify-evenly rounded-lg text-white">
          Post Comment
        </div>
      </div>
    </div>
  );
};

export default AddComment;
