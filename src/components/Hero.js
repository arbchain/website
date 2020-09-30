import React from 'react';
import { Link } from 'gatsby';
import '../css/customStyle.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Hero = () => {
  return (
    <section className=' font-body bg-secondary-blue md:h-screen lg:h-full mobile-container '>
      <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col inner-container'>
        <div className='text-center lg:w-2/3 w-full items-center '>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
            Unleashing the Power of Blockchain in the Arbitration
          </h1>
          <p className='mb-8 text-white font-light mob '>
            DLT based platform that brings all the benefits of the
            decentralization to solve inefficiencies in the arbitration by
            providing authentic, privacy preserved dispute resolution with a
            self enforceable agreements embedded in the blockchain to automate
            several arbitration procedures and enforce arbitral awards.
          </p>
          <div className='flex justify-center'>
            <Link
              to='/#features'
              className='inline-flex items-center bg-primary-yellow border-0 py-2 px-3 focus:outline-none hover:bg-gray-300 rounded text-gray-700 font-medium mt-4 md:mt-0'
            >
              Learn more
            </Link>
            <Link
              to='/contact'
              className='inline-flex ml-4 items-center bg-transparent border-2 py-2 px-3 focus:outline-none hover:bg-gray-900 rounded text-white font-medium mt-4 md:mt-0'
            >
              Request Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

//
