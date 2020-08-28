import React, { useState } from 'react';
//import { Link as extLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import '../css/customStyle.css';
//import '../css/menu.css';
import logo from '../assets/images/logo.png';
import NavMenu from './Navmenu';
import { useTransition, animated } from 'react-spring';

const Navbar = (pros) => {
  const [showMenu, setShowMenu] = useState(false);
  const transitions = useTransition(showMenu, null, {
    from: { position: 'absolute', opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
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
        <a href='#' class='p-2 mr-4 inline-flex items-center'>
          <img src={logo} alt='Logo' srcset='' />
        </a>

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
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                // style={props}
                className='bg-black-t-50 fixed top-0 left-0 w-full h-full z-50'
                onClick={() => setShowMenu(false)}
              ></animated.div>
            )
        )}

        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <animated.div
                key={key}
                // style={props}
                className='fixed bg-secondary-blue top-0 left-0 w-4/5 h-full z-50 shadow'
              >
                <NavMenu
                  closeMenu={() => setShowMenu(false)}
                  className='m-10'
                />
              </animated.div>
            )
        )}
      </nav>
    </>
  );
};

export default Navbar;
