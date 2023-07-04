import './Pages.css'
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import { EventcardContainer } from "../Eventcards/EventcardContainer";
import { SmallEventcardContainer } from '../Eventcards/SmallEventcardContainer';
import { useEffect, useState } from 'react';
import { fetchData } from '../../../common/Requests';

export default function Startseite() {
    
    const [topEvents, setTopEvents] = useState([]);
    const [topSpiele, setTopSpiele] = useState([]);

    useEffect(() => {    
        fetchData("topevents", setTopEvents);
        fetchData("topspiele", setTopSpiele);
    }, []);

    return (
        <>
            <NavIconGroup />
            <Navbar />
            <Breadcrumbs />
            <div className='content contentStartseite'>
                <EventcardContainer headline="Top Events" events={topEvents} maxEvents={5}/>
                <SmallEventcardContainer headline="Top Spiele" kategorien={topSpiele} maxKategorien={5}/>
                <SmallEventcardContainer headline="Top Veranstalter" />
                <SmallEventcardContainer headline="Top Länder" />
            </div>
        </>
    )
}