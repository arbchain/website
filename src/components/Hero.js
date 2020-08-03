import React from 'react';

const Hero = () => {
  return (
    <section className='text-gray-700 body-font'>
      <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
        <div className='text-center lg:w-2/3 w-full'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            Unleashing the Power of Blockchain in the Arbitration
          </h1>
          <p className='mb-8 leading-relaxed '>
            DLT based platform that brings all the benefits of the
            decentralization to solve inefficiencies in the arbitration by
            providing authentic, privacy preserved dispute resolution with a
            self enforceable agreements embedded in the blockchain to automate
            several arbitration procedures and enforce arbitral awards.
          </p>
          <div className='flex justify-center'>
            <button className='inline-flex text-white bg-indigo-900 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Request Demo
            </button>
            <button className='ml-4 inline-flex text-gray-700 bg-transparent hover:bg-blue-500  border-0 py-2 px-6 focus:outline-bg-indigo-900 hover:bg-gray-300 rounded text-lg'>
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
