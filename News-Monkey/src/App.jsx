import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './Components/News';
import Navbar from './Components/Navbar';
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar';

function App() {
  const pageSize = 5;
  const apiKey = import.meta.env.VITE_API_KEY;
  const [progress, setProgress] = useState(0);
  const [country, setCountry] = useState("us");

  return (
    <>
      <BrowserRouter>
        <Navbar onCountryChange={setCountry} />
        <LoadingBar height={3} color='#f11946' progress={progress} />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key={country + "general"} pageSize={pageSize} country={country} category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key={country + "business"} pageSize={pageSize} country={country} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key={country + "entertainment"} pageSize={pageSize} country={country} category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key={country + "general"} pageSize={pageSize} country={country} category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key={country + "health"} pageSize={pageSize} country={country} category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key={country + "science"} pageSize={pageSize} country={country} category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key={country + "sports"} pageSize={pageSize} country={country} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key={country + "technology"} pageSize={pageSize} country={country} category="technology" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
