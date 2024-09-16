import React from 'react'

const About = () => {
  return (
    <>
      <div id='about' className=" px-4  my-Bio min-h-[100vh] w-[100%] text-white py-8 ">
        
        <h1 className='text-white font-extrabold text-center text-2xl tracking-widest fancy-gradient-text cursor-pointer '>ABOUT ME</h1>


            <section className="px-2 py-10 md:px-0">
            <div className="mx-auto max-w-4xl">
              <div className="md:flex md:items-center md:justify-center md:space-x-14">
                <div className="relative   flex-shrink-0">
                  <img
                  id='About_photo'
                    className="relative h-[350px] w-[350px] lg:h-[350px] lg:w-[350px] xl:h-[350px] xl:w-[350px] md:h-[250px] md:w-[250px] rounded-full object-cover animate-pulse sm:h-[250px] sm:w-[250px] border-8 border-white "
                    src="sach.jpg"
                    alt="sachin"
                  />
                </div>
                <div className="mt-10 md:mt-0">
                <p className="mt-7 text-xl font-semibold text-white fancy-name ">Sachin Mali</p>
                <p className="mt-1 text-2xl font-extrabold text-white py-3 tracking-widest animate-zoomIn gradient-text ">- Frontend Developer</p>
                  <blockquote>
                    <p className="text-lg font-normal text-white tracking-widest ">
                       A Passionate Web Developer with dedication for creating user friendly Web Application having solid foundation in HTML , CSS , Javascript & React
                    </p>
                  </blockquote>
                 
                </div>
              </div>
            </div>
          </section>

      </div>
    </>
  )
}

export default About
