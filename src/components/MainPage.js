import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const apiKey = process.env.REACT_APP_KEY;

export default function MainPage() {
  // Get data and set data (state)
  const [ apodData, setApodData ] = useState(null);

  // Fetch data from NASA API
  useEffect(() => {
    fetchData();

    async function fetchData() {
      // Fetch response
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
      // Convert response to JSON
      const data = await response.json();
      // Set data (state)
      setApodData(data);
    }
  }, []); // Empty array to run only once

  // Render
  return (
    <div className="main-page">
      <h1>Welcome to the main page!</h1>
      <Link to="/information">Go to the information page!</Link>
      <img
        src={apodData ? apodData.url : null}
        alt={apodData ? apodData.title : null}
      />
    </div>
  )
}
