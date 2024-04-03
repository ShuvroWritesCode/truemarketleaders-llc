// ChartComponent.jsx
import React, { useEffect, useRef, useState } from "react";
import { ColorType, createChart } from "lightweight-charts";
import axios from "axios";

const ChartComponent = () => {
  //   const [data, setData] = useState([]);
    const containerRef = useRef(null);
    const [chartWidth, setChartWidth] = useState(800);
  const [chartHeight, setChartHeight] = useState(400);
  const data = [
    { time: "2024-03-01", open: 100, close: 110, high: 120, low: 90 },
    { time: "2024-03-02", open: 110, close: 105, high: 115, low: 100 },
    { time: "2024-03-03", open: 105, close: 115, high: 120, low: 100 },
    { time: "2024-03-04", open: 115, close: 120, high: 125, low: 110 },
    // Add more data points as needed
  ];

//   useEffect(() => {
//     // Fetch data from MongoDB API
//     // fetchDataFromAPI();
//   }, []);


  const fetchDataFromAPI = async () => {
    try {
      // Fetch data from the backend API endpoint
      const response = await axios.get("http://localhost:3000/api/data");
      // Set the data state with the fetched data
      //   setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Initialize the chart
    // const chart = createChart("chart", { width: 800, height: 400 });

    // Add candlestick series to the chart
    // const candleSeries = chart.addCandlestickSeries();

    // Map the fetched data to candlestick data format
    const mappedData = data
      .map((item) => ({
        time: new Date(item.time),
        open: item.open,
        close: item.close,
        high: item.high,
        low: item.low,
      }))
      .sort((a, b) => a.time - b.time);
      console.log(mappedData);
    // Add the mapped data to the candlestick series
    // candleSeries.setData(mappedData);
    const chartOptions = { layout: { textColor: 'black', background: { type: ColorType.Solid, color: 'white' } }, width: containerRef.current.offsetWidth,
    height: chartHeight};
    const chart = createChart(containerRef.current, chartOptions);
    
    //   console.log(containerRef.current.offsetHeight);
    //   console.log(containerRef.current.offsetWidth);
    const candlestickSeries = chart.addCandlestickSeries({
        upColor: '#26a69a', downColor: '#ef5350', borderVisible: false,
        wickUpColor: '#26a69a', wickDownColor: '#ef5350',
    });
    candlestickSeries.setData([
        { time: '2018-12-22', open: 75.16, high: 82.84, low: 36.16, close: 45.72 },
        { time: '2018-12-23', open: 45.12, high: 53.90, low: 45.12, close: 48.09 },
        { time: '2018-12-24', open: 60.71, high: 60.71, low: 53.39, close: 59.29 },
        { time: '2018-12-25', open: 68.26, high: 68.26, low: 59.04, close: 60.50 },
        { time: '2018-12-26', open: 67.71, high: 105.85, low: 66.67, close: 91.04 },
        { time: '2018-12-27', open: 91.04, high: 121.40, low: 82.70, close: 111.40 },
        { time: '2018-12-28', open: 111.51, high: 142.83, low: 103.34, close: 131.25 },
        { time: '2018-12-29', open: 131.33, high: 151.17, low: 77.68, close: 96.43 },
        { time: '2018-12-30', open: 106.33, high: 110.20, low: 90.39, close: 98.10 },
        { time: '2018-12-31', open: 109.87, high: 114.69, low: 85.66, close: 111.26 },
    ],[chartWidth, chartHeight]);

    chart.timeScale().fitContent();
    // Cleanup function to remove the chart on component unmount
    return () => {
      chart.remove();
    };
  }, []);



  return <div ref={containerRef} />;
};

export default ChartComponent;
