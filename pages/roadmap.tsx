import React, { useState } from "react";
import RoadmapHeader from "../components/RoadmapHeader";
import RoadmapCard from "../components/RoadmapCard";
import { Tab } from "@headlessui/react";

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

const Roadmap = () => {
  return (
    <main className="xl:w-[1200px] m-auto min-h-[100vh] flex flex-col md:gap-6 sm:p-3 md:p-6 ">
      <RoadmapHeader />

      <div className="sm:hidden">
        <Tab.Group>
          <Tab.List className="flex space-x-1 border-b-2">
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full text-sm font-medium leading-5 p-3 ",
                  "",
                  selected
                    ? "text-[#3A4374] border-b-4 border-[#F49F85]"
                    : "text-[#3a43747c]"
                )
              }
            >
              Planned
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full text-sm font-medium leading-5 p-3",
                  "",
                  selected
                    ? "text-[#3A4374]  border-b-4 border-[#AD1FEA]"
                    : "text-[#3a43747c]"
                )
              }
            >
              In-Progress
            </Tab>
            <Tab
              className={({ selected }) =>
                classNames(
                  "w-full text-sm font-medium leading-5 p-3",
                  "",
                  selected
                    ? "text-[#3A4374] border-b-4 border-[#62BCFA]"
                    : "text-[#3a43747c]"
                )
              }
            >
              Live
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel>
              <div className="my-4 w-[327px] mx-auto">
                <h1 className="text-[#3A4374] text-sm md:text-base font-bold tracking-wide ">
                  Planned (2)
                </h1>
                <p className="text-xs md:text-sm text-[#647196]">
                  Ideas prioritized for research
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <RoadmapCard type="planned" />
                <RoadmapCard type="planned" />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="my-4 w-[327px] mx-auto">
                <h1 className="text-[#3A4374] text-sm md:text-base font-bold tracking-wide ">
                  In-Progress (3)
                </h1>
                <p className="text-xs md:text-sm text-[#647196]">
                  Currently being developed
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <RoadmapCard type="in-progress" />
                <RoadmapCard type="in-progress" />
                <RoadmapCard type="in-progress" />
              </div>
            </Tab.Panel>
            <Tab.Panel>
              <div className="my-4 w-[327px] mx-auto">
                <h1 className="text-[#3A4374] text-sm md:text-base font-bold tracking-wide ">
                  Live (1)
                </h1>
                <p className="text-xs md:text-sm text-[#647196]">
                  Released features
                </p>
              </div>
              <div className="flex flex-col gap-4">
                <RoadmapCard type="live" />
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>

      <div className="hidden w-full sm:w-[689px] xl:w-[1110px] sm:flex flex-row  justify-between mx-auto ">
        <div>
          <div className="mb-4">
            <h1 className="text-[#3A4374] text-sm md:text-base font-bold tracking-wide ">
              Planned (2)
            </h1>
            <p className="text-xs md:text-sm text-[#647196]">
              Ideas prioritized for research
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <RoadmapCard type="planned" />
            <RoadmapCard type="planned" />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h1 className="text-[#3A4374] text-sm md:text-base font-bold tracking-wide ">
              In-Progress (3)
            </h1>
            <p className="text-xs md:text-sm text-[#647196]">
              Currently being developed
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <RoadmapCard type="in-progress" />
            <RoadmapCard type="in-progress" />
            <RoadmapCard type="in-progress" />
          </div>
        </div>
        <div>
          <div className="mb-4">
            <h1 className="text-[#3A4374] text-sm md:text-base font-bold tracking-wide ">
              Live (1)
            </h1>
            <p className="text-xs md:text-sm text-[#647196]">
              Released features
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <RoadmapCard type="live" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Roadmap;
