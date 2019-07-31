import React from "react";
// import Apod from './Apod'

function ApodCard(props) {
  return (
    <div className='card'>
      {/* <h2 className='title'>{props}</h2> */}
      {/* <Apod image={props.photo.url}/> */}
      <img src={props.apod.url} />
    </div>
  )
}


export default ApodCard;