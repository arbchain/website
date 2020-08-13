import React from 'react';
import working from '../../assets/images/working.png';
// import TimeLine from './TimeLine';
const Architeture = () => {
  return (
    <>
      <section className='text-gray-700 font-body bg-white'>
        <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
          <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0'>
            <img src={working} alt='Working' />
          </div>
          <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center'>
            <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>
              How Arbchain Works?
            </h1>
            <p className='mb-8 leading-relaxed'>
              Even though arbitration procedures are an alternative dispute
              resolution solutions, they them selves are time consuming, costly
              and at times inefficient. In addition to this, arbitration is a
              complex procedure under international law. Although international
              arbitration courts try to solve this, it lacks a standard
              procedure. The entities and the architecture for the POC is based
              on the LCIA arbitration.
            </p>
          </div>
        </div>
      </section>

      {/* <TimeLine /> */}
    </>
  );
};

export default Architeture;
