import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import { Avatar, Backdrop, CircularProgress } from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { AvatarGroup } from '@material-ui/lab';
const apiKey = process.env.REACT_APP_KEY;

export default function MainPage() {
  // Get state and set state
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
      // Set state
      setApodData(data);
    }
  });

  // Loading state
  if (!apodData) {
    return <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={true}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
  }

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
          <AvatarGroup max={4}>
            <Avatar alt="Friend" src="https://picsum.photos/200" />
            <Avatar alt="Friend" src="https://picsum.photos/300" />
            <Avatar alt="Friend" src="https://picsum.photos/400" />
            <Avatar alt="Friend" src="https://picsum.photos/500" />
            <Avatar alt="Friend" src="https://picsum.photos/600" />
            <Avatar alt="Friend" src="https://picsum.photos/700" />
          </AvatarGroup>
        </div>
        <div>
          <Avatar alt="User" src="https://picsum.photos/100" />
          <p>{apodData.title}</p>
          <p>{apodData.copyright}</p>
          <p>{apodData.date}</p>
          <p>{apodData.explanation}</p>
        </div>
      </div>
    </>
  )
}
