import React from 'react';
import Rewards from '../assets/images/icons/Rewards.svg';
import Configurable from '../assets/images/icons/configurable.svg';
import Law from '../assets/images/icons/law.svg';
import Speed from '../assets/images/icons/speed.svg';
import Confidential from '../assets/images/icons/confidential.svg';

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
                  src={Configurable}
                  alt='blog'
                />
                <div className='bg-white p-6'>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3 text-center'>
                    Configurable Rules
                  </h1>
                  <p className='leading-relaxed mb-3 text-center font-light'>
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
                  src={Law}
                  alt='blog'
                />
                <div className='bg-white p-6'>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3 text-center'>
                    Choice of the Tribunal
                  </h1>
                  <p className='leading-relaxed mb-3 text-center font-light'>
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
                  src={Speed}
                  alt='blog'
                />
                <div className='bg-white p-6'>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3 text-center'>
                    Speedy procedures
                  </h1>
                  <p className='leading-relaxed mb-3 text-center font-light'>
                    Timely smart arbitration procedures with quick resolution
                  </p>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/3 '>
              <div className='h-full bg-white shadow-xl border-gray-200  rounded-lg overflow-hidden'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src={Confidential}
                  alt='blog'
                />
                <div className='bg-white p-6'>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3 text-center'>
                    Confidential communication
                  </h1>
                  <p className='leading-relaxed mb-3 text-center font-light'>
                    Private communication with the help of privacy preserved
                    communications between the parties, arbitrators, court,
                    witness, and experts
                  </p>
                </div>
              </div>
            </div>

            <div
              className='p-4 md:w-1/3 onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }} '
            >
              <div className='h-full bg-white shadow-xl border-gray-200  rounded-lg overflow-hidden'>
                <img
                  className='lg:h-48 md:h-36 w-full object-cover object-center'
                  src={Rewards}
                  alt='blog'
                />
                <div className='bg-white p-6'>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3 text-center'>
                    Enforcement of awards and rules
                  </h1>
                  <p className='leading-relaxed mb-3 text-center font-light'>
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
