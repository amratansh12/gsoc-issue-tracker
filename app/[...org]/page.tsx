"use client";
import { useEffect, useState } from "react";
import { Chart } from "../_components/chart";
import { ExternalLink, Mail, Twitter } from "lucide-react";

const Page = ({
  params,
}: {
  params: {
    org: string,
  }
}) => {
  //removing the hydration error
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, [])

  if(isClient === false) {
    return <div>Still Loading the UI...</div>
  }

  var currentOrg;
  if(typeof window !== "undefined") {
    currentOrg = JSON.parse(localStorage.getItem("org")!);
  }

  const onClick = (url: string) => {
    window.open(url, "_blank");
  }

  return(
    <div className="flex flex-col">
      <div className="bg-[#a2a3bb] p-2 text-center font-extrabold text-2xl text-[#000807]">
        {currentOrg.name}
      </div>

      {/* Body */}
      <div className="flex gap-10 h-full items-start p-10 justify-center flex-wrap">
        {/* Box */}
        <div className="relative flex flex-col gap-1 shadow-sm shadow-[#9395d3] rounded-lg p-5 w-[300px] md:w-[500px]">
          {/* Badge */}
          <div className="absolute w-full bg-[#9395d3] text-[#000807] font-semibold top-0 left-0 rounded-tl-lg rounded-tr-lg px-1">
            {currentOrg.category}
          </div>

          {/* Description */}
          <div className="mt-5">
            <span className="text-[#a2a3bb] font-semibold mr-2">
              Description:
            </span>
            <span className="text-[#9395d3]">
              {currentOrg.description}
            </span>
          </div>

          {/* Org URL */}
          {currentOrg.url && <div>
            <span className="text-[#a2a3bb] font-semibold mr-2">
              Org URL:
            </span>
            <span onClick={() => onClick(currentOrg!.url)} className="inline-flex items-center hover:underline cursor-pointer text-[#9395d3]">
              Here
              <ExternalLink className="h-4 w-4 inline-block ml-1"/>
            </span>
          </div>}

          {/* IRC Channel */}
          {currentOrg.irc_channel && <div>
            <span className="text-[#a2a3bb] font-semibold mr-2">
              IRC Channel:
            </span>
            <span onClick={() => onClick(currentOrg!.irc_channel)} className="inline-flex items-center hover:underline cursor-pointer text-[#9395d3] truncate">
              Here
              <ExternalLink className="h-4 w-4 inline-block ml-1"/>
            </span>
          </div>}

          {/* Mailing List */}
          {currentOrg.mailing_list && <div>
            <span className="text-[#a2a3bb] font-semibold mr-2">
              Mailing List:
            </span>
            <span onClick={() => onClick(currentOrg!.mailing_list)} className="hover:underline cursor-pointer text-[#9395d3]">
              Here
            </span>
          </div>}

          {/* Blog Url */}
          {currentOrg.blog_url && <div>
            <span className="text-[#a2a3bb] font-semibold mr-2">
              Blog URL:
            </span>
            <span onClick={() => onClick(currentOrg!.blog_url)} className="inline-flex items-center hover:underline cursor-pointer text-[#9395d3]">
              Here
              <ExternalLink className="h-4 w-4"/>
            </span>
          </div>}

          <hr className="w-full border-0 h-[2px] mb-2 rounded-lg bg-[#9395d3]"/>

          {/* Topics */}
          {currentOrg.topics && (
            <div>
              <p className="text-[#9395d3] mb-1 underline font-semibold">TOPICS :</p>
              <ul className="flex flex-wrap gap-1">
                {currentOrg.topics.map((topic: string) => (
                  <li className="bg-[#a2a3bb] text-[#000807] text-center p-1 font-semibold min-w-[50px] text-xs rounded-lg">
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Technologies */}
          {currentOrg.technologies && (
            <div>
              <p className="text-[#9395d3] mb-1 underline font-semibold">TECHNOLOGIES :</p>
              <ul className="flex flex-wrap gap-1">
                {currentOrg.technologies.map((tech: string) => (
                  <li className="bg-[#a2a3bb] text-[#000807] text-center p-1 font-semibold min-w-[50px] text-xs rounded-lg">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <hr className="w-full border-0 h-[2px] rounded-lg mt-2 bg-[#9395d3]"/>

          <div className="flex gap-2 mt-2">
            {/* Contact Email */}
            {currentOrg.contact_email && (
              <button onClick={() => onClick(currentOrg!.contact_email)} className="flex gap-1 items-center justify-center bg-[#9395d3] p-1 rounded-lg font-semibold">
                <Mail className="h-4 w-4"/>
                <span>Mail</span>
              </button>
            )}

            {/* Twitter URL */}
            {currentOrg.twitter_url && (
              <button onClick={() => onClick(currentOrg!.twitter_url)} className="flex gap-1 items-center justify-center bg-[#9395d3] p-1 rounded-lg font-semibold">
                <Twitter className="h-4 w-4"/>
                <span>Twitter</span>
              </button>
            )}
          </div>
        </div>

        {/* Graph */}
        <div className="flex flex-col items-center w-[300px] h-[300px]">
          <p className="text-[#9395d3] underline mb-1">{currentOrg.name} projects over the years</p>
          <Chart years={currentOrg.years}/>
        </div>
      </div>
    </div>    
  )
}
export default Page;