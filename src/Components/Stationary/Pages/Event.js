import './Pages.css'
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import { EventcardContainer } from "../Navigation/EventcardContainer";
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Event(props) {

    const [events, setEvents] = useState([]);

    useEffect(() => {    
        try
        {
            axios.get(props.apiURL + "events", {})
            .then((response) => {
                return response.data;
            })
            .then((data) => {
                setEvents(data);
            })
        }
        catch (error)
        {
            console.log(error);
        }
    }, [props.apiURL]);

    return (
        <>
            <NavIconGroup />
            <Navbar />
            <Breadcrumbs />
            <EventcardContainer headline="Alle Events" events={events}/>
        </>
    )
}