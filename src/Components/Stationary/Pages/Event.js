import './Pages.css'
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import { EventcardContainer } from "../Navigation/EventcardContainer";
import { useEffect, useState } from 'react';
import { fetchData } from '../../../common/Requests';

export default function Event(props) {

    const [events, setEvents] = useState([]);
    const [topEvents, setTopEvents] = useState([]);

    useEffect(() => {    
        fetchData(props.apiURL + "events", setEvents);
        fetchData(props.apiURL + "topevents", setTopEvents);
    }, [props.apiURL]);

    return (
        <>
            <NavIconGroup />
            <Navbar />
            <Breadcrumbs />
            <EventcardContainer headline="Top Events" events={topEvents} maxEvents={5}/>
            <EventcardContainer headline="Alle Events" events={events} maxEvents={0}/>
        </>
    )
}