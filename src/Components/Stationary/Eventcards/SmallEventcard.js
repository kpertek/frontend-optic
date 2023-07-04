import React from 'react';
import './SmallEventcard.css';

export default function SmallEventcard(props) {
    return (
      <div className="small-event-card">
        <div className="small-event-card__image">
            <img src="https://picsum.photos/200/300" alt="Event" />
            <div className="small-eventtitle-box"> 
                <div className="small-title"> <p>{props.kategorie.Name}</p></div>
            </div>
        </div>
      </div>
    );
}
