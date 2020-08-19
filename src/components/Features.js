import React from 'react';

function Features() {
  return (
    <>
      <section
        className='bg-primary text-gray-900 font-body bg-secondary-blue '
        id='features'
      >
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-col text-center w-full mb-20 '>
            <h1 className='text-textWhite flex justify-center sm:text-3xl text-2xl text-white font-medium title-font mb-4 py-6 '>
              Simple, Fast & Powerful
            </h1>
            <p className='lg:w-3/3 mx-auto font-light text-white'>
              Being an enterprise solution, Arbchain tries to solve the
              inefficiencies in the existing arbitration procedure Arbchain
              doesnt re-invent the arbitration procedure, instead it provides a
              better execution of the procedures.
            </p>
          </div>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3 rounded-lg '>
              <div className='h-full shadow-xl border-gray-200  rounded-lg overflow-hidden'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src='https://dummyimage.com/720x400'
                  alt='blog'
                />
                <div className='bg-white p-6'>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                    Configurable Rules
                  </h1>
                  <p className='leading-relaxed mb-3'>
                    Commercial arbitration rules such as those of the LCIA, AAA
                    or any other can be adapted based on the requirement.
                  </p>
                </div>
              </div>
            </div>

            <div className='p-4 md:w-1/3'>
              <div className='h-full shadow-xl border-gray-200  rounded-lg overflow-hidden'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src='https://dummyimage.com/720x400'
                  alt='blog'
                />
                <div className='bg-white p-6'>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                    Choice of the Tribunal
                  </h1>
                  <p className='leading-relaxed mb-3'>
                    Tribunal can be appointed by association or by the parties
                    with greater transparency for a satisfactory arbitration
                    procedure
                  </p>
                </div>
              </div>
            </div>

            <div className='p-4 md:w-1/3 '>
              <div className='h-full bg-white shadow-xl border-gray-200 rounded-lg overflow-hidden'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src='https://dummyimage.com/720x400'
                  alt='blog'
                />
                <div className='bg-white p-6'>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                    Speedy procedures
                  </h1>
                  <p className='leading-relaxed mb-3'>
                    Timely smart arbitration procedures with quick resolution
                  </p>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/3 '>
              <div className='h-full bg-white shadow-xl border-gray-200  rounded-lg overflow-hidden'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src='https://dummyimage.com/720x400'
                  alt='blog'
                />
                <div className='bg-white p-6'>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                    Confidential communication
                  </h1>
                  <p className='leading-relaxed mb-3'>
                    Private communication with the help of privacy preserved
                    communications between the parties, arbitrators, court,
                    witness, and experts
                  </p>
                </div>
              </div>
            </div>

            <div className='p-4 md:w-1/3 '>
              <div className='h-full bg-white shadow-xl border-gray-200  rounded-lg overflow-hidden'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src='https://dummyimage.com/720x400'
                  alt='blog'
                />
                <div className='bg-white p-6'>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>
                    Enforcement of awards and rules
                  </h1>
                  <p className='leading-relaxed mb-3'>
                    Enforcing the arbitral awards on through smart contract
                    events
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
