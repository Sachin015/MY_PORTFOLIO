import React from 'react'


const Project = [
    {
      imageSrc: "Project/Port1.png",
      name: "Project Portfolio",
      descriptionText: "Developed a responsive Portfolio  with Vanilla HRML, CSS & JS",
    },
    {
      imageSrc: "Project/Port2.png",
      name: "Project Portfolio",
      descriptionText: " Built a portfolio website using Vite and Tailwind CSS, featuring interactive UI components",
    },
    {
      imageSrc: "Project/Port3.png",
      name: "Project Portfolio",
      descriptionText: "Developed a responsive Portfolio  with Vanilla HRML, CSS & JS",
    },
    {
      imageSrc: "Project/gallery.png",
      name: "Image Gallery",
      descriptionText: "Developed interactive image gallery using React.js and LightGallery, featuring smooth transitions, lightbox effects, and a responsive layout",
    }
  ];  


const Work = () => {
  return (
    <div id='work' className='bg-black grid place-items-center py-4 min-h-full'>
    
            <h1 className='fancy-gradient-text py-4'>Projects</h1>
    <div className='bg-black grid grid-cols-auto lg:grid-cols-2 xl:grid-cols-2 place-items-center  min-h-[60vh] w-full  px-4 '>
        {
    Project.map((project , index)=>(
        <div key={index} className ="flex max-w-2xl flex-col items-center rounded-md border md:flex-row bg-black my-4 Banana">
        <div className ="h-full w-full md:h-[200px] md:w-[300px]">
          <img
            src={project.imageSrc}
            alt={project.name}
            className ="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className ="p-4">
            <h1 className ="inline-flex items-center text-lg font-semibold text-lime-500">
            {project.name}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className ="ml-2 h-4 w-4"
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </h1>
            <p className ="mt-3 text-sm  text-white">
              {project.descriptionText}
            </p>
            <button className=' rounded-md border-2 py-1 px-4 my-4 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-900 animate-shake hover:to-blue-600 hover:via-blue-700 hover:from-indigo-900'><a className='text-white hover:text-white' href="http://github.com/sachin015"> Open → </a></button>
          </div>
        </div>
      </div>
    ))
   }
    </div>
    </div>
  )
}

export default Work
