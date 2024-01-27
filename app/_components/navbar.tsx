"use client"

import { Github } from "lucide-react"

export const Navbar = () => {
  const onClick = () => {
    window.open("https://github.com/amratansh12/gsoc-issue-tracker", "_blank");
  }
  return(
    <div className="text-[#9395d3] text-2xl text-center font-bold flex justify-between p-4 items-center shadow-sm shadow-[#a2a3bb]">
      <p>GSOC Issue Tracker</p>
      <Github onClick={onClick} className="hover:bg-[#9395d3] hover:text-[#000807] p-2 rounded-full h-10 w-10 cursor-pointer"/>
    </div>
  )
}