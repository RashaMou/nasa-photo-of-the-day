import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ApodCard from './Components/ApodCard'
import ApodInfo from './Components/ApodInfo'

function App() {

  const [apod, setApod] = useState([]);

  useEffect(() => {
    setApod([]);
    axios
      .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(data => {
          setApod(data.data) 
          console.log('data.data.url:', data.data.url)
      })
      .catch(err =>{  
        console.log('Error: ', err)
      })
  }, []);

  return (
    <div className="App">
      <ApodCard apod={apod}/>
      <ApodInfo apod={apod}/>
    </div>
  );
}

export default App;
