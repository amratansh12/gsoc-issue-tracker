import { Github } from "lucide-react"

export const Navbar = () => {
  return(
    <div className="text-[#a2a3bb] text-2xl text-center font-bold flex justify-between p-4 items-center shadow-sm shadow-[#a2a3bb]">
      <p>GSOC Issue Tracker</p>
      <Github className="hover:bg-[#a2a3bb] hover:text-[#000807] p-2 rounded-lg h-10 w-10 cursor-pointer"/>
    </div>
  )
}