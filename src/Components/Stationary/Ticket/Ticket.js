import "./Ticket.css"
import TicketCount from "./TicketCount";
import warenkorb_logo from "../Pages/assets/shopping bag.svg"
import {Link} from "react-router-dom";
import locationIcon from "../Eventcards/assets/location-icon.svg";
import React from "react";
import dateIcon from "../Eventcards/assets/date-icon.svg";
export default function Ticket() {
    return (
        <>
            <div className="ticket">
                <div className="beschreibungen">
                    <div className="beschreibung_links">
                        <div className="ticket_ueberschrift">
                            Eventname - Ticket Art
                        </div>
                        <div className="infos_alle">
                            <div className="infos_event">
                                <div className="veranstalter_name">
                                    Veranstalter
                                </div>
                                <div className="datum_event">
                                    <img src={dateIcon} alt="date-logo" />
                                    <p>Beginn - Ende</p>
                                </div>
                                <div className="standort_event">
                                    <img src={locationIcon} alt="location-logo" />
                                    <div className= "location_text">
                                        <p>Location</p>
                                        <p>Adresse, Land</p>
                                    </div>
                                </div>
                            </div>
                            <div className="info_ticket">
                                <div className="preis_counter">
                                    <div className="preis_ticket">
                                        Preis €
                                    </div>
                                    <div className="counter">
                                        <TicketCount />
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
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                                Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                            </p>
                        </div>
                    </div>
                </div>
                <div className="bezahlen">
                    <div className="preis_beschreibung">
                        <div className="gesamtpreis_ticket">
                            <p>Gesamtpreis: </p>
                        </div>
                        <div className="preis_ticket">
                            <p>Preis €</p>
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