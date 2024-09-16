import React, { useState } from 'react';
import Avatar from './Avatar';
import './Gradient.css';
import Banner from './Banner';
import {NavLink} from 'react-router-dom'
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const ActiveNav = ({isActive})=>{
    return{
        fontweight : isActive ? 'bold' : 'normal',
    }
}

  return (
    <>
   
    <div  className='sticky top-0 left-0 z-30 '>
    <div  className=" relative w-full bg-gradient-to-r from-purple-600 to-red-500 text-white ">
      <div className="flex max-w-7xl items-center justify-between px-14 py-2">
        <div className="inline-flex items-center space-x-2">
          <span>
            <Avatar />
          </span>
          <span className="text-lg font-semibold pl-2 fancy-name  ">Sachin Mali</span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden lg:flex grow items-start navigation relative">
          <nav className="ml-[10rem] inline-flex space-x-8 font-extralight relative">
          <NavLink to='/' style={ActiveNav} className='text-xl font-popins font-normal tracking-wdest'>Home</NavLink>
           <NavLink to='/About' style={ActiveNav} className='text-xl font-popins font-normal tracking-wdest'>About</NavLink>
           <NavLink to='/Projects' style={ActiveNav} className='text-xl font-popins font-normal tracking-wdest'>Portfolio</NavLink>
           <NavLink to='/Skills' style={ActiveNav} className='text-xl font-popins font-normal tracking-wdest'>Skills</NavLink>
           <NavLink to='/Contact' style={ActiveNav} className='text-xl font-popins font-normal tracking-wdest'>Contact</NavLink>
          </nav>
        </div>

        {/* Connect Button */}
        <div className="hidden lg:block">
          <button
            type="button"
            className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-900 rounded-md  px-3 py-2.5 text-sm font-semibold shadow-sm hover:bg-red/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all hover:border-2 hover:border-white outline-none animate-shake hover:to-blue-600 hover:via-blue-700 hover:from-indigo-900 "
          >
            <NavLink  className='text-white hover:text-white'> Connect with me →</NavLink>
          </button>
        </div>

        {/* Hamburger Icon for small screens */}
        <div className="lg:hidden">
          <svg
            onClick={toggleMenu}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7  cursor-pointer"
          >
            <line x1="4" y1="12" x2="20" y2="12"></line>
            <line x1="4" y1="6" x2="20" y2="6"></line>
            <line x1="4" y1="18" x2="20" y2="18"></line>
          </svg>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="lg:hidden flex flex-col items-center px-14 py-2 space-y-4 ">
          <NavLink to='/' style={ActiveNav} className="text-lg pb-2 font-popins font-normal tracking-wdest hover:scale-110">Home</NavLink>
          <NavLink to='/About' style={ActiveNav} className="text-lg pb-2 font-popins font-normal tracking-wdest hover:scale-110">About </NavLink>
          <NavLink to='/Projects' style={ActiveNav} className="text-lg pb-2 font-popins font-normal tracking-wdest hover:scale-110">Portfolio</NavLink>
          <NavLink to='/Skills' style={ActiveNav} className="text-lg pb-2 font-popins font-normal tracking-wdest hover:scale-110">Skills</NavLink>
          <NavLink to='/Contact' style={ActiveNav} className="text-lg pb-2 font-popins font-normal tracking-wdest hover:scale-110">Contact</NavLink>
        </nav>
      )}
    </div>
    <Banner/>
    </div>
    </>
  );
};

export default NavBar;
