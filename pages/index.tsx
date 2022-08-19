import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import SuggestionsHeader from "../components/SuggestionsHeader";

const Home: NextPage = () => {
  return (
    <main className="xl:w-[1200px] m-auto overflow-hidden h-[100vh] flex flex-col xl:flex-row md:gap-8 md:p-6">
      <Navbar />
      <div>
        <SuggestionsHeader />
      </div>
    </main>
  );
};

export default Home;
