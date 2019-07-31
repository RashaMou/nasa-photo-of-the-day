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
      .get('https://api.nasa.gov/planetary/apod?api_key=nmqAsTQBRQNW94Ha1Y1tcICrimdYeDkhdqoJDWTs')
      .then(data => {
          setApod(data.data) 
          console.log('App.js: UseEffect: setApod:', data.data)
      })
      .catch(err =>{  
        console.log('Error: ', err)
      })
  }, []);
//if statement for loading should go here
  return (
    <div className="App">
      <h2 className='title'>{apod.title}</h2>
      <ApodCard apod={apod}/>
      <ApodInfo apod={apod}/>
    </div>
  );
}

export default App;
