import React from 'react';
import './EventcardBewertung.css';

export default function EventcardBewertung(props) {
    function changecolor(props) {
        if (props.rating > 4) {
            return "fünf";
        } else if (props.rating > 3) {
            return "vier";
        } else if (props.rating > 2) {
            return "drei";
        } else if (props.rating > 1) {
            return "zwei";
        } else if (props.rating > 0) {
            return "eins";
        } else if (props.rating == 0) {
            return "null";
        }
    }
    return (

        <div className={("bewertung " +changecolor(props))}>
            <p>★ {props.rating}</p>
        </div>
        
    );

}
