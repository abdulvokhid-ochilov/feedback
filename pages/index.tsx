import type { NextPage } from "next";
import FeedbackCard from "../components/FeedbackCard";
import Navbar from "../components/Navbar";
import SuggestionsHeader from "../components/SuggestionsHeader";
import { useState } from "react";
import NoFeedback from "../components/NoFeedback";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main
      className={`xl:w-[1200px] m-auto  min-h-[100vh] flex flex-col xl:flex-row md:gap-8 md:p-6 ${
        isOpen && "overflow-hidden"
      }`}
    >
      <Navbar setIsOpen={setIsOpen} />
      <div>
        <SuggestionsHeader />
        {/* <div className="flex flex-col space-y-4 mt-4 px-3 md:px-0">
          {[...Array(6)].map((_, i) => (
            <FeedbackCard key={i} />
          ))}
        </div> */}
        <div className="px-3 md:px-0">
          <NoFeedback />
        </div>
      </div>
    </main>
  );
};

export default Home;
