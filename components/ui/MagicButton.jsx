"use Client"
import React from 'react'

const MagicButton = (
   {
    title,
    icon,
    position,
    handleClick,
    otherClasses
   }

) => {
    
    return (
        <div>
            <button onClick={handleClick} className="relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none md:w-60 md:mt-10">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg dark:bg-slate-950 bg-[#F9FAFB] px-5  text-sm font-medium text-black-100 dark:text-white backdrop-blur-3xl ${otherClasses}`}>
                    {position === "left" && icon}
                   {title}
                    {position === "right" && icon}
                </span>
            </button>
        </div>
    )
}

export default MagicButton