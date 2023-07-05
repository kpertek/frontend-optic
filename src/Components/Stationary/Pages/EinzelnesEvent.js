import NavIconGroup from "../Navigation/NavIconGroup";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import Headline from "../Navigation/Headline";
import NavbarEvent from "../Navigation/NavbarEvent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../../common/Requests";
import Ticket from "../Ticket/Ticket";
import SterneBewertung from "../Bewertung/SterneBewertung";

export default function EinzelnesEvent() {
    
    let { eventID } = useParams();

    const [event, setEvent] = useState([]);
    const [tickets, setTickets] = useState([]);

    useEffect(() => {    
        fetchData("events/" + eventID, setEvent);
        fetchData("ticketarten/event/" + eventID, setTickets);
    }, []);

    return (
        <>
            <NavIconGroup />
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
                    <SterneBewertung />
                    <Headline text="Weitere Events"/>
                </div>
            </div>
        </>
    )
}