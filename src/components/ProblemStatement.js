import React from 'react';
import problem from '../assets/images/problem.png';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ProblemStatement = () => {
  return (
    <section
      className='text-gray-700 font-body body-font bg-gray-100'
      title='why'
      id='why'
    >
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow  md:w-9/12 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1
            className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'
            data-aos='zoom-in'
          >
            Why Arbchain?
          </h1>
          <p className='mb-8 leading-relaxed sm:text-left ' data-aos='zoom-in'>
            Even though arbitration procedures are an alternative dispute
            resolution solutions, they them selves are time consuming, costly
            and at times inefficient. In addition to this, arbitration is a
            complex procedure under international law. Although international
            arbitration courts try to solve this, it lacks a standard procedure.
            Arbchain is a DLT based platform that brings all the benefits of the
            decentralization to solve inefficiencies in the arbitration by
            providing authentic, privacy preserved dispute resolution with a
            self enforceable agreements embedded in the blockchain to automate
            several arbitration procedures and enforce arbitral awards.
          </p>
          <div className='flex justify-center'></div>
        </div>
        <div
          className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mob'
          data-aos='zoom-in'
        >
          <img src={problem} alt='problem' srcset='' />
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
