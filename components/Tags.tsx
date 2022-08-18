import React from "react";

const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

const Tags = () => {
  return (
    <div className=" flex flex-wrap flex-row gap-2 bg-white rounded-lg p-4 font-semibold text-[12px] w-[222px] xl:w-full h-[177px] xl:h-auto">
      {tags.map((tag, index) => (
        <span
          key={index}
          className="text-[#4661e6] bg-[#F2F4FF] hover:bg-[#4661e6] hover:text-white hover:cursor-pointer px-3 py-2  rounded-[10px]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;
