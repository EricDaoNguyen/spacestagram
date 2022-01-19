import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
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

  // Loading screen
  if (!apodData) { return <h1>Loading...</h1>; }

  // Render either image or video
  return (
    <>
      <NavBar />
      <div className="main-page">
        <h1>Welcome to the main page!</h1>
        {apodData.media_type === "image" ? (
          <img
            src={apodData.url}
            alt={apodData.title}
          />
          ) : (
          <iframe
            src={apodData.url}
            title={apodData.title}
            frameBorder="0"
            allow="encrypted-media"
            allowFullScreen
          />
        )}
        <div>
          <FormControlLabel
            control={<Checkbox icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
              name="checkedH"
            />}
          />
        </div>
        <div>
          <p>{apodData.title}</p>
          <p>{apodData.copyright}</p>
          <p>{apodData.date}</p>
          <p>{apodData.explanation}</p>
        </div>
      </div>
    </>
  )
}
