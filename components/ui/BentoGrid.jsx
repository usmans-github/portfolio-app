import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";

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
                    className={cn(imgClassName, "object-cover object-center")}
                    />

                )}
          

            </div>
            <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'} `}>
                {
                    spareImg && (
                        <img
                        src={spareImg}
                        alt={spareImg}
                        className={'object-cover object-center w-full h-full'}
                        />
                    )
                }

            </div>
            {id === 6 && (
            <BackgroundGradientAnimation>
                <div className="absolute z-10 text-white font-bold flex justify-center items-center">

                </div>

            </BackgroundGradientAnimation>
            )}
            <div className={cn(titleClassName, "group-hover/bento:translate-x-2 transition duration-200 relative  md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 ")}>
                <div  className="desc font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10 ">
                {description}
                </div>
                <div
                className="title font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                {title}
              </div>
          
            {id === 2 && <GlobeDemo />}
            {id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                       <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                        {["React.js", "Next.js", "Tailwind CSS"].map(
                            (item) =>(
                            <span key={item} className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                            lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                            ))}

                        <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />

                    </div>
                    <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">   
                    <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                        {["MongoDb", "JavaScript", "Node JS"].map(
                            (item) =>(
                            <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">{item}</span>
                            ))}

                       

                    </div>

                </div>
            )}


        </div>
  
        </div>
    </div>)
  );
};
