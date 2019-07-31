import React from "react";

function ApodInfo(props) {
  return (
    <div className='infor-container'>
      <span className='date'>{props.date}</span>
      <span className='copyright'>{props.copyright}</span>
      <p className='explanation'>{props.explanation}</p>
    </div>
  )
}
      

export default ApodInfo