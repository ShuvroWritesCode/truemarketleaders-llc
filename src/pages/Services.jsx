// ChartPage.jsx
import React, { useState, useEffect } from 'react';
import ChartComponent from '../components/ChartComponent';
import axios from 'axios';

const Services = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedStock, setSelectedStock] = useState('');

  const toggleContent = () => {
    setShowContent(!showContent);
  };
  const [stockDetails, setData] = useState([]);

  //   useEffect(() => {
  //     // Fetch data from MongoDB API
  //     // fetchDataFromAPI();
  //   }, []);

  const fetchDataFromAPI = async () => {
    try {
      // Fetch data from the backend API endpoint
      const response = await axios.get('http://localhost:3000/api/details');

      // Check if response.data has the 'tickers' property and it is an array
      if (response.data && Array.isArray(response.data.tickers)) {
        // Extract the 'tickers' array from the response data
        const tickers = response.data.tickers;
        // Format the fetched data
        const formattedData = tickers.map((ticker) => ({
          symbol: ticker.ticker,
          last: ticker.close,
          change: ticker.change,
          changePercent: ticker.priceChange,
        }));
        // Set the data state with the formatted data
        setData(formattedData);
      } else {
        console.error(
          'Response data does not contain an array of tickers:',
          response.data
        );
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDetailClick = (symbol) => {
    // console.log('Clicked detail:', symbol);
    setSelectedStock(symbol);
  };

  console.log(stockDetails);
  // console.log(data);

  useEffect(() => {
    // Call the fetch function when the component mounts
    fetchDataFromAPI();
  }, []);
  return (
    <div className="container px-4 max-md:px-1 py-8 mx-0 h-full">
      <div className="flex max-md:hidden h-full">
        {/* Left Section for Chart Area */}
        <div className="md:w-3/4 max-md:w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 p-4">
          {/* Chart Area */}
          <p>Selected Stock: {selectedStock}</p>
          <ChartComponent symbol={selectedStock} />
        </div>
        {/* Right Section - Split Vertically */}
        <div className="w-1/4 ml-4 h-full">
          {/* Upper Half */}
          <div className="mb-4 h-[90%] overflow-auto bg-transparent">
            <div className="md:w-3/4 max-md:w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 p-4">
              {/* Upper Half Content */}
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-white">Symbol</span>
                <span className="font-semibold text-white">Last</span>
                <span className="font-semibold text-white">Chg</span>
                <span className="font-semibold text-white">Chg%</span>
              </div>
              {stockDetails.map((detail, index) => (
                <div
                  className="flex justify-between text-white mb-2 cursor-pointer"
                  key={index}
                  onClick={() => handleDetailClick(detail.symbol)}
                >
                  <span className="text-sm">{detail.symbol}</span>
                  <span className="text-sm">{detail.last}</span>
                  <span
                    className={`text-sm ${
                      detail.change > 0 ? 'text-green-800' : 'text-red-800'
                    }`}
                  >
                    {detail.change}
                  </span>
                  <span
                    className={`text-sm ${
                      detail.change > 0 ? 'text-green-800' : 'text-red-800'
                    }`}
                  >
                    ({detail.changePercent}%)
                  </span>
                </div>
              ))}
              {/* Add more rows as needed */}
            </div>
          </div>
          {/* Lower Half */}
          {/* <div className="bg-transparent h-1/2"> */}
          {/* <div className="bg-gray-100 rounded-lg shadow-md p-4"> */}
          {/* Lower Half Content */}
          {/* <div className="h-40 border"></div> */}
          {/* </div> */}
          {/* </div> */}
        </div>
      </div>

      <div className="flex-col md:hidden h-full relative">
        {/* Button for toggling content */}
        <div className="w-full justify-center mb-4 hidden max-md:flex">
          <button
            onClick={toggleContent}
            className="bg-transparent text-white px-4 py-2 rounded-md"
          >
            {showContent ? 'Hide Other Contents' : 'Show Other Contents'}
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
          <div className="md:w-3/4 max-md:w-full bg-transparent absolute top-12 w-full h-full overflow-auto z-10">
            <div className="bg-gray-100 rounded-lg shadow-md p-4">
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
                  <span
                    className={`text-sm ${
                      detail.change > 0 ? 'text-green-800' : 'text-red-800'
                    }`}
                  >
                    {detail.change}
                  </span>
                  <span
                    className={`text-sm ${
                      detail.change > 0 ? 'text-green-800' : 'text-red-800'
                    }`}
                  >
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
