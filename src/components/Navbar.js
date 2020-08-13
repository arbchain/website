import React from 'react';
import logo from '../assets/images/logo.png';
const Navbar = () => {
  return (
    <header className=' text-gray-700 body-font bg-secondary-blue  '>
      <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center'>
        <a className='flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0'>
          <img src={logo} alt='LOGO' />
        </a>
        <nav className='md:ml-auto md:mr-auto flex flex-wrap items-center text-white justify-center'>
          <a className='mr-5 hover:text-gray-900 cursor-pointer'> About</a>
          <a className='mr-5 hover:text-gray-900 cursor-pointer'>Why</a>
          <a className='mr-5 hover:text-gray-900 cursor-pointer'>How</a>
          <a className='mr-5 hover:text-gray-900 cursor-pointer'> Features</a>
          <a className='mr-5 hover:text-gray-900 cursor-pointer'> Team</a>
          <a className='mr-5 hover:text-gray-900 cursor-pointer'> Blog</a>
          <a className='mr-5 hover:text-gray-900 cursor-pointer'> Contact</a>
        </nav>
        <button className='inline-flex items-center bg-primary-yellow border-0 py-2 px-3 focus:outline-none hover:bg-gray-300 rounded text-dark font-medium mt-4 md:mt-0'>
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
        </button>
      </div>
    </header>
  );
};

export default Navbar;
