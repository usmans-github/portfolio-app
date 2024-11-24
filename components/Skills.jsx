import { SkillsIcons } from '@/data'
import React from 'react'

const Skills = () => {
  return (

    <div className="py-20" id="skills">
      <h1 className="heading">
        My Skills : {" "}
        <span className="text-purple">technologies I use</span>
      </h1>
      <div className='mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-center items-center gap-8 max-w-4xl mx-auto md:px-8'>
        {SkillsIcons.map((icon, index) => (
          <div key={index} className='relative flex items-center justify-center p-6 rounded-lg bg-gray-100
           dark:bg-slate-900/[0.8] transition-all duration-150 cursor-pointer'>

            <img
              src={icon.img}
              alt={icon.name}
              className="w-16 h-16 object-cover"
            />

            <div className="absolute inset-0 bg-[#F9FAFB] dark:bg-black-200 opacity-0 hover:opacity-90
              flex items-center justify-center rounded-lg transition-all duration-300">
              <span className="text-sm font-bold uppercase text-gray-800 dark:text-gray-200">
                {icon.name}
              </span>
            </div>
          </div>



        ))}
      </div>

    </div >
  )
}

export default Skills
