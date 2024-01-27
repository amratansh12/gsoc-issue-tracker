"use client";

import { X } from "lucide-react"
import { useState, useContext } from "react"
import { SearchContext } from "@/contexts/searchContext";

export const Search = () => {
  const {search, setSearch} = useContext(SearchContext);

  const onClick = () => {
    setSearch("");
  }

  return(
    <div className="flex flex-col justify-center items-center p-12 h-full">
      <p className="text-[#9395D3] my-2 text-lg font-semibold tracking-wide">Search the Organisation</p>
      <div className="relative">
        <input 
          onChange={(e) => setSearch(e.target.value)} 
          type="text" 
          className="bg-[#a2a3bb] p-2 rounded-lg w-[300px] md:w-[400px] font-bold outline-none focus:ring-transparent" 
          value={search}
        />
        {search && (
          <X 
            onClick={onClick} 
            className="absolute text-[#000807] right-2 top-2 cursor-pointer"
          />
        )}
      </div>
    </div>
  )
}