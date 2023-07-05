import NavIconGroup from "../Navigation/NavIconGroup";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import Headline from "../Navigation/Headline";
import NavbarEvent from "../Navigation/NavbarEvent";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../../common/Requests";

export default function EinzelnesEvent() {
    
    let { eventID } = useParams();

    const [event, setEvent] = useState([]);

    console.log(event);

    useEffect(() => {    
        fetchData("events/" + eventID, setEvent);
    }, []);
    
    return (
        <>
            <NavIconGroup />
            <NavbarEvent />
            <Breadcrumbs sitename={event.Name}/>
            <div className='content'>
                <div className='eventPageInnerContainer'>
                    <Headline text={event.Name}/>
                    <p>{event.Beschreibung}</p>
                    <Headline text="Tickets"/>
                    <Headline text="Bewertung"/>
                    <Headline text="Weitere Events"/>
                </div>
            </div>
        </>
    )
}