// ChartPage.jsx
import React from 'react';

const Services = () => {
  return (
    <div className="container px-4 py-8 mx-0">
      <div className="flex">
        {/* Left Section for Chart Area */}
        <div className="w-3/4 bg-green-200">
          <div className="bg-transparent rounded-lg shadow-md p-4">
            {/* Chart Area */}
            <div id="chart" className="h-96 border"></div>
          </div>
        </div>
        {/* Right Section - Split Vertically */}
        <div className="w-1/4 ml-4">
          {/* Upper Half */}
          <div className="mb-4 bg-blue-400">
            <div className="bg-transparent rounded-lg shadow-md p-4">
              {/* Upper Half Content */}
              <div className="h-40 border"></div>
            </div>
          </div>
          {/* Lower Half */}
          <div className='bg-red-300'>
            <div className="bg-transparent rounded-lg shadow-md p-4">
              {/* Lower Half Content */}
              <div className="h-40 border"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
