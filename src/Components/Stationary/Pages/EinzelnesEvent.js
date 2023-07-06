import "../Bewertung/SterneBewertung.css";
import NavIconGroup from "../Navigation/NavIconGroup";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import Headline from "../Navigation/Headline";
import NavbarEvent from "../Navigation/NavbarEvent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../../common/Requests";
import Ticket from "../Ticket/Ticket";
import SterneBewertung from "../Bewertung/SterneBewertung";

export default function EinzelnesEvent(props) {
    
    let { eventID } = useParams();

    const [event, setEvent] = useState([]);
    const [tickets, setTickets] = useState([]);

    useEffect(() => {    
        fetchData("events/" + eventID, setEvent);
        fetchData("ticketarten/event/" + eventID, setTickets);
    }, []);

    return (
        <>
            <NavIconGroup currentUser={props.currentUser}/>
            <NavbarEvent />
            <Breadcrumbs sitename={event.Name}/>
            <div className='content'>
                <div className='singlePageInnerContainer'>
                    <Headline text={event.Name}/>
                    <p>{event.Beschreibung}</p>
                    <Headline text="Tickets"/>
                    <div>
                        {tickets.map((ticket, i) => <Ticket event={event} ticket={ticket} key={i}/>)}
                    </div>
                    <Headline text="Bewertung"/>
                    <div className="bewertung_sterne">
                        <div className="bewertung_text_1">
                            <div className="bewertung_1">
                                <SterneBewertung />
                            </div>
                            <div className="text_zu_bewertung">
                                Akkustik und Sicht
                            </div>
                        </div>
                        <div className="bewertung_text_2">
                            <div className="bewertung_2">
                                <SterneBewertung />
                            </div>
                            <div className="text_zu_bewertung">
                                Atmosphäre
                            </div>
                        </div>
                        <div className="bewertung_text_3">
                            <div className="bewertung_3">
                                <SterneBewertung />
                            </div>
                            <div className="text_zu_bewertung">
                                Organisation
                            </div>
                        </div>
                        <div className="bewertung_text_4">
                            <div className="bewertung_4">
                                <SterneBewertung />
                            </div>
                            <div className="text_zu_bewertung">
                                Verpflegung
                            </div>
                        </div>
                        <div className="bewertung_text_5">
                            <div className="bewertung_5">
                                <SterneBewertung />
                            </div>
                            <div className="text_zu_bewertung">
                                Preis-Leistung
                            </div>
                        </div>
                    </div>
                    <Headline text="Weitere Events"/>
                </div>
            </div>
        </>
    )
}