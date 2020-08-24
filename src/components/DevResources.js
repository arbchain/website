import React from 'react';
import { Link } from 'react-scroll';
import { Router } from 'react-router-dom';

const Resources = () => {
  return (
    <section className='text-gray-700 font-body bg-secondary-blue'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='sm:text-3xl text-2xl font-medium title-font text-white'>
            We have put together all the resources for developers or businesses
            to get a peek into the Arbchain.
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          <div className='p-4 md:w-1/3 '>
            <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col transition duration-500 ease-in-out bg-white hover:bg-white transform hover:-translate-y-1 hover:scale-110'>
              <div className='flex items-center mb-3'>
                <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0 '>
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='20' cy='20' r='20' fill='#4D4CBB' />
                    <path
                      d='M28 27.59V16L22 10H14C12.9 10 12.01 10.9 12.01 12L12 28C12 29.1 12.89 30 13.99 30H26C26.45 30 26.85 29.85 27.19 29.6L22.76 25.17C21.96 25.69 21.02 26 20 26C17.24 26 15 23.76 15 21C15 18.24 17.24 16 20 16C22.76 16 25 18.24 25 21C25 22.02 24.69 22.96 24.17 23.75L28 27.59ZM17 21C17 22.66 18.34 24 20 24C21.66 24 23 22.66 23 21C23 19.34 21.66 18 20 18C18.34 18 17 19.34 17 21Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg title-font font-medium'>
                  Documentation
                </h2>
              </div>
              <div className='flex-grow'>
                <p className='leading-relaxed text-base'>
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className='mt-3 text-indigo-500 inline-flex items-center'>
                  Learn More
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className='p-4 md:w-1/3'>
            <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col transition duration-500 ease-in-out bg-white hover:bg-white transform hover:-translate-y-1 hover:scale-110'>
              <div className='flex items-center mb-3 '>
                <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='20' cy='20' r='20' fill='#4D4CBB' />
                    <path
                      d='M12 14H10V28C10 29.1 10.9 30 12 30H26V28H12V14ZM28 10H16C14.9 10 14 10.9 14 12V24C14 25.1 14.9 26 16 26H28C29.1 26 30 25.1 30 24V12C30 10.9 29.1 10 28 10ZM27 19H17V17H27V19ZM23 23H17V21H23V23ZM27 15H17V13H27V15Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg title-font font-medium'>
                  Whitepaper
                </h2>
              </div>
              <div className='flex-grow'>
                <p className='leading-relaxed text-base'>
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a className='mt-3 text-indigo-500 inline-flex items-center'>
                  Learn More
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className='p-4 md:w-1/3'>
            <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col transition duration-500 ease-in-out bg-white hover:bg-white transform hover:-translate-y-1 hover:scale-110'>
              <div className='flex items-center mb-3'>
                <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0'>
                  <svg
                    width='40'
                    height='40'
                    viewBox='0 0 40 40'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <circle cx='20' cy='20' r='20' fill='#4D4CBB' />
                    <path
                      d='M17.4 24.6L12.8 20L17.4 15.4L16 14L10 20L16 26L17.4 24.6ZM22.6 24.6L27.2 20L22.6 15.4L24 14L30 20L24 26L22.6 24.6V24.6Z'
                      fill='white'
                    />
                  </svg>
                </div>
                <h2 className='text-gray-900 text-lg title-font font-medium'>
                  Developer resources
                </h2>
              </div>
              <div className='flex-grow'>
                <p className='leading-relaxed text-base'>
                  Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                  taxidermy. Gastropub indxgo juice poutine.
                </p>

                <a
                  href='www.google.com'
                  target='_next'
                  className='mt-3 text-indigo-500 inline-flex items-center cursor-pointer'
                >
                  Learn More
                  <svg
                    fill='none'
                    stroke='currentColor'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    className='w-4 h-4 ml-2'
                    viewBox='0 0 24 24'
                  >
                    <path d='M5 12h14M12 5l7 7-7 7'></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
