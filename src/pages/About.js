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

      <section className='bg-primary text-gray-900 body-font '>
        <div className='container px-5 py-24 mx-auto'>
          <h1 className='text-textWhite flex justify-center sm:text-3xl text-2xl font-medium title-font mb-4 py-6 '>
            Other Products by Consenso Labs
          </h1>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <div className='h-full shadow-xl border-gray-200  overflow-hidden'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src='https://dummyimage.com/720x400'
                  alt='blog'
                />
                <div className='bg-white p-6'>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                    Arbchain
                  </h1>
                  <p className='leading-relaxed mb-3'>
                    At eripuit signiferumque sea, vel ad mucius molestie, cu
                    labitur.
                  </p>
                  <div className='flex items-center flex-wrap '>
                    <a className='border-2 border-primary px-4 py-2 rounded-lg text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='p-4 md:w-1/3'>
              <div className='h-full shadow-xl border-gray-200  overflow-hidden'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src='https://dummyimage.com/720x400'
                  alt='blog'
                />
                <div className='bg-white p-6'>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                    Arbchain
                  </h1>
                  <p className='leading-relaxed mb-3'>
                    At eripuit signiferumque sea, vel ad mucius molestie, cu
                    labitur.
                  </p>
                  <div className='flex items-center flex-wrap '>
                    <a className='border-2 border-primary px-4 py-2 rounded-lg text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className='p-4 md:w-1/3'>
              <div className='h-full shadow-xl border-gray-200  overflow-hidden'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src='https://dummyimage.com/720x400'
                  alt='blog'
                />
                <div className='bg-white p-6'>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                    GitFunded
                  </h1>
                  <p className='leading-relaxed mb-3'>
                    At eripuit signiferumque sea, vel ad mucius molestie, cu
                    labitur.
                  </p>
                  <div className='flex items-center flex-wrap '>
                    <a className='border-2 border-primary px-4 py-2 rounded-lg text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
                      Explore Now
                    </a>
                  </div>
                </div>
              </div>
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
