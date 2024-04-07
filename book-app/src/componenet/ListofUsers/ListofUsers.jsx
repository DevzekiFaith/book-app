import React from 'react';

const ListofUsers = (props) => {

  const { main } = props;

  return (
    <div className=''>
      <div className="xl:w-[22rem] h-[2rem] p-[1rem] mb-[2rem]">
        <h1 className="text-lg font-bold mb-4">Data List Of Documented Users</h1>
      </div>
      <div className="border-2 p-[1rem]">
        <div className='text-blue-500'>
          <h2>{main.username}</h2>
          <h2>{main.name}</h2>
          <p>{main.email}</p>
          <p>{main.address.street}</p>
          <p>{main.address.suite}</p>
          <p>{main.address.city}</p>
          <p>{main.address.zipcode}</p>
          <p>{main.address.geo.lat}</p>
          <p>{main.address.geo.lng}</p>
        </div>
      </div>
    </div>
  );
};

export default ListofUsers;