import React from 'react';
import './Eventcard.css';
import price from './assets/price-icon.svg';
import date from './assets/date-icon.svg';
import location from './assets/location-icon.svg';
import EventcardBewertung from './EventcardBewertung';

export default function Eventcard() {

    
    const [favorite, changeFavoriteState] = React.useState(null);

    return (
      <div className="event-card">
        <div className="event-card__image">
            <img src="https://picsum.photos/200/300" alt="Event" />
            <button className="favorite-button"> <div className="button-icon"></div></button>
            <div className="eventtitle-box"> 
                <div className="title"> 
                    <p>Veranstalter</p></div>
                <EventcardBewertung rating="5.0"/>
            </div>
        </div>
        
        <div className="eventinformation-box">
            <div className="genres">
            <div className="eventtype"><p>Eventart</p></div>
            <div className="game"><p>Spiel</p></div>
            </div>
            <div className="eventname"><p>Eventname</p></div>
            <hr/>
            <div className="event-information">
                <div className="card-price">
                    <img src={price} alt="price-logo" />
                    <p> Preis</p>
                </div>
                <div className="card-date">
                    <img src={date} alt="date-logo" />
                    <p> Datum</p>
                </div>
                <div className="card-location">
                    <img src={location} alt="location-logo" />
                    <p> Locationy </p>
                </div>
            </div>
        </div>

      </div>
    );
}
