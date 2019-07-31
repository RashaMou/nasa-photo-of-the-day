import React from "react";

function Apod(props) {
  return (
    <div className='apod-img-container'>
      <img src={props.hdurl} alt={props.title}/>
    </div>
  )
}


export default Apod