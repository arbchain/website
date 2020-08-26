import React from 'react';
import { Link } from 'react-router-dom';
//import '../css/menu.css';

const NavMenu = ({ closeMenu }) => {
  return (
    <div className='main-navigation'>
      <ul>
        <li>
          <Link to='/' className='text-blue-500 py-3 '>
            Home
          </Link>
        </li>
        <li>
          <Link to='/about' className='text-blue-500 py-3 ' onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link
            className='text-blue-500 py-3'
            activeClass='active'
            to='/#why'
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Why
          </Link>
        </li>
        <li>
          <Link
            className='text-blue-500 py-3'
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
        <li>
          <Link
            className='text-blue-500 py-3'
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
        <li>
          <Link
            to='./contact'
            className='text-blue-500 py-3'
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
