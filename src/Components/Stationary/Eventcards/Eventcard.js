import React from 'react';
import './Eventcard.css';
import price from './assets/price-icon.svg';
import date from './assets/date-icon.svg';
import location from './assets/location-icon.svg';

export default function EventcardKomponente() {

    
    const [favorite, changeFavoriteState] = React.useState(null);

    return (
      <div class="event-card">
        <div class="event-card__image">
            <img src="https://picsum.photos/200/300" alt="Event" />
            <button class="favorite-button"> <div class="button-icon"></div></button>
            <div class="eventtitle-box"> 
                <div class="title"> 
                    <p>Veranstalter</p></div>
                <div class="bewertung"><p>★ 5.0</p></div>
            </div>
        </div>
        
        <div class="eventinformation-box">
            <div class="genres">
            <div class="eventtype"><p>Eventart</p></div>
            <div class="game"><p>Spiel</p></div>
            </div>
            <div class="eventname"><p>Eventname</p></div>
            <hr/>
            <div class="event-information">
                <div class="card-price">
                    <img src={price} alt="price-logo" />
                    <p> Preis</p>
                </div>
                <div class="card-date">
                    <img src={date} alt="date-logo" />
                    <p> Datum</p>
                </div>
                <div class="card-location">
                    <img src={location} alt="location-logo" />
                    <p> Locationy </p>
                </div>
            </div>
        </div>

      </div>
    );
}
