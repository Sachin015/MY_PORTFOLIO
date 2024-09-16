import React from 'react'

const Skills = () => {
  return (
    <div id='skill' className='bg-black min-h-[70vh] width-[70vw] py-[2rem] px-[4rem] '>
    <h1 className='text-white font-extrabold text-center text-2xl tracking-widest  fancy-gradient-text  cursor-pointer animate-bounce '>SKILLS</h1>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5  place-items-center  
      Banana">
        
      <span className='animate-pulse h-[3rem] w-[3rem] py-12 transition-transform transform hover:scale-200 hover:rotate-6 cursor-pointer'>
      <img src="skills/html.svg" alt="Html" />
    </span>

      <span className='animate-pulse h-[3rem] w-[3rem] py-12 transition-transform transform hover:scale-200 hover:rotate-6 cursor-pointer'>
      <img src="skills/css.svg"  alt="react" />
      </span>

      <span className='animate-pulse h-[3rem] w-[3rem] py-12 transition-transform transform hover:scale-200 hover:rotate-6 cursor-pointer'>
      <img src="skills/bootstrap.svg" alt="react" />
      </span>

      <span className='animate-pulse h-[3rem] w-[3rem] py-12 transition-transform transform hover:scale-200 hover:rotate-6 cursor-pointer'>
      <img src="skills/tailwind.svg"  alt="react" />
      </span>

      <span className='animate-pulse h-[3rem] w-[3rem] py-12 transition-transform transform hover:scale-200 hover:rotate-6 cursor-pointer'>
      <img src="skills/javascript.svg" alt="react" />
      </span>
      <span className='animate-pulse h-[3rem] w-[3rem] py-12 transition-transform transform hover:scale-200 hover:rotate-6 cursor-pointer'>
      <img src="skills/react.svg" alt="react" />
      </span>

      <span className='animate-pulse h-[3rem] w-[3rem] py-12  rounded-md  transition-transform transform hover:scale-200 hover:rotate-6 cursor-pointer'>
      <img src="skills/next-js.svg" alt="next-js " className='bg-white '   />
      </span>

      <span className='animate-pulse h-[3rem] w-[3rem] py-12 transition-transform transform hover:scale-200 hover:rotate-6 cursor-pointer'>
      <img src="skills/git.svg" alt="react" />
      </span>

      <span className='animate-pulse h-[3rem] w-[3rem] py-12 transition-transform transform hover:scale-200 hover:rotate-6 cursor-pointer'>
      <img src="skills/github.svg" alt="react" />
      </span>

      <span className='animate-pulse h-[3rem] w-[3rem] py-12 transition-transform transform hover:scale-200 hover:rotate-6 cursor-pointer'>
      <img src="skills/photoshop.svg" alt="react" />
      </span>

      <span className='animate-pulse h-[3rem] w-[3rem] py-12 transition-transform transform hover:scale-200 hover:rotate-6 cursor-pointer'>
      <img src="skills/illustrator.svg" alt="react" />
      </span>


      </div>
    </div>
  )
}

export default Skills
