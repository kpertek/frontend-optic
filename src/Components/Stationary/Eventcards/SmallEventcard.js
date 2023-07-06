import React from 'react';
import './SmallEventcard.css';
import { imageURL } from '../../../common/Requests';
import { Link } from 'react-router-dom';

export default function SmallEventcard(props) {
  
  const src =  imageURL + props.art + props.kategorie.Bildpfad;
  const dest = "/startseite/" + props.art + "/" + props.kategorie.id;
  
  return (
      <Link className="small-event-card" to={dest}>
        <div className="small-event-card__image">
            <img src={src} alt="Event" />
            <div className="small-eventtitle-box"> 
                <div className="small-title"> <p>{props.kategorie.Name}</p></div>
            </div>
        </div>
      </Link>
    );
}
