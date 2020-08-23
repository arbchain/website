import React from 'react';
import paper from '../assets/images/whitepaper.png';

const WhitePaper = () => {
  return (
    <section className='text-gray-700 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            WHITEPAPER
          </h1>
          <p className='mb-8 leading-relaxed'>
            Read our whitepaper on applications of Blockchain in Arbitration
          </p>

          <div className='flex lg:flex-row md:flex-col'>
            <button className='bg-indigo-900 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-300 text-white focus:outline-none'>
              Download Now
            </button>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded'
            alt='hero'
            src={paper}
          ></img>
        </div>
      </div>
    </section>
  );
};

export default WhitePaper;
