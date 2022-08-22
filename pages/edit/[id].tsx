import React from "react";
import Image from "next/image";
import Left from "../../assets/shared/icon-arrow-left.svg";
import { Menu, Transition } from "@headlessui/react";
import Up from "../../assets/shared/icon-up.svg";
import Down from "../../assets/shared/icon-down.svg";
import Link from "next/link";
import Tick from "../../assets/shared/icon-check.svg";
import Edit from "../../assets/shared/icon-edit-feedback.svg";
import { useState } from "react";

const EditFeedback = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="xl:w-[1200px] m-auto  min-h-[100vh] flex flex-col md:gap-6 gap-3 p-3 md:p-6 ">
      <div className="w-[328px] md:w-[540px]  mx-auto ">
        <div className="flex flex-row gap-2 items-center">
          <Image src={Left} alt="back" />
          <p className="text-[#647196] font-bold text-xs hover:cursor-pointer hover:underline">
            Go Back
          </p>
        </div>
      </div>
      <div className="mt-6 p-4 sm:p-6 md:p-8 bg-white w-[328px] md:w-[540px] mx-auto rounded-lg">
        <div className="-mt-10 sm:-mt-12 md:-mt-14">
          <Image src={Edit} alt="plus" width={56} height={56} />
        </div>
        <h1 className="text-[#3A4374] text-sm md:text-base font-bold tracking-wide mb-6">
          Editing ‘Add a dark theme option’
        </h1>
        <div className="mb-3">
          <h2 className="text-[#3A4374]  text-xs md:text-sm font-bold tracking-wide">
            Feedback Title
          </h2>
          <p className="text-xs md:text-sm text-[#647196]">
            Add a short, descriptive headline
          </p>
          <input className="mt-3 sm:mb-2 text-xs md:text-sm bg-[#F7F8FD] rounded w-full p-2 outline outline-transparent outline-offset-1 focus:outline-[#4661E6]" />
        </div>
        <div className="mb-3">
          <h2 className="text-[#3A4374]  text-xs md:text-sm font-bold tracking-wide">
            Category
          </h2>
          <p className="text-xs md:text-sm text-[#647196]">
            Choose a category for your feedback
          </p>
          <Menu>
            {({ open }) => (
              <>
                {setIsOpen(open)}
                <Menu.Button
                  className={`mb-2 mt-3 w-full bg-[#F7F8FD] rounded ${
                    open && "outline  outline-offset-1 outline-[#4661E6]"
                  }`}
                >
                  <div className="p-2 text-xs md:text-sm  flex flex-row justify-between items-center ">
                    <p className="text-[#3A4374]">Feature </p>
                    {open ? (
                      <Image src={Up} alt="up" />
                    ) : (
                      <Image src={Down} alt="down" />
                    )}
                  </div>
                </Menu.Button>

                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className="h-0 ">
                    <div className="flex flex-col bg-white text-[#647196]  w-[285px] sm:w-[268px] md:w-[456px] drop-shadow-2xl rounded-lg ">
                      <Menu.Item>
                        {({ active }) => (
                          <div className="text-xs md:text-sm px-4 py-2 border-b-[1px] border-[#e6ebfd] hover:text-[#AD1FEA] flex flex-row items-center justify-between bg-white">
                            <Link href="/">Feature</Link>
                            {active && <Image src={Tick} alt="tick" />}
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className="text-xs md:text-sm px-4 py-2 border-b-[1px] border-[#e6ebfd] hover:text-[#AD1FEA] flex flex-row items-center justify-between">
                            <Link href="/">UI</Link>
                            {active && <Image src={Tick} alt="tick" />}
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className="text-xs md:text-sm px-4 py-2 hover:text-[#AD1FEA] border-b-[1px] border-[#e6ebfd] flex flex-row items-center justify-between ">
                            <Link href="/">UX</Link>
                            {active && <Image src={Tick} alt="tick" />}
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className="text-xs md:text-sm px-4 py-2 hover:text-[#AD1FEA] border-b-[1px] border-[#e6ebfd] flex flex-row items-center justify-between">
                            <Link href="/">Enhancement</Link>
                            {active && <Image src={Tick} alt="tick" />}
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className="text-xs md:text-sm px-4 py-2 hover:text-[#AD1FEA] flex flex-row items-center justify-between">
                            <Link href="/">Bug</Link>
                            {active && <Image src={Tick} alt="tick" />}
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
        <div className="mb-3">
          <h2 className="text-[#3A4374]  text-xs md:text-sm font-bold tracking-wide">
            Update Status
          </h2>
          <p className="text-xs md:text-sm text-[#647196]">
            Change feature state
          </p>
          <Menu>
            {({ open }) => (
              <>
                <Menu.Button
                  className={`mb-2 mt-3 w-full bg-[#F7F8FD] rounded ${
                    open && "outline  outline-offset-1 outline-[#4661E6]"
                  }`}
                >
                  <div className="p-2 text-xs md:text-sm  flex flex-row justify-between items-center ">
                    <p className="text-[#3A4374]">Planned </p>
                    {open ? (
                      <Image src={Up} alt="up" />
                    ) : (
                      !isOpen && <Image src={Down} alt="down" />
                    )}
                  </div>
                </Menu.Button>

                <Transition
                  show={open}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className="h-0 ">
                    <div className="flex flex-col bg-white text-[#647196]  w-[285px] sm:w-[268px] md:w-[456px] drop-shadow-2xl rounded-lg ">
                      <Menu.Item>
                        {({ active }) => (
                          <div className="text-xs md:text-sm px-4 py-2 border-b-[1px] border-[#e6ebfd] hover:text-[#AD1FEA] flex flex-row items-center justify-between bg-white">
                            <Link href="/">Suggestion</Link>
                            {active && <Image src={Tick} alt="tick" />}
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className="text-xs md:text-sm px-4 py-2 border-b-[1px] border-[#e6ebfd] hover:text-[#AD1FEA] flex flex-row items-center justify-between">
                            <Link href="/">Planned</Link>
                            {active && <Image src={Tick} alt="tick" />}
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className="text-xs md:text-sm px-4 py-2 hover:text-[#AD1FEA] border-b-[1px] border-[#e6ebfd] flex flex-row items-center justify-between">
                            <Link href="/">In-Progress</Link>
                            {active && <Image src={Tick} alt="tick" />}
                          </div>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <div className="text-xs md:text-sm px-4 py-2 hover:text-[#AD1FEA] border-b-[1px] border-[#e6ebfd] flex flex-row items-center justify-between">
                            <Link href="/">Live</Link>
                            {active && <Image src={Tick} alt="tick" />}
                          </div>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </>
            )}
          </Menu>
        </div>
        <div className="mt-4">
          <h2 className="text-[#3A4374]  text-xs md:text-sm font-bold tracking-wide">
            Feedback Detail
          </h2>
          <p className="text-xs md:text-sm text-[#647196]">
            Include any specific comments on what should be improved, added,
            etc.
          </p>
          <textarea className="mt-3 sm:mb-2 text-xs md:text-sm bg-[#F7F8FD] rounded w-full h-[96px] p-2 outline outline-transparent outline-offset-1 focus:outline-[#4661E6] resize-none" />
        </div>
        <div className="mt-4 flex flex-col-reverse md:flex-row gap-2 justify-between text-white text-xs  font-semibold tracking-wide">
          <div className="rounded-lg bg-[#D73737] py-2 px-4 text-center hover:cursor-pointer hover:bg-[#E98888]">
            Delete
          </div>

          <div className="flex flex-col-reverse md:flex-row gap-2 justify-end">
            <div className="rounded-lg bg-[#3A4374] py-2 px-4 text-center hover:cursor-pointer hover:bg-[#656EA3]">
              Cancel
            </div>
            <div className="rounded-lg bg-[#AD1FEA] py-2 px-4 text-center hover:cursor-pointer hover:bg-[#C75AF6]">
              Save Changes
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditFeedback;
