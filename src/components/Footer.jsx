import React from 'react'
import Avatar from './Avatar'

const Footer = () => {
  return (
    <div>
      <section className ="  overflow-hidden bg-gradient-to-r from-purple-600 to-red-500 text-white py-8  ">
  <div className ="container relative z-10 mx-auto px-4">
    <div className ="-m-8 flex flex-wrap items-center justify-between">
      <div className ="w-auto p-8">
        <a href="#">
          <div className ="inline-flex items-center">
            <span><Avatar/>  </span>
            <span className ="ml-4 text-lg font-bold fancy-name">Sachin Mali</span>
          </div>
        </a>
      </div>
      <div className ="w-auto p-8">
        <ul className ="-m-5 flex flex-wrap items-center">
          <li className ="p-5 animate-wiggle">
            <a className ="fo
            nt-medium   text-white hover:text-green-500" href="#">
              Privacy Policy
            </a>
          </li>
          <li className ="p-5 animate-wiggle">
            <a className ="fo
            nt-medium  text-white hover:text-green-500" href="#">
              Terms of Service
            </a>
          </li>
          <li className ="p-5 animate-wiggle">
            <a className ="fo
            nt-medium  text-white hover:text-green-500" href="#">
              Return Policy
            </a>
          </li>
          <li className ="p-5 animate-wiggle">
            <a className ="fo
            nt-medium  text-white hover:text-green-500" href="#">
              Contact Me
            </a>
          </li>
        </ul>
      </div>
      <div id='social' className ="w-auto p-8">
        <div className ="-m-1.5 flex flex-wrap">
          <div className ="w-auto p-1.5">
            <a href="https://github.com/sachin015">
              <div className ="  flex h-8 w-8 items-center justify-center rounded-full bg-white  hover:scale-110 transition-all duration-300">
                <img src="social/github.svg" alt="github" />
              </div>
            </a>
          </div>
          <div className ="w-auto p-1.5">
            <a href="https://www.linkedin.com/in/sach015">
              <div className ="  flex h-8 w-8 items-center justify-center rounded-full bg-white  hover:scale-110 transition-all duration-300 ">
              <img src="social/linkedin.svg" alt="linkedin" />
              </div>
            </a>
          </div>
          <div className ="w-auto p-1.5">
            <a href="https://www.facebook.com/profile.php?id=61550653363830">
              <div className ="  flex h-8 w-8 items-center justify-center rounded-full bg-white  hover:scale-110 transition-transform duration-300 ">
              <img src="social/facebook.svg" alt="facebook" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Footer
