import React from "react";
import ModalModalApod from './ModalModalApod';
import Moment from 'react-moment';
import { CopyrightButtonContainer } from './StyledComponents';



function ApodCard(props) { 
  return (
    <div className='card'>
      <img className='apod-img' src={props.apod.url} alt={props.apod.title}/>
      <CopyrightButtonContainer>
        <div className='copyright-container'>
          <small className='copyright'>{props.apod.copyright}</small><br />
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
