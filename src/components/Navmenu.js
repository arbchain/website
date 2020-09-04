import React from 'react';
// import { HashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const NavMenu = ({ closeMenu }) => {
  return (
    <div className='main-navigation bg-secondary-blue font-body m-10'>
      <ul>
        <li className='py-2'>
          <Link to='/' className='text-white p-6 m-10 ' onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className='py-2'>
          <Link
            to='/about'
            className='text-white  p-6 m-10'
            onClick={closeMenu}
          >
            About
          </Link>
        </li>
        <li className='py-2'>
          <a
            className='text-white p-6 m-10'
            activeClass='active'
            href='/#why'
            onClick={closeMenu}
          >
            Why
          </a>
        </li>
        <li className='py-2'>
          <a
            className='text-white p-6 m-10'
            activeClass='active'
            href='/#architecture'
            onClick={closeMenu}
          >
            How
          </a>
        </li>
        <li className='py-2'>
          <a
            className='text-white p-6 m-10'
            activeClass='active'
            href='/#features'
            onClick={closeMenu}
          >
            Features
          </a>
        </li>
        <li className='py-2'>
          <Link
            to='/contact'
            className='text-white p-6 m-10'
            onClick={closeMenu}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
