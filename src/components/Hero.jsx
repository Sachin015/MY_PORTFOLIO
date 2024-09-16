import React from 'react'
const Hero = () => {
  return (
    <div id='home' className='flex justify-center flex-wrap flex-row fancy-gradient-background w-full min-h-[100vh] '>
      <div className="relative  text-white   sm:order-2 xl:order-1 lg:order-1 md:order-1 ">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className=" relative lg:col-span-5 lg:-mr-8 xl:col-span-6 flex sm:order-1 md:order-2 lg:order-2 xl:order-2 order-1 items-center justify-center ">
            <img
              id='sachin'
              className=" align bg-gray-50 object-cover  rounded-full h-[400px] w-[400px] sm:h-[400px] sm:w-[400px] md:h-400px] md:w-400px] lg:h-[400px] lg:w-[400px] xl:h-[400px] xl:w-[400px] sm:mt-5 border-8 border-white "
              src="Logo.png"
              alt=""
            />
          </div>
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6  sm:order-2 md:order-1 lg:order-1 xl:order-1">
            <img src="web.svg" alt="web" className='h-[3rem] w-[3rem] border-4 border-white rounded-full '/>
            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
              <div className="rounded-full bg-white  text-black p-1 px-2">
                <p className="text-lg font-bold animate-pulse font-poppins text-green-700">Welcome to my site &#128512;
                </p>
              </div>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
              Hi ! I'm <span className='fancy-name'>Sachin Mali,</span>
            </h1>
            <p className="mt-8 text-3xl fancy-gradient-text font-bold  ">
              A Frontend Developer
            </p>
            <div action="" className="mt-8 flex items-start space-x-3">
              <div>
                <button
                  className="animate-shake bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-900 hover:to-blue-600 hover:via-blue-700 hover:from-indigo-900 rounded-md text-white px-3 py-2.5 text-sm font-semibold   shadow-sm hover:bg-red/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white  hover:scale-90 transition-all  outline-none over:border-2 hover:border-white"
                >
                  <a href="contact" className='text-white hover:text-white'>Hire Me →</a>
                </button>
              </div>
              <div>
                <button
                  className=" bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-900  rounded-md text-white px-3 py-2.5 text-sm font-semibold   shadow-sm hover:bg-red/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white hover:scale-90 transition-all  outline-none hover:border-2 hover:border-white">
                  <a href="Resume/Sachin_Resume.pdf" download className='text-white hover:text-white'>Download Resume →</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
