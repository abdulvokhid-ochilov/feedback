const tags = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

const Navbar = () => {
  return (
    <div className="flex flex-row xl:flex-col xl:space-y-4 md:space-x-4 md:mx-auto xl:mx-0 md:w-[689px] xl:w-[255px]">
      <div className="bg-no-repeat xl:bg-[url('../assets/suggestions/desktop/background-header.png')] md:bg-[url('../assets/suggestions/tablet/background-header.png')] rounded-lg text-white p-4 pt-10">
        <h1 className="font-bold tracking-wide">Frontend Mentor</h1>
        <p className="text-sm text-gray-200">Feedback Board</p>
      </div>
      <div className="flex flex-wrap gap-2 bg-white rounded-lg p-4 font-semibold text-xs">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="text-[#4661e6] bg-[#F2F4FF] hover:bg-[#4661e6] hover:text-white hover:cursor-pointer px-4 py-1 rounded-[10px]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="bg-white rounded-lg p-4 ">
        <div className="flex justify-between items-center">
          <h1 className="font-bold tracking-wide">Roadmap</h1>
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
    </div>
  );
};

export default Navbar;
