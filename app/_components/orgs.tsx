"use client";

import fetchOrgs from "@/actions/fetch-orgs";
import { Skeleton } from "@/components/ui/skeleton";
import { Loader, Mail, MessageCircleIcon, MessageSquareIcon } from "lucide-react";
import { useEffect, useState } from "react";

export const Orgs = () => {
  const [orgs, setOrgs] = useState<{[key: string]: string | string[]}[]>([]);
  
  useEffect(()=>{
    const fetchData = async () => {
      const data: {[key: string]: string | string[]}[] = await fetchOrgs();
      setOrgs((prevData) => [...prevData, ...data]);
      console.log("result", orgs);
    }
    
    fetchData();
  }, []);

  const onClick = (channel: string | string[]) => {
    if(typeof(channel) === "string") {
      window.open(channel, "_blank");
    } else {
      window.open(channel[0], "_blank");
    }
  }

  return(
    <div className="flex flex-col justify-center items-center">
      <p className="text-[#9395D3] text-lg font-semibold">Organisations</p>
      <ol className="flex flex-col items-center">
        {orgs.length === 0 && (
          <div className="flex text-sm items-center justify-center my-10">
            <span className="mr-1 text-[#9395d3]">Just a sec</span><Loader className="flex-1 animate-spin text-[#9395D3]"/>
          </div>
        )}
        {orgs && orgs.map((org, index) => (
          <li className="bg-[#9395d3] text-[#000807] hover:bg-[#a2a3bb] cursor-pointer rounded-lg w-[300px] md:w-[600px] my-2 p-2" key={index}>
            <p className="font-semibold">{org.name}</p>
            <p className="text-xs font-bold italic">{org.category}</p>
            <p className="text-sm">{org.description}</p>
            <div className="flex gap-2 items-center">
              
              {org.irc_channel && 
                <p onClick={() => onClick(org.irc_channel)} className="text-xs group flex items-center justify-center gap-1 bg-[#000807] text-[#9395d3] p-1 mt-2 rounded-lg max-w-fit">
                  <MessageCircleIcon className="text-[#a2a3bb] h-4 w-4"/>
                  Org's IRC Channel
                </p>}
              {org.contact_email && 
                <p onClick={() => onClick(org.contact_email)} className="text-xs flex items-center justify-center gap-1 bg-[#000807] text-[#9395d3] p-1 mt-2 rounded-lg max-w-fit">
                  <Mail className="text-[#a2a3bb] h-4 w-4"/>
                  Mail
                </p>}
              {org.mailing_list && 
                <p onClick={() => onClick(org.mailing_list)} className="text-xs flex items-center justify-center gap-1 bg-[#000807] text-[#9395d3] p-1 mt-2 rounded-lg max-w-fit">
                  <MessageSquareIcon className="text-[#a2a3bb] h-4 w-4"/>
                  Mailing List
                </p>
              }
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

const OrgsLoadingSkeleton = () => {
  return(
    <div className="rounded-lg flex flex-col gap-2 items-start justify-center w-[300px] md:w-[600px] p-2 bg-[#484854]">
      <Skeleton className="w-[200px] h-5 bg-[#000807]"/>
      <Skeleton className="w-full h-10 bg-[#000807]"/>
      <Skeleton className="w-full h-5 bg-[#000807]"/>
    </div>
  )
}
