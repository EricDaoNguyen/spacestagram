import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="nav-bar">
      <Link to="/">Photo of the Day</Link>
      <Link to="/information">Information</Link>
    </div>
  )
}
