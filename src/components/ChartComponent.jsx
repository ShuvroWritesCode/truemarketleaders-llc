// ChartComponent.jsx
import React, { useEffect, useRef, useState } from 'react';
import { ColorType, createChart } from 'lightweight-charts';
import axios from 'axios';

const BACKEND_URI=import.meta.env.VITE_BACKEND_URI;


const ChartComponent = ({ symbol }) => {
  //   const [data, setData] = useState([]);
  const containerRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(800);
  const [chartHeight, setChartHeight] = useState(400);
  const [data, setData] = useState([]);
  const [sentSymbol, setSentSymbol] = useState(null);

  //   useEffect(() => {
  //     // Fetch data from MongoDB API
  //     // fetchDataFromAPI();
  //   }, []);

  const fetchDataFromAPI = async () => {
    console.log(symbol);
    try {
      // Fetch data from the backend API endpoint
      const response = await axios.post(
      `${BACKEND_URI}/show`
      , {
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
    // setSentSymbol(symbol);
    // console.log(symbol);
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
          background: { type: ColorType.Solid, color: '#4a5568' },
        },
        width: containerRef.current.offsetWidth,
        height: chartHeight,
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

      const resizeObserver = new ResizeObserver(entries => {
        if (entries.length === 0 || entries[0].target !== containerRef.current) { return; }
        const newRect = entries[0].contentRect;
        chart.applyOptions({ height: newRect.height, width: newRect.width });
      });
      resizeObserver.observe(containerRef.current);

      chart.timeScale().fitContent();

      // Cleanup function to remove the chart on component unmount
      return () => {
        chart.remove();
        resizeObserver.disconnect();
      };
    }
  }, [data]); // Dependency on the 'data' array

  return <div ref={containerRef} />;
};

export default React.memo(ChartComponent);
