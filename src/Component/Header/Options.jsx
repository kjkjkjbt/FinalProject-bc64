import React from 'react';

const Options = () => {
  const options = ["Rooms", "Views", "Cabin", "Pools", "Design", "Ryokans", "Mansion", "Beach", "Windmill", "Lakes", "Island", "Camping"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center py-8">
        {options.map((option, index) => (
          <div key={index} className="flex items-center justify-center bg-white shadow-md rounded-lg px-6 py-3 mx-2 my-2 hover:bg-gray-100 cursor-pointer">
            <span className="text-lg font-medium">{option}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Options;
