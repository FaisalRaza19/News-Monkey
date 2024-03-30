import './App.css'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import News from './Components/News'
import Navbar from './Components/Navbar'
import React, { useState } from 'react';
import LoadingBar from 'react-top-loading-bar'
import Countries from './Components/Countries';

function App(props) {
  const pageSize = 5;
  const apiKey = "7a7f38cee16145e69b5fc021ac3164a6";
  const [progress, setProgress] = useState(0);
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country = {props.value} category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} country = "us" category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country = "us" category="entertainment" />} />
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} country = "us" category="general" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} country = "us" category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} country = "us" category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} country = "us" category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} country = "us" category="technology" />} />
        </Routes>
      </BrowserRouter>"
    </>
  )
}

export default App
