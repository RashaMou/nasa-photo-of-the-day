import React from "react";

function ApodInfo(props) {
  return (
    <div className='info-container'>
      <p className='explanation'>{props.apod.explanation}</p>
    </div>
  )
}
      

export default ApodInfo