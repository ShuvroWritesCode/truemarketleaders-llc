// ChartComponent.jsx
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ColorType, createChart } from 'lightweight-charts';
import axios from 'axios';

const ChartComponent = ({ symbol }) => {
  //   const [data, setData] = useState([]);
  const containerRef = useRef(null);
  const chartParentRef = useRef(
    document.getElementById('parentDiv')
  );
  const [chartWidth, setChartWidth] = useState(700);
  const [chartHeight, setChartHeight] = useState(550);
  const [data, setData] = useState([]);
  

  //   useEffect(() => {
  //     // Fetch data from MongoDB API
  //     // fetchDataFromAPI();
  //   }, []);

  const resize = useCallback(() => {
    setTimeout(() => {
      setChartWidth(chartParentRef.current?.offsetWidth)
      // console.log(chartWidth)
      
      // setChartWidth(chartParentRef.current?.offsetWidth)
    }, 300)
  }, [])

  useEffect(() => {
    /* Now we add an event listener, to execute our function everytime 
    the user window resizes */
    window.addEventListener('resize', resize)
    // Execute the function when the component mounts
    resize()
    // Remove the event listener when the component unmounts
    return () => {
       window.removeEventListener('resize', resize)
    }
  }, [resize])


  const fetchDataFromAPI = async () => {
    console.log(symbol);
    try {
      // Fetch data from the backend API endpoint
      const response = await axios.post('http://localhost:3000/api/show', {
        ticker: symbol,
      });
      // Set the data state with the response data
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // console.log(data);

  useEffect(() => {
    // Call the fetch function when the component mounts
    fetchDataFromAPI();
  }, [symbol]);

  


  useEffect(() => {
    if (data.length > 0) {
      // Map the fetched data to candlestick data format and sort by time
      const mappedData = data
        .map((item, index) => ({
          time: item.date.slice(0, 10), // Extract YYYY-MM-DD from the date string
          open: item.open,
          close: item.close,
          high: item.high,
          low: item.low,
          index: index, // Store the original index for reference
        }))
        .sort((a, b) => {
          // If timestamps are the same, add index difference to one of them
          if (a.time === b.time) {
            return a.index - b.index;
          }
          return new Date(a.time) - new Date(b.time);
        });

      console.log(mappedData);
      const chartOptions = {
        layout: {
          textColor: 'black',
          background: { type: ColorType.Solid, color: '#2B3544' },
        },
        width: chartWidth,
        height: chartHeight
      };
      const chart = createChart(containerRef.current, chartOptions);
      

      const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#26a69a',
        downColor: '#ef5350',
        borderVisible: false,
        wickUpColor: '#26a69a',
        wickDownColor: '#ef5350',
      });


      candlestickSeries.setData(mappedData, [chartWidth, chartHeight]);

      chart.timeScale().fitContent();

      // Cleanup function to remove the chart on component unmount
      return () => {
        chart.remove();
      };
    }
  }, [data, chartWidth]); // Dependency on the 'data' array

  return <div className='rounded-lg' ref={containerRef} />;
};

export default React.memo(ChartComponent);
