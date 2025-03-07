import "./Ticket.css"
import TicketCount from "./TicketCount";
import warenkorb_logo from "../Pages/assets/shopping bag.svg"
import {Link} from "react-router-dom";
import locationIcon from "../Eventcards/assets/location-icon.svg";
import React from "react";
import dateIcon from "../Eventcards/assets/date-icon.svg";
import { getDateString } from "../../../common/GetDateString";
export default function Ticket(props) {
    const event = props.event;
    const ticket = props.ticket;
    const begin = new Date(event.Beginn);
    const ende = new Date(event.Ende);

    const [count, setCount] = React.useState(1);
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    
    return (
        <>
            <div className="ticket">
                <div className="beschreibungen">
                    <div className="beschreibung_links">
                        <div className="ticket_ueberschrift">
                            <p className="ticket_ueberschrift_Name">{event.Name}</p>
                            <p className="ticket_ueberschrift_Minus">-</p>
                            <p>{ticket.Name}</p>
                        </div>
                        <div className="infos_alle">
                            <div className="infos_event">
                                <div className="veranstalter_name">
                                    {event.veranstalter.Name}
                                </div>
                                <div className="datum_event">
                                    <img src={dateIcon} alt="date-logo" />
                                    <p>{getDateString(begin)} - {getDateString(ende)}</p>
                                </div>
                                <div className="standort_event">
                                    <img src={locationIcon} alt="location-logo" />
                                    <div className= "location_text">
                                        <p>{event.location.Name}</p>
                                        <p>{event.location.adresse.Ort}, {event.location.adresse.land.Name}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="info_ticket">
                                <div className="preis_counter">
                                    <div className="preis_ticket">
                                        {ticket.Preis} €
                                    </div>
                                    <div className="counter">
                                        <TicketCount increment={increment} decrement={decrement} count={count}/>
                                    </div>
                                </div>
                                <div className="hardticket_anzeige">
                                    <input type="checkbox" id="check"/>
                                    <label for="check">Hardticket</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bescchreibung_rechts">
                        <div className="ticket_beschreibung">
                            <p>
                                {ticket.Beschreibung}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bezahlen">
                    <div className="preis_beschreibung">
                        <div className="gesamtpreis_ticket">
                            <p>Gesamtpreis: </p>
                        </div>
                        <div className="preis_ticket preis_ticket_gesamt">
                            <p>{ticket.Preis * count} €</p>
                        </div>
                    </div>
                    <div className="warenkorb_button">
                        <Link to="/versand">
                            <button>
                                <div className="korb_logo">
                                    <img src={warenkorb_logo}/>
                                </div>
                                <div className="korb_text">
                                    <p>IN DEN <br/> WARENKORB</p>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}