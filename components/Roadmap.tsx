import React from "react";

const Roadmap = () => {
  return (
    <div className=" bg-white rounded-lg p-4 sm:w-[222px] xl:w-full sm:h-[177px] xl:h-auto">
      <div className="flex justify-between items-center">
        <h1 className="font-bold tracking-wide text-[#3A4374]">Roadmap</h1>
        <p className="text-[#4661e6] hover:text-[#8397F8] hover:cursor-pointer text-xs underline underline-offset-2">
          View
        </p>
      </div>
      <div className="mt-4">
        <div className="flex justify-between">
          <p className="flex items-center gap-4 text-sm text-[#647196]">
            <span className=" bg-[#f49f85] w-1.5 h-1.5 inline-block rounded-full"></span>{" "}
            Planned
          </p>
          <p className="text-[#647196] font-semibold">2</p>
        </div>
        <div className="flex justify-between">
          <p className="flex items-center gap-4 text-sm text-[#647196]">
            <span className=" bg-[#AD1FEA] w-1.5 h-1.5 inline-block rounded-full"></span>{" "}
            In-Progress
          </p>
          <p className="text-[#647196] font-semibold">3</p>
        </div>
        <div className="flex justify-between">
          <p className="flex items-center gap-4 text-sm text-[#647196]">
            <span className=" bg-[#62BCFA] w-1.5 h-1.5 inline-block rounded-full"></span>{" "}
            Live
          </p>
          <p className="text-[#647196] font-semibold">1</p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
