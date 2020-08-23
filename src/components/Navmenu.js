import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = ({ closeMenu }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/' className='text-blue-500 py-3 ' onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to='/about'
            className='text-blue-500 py-3  '
            onClick={closeMenu}
          >
            About
          </Link>
          <li></li>
        </li>
      </ul>
    </div>
  );
};

export default NavMenu;
