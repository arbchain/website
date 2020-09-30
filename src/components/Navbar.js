import React, { useState } from 'react';
import { Link } from 'gatsby';
import '../css/customStyle.css';
import logo from '../assets/images/logo.png';

const Navbar = (pros) => {
  const [showMenu, setShowMenu] = useState(false);
  let menu;
  if (showMenu) {
    menu = (
      <div class='w-full block flex-grow lg:flex lg:items-center mb-2 lg:w-auto bg-primary '>
        <div className='container mx-auto flex px-5  md:flex-row flex-col '>
          <div class='text-sm lg:flex-grow'>
            <Link
              to='/about'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'
              onClick={() => setShowMenu(!showMenu)}
            >
              About
            </Link>
            <Link
              to='/#why'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
            >
              Why
            </Link>
            <Link
              to='/#architecture'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'
              activeClass='active'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setShowMenu(!showMenu)}
            >
              How
            </Link>
            <Link
              to='/#features'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'
              onClick={() => setShowMenu(!showMenu)}
            >
              Features
            </Link>
            <a
              href='https://medium.com/conensolabs'
              target='_blank'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'
              onClick={() => setShowMenu(!showMenu)}
            >
              Blog
            </a>
            <a
              href='https://angel.co/company/consensolabs/jobs'
              target='_blank'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'
              onClick={() => setShowMenu(!showMenu)}
            >
              Career
            </a>
            <Link
              to='/contact'
              className='block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4'
              onClick={() => setShowMenu(!showMenu)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <header className='sticky text-gray-700 font-body bg-secondary-blue sm:display-none  mob'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center sticky'>
          <Link
            to='/'
            className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
          >
            <img src={logo} alt='LOGO' />
          </Link>

          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-white justify-center   '>
            <Link
              to='/about'
              className='mr-5 hover:text-gray-900 cursor-pointer '
            >
              About
            </Link>
            <Link
              className='mr-5 hover:text-gray-900 cursor-pointer'
              activeClass='active'
              to='/#why'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Why
            </Link>
            <Link
              className='mr-5 hover:text-gray-900 cursor-pointer'
              activeClass='active'
              to='/#architecture'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              How
            </Link>
            <Link
              className='mr-5 hover:text-gray-900 cursor-pointer'
              activeClass='active'
              to='/#features'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='mr-5 hover:text-gray-900 cursor-pointer'
            >
              Features
            </Link>

            <a
              href='https://medium.com/consensolabs'
              target='_next'
              className='mr-5 hover:text-gray-900 cursor-pointer'
            >
              Blog
            </a>
            <Link
              to='/contact'
              className='mr-5 hover:text-gray-900 cursor-pointer'
            >
              Contact
            </Link>
          </nav>
          <Link
            to='/contact'
            className='inline-flex items-center bg-primary-yellow border-0 py-2 px-3 focus:outline-none hover:bg-gray-300 rounded text-dark font-medium mt-4 md:mt-0'
          >
            Request Demo
            <svg
              fill='none'
              stroke='currentColor'
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              className='w-4 h-4 ml-1'
              viewBox='0 0 24 24'
            >
              <path d='M5 12h14M12 5l7 7-7 7'></path>
            </svg>
          </Link>
        </div>
      </header>
      {/* mob */}
      <nav className='mobile-toggle flex items-center bg-secondary-blue flex-wrap sm:hidden md:hidden z-50 mobile-nav'>
        <Link to='/' class='p-2 mr-4 inline-flex items-center'>
          <img src={logo} alt='Logo' srcset='' />
        </Link>

        <button
          className='text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler'
          data-target='#navigation'
          onClick={() => setShowMenu(!showMenu)}
        >
          <svg
            class='w-6 h-6'
            fill='none'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            stroke='white'
            viewBox='0 0 24 24'
          >
            <path d='M4 6h16M4 12h16M4 18h16'></path>
          </svg>
        </button>
        {menu}
      </nav>
    </>
  );
};

export default Navbar;
