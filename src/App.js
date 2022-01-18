import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import InformationPage from './components/InformationPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Route component={MainPage} exact path="/" />
        <Route component={InformationPage} path="/information" />
      </div>
    </BrowserRouter>
  );
}

export default App;
