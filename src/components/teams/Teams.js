import React from 'react';
import TeamMembers from '../../TeamConfig';
import '../../css/customStyle.css';

let members = TeamMembers;
const Teams = () => {
  return (
    <section className='text-gray-700 body-font bg-gray-200'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='text-2xl font-medium title-font mb-4 text-gray-900'>
            The real building blocks
          </h1>
        </div>
        <div className='flex flex-wrap -m-4 items-center object-center mobile-grid sm:flex mobile-grid'>
          {members.map((emp) => (
            <div className='p-4 lg:w-1/5 md:w-1/2'>
              <div className='h-full w-48 flex flex-col items-center text-center'>
                <img
                  alt='team'
                  className='flex-shrink-0 rounded-lg h-56 object-cover object-center mb-4'
                  src={emp.image}
                />
                <div>
                  <h2 className='title-font font-medium text-lg text-gray-900'>
                    {emp.name}
                  </h2>
                  <h3 className='text-gray-500 mb-3'>{emp.designation}</h3>
                </div>
                <div className='inline-flex sm:mt-0 mt-2 justify-center sm:justify-start cursor-pointer '>
                  <a
                    className='ml-3 text-gray-500 cursor-pointer'
                    href={emp.linkedin}
                    target='_blank'
                  >
                    <svg
                      fill='currentColor'
                      stroke='currentColor'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      stroke-width='0'
                      className='w-5 h-5'
                      viewBox='0 0 24 24'
                    >
                      <path
                        stroke='none'
                        d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z'
                      ></path>
                      <circle cx='4' cy='4' r='2' stroke='none'></circle>
                    </svg>
                  </a>
                  <a
                    className='ml-3 text-gray-500 cursor-pointer'
                    href={emp.twitter}
                    target='_blank'
                  >
                    {
                      <svg
                        fill='currentColor'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                        stroke-width='2'
                        className='w-5 h-5'
                        viewBox='0 0 24 24'
                      >
                        <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z'></path>
                      </svg>
                    }
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
