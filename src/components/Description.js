import React from 'react';

function Description() {
  return (
    <>
      <section className=' bg-secondary-blue font-body '>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-20 '>
            <h1 className='sm:text-3xl text-2xl font-medium title-font mb-4  text-white'>
              Simple, Fast & Powerful
            </h1>
            <p className='lg:w-3/3 mx-auto font-light text-white'>
              Being an enterprise solution, Arbchain tries to solve the
              inefficiencies in the existing arbitration procedure Arbchain
              doesnt re-invent the arbitration procedure, instead it provides a
              better execution of the procedures.
            </p>
          </div>
          <div className='flex flex-wrap -m-4 text-center items-stretch'>
            <div className='p-4 md:w-1/4 sm:w-1/2 w-full  flex-1'>
              <div className='border-2 border-gray-300 px-4 py-6 bg-white rounded-lg'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M8 17l4 4 4-4m-4-5v9'></path>
                  <path d='M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29'></path>
                </svg>
                <h2 className=' font-medium text-gray-900'>
                  Configurable Rules
                </h2>
                <p className='text-gray-700 mt-4 flex-1'>
                  Commercial arbitration rules such as those of the LCIA, AAA or
                  any other can be adapted based on the requirement.
                </p>
              </div>
            </div>

            <div className='p-4 md:w-1/4 sm:w-1/2 w-full '>
              <div className='border-2 border-gray-300 px-4 py-6 bg-white rounded-lg flex-1'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M8 17l4 4 4-4m-4-5v9'></path>
                  <path d='M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29'></path>
                </svg>
                <h2 className=' font-medium text-gray-900'>
                  Choice of the Tribunal
                </h2>
                <p className='text-gray-700 mt-4'>
                  Tribunal can be appointed by association or by the parties
                  with greater transparency for a satisfactory arbitration
                  procedure
                </p>
              </div>
            </div>

            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-300 px-4 py-6 bg-white rounded-lg flex-1'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M8 17l4 4 4-4m-4-5v9'></path>
                  <path d='M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29'></path>
                </svg>
                <h2 className=' font-medium text-gray-900'>
                  Speedy procedures
                </h2>
                <p className='text-gray-700 mt-4 flex-none '>
                  Timely smart arbitration procedures with quick resolution.
                </p>
              </div>
            </div>

            <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
              <div className='border-2 border-gray-300 px-4 py-6 bg-white rounded-lg flex-1'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M8 17l4 4 4-4m-4-5v9'></path>
                  <path d='M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29'></path>
                </svg>
                <h2 className=' font-medium text-gray-900'>
                  Confidential communication
                </h2>
                <p className='text-gray-700 mt-4 flex-1'>
                  Private communication with the help of privacy preserved
                  communications between the parties, arbitrators, court,
                  witness, and experts.
                </p>
              </div>
            </div>

            <div className='p-4 md:w-1/4 sm:w-1/2 w-full '>
              <div className='border-2 border-gray-300 px-4 py-6 bg-white rounded-lg flex-1'>
                <svg
                  fill='none'
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  className='text-indigo-500 w-12 h-12 mb-3 inline-block'
                  viewBox='0 0 24 24'
                >
                  <path d='M8 17l4 4 4-4m-4-5v9'></path>
                  <path d='M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29'></path>
                </svg>
                <h2 className=' font-medium text-gray-900'>
                  Enforcement of awards and rules
                </h2>
                <p className='text-gray-700 mt-4 flex-1'>
                  Enforcing the arbitral awards on through smart contract events
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Description;
