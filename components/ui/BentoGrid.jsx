"use client"
import { cn } from "@/lib/utils";
import { useState } from "react";
import animationData from "@/data/confetti.json"
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { Meteors } from "./meteors";

export const BentoGrid = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "grid gap-4  md:grid-row-7  mx-auto lg:gap-8 grid-cols-1 md:grid-cols-6 lg:grid-cols-5",
        className
      )}>
      {children}
    </div>)
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  titleClassName,
  imgClassName,
  spareImg,
}) => {

  const [copied, setcopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("usmanali730771@gmail.com")
    setcopied(true)
  }

  const [downloaded, setdownloaded] = useState(false)
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume.pdf" 
    link.download = "Usman's-resume.pdf"
    link.click()
    setdownloaded(true)
  }
  

  const leftLists = ["React.js", "Next.js", "Tailwind CSS"]
  const rightLists = ["MongoDb", "JavaScript", "Node JS"]
  


  return (
    (<div
      className={cn(
        "relative row-span-1 rounded-3xl group/bento overflow-hidden hover:shadow-xl transition duration-200 shadow-input dark:shadow-none border border-white/[0.1] justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        backgroundColor: "rgb(4,7,29)"
      }}
    >
      
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        
      <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
         
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}  `}>
       
          { spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className={'object-cover object-center w-full h-full'}
              />
            )
          }
          

        </div>
        {id === 6 && (
          <BackgroundGradientAnimation /> 
        )}
        <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative  md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-8 ")}>
          <div className="desc font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 ">
            {description}
          </div>
          <div
            className="title font-sans font-bold text-lg lg:text-3xl max-w-md z-10">
            {title}
          </div>

          {id === 2 && <GlobeDemo />}
    
          {id === 1 && (
          <div className="flex justify-end z-10">
            <Meteors number={20} />
           <MagicButton
           title={downloaded ? "Downloaded successfully" : "Download CV"}
           icon={<FiDownload className="mx-2 size-4" />}
           position="right"
           handleClick={handleDownload}
           otherClasses="!bg-[#161A31]"
           />
           </div>
        )}
          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map(
                  (item) => (
                    <span key={item} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                  ))}

                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />

              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {rightLists.map(
                  (item) => (
                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                  ))}



              </div>

            </div>
          )}
          {id === 6 && (
            <div className=" mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice"
                    }
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline className="mx-2" />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31] "
              />
            </div>
          )}

        </div>

      </div>
    </div>)
  );
};
