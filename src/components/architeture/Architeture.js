import React from 'react';
import working from '../../assets/images/working.png';

const Architeture = () => {
  return (
    <>
      <section
        className='text-gray-700 font-body bg-white'
        title='architeture'
        id='architecture'
      >
        <div className='container mx-auto flex px-5 py-20 md:flex-row flex-col items-center'>
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
        <div className='container mx-auto flex px-5 py-5 items-center justify-center flex-col'>
          <div class='flex relative pt-10 pb-1 sm:items-center md:w-2/3 mx-auto'>
            <div class='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div class='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-secondary-blue text-white relative z-10 title-font font-medium text-sm'>
              1
            </div>
            <div class='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div class='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <p class='leading-relaxed text-medium'>
                  All the stakeholders can quickly get onboarded to the
                  platform.
                </p>
              </div>
            </div>
          </div>

          <div class='flex relative pt-10 pb-1 sm:items-center md:w-2/3 mx-auto'>
            <div class='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div class='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-secondary-blue text-white relative z-10 title-font font-medium text-sm'>
              2
            </div>
            <div class='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div class='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <p class='leading-relaxed'>
                  Parties initiate an arbitration agreement among themselves
                </p>
              </div>
            </div>
          </div>

          <div class='flex relative pt-10 pb-1 sm:items-center md:w-2/3 mx-auto'>
            <div class='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div class='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-secondary-blue text-white relative z-10 title-font font-medium text-sm'>
              3
            </div>
            <div class='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div class='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <p class='leading-relaxed'>
                  Claimant creates the request along with the signed agreement,
                  procedure details
                </p>
              </div>
            </div>
          </div>

          <div class='flex relative pt-10 pb-1 sm:items-center md:w-2/3 mx-auto'>
            <div class='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div class='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-secondary-blue text-white relative z-10 title-font font-medium text-sm'>
              4
            </div>
            <div class='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div class='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <p class='leading-relaxed'>
                  Respondant reviews/ signs/ makes further claims
                </p>
              </div>
            </div>
          </div>

          <div class='flex relative pt-10 pb-1 sm:items-center md:w-2/3 mx-auto'>
            <div class='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div class='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-secondary-blue text-white relative z-10 title-font font-medium text-sm'>
              5
            </div>
            <div class='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div class='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <p class='leading-relaxed'>
                  Respondent submits any supporting documents which will be
                  time-stamped and archived
                </p>
              </div>
            </div>
          </div>

          <div class='flex relative pt-10 pb-1 sm:items-center md:w-2/3 mx-auto'>
            <div class='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div class='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-secondary-blue text-white relative z-10 title-font font-medium text-sm'>
              6
            </div>
            <div class='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div class='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <p class='leading-relaxed'>
                  A tribunal is formed by the court after the reviewing parties
                  proposals
                </p>
              </div>
            </div>
          </div>

          <div class='flex relative pt-10 pb-1 sm:items-center md:w-2/3 mx-auto'>
            <div class='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div class='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-secondary-blue text-white relative z-10 title-font font-medium text-sm'>
              7
            </div>
            <div class='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div class='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <p class='leading-relaxed'>
                  Hearing is conducted with all the necessary communication in a
                  private manner
                </p>
              </div>
            </div>
          </div>

          <div class='flex relative pt-10 pb-1 sm:items-center md:w-2/3 mx-auto'>
            <div class='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div class='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-secondary-blue text-white relative z-10 title-font font-medium text-sm'>
              8
            </div>
            <div class='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div class='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <p class='leading-relaxed'>
                  Tribunal generates the award document with a minimal effort
                </p>
              </div>
            </div>
          </div>

          <div class='flex relative pt-10 pb-20 sm:items-center md:w-2/3 mx-auto'>
            <div class='h-full w-6 absolute inset-0 flex items-center justify-center'>
              <div class='h-full w-1 bg-gray-200 pointer-events-none'></div>
            </div>
            <div class='flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-secondary-blue text-white relative z-10 title-font font-medium text-sm'>
              9
            </div>
            <div class='flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row'>
              <div class='flex-grow sm:pl-6 mt-6 sm:mt-0'>
                <p class='leading-relaxed'>
                  The platform tracks and settles the cost involved in the
                  entire arbitration procedure
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Architeture;
