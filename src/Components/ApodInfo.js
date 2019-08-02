import React from "react";
import { InfoContainer } from './StyledComponents';

function ApodInfo(props) {
  return (
    <InfoContainer>
      <p className='explanation'>{props.apod.explanation}</p>
    </InfoContainer>
  )
}
      

export default ApodInfo