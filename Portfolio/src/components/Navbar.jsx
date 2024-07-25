import React from 'react';
import logo from '../assets/Mylogo.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';



const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className='flex flex-shrink-0 items-center'>
        <img src={logo} alt="logo" className="w-31 h-11 object-contain mx-2" /> 
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <a href="https://github.com/Akshatt10" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/akshat-tyagi-305a50223/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/Akshat01T" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
