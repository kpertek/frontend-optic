import React from 'react';
import './Eventcard.css';
import priceIcon from './assets/price-icon.svg';
import dateIcon from './assets/date-icon.svg';
import locationIcon from './assets/location-icon.svg';
import EventcardBewertung from './EventcardBewertung';

export default function Eventcard(props) {
    const [favorite, changeFavoriteState] = React.useState(null);
    const event = props.event;
    const veranstalter = event.veranstalter;
    const art = event.eventart;
    const spiel = event.spiel;
    const location = event.location;
    const adress = location.adresse;
    const land = adress.land;
    const begin = new Date(event.Beginn);
    const ende = new Date(event.Ende);

    return (
      <div className="event-card">
        <div className="event-card__image">
            <img src="https://picsum.photos/200/300" alt="Event" />
            <button className="favorite-button"> <div className="button-icon"></div></button>
            <div className="eventtitle-box"> 
                <div className="title"> 
                    <p>{veranstalter.Name}</p></div>
                <EventcardBewertung rating="5.0"/>
            </div>
        </div>
        
        <div className="eventinformation-box">
            <div className="genres">
            <div className="eventtype"><p>{art.Name}</p></div>
            <div className="game"><p>{spiel.Name}</p></div>
            </div>
            <div className="eventname"><p>{event.Name}</p></div>
            <hr/>
            <div className="event-information">
                <div className="card-price">
                    <img src={priceIcon} alt="price-logo" />
                    <p> Preis</p>
                </div>
                <div className="card-date">
                    <img src={dateIcon} alt="date-logo" />
                    <p> {getString(begin)+" - "+getString(ende)}</p>
                </div>
                <div className="card-location">
                    <img src={locationIcon} alt="location-logo" />
                    <div className= "location_text">
                        <p> {location.Name}</p>
                        <p> {adress.Ort}, {land.Name}</p>
                    </div>
                </div>
            </div>
        </div>

      </div>
    );
}

const getString = (date) =>
{
    const day = date.getDate() >= 10 ? date.getDate().toString() : "0" + date.getDate().toString();
    const month = (date.getMonth()+1) >= 10 ? (date.getMonth()+1).toString() : "0" + (date.getMonth()+1).toString();
    const year = date.getFullYear()%100 >= 10 ? date.getFullYear()%100 : "0" + date.getFullYear()%100;
    return day+"."+month+"."+year;
    
}
