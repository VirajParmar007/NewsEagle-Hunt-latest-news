import './App.css';
import React, { useState} from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


const App = () => {
  const [progress, setProgress] = useState(0)
  const apiKey = process.env.REACT_APP_NEWSAPI_kEY
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <LoadingBar
          height={3}
          color='red'
          progress={progress} />
        <Routes>
          <Route exact path="/*" element={<News apiKey={apiKey} setProgress={setProgress} key="general" pageSize={10} country='in' category="general" classTxt="active" />} />
          <Route exact path="business/*" element={<News apiKey={apiKey} setProgress={setProgress} key="business" pageSize={10} country='in' category="business" classTxt="active" />} />
          <Route exact path="entertainment/*" element={<News apiKey={apiKey} setProgress={setProgress} key="entertainment" pageSize={10} country='in' category="entertainment" />} />
          <Route exact path="health/*" element={<News apiKey={apiKey} setProgress={setProgress} key="health" pageSize={10} country='in' category="health" />} />
          <Route exact path="science/*" element={<News apiKey={apiKey} setProgress={setProgress} key="science" pageSize={10} country='in' category="science" />} />
          <Route exact path="sports/*" element={<News apiKey={apiKey} setProgress={setProgress} key="sports" pageSize={10} country='in' category="sports" />} />
          <Route exact path="technology/*" element={<News apiKey={apiKey} setProgress={setProgress} key="technology" pageSize={10} country='in' category="technology" />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App

