import Image from "next/image";
import { Navbar } from "./_components/navbar";
import { Search } from "./_components/search";
import { Orgs } from "./_components/orgs";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Search />
      <Orgs />
    </div>
  );
}
