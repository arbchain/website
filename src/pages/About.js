import React from 'react';
import AboutImg from '../assets/images/about.svg';
import Footer from '../components/Footer';
import Teams from '../components/teams/Teams';
import Arbchain from '../assets/images/icons/arbchain.svg';
import GitFunded from '../assets/images/icons/GitFunded.svg';
import SyndLend from '../assets/images/icons/syndlend.svg';

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

      <section className='bg-primary text-gray-700 font-body' id='products'>
        <div className='container px-5 py-24 mx-auto'>
          <h1 className='text-textWhite flex justify-center sm:text-3xl text-2xl font-body font-medium title-font mb-4 py-6 '>
            Our blockchain technology solutions
          </h1>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3 '>
              <a href='https://arbchain.consensolabs.com' target='_blank'>
                <div className='flex rounded-lg h-full bg-gray-100 p-8 flex-col transition duration-500 ease-in-out bg-white hover:bg-white transform hover:-translate-y-1 hover:scale-110'>
                  <div className='flex items-center mb-3'>
                    <div className='w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0 '>
                      <img src={Arbchain} alt='arbchain' />
                    </div>
                    <h2 className='text-gray-900 text-lg title-font  font-body font-medium'>
                      Arbchain
                    </h2>
                  </div>
                  <div className='flex-grow'>
                    <p className='leading-relaxed text-base font-body '>
                      A DLT based dispute resolution platform to perform
                      international arbitration in a faster, efficient,
                      enforceable, and authentic way.
                    </p>
                    <a className='font-body  mt-3 text-indigo-500 inline-flex items-center'>
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
                      <img src={SyndLend} alt='syn' />
                    </div>
                    <h2 className='text-gray-900 text-lg title-font font-body font-medium'>
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
                      <img src={GitFunded} alt='' srcset='' />
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
