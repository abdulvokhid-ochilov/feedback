import React from "react";

const PostReply = () => {
  return (
    <div className="flex flex-row gap-2 sm:gap-4 mb-4">
      <textarea
        className="bg-[#F7F8FD] w-full rounded h-[100px] p-4 text-xs sm:text-sm outline outline-transparent outline-offset-1 focus:outline-[#4661E6] resize-none"
        placeholder="Type your reply here"
      />
      <div className="w-[160px] h-[44px] bg-[#AD1FEA] hover:bg-[#C75AF6] hover:cursor-pointer text-xs  font-bold sm:px-4 md:px-4 flex items-center justify-evenly rounded-lg text-white">
        Post Reply
      </div>
    </div>
  );
};

export default PostReply;
