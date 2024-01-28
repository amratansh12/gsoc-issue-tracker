import { Navbar } from "./_components/navbar";
import { Search } from "./_components/search";
import { Orgs } from "./_components/orgs";
import { SearchContextProvider } from "@/contexts/searchContext";

const Home = () => {
  return (
    <div className="flex flex-col">
      <SearchContextProvider>
        <Navbar />
        <Search />
        <Orgs />
      </SearchContextProvider>
    </div>
  );
};

export default Home;
