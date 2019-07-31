import React from "react";

function ApodCard(props) {
  return (
    <div className='card'>
      <img src={props.apod.url} alt={props.apod.title}/>
      <div className='copyright-container'>
        <small className='copyright'>&copy;{props.apod.copyright}</small>
        <small className='date'>{props.apod.date}</small>
      </div>
    </div>
  )
}


export default ApodCard;