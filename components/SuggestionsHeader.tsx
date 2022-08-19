import React from "react";
import Image from "next/image";
import Suggestions from "../assets/suggestions/icon-suggestions.svg";
import Down from "../assets/shared/icon-arrow-down.svg";
import Up from "../assets/shared/icon-arrow-up.svg";
import AddFeedbackButton from "./AddFeedbackButton";
import Tick from "../assets/shared/icon-check.svg";
import { Menu } from "@headlessui/react";
import Link from "next/link";

const SuggestionsHeader = () => {
  return (
    <div className="bg-[#373F68] text-white p-3 md:p-4 w-full md:w-[689px] xl:w-[824px] h-[82px] flex flex-row justify-between md:rounded-lg mx-auto">
      <div className="flex gap-5 items-center">
        <div className="hidden md:block">
          <Image src={Suggestions} alt="suggestions" width={23} height={24} />
        </div>
        <h1 className="hidden md:block text-sm md:text-base font-bold tracking-wide ">
          6 Suggestions
        </h1>

        <Menu>
          {({ open }) => (
            <>
              <Menu.Button>
                <p className="text-xs md:text-sm hover:text-gray-200 ">
                  Sort by: <b>Most Upvotes</b>{" "}
                  {open ? (
                    <Image src={Up} alt="up" />
                  ) : (
                    <Image src={Down} alt="down" />
                  )}
                </p>
              </Menu.Button>

              <Menu.Items className="absolute top-[160px] md:top-[340px] xl:top-[125px] left-[20px] md:left-[480px] xl:left-[680px] right-0 flex flex-col bg-white text-[#647196]  w-[256px] drop-shadow-2xl rounded-lg">
                <Menu.Item>
                  {({ active }) => (
                    <div className="text-xs md:text-sm px-4 py-2 border-b-[1px] border-[#e6ebfd] hover:text-[#AD1FEA] flex flex-row items-center justify-between">
                      <Link href="/">Most Upvotes</Link>
                      {active && <Image src={Tick} alt="tick" />}
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div className="text-xs md:text-sm px-4 py-2 border-b-[1px] border-[#e6ebfd] hover:text-[#AD1FEA] flex flex-row items-center justify-between">
                      <Link href="/">Least Upvotes</Link>
                      {active && <Image src={Tick} alt="tick" />}
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div className="text-xs md:text-sm px-4 py-2 border-b-[1px] border-[#e6ebfd] hover:text-[#AD1FEA] flex flex-row items-center justify-between">
                      <Link href="/">Most Comments</Link>
                      {active && <Image src={Tick} alt="tick" />}
                    </div>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <div className="text-xs md:text-sm px-4 py-2 hover:text-[#AD1FEA] flex flex-row items-center justify-between">
                      <Link href="/">Least Comments</Link>
                      {active && <Image src={Tick} alt="tick" />}
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </>
          )}
        </Menu>
      </div>
      <AddFeedbackButton />
    </div>
  );
};

export default SuggestionsHeader;
