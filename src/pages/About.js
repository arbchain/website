import React from 'react';
import AboutImg from '../assets/images/about.svg';
import Footer from '../components/Footer';
import Teams from '../components/teams/Teams';
const About = () => {
  return (
    <>
      <section className='text-white font-body bg-secondary-blue '>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-white'>
              Leader in Blockchain Development and Solutions
              {/* <br className='hidden lg:inline-block'>readymade gluten /></br> */}
            </h1>
            <p className='mb-8 leading-relaxed'>
              We at Consenso Labs, carefully examine and design the use cases,
              and reach out to stakeholders to get early feedback on our minimal
              viable products.We design and implement our products to not only
              take it to the MVP stage but also mindfully architect to scale and
              make it flexible to pilot it universally across multiple targeted
              institutions. We work on a variety of enterprise and public
              blockchain platforms, networks, and tools to find the best fit for
              the customers’ requirements to fulfill the use cases. Talk to us
              if you have any blockchain service requirements in your
              organization.
            </p>
          </div>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
            <img
              className='object-cover object-center rounded'
              alt='hero'
              src={AboutImg}
            />
          </div>
        </div>
      </section>

      <section className='bg-primary text-gray-700 body-font' id='products'>
        <div className='container px-5 py-24 mx-auto'>
          <h1 className='text-textWhite flex justify-center sm:text-3xl text-2xl font-medium title-font mb-4 py-6 '>
            Our blockchain technology solutions
          </h1>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3 '>
              <a href='https://arbchain.consensolabs.com' target='_blank'>
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
                      Arbchain
                    </h2>
                  </div>
                  <div className='flex-grow'>
                    <p className='leading-relaxed text-base'>
                      A DLT based dispute resolution platform to perform
                      international arbitration in a faster, efficient,
                      enforceable, and authentic way.
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
              </a>
            </div>

            <div className='p-4 md:w-1/3'>
              <a href='https://syndlend.com' target='_blank'>
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
                      SyndLend
                    </h2>
                  </div>
                  <div className='flex-grow'>
                    <p className='leading-relaxed text-base'>
                      SyndLend is a sophisticated solution to the predicaments
                      of the existing syndicated loan market by building an
                      ecosystem of banks and other financial institutions by
                      utilizing the capability of DLT.
                    </p>
                    <a
                      className='mt-3 text-indigo-500 inline-flex items-center'
                      href='https://syndlend.com'
                      target='_blank'
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
              </a>
            </div>

            <div className='p-4 md:w-1/3'>
              <a href='https://gitfunded.consensolabs.com' target='_blank'>
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
                      GitFunded
                    </h2>
                  </div>
                  <div className='flex-grow'>
                    <p className='leading-relaxed text-base'>
                      GitFunded is an open-source effort from Consenso Labs to
                      create a platform to help public goods and organizations
                      get funded in a decentralized ecosystem.
                    </p>

                    <a
                      href='https://gitfunded.consensolabs.com'
                      target='_blank'
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
              </a>
            </div>
          </div>
        </div>
      </section>
      <Teams />
      <Footer />
    </>
  );
};

export default About;
