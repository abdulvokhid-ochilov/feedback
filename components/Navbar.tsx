import Roadmap from "./Roadmap";
import Tags from "./Tags";
import Hamburger from "../assets/shared/mobile/icon-hamburger.svg";
import Close from "../assets/shared/mobile/icon-close.svg";
import Image from "next/image";

import { Popover } from "@headlessui/react";

const Navbar = () => {
  return (
    <div className="flex flex-row flex-wrap xl:flex-col xl:space-y-4 sm:space-x-2 xl:space-x-0 md:mx-auto xl:mx-0 md:w-[689px] xl:w-[255px]">
      <div className="bg-no-repeat bg-cover xl:bg-[url('../assets/suggestions/desktop/background-header.png')] md:bg-[url('../assets/suggestions/tablet/background-header.png')] bg-[url('../assets/suggestions/mobile/background-header.png')] md:rounded-lg text-white p-3 md:p-4 md:pt-10 w-full  md:w-[222px] xl:w-full h-[72px] md:h-[177px] xl:h-auto flex justify-between items-center md:items-end ">
        <div>
          <h1 className="text-sm md:text-base font-bold tracking-wide">
            Frontend Mentor
          </h1>
          <p className="text-xs md:text-sm text-gray-200">Feedback Board</p>
        </div>
        <div>
          <Popover className="md:hidden">
            {({ open }) => (
              <>
                <Popover.Button>
                  {open ? (
                    <Image src={Close} alt="icon close" />
                  ) : (
                    <Image src={Hamburger} alt="icon menu" />
                  )}
                </Popover.Button>
                <Popover.Overlay className="fixed inset-0 top-[72px] bg-black opacity-30" />

                <Popover.Panel className="absolute top-[72px] left-100 right-0 overflow-y-hidden">
                  <div className="p-4 flex flex-col gap-4 bg-[#F7F8FD] h-[89vh] sm:h-[91vh] ">
                    <Tags />
                    <Roadmap />
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>
      </div>
      <div className="hidden md:flex md:space-x-2 xl:space-x-0 xl:space-y-4 xl:flex-col">
        <Tags />
        <Roadmap />
      </div>
    </div>
  );
};

export default Navbar;
