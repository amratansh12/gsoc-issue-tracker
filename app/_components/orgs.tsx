"use client";

import fetchOrgs from "@/actions/fetch-orgs";
import { SearchContext } from "@/contexts/searchContext";
import { cn } from "@/lib/utils";
import { Mail, MessageCircleIcon, List, Loader2 } from "lucide-react";
import { useContext, useEffect, useState } from "react";

type OrgsProps = {
  name: string;
  image_url: string;
  image_background_color: string;
  description: string;
  url: string;
  category: string;
  irc_channel: string;
  contact_email: string;
  mailing_list: string;
  twitter_url: string;
  blog_url: string;
  topics: string[];
  technologies: string[];
  years: {[key: string]: any};
}

export const Orgs = () => {
  const [orgs, setOrgs] = useState<OrgsProps[]>([]);
  const {search} = useContext(SearchContext);
  
  useEffect(()=>{
    const fetchData = async () => {
      const data: OrgsProps[] = await fetchOrgs();
      setOrgs((prevData) => [...data]);
      console.log("result", orgs);
    }
    
    fetchData();
  }, []);

  useEffect( () => {
    orgs.filter((org) => org.name.includes(search))
  }, [search])

  const onClick = (channel: string | string[]) => {
    if(typeof(channel) === "string") {
      window.open(channel, "_blank");
    } else {
      window.open(channel[0], "_blank");
    }
  }

  const onRedirect = (org: OrgsProps) => {
    localStorage.setItem("org", JSON.stringify(org));
    window.open(`/${org.name}`, "_blank")
  }

  const regex = new RegExp(search, "i");

  return(
    <div className="flex flex-col justify-center items-center">
      <p className="text-[#9395D3] text-lg font-semibold">Organisations</p>
      <ol className="flex flex-col items-center">
        {orgs.length === 0 && (
          <div className="flex text-sm items-center justify-center my-10">
            <span className="mr-1 text-[#9395d3]">
              Fetching the GSOC api...
            </span>
            <Loader2 className="flex-1 animate-spin text-[#9395D3]"/>
          </div>
        )}
        {orgs && orgs.map((org, index) => (
          <div 
            onClick={() => onRedirect(org)}
            className={cn(
              "relative bg-[#9395d3] text-[#000807] hover:bg-[#a2a3bb] rounded-lg w-[300px] md:w-[600px] my-2 p-2 cursor-pointer",
              regex.test(org.name) ? "block" : "hidden",
            )} 
            key={index}
          >
            <p className="hidden md:inline-block absolute bg-[#000807] text-[#a2a3bb] right-2 p-2 rounded-lg text-xs text-center font-bold">
              Total Years : {Object.keys(org.years).length}
            </p>
            <p className="font-bold text-lg w-[300px] md:w-[500px]">{org.name}</p>
            <p className="text-xs font-bold italic">{org.category}</p>
            <p className="text-sm">{org.description}</p>
            <div className="flex flex-col md:flex-row md:gap-2 items-start">
              {org.irc_channel && 
                <p onClick={() => onClick(org.irc_channel)} className="text-xs hover:text-[#000807] hover:bg-[#a2a3bb] cursor-pointer flex items-center justify-center gap-1 bg-[#000807] text-[#9395d3] p-1 mt-2 rounded-lg max-w-fit">
                  <MessageCircleIcon className="text-[#a2a3bb] h-4 w-4"/>
                  Org's IRC Channel
                </p>}
              {org.contact_email && 
                <p onClick={() => onClick(org.contact_email)} className="text-xs hover:text-[#000807] hover:bg-[#a2a3bb] cursor-pointer flex items-center justify-center gap-1 bg-[#000807] text-[#9395d3] p-1 mt-2 rounded-lg max-w-fit">
                  <Mail className="text-[#a2a3bb] h-4 w-4"/>
                  Mail
                </p>}
              {org.mailing_list && 
                <p onClick={() => onClick(org.mailing_list)} className="text-xs hover:text-[#000807] hover:bg-[#a2a3bb] cursor-pointer flex items-center justify-center gap-1 bg-[#000807] text-[#9395d3] p-1 mt-2 rounded-lg max-w-fit">
                  <List  className="text-[#a2a3bb] h-4 w-4"/>
                  Mailing List
                </p>
              }
            </div>
            <ul className="flex flex-wrap items-center justify-end gap text-[#000807] mt-2">
              {Object.keys(org.years).map((year) => (
                <li className="p-1 text-sm font-semibold rounded-lg">
                  {year}
                </li>
              ))}
            </ul>
            <hr className="w-full border-0 h-[2px] rounded-lg my-2 bg-[#000807]"/>
            <ul className="flex flex-col gap-1 justify-between">
              <p className="underline font-bold text-[#000807]">Technologies: </p>
              <div className="flex flex-wrap gap-1">
              {org.technologies.map((tech, index) => (
                <li 
                  key={index} 
                  className="text-[#9395d3] min-w-[50px] text-center capitalize bg-[#000807d2] text-xs p-1 rounded-lg"
                >
                  {tech}
                </li>
              ))}
              </div>
            </ul>
            {/* <div className="absolute z-10 top-0 right-[-270px]">
              <Chart years={org.years}/> 
            </div> */}
          </div>
        ))}
      </ol>
    </div>
  );
};
