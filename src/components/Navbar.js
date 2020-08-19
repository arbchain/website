import React from 'react';
//import { Link as extLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <>
      <header className=' text-gray-700 font-body bg-secondary-blue sm:display-none mob'>
        <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center  '>
          <Link
            to='/'
            className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'
          >
            <img src={logo} alt='LOGO' />
          </Link>

          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-white justify-center   '>
            <Link
              to='/about'
              className='mr-5 hover:text-gray-900 cursor-pointer'
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
              to='/#architeture'
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

            <a className='mr-5 hover:text-gray-900 cursor-pointer'> Blog</a>
            <Link
              to='./contact'
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
      <nav class='flex items-center bg-secondary-blue p-3 flex-wrap sm:hidden md:hidden '>
        <a href='#' class='p-2 mr-4 inline-flex items-center'>
          <img src={logo} alt='Logo' srcset='' />
        </a>
        <button
          class='text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler'
          data-target='#navigation'
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
        <div
          class='hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto'
          id='navigation'
        >
          <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-white justify-center   '>
            <Link
              to='/about'
              className='mr-5 hover:text-gray-900 cursor-pointer'
            >
              About
            </Link>
            <Link
              className='mr-5 hover:text-gray-900 cursor-pointer'
              activeClass='active'
              to='#why'
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
              to='#architeture'
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
              to='#description'
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className='mr-5 hover:text-gray-900 cursor-pointer'
            >
              Features
            </Link>

            <a className='mr-5 hover:text-gray-900 cursor-pointer'> Blog</a>
            <Link
              to='./contact'
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
      </nav>
    </>
  );
};

export default Navbar;
