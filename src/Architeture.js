import React from 'react';
import play from './assets/images/play.png';
const Architeture = () => {
  return (
    <section className='text-gray-700 body-font bg-gray-100'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
          <img src={play} alt='play' />
        </div>
        <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
            How Arbchain Works?
          </h1>
          <p className='mb-8 leading-relaxed'>
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
            plant cold-pressed tacos poke beard tote bag. Heirloom echo park
            mlkshk tote bag selvage hot chicken authentic tumeric truffaut
            hexagon try-hard chambray.
          </p>
          <div className='flex justify-center'>
            <button className='ml-0 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg'>
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architeture;
