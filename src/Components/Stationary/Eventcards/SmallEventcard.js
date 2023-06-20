import React from 'react';
import './SmallEventcard.css';

export default function SmallEventcardKomponente() {


    return (
      <div class="small-event-card">
        <div class="small-event-card__image">
            <img src="https://picsum.photos/200/300" alt="Event" />
            <div class="small-eventtitle-box"> 
                <div class="small-title"> <p>Veranstalter</p></div>
            </div>
        </div>
      </div>
    );
}
