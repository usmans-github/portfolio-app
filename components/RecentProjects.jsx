"use client";
import React from "react";
import { FaLocationArrow } from "react-icons/fa6";
import { Combined3DCard } from "./ui/3d-card";
import { projects } from "@/data";
import Image from "next/image";

const RecentProjects = () => {

  return (
    <div className="pt-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 mt-10">
        {projects.map((project) => (
            <div
              key={project.id}
              className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
            >
              <Combined3DCard  href={project.link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#f9fafb] dark:bg-[#13162D]"
                  >
                   <img src="/bg.png" alt="bg-img" />
                  </div>
                  <Image
                    width={600}
                    height={600}
                    src={project.img}
                    alt={project.title}
                    style={{objectFit: "cover"}}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {project.title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                  {project.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {project.iconLists.map((icon, index) => (
                       <div
                       key={index}
                       className="border border-white/[.2] rounded-full bg-black-100 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                       style={{
                         transform: `translateX(-${5 * index * 2}px)`,
                       }}
                     >
                       <img src={icon} alt="icon5" className="p-2" />
                     </div>
                    ))}
                  </div>

                  <div className="flex justify-center items-center text-nowrap">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </Combined3DCard>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RecentProjects;