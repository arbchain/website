import React from 'react';
import Tech from '../assets/images/Tech.svg';

function Technology() {
  return (
    <>
      <section className='text-gray-700 body-font bg-white items-center '>
        <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
          <div className='flex flex-col text-center w-full mb-20'>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900'>
              Tech Stack We Work On
            </h1>
          </div>
          <div className='flex flex-wrap -m-4 text-center'>
            <img src={Tech} alt='Tech' />
          </div>
        </div>
      </section>
    </>
  );
}

export default Technology;
