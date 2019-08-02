import React from "react";
import ModalModalApod from './ModalModalApod';
import Moment from 'react-moment';
import { CopyrightButtonContainer } from './StyledComponents';



function ApodCard(props) { 
  console.log(props.apod.date)
  return (
    <div className='card'>
      <img className='apod-img' src={props.apod.url} alt={props.apod.title}/>
      <CopyrightButtonContainer>
        <div className='copyright-container'>
          <small className='copyright'>&copy; {props.apod.copyright}</small><br />
          <small className='date'>
            <Moment format="MMMM DD, YYYY">
              {props.apod.date}
            </Moment>
            </small>
        </div>
        <ModalModalApod apod={props.apod}/>
      </CopyrightButtonContainer>
    </div>
  )
}

export default ApodCard;
