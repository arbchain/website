import React from 'react';
import { Link } from 'react-router-dom';
//import '../css/menu.css';

const NavMenu = ({ closeMenu }) => {
  return (
    <div className='main-navigation bg-secondary-blue font-body m-10'>
      <ul>
        <li className='py-2'>
          <Link to='/' className='text-white p-6 m-10 '>
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
          <Link
            className='text-white p-6 m-10'
            activeClass='active'
            to='/#why'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            Why
          </Link>
        </li>
        <li className='py-2'>
          <Link
            className='text-white p-6 m-10'
            activeClass='active'
            to='/#architeture'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            How
          </Link>
        </li>
        <li className='py-2'>
          <Link
            className='text-white p-6 m-10'
            activeClass='active'
            to='/#features'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
          >
            Features
          </Link>
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
