import React from 'react';
import ErrorSvg from '../assets/images/ErrorPage404.svg';
import { Link } from 'gatsby';
import Navbar from '../components/Navbar';

const Error = () => {
  return (
    <section class='text-gray-700 body-font'>
      <Navbar />
      <div class='container px-5 py-24 mx-auto'>
        <div class='xl:w-1/2 lg:w-3/4 w-full mx-auto text-center'>
          <img src={ErrorSvg} alt='Page Not Found' />
          <span class='inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6'></span>
        </div>
        <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 justify-center flex'>
          Look's like you're Lost
        </h1>
        <div className='flex justify-center'>
          <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
            <Link to='/'>Go To Home</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Error;
