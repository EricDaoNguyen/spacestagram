import React from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  return (
    <div className="main-page">
      <h1>Welcome to the main page!</h1>
      <Link to="/information">Go to the information page!</Link>
    </div>
  )
}
