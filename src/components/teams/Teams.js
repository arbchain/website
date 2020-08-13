import React from 'react';
import TeamMembers from '../../TeamConfig';

let members = TeamMembers;
const Teams = () => {
  return (
    <section className='text-gray-700 body-font bg-secondary-blue'>
      <div className='container px-5 py-24 mx-auto'>
        <div className='flex flex-col text-center w-full mb-20'>
          <h1 className='text-2xl font-medium title-font mb-4 text-white'>
            Our Team
          </h1>
        </div>
        <div className='flex flex-wrap -m-4'>
          {members.map((emp) => (
            <div className='p-4 lg:w-1/4 md:w-1/2'>
              <div className='h-full flex flex-col items-center text-center'>
                <img
                  alt='team'
                  className='flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4'
                  src={emp.image}
                />
                <div className='w-full'>
                  <h2 className='title-font font-medium text-lg text-white'>
                    {emp.name}
                  </h2>
                  <h3 className='text-gray-500 mb-3'>{emp.designation}</h3>
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
