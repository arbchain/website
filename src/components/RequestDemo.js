import React from 'react';

const RequestDemo = () => {
  return (
    <section className='text-gray-700 body-font bg-gray-100'>
      <div className='container mx-auto flex flex-col px-5 py-24 justify-center items-center'>
        <div className='w-full md:w-2/3 flex flex-col mb-16 items-center text-center'>
          <p className='mb-8 leading-relaxed'>
            Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo
            live-edge tumeric scenester copper mug flexitarian. Prism vice offal
            plaid everyday carry. Gluten-free chia VHS squid listicle artisan.
          </p>
          <div className='flex w-full justify-center'>
            <input
              className='border-0 bg-gray-100 rounded mr-4 border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 lg:w-full xl:w-1/2 w-2/4 md:w-full'
              placeholder='Johndoe@domain.com'
              type='text'
            ></input>
            <button className='bg-indigo-900 inline-flex py-3 px-5 rounded-lg items-center hover:bg-gray-300 text-white focus:outline-none'>
              Request
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestDemo;
