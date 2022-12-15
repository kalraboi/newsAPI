import './App.css';

import React,{useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar';

const App =()=> {
  // const pageSize=5;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress,setProgress]=useState(0);

    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar height={3} color='#f11946' progress={progress}/>
          <Routes>
            <Route exact path="/" element={<News key="General"setProgress={setProgress} apiKey={apiKey}  pageSize={5}  country="us" category="General"/>}/>
            <Route exact path="business" element={<News key="Business"setProgress={setProgress} apiKey={apiKey}  pageSize={5}  country="us" category="Business"/>}/>
            <Route exact path="entertainment" element={<News key="Entertainment"setProgress={setProgress} apiKey={apiKey}  pageSize={5}  country="us" category="Entertainment"/>}/>
            <Route exact path="general" element={<News key="General"setProgress={setProgress} apiKey={apiKey}  pageSize={5}  country="us" category="General"/>}/>
            <Route exact path="health" element={<News key="Health"setProgress={setProgress} apiKey={apiKey}  pageSize={5}  country="us" category="health"/>}/>
            <Route exact path="science" element={<News key="Science"setProgress={setProgress} apiKey={apiKey}  pageSize={5}  country="us" category="Science"/>}/>
            <Route exact path="sports" element={<News key="Sports"setProgress={setProgress} apiKey={apiKey}  pageSize={5}  country="us" category="Sports"/>}/>
            <Route exact path="technology" element={<News key="Technology"setProgress={setProgress} apiKey={apiKey}  pageSize={5}  country="us" category="Technology"/>}/>
          </Routes>
        </Router>
      </div>
    )
  }

  export default App

