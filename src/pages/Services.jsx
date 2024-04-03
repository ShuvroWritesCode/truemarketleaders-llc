// ChartPage.jsx
import React, { useState } from "react";
import ChartComponent from "../components/ChartComponent";

const Services = () => {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  const stockDetails = [
    { symbol: 'AAPL', last: 145.73, change: 0.32, changePercent: 0.22 },
    { symbol: 'GOOGL', last: 2815.23, change: -5.67, changePercent: -0.21 },
    { symbol: 'MSFT', last: 325.68, change: 1.45, changePercent: 0.45 },
    // Add more stock details as needed
  ];
  return (
    <div className="container px-4 max-md:px-1 py-8 mx-0 h-full">
      <div className="flex max-md:hidden h-full">
        {/* Left Section for Chart Area */}
        <div className="md:w-3/4 max-md:w-full h-full bg-blue-900">
          <div className="bg-transparent rounded-lg p-4">
            {/* Chart Area */}
            <ChartComponent />
          </div>
        </div>
        {/* Right Section - Split Vertically */}
        <div className="w-1/4 ml-4">
          {/* Upper Half */}
          <div className="mb-4 bg-transparent">
      <div className="bg-transparent rounded-lg shadow-md p-4">
        {/* Upper Half Content */}
        <div className="flex justify-between mb-2">
          <span className="font-semibold text-gray-800">Symbol</span>
          <span className="font-semibold text-gray-800">Last</span>
          <span className="font-semibold text-gray-800">Chg</span>
          <span className="font-semibold text-gray-800">Chg%</span>
        </div>
        {stockDetails.map((detail, index) => (
          <div className="flex justify-between mb-2" key={index}>
            <span className="text-sm">{detail.symbol}</span>
            <span className="text-sm">{detail.last}</span>
            <span className={`text-sm ${detail.change > 0 ? 'text-green-800' : 'text-red-800'}`}>
              {detail.change}
            </span>
            <span className={`text-sm ${detail.change > 0 ? 'text-green-800' : 'text-red-800'}`}>
              ({detail.changePercent}%)
            </span>
          </div>
        ))}
        {/* Add more rows as needed */}
      </div>
    </div>
          {/* Lower Half */}
          <div className="bg-transparent">
            <div className="bg-transparent rounded-lg shadow-md p-4">
              {/* Lower Half Content */}
              <div className="h-40 border"></div>
            </div>
          </div>
        </div>
      </div>



      <div className="flex-col md:hidden h-full relative">
        {/* Button for toggling content */}
        <div className="w-full justify-center mb-4 hidden max-md:flex">
          <button
            onClick={toggleContent}
            className="bg-transparent text-white px-4 py-2 rounded-md"
          >
            {showContent ? "Hide Other Contents" : "Show Other Contents"}
          </button>
        </div>
        {/* Section for Chart Area */}
        <div className="md:w-3/4 max-md:w-full h-full relative z-0">
          <div className=" bg-transparent rounded-lg p-4">
            {/* Chart Area */}
            <ChartComponent />
          </div>
        </div>
        {/* Override Content */}
        {showContent && (
          <div className="md:w-3/4 max-md:w-full bg-transparent absolute top-12 w-full z-10">
            <div className="bg-transparent rounded-lg shadow-md p-4">
        {/* Upper Half Content */}
        <div className="flex justify-between mb-2">
          <span className="font-semibold text-gray-800">Symbol</span>
          <span className="font-semibold text-gray-800">Last</span>
          <span className="font-semibold text-gray-800">Chg</span>
          <span className="font-semibold text-gray-800">Chg%</span>
        </div>
        {stockDetails.map((detail, index) => (
          <div className="flex justify-between mb-2" key={index}>
            <span className="text-sm">{detail.symbol}</span>
            <span className="text-sm">{detail.last}</span>
            <span className={`text-sm ${detail.change > 0 ? 'text-green-800' : 'text-red-800'}`}>
              {detail.change}
            </span>
            <span className={`text-sm ${detail.change > 0 ? 'text-green-800' : 'text-red-800'}`}>
              ({detail.changePercent}%)
            </span>
          </div>
        ))}
        {/* Add more rows as needed */}
      </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
