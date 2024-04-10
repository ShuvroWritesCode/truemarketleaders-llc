// ChartPage.jsx
import React, { useState, useEffect } from 'react';
import ChartComponent from '../components/ChartComponent';
import axios from 'axios';

const BACKEND_URI=import.meta.env.VITE_BACKEND_URI;

const Services = () => {
  const [showContent, setShowContent] = useState(false);
  const [selectedStock, setSelectedStock] = useState('');
  const [searchValue, setsearchValue] = useState('');

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
      const response = await axios.get(`${BACKEND_URI}/details`);

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
        setSelectedStock(formattedData[0].symbol)
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

  const handleStockSearch = (event) => {
    setsearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const selectedSymbol = event.target.elements.stock.value.trim().toUpperCase();

    if (selectedSymbol === '') {
      console.log('Please enter a stock symbol.');
      return;
    }

    const foundSymbol = stockDetails.find(
      (data) => data.symbol === selectedSymbol
    );

    if (!foundSymbol) {
      console.log(`Stock symbol "${selectedSymbol}" not found.`);
      return; // Exit the function if symbol not found
    }

    setSelectedStock(selectedSymbol);
  };

  return (
    <div className="container px-8 max-md:px-1 py-8 mx-0 h-svh">
      <div className="flex gap-4 max-md:hidden h-full">
        {/* Left Section for Chart Area */}

        <div className="w-full h-full bg-gradient-to-br rounded-lg from-gray-700 to-gray-800 p-5 ">
          {/* Chart Area */}
          <p className="text-white my-2">Selected Stock: {selectedStock}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="stock"
              placeholder="Enter stock symbol..."
              className="text-white bg-gray-600 rounded-md px-4 py-2 mb-2 mr-4 focus:outline-none focus:ring focus:border-blue-300"
              value={searchValue}
              onChange={handleStockSearch}
            />
            <button
              type="submit"
              className="bg-gradient-to-br from-gray-500 to-gray-600  text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              Search
            </button>
          </form>
          <ChartComponent symbol={selectedStock} />
          
        </div>

        {/* Right Section - Split Vertically */}
        <div className="w-[30%] ml-2 h-full ">
          {/* Upper Half */}
          <div className="mb-4 h-[100%] bg-transparent">
            <div
              className="md:w-full h-full rounded-lg bg-gradient-to-br custom-scrollbar overflow-hidden from-gray-700 to-gray-800 p-6"
              // style={{ overflowY: 'hidden' }}
              onMouseEnter={(e) => (e.currentTarget.style.overflowY = 'auto')}
              onMouseLeave={(e) => (e.currentTarget.style.overflowY = 'hidden')}
            >
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
                      detail.change > 0 ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {detail.change}
                  </span>
                  <span
                    className={`text-sm ${
                      detail.change > 0 ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    ({detail.changePercent}%)
                  </span>
                </div>
              ))}
              {/* Add more rows as needed */}
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
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>
        <div className="w-full h-full bg-gradient-to-br rounded-lg from-gray-700 to-gray-800 p-5 relative z-0">
          {/* Chart Area */}
          <p className="text-white my-2">Selected Stock: {selectedStock}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="stock"
              placeholder="Enter stock symbol..."
              className="text-white bg-gray-600 rounded-md px-4 py-2 mb-2 mr-4 focus:outline-none focus:ring focus:border-blue-300"
              value={searchValue}
              onChange={handleStockSearch}
            />
            <button
              type="submit"
              className="bg-gradient-to-br from-gray-500 to-gray-600  text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            >
              Search
            </button>
          </form>
          <ChartComponent symbol={selectedStock} />
        </div>

        {/* <div className="md:w-3/4 max-md:w-full bg-transparent absolute top-12 w-full h-full overflow-auto z-10"> */}

        {/* Override Content */}
        {showContent && (
          <div className="w-[95%] mx-4 h-full absolute top-12 z-10">
            {/* Upper Half */}
            <div className="mb-4 h-[100%] bg-transparent">
              <div
                className="md:w-full h-full rounded-lg bg-gradient-to-br custom-scrollbar overflow-auto from-gray-700 to-gray-800 p-6"
                // style={{ overflowY: 'hidden' }}
                onMouseEnter={(e) => (e.currentTarget.style.overflowY = 'auto')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.overflowY = 'hidden')
                }
              >
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
                        detail.change > 0 ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {detail.change}
                    </span>
                    <span
                      className={`text-sm ${
                        detail.change > 0 ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      ({detail.changePercent}%)
                    </span>
                  </div>
                ))}
                {/* Add more rows as needed */}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
