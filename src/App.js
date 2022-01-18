import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import MainPage from './components/MainPage';
import InformationPage from './components/InformationPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainPage />} exact path="/" />
        <Route element={<InformationPage />} path="/information" />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
