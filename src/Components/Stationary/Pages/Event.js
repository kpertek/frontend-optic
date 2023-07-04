import './Pages.css'
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import { EventcardContainer } from "../Eventcards/EventcardContainer";
import { useEffect, useState } from 'react';
import { fetchData } from '../../../common/Requests';

export default function Event() {

    const [events, setEvents] = useState([]);
    const [topEvents, setTopEvents] = useState([]);

    useEffect(() => {    
        fetchData("events", setEvents);
        fetchData("topevents", setTopEvents);
    }, []);

    return (
        <>
            <NavIconGroup />
            <Navbar />
            <Breadcrumbs />
            <div className='content'>
                <div className='columnSide'></div>
                <div className='EventsContainer'>
                    <EventcardContainer headline="Top Events" events={topEvents} maxEvents={5}/>
                    <EventcardContainer headline="Alle Events" events={events} maxEvents={0}/>
                </div>
                <div className='columnSide'></div>
            </div>
        </>
    )
}