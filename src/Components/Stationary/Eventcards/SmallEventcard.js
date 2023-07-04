import React from 'react';
import './SmallEventcard.css';
import { imageURL } from '../../../common/Requests';

export default function SmallEventcard(props) {
  
  const src =  imageURL + props.art + props.kategorie.Bildpfad;
  
  return (
      <div className="small-event-card">
        <div className="small-event-card__image">
            <img src={src} alt="Event" />
            <div className="small-eventtitle-box"> 
                <div className="small-title"> <p>{props.kategorie.Name}</p></div>
            </div>
        </div>
      </div>
    );
}
