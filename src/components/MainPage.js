import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
const apiKey = process.env.REACT_APP_KEY;

export default function MainPage() {
  // Get data and set data (state)
  const [ apodData, setApodData ] = useState(null);

  // Fetch data from NASA API
  useEffect(() => {
    fetchData();
    console.log(apodData);

    async function fetchData() {
      // Fetch response
      const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
      // Convert response to JSON
      const data = await response.json();
      // Set data (state)
      setApodData(data);
    }
  }, []); // Empty array to run only once

  // Render either image or video
  return (
    <>
    <NavBar />
    <div className="main-page">

      <h1>Welcome to the main page!</h1>

      <img
        src={apodData ? apodData.url : null}
        alt={apodData ? apodData.title : null}
      />

      {/* {apodData.media_type === "image" ? (
      <img
        src={apodData ? apodData.url : null}
        alt={apodData ? apodData.title : null}
      />
      ) : (
      <iframe
        src={apodData ? apodData.url : null}
        title={apodData ? apodData.title : null}
        frameBorder="0"
        allow="encrypted-media"
        allowFullScreen
      />
      )} */}

      <div>
        <p>{apodData ? apodData.title : null}</p>
        <p>{apodData ? apodData.copyright : null}</p>
        <p>{apodData ? apodData.date : null}</p>
        <p>{apodData ? apodData.explanation : null}</p>
      </div>

    </div>
    </>
  )
}
