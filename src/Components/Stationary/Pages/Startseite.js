import './Pages.css'
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import { EventcardContainer } from "../Eventcards/EventcardContainer";
import { SmallEventcardContainer } from '../Eventcards/SmallEventcardContainer';
import { useEffect, useState } from 'react';
import { fetchData } from '../../../common/Requests';
import Register from '../User/Register';
import Login from '../User/Login';
import LogoutButton from '../User/LogoutButton';

export default function Startseite(props) {
    
    const [topEvents, setTopEvents] = useState([]);
    const [topSpiele, setTopSpiele] = useState([]);
    const [topVeranstalter, setTopVeranstalter] = useState([]);
    const [topLaender, setTopLaender] = useState([]);

    useEffect(() => {    
        fetchData("topevents", setTopEvents);
        fetchData("topspiele", setTopSpiele);
        fetchData("topveranstalter", setTopVeranstalter);
        fetchData("toplaender", setTopLaender);
    }, []);

    return (
        <>
            <NavIconGroup currentUser={props.currentUser}/>
            <Navbar />
            <Breadcrumbs />
            {/*<LogoutButton />*/}
            <div className='content contentStartseite'>
                <EventcardContainer headline="Top Events" events={topEvents} maxEvents={5}/>
                <SmallEventcardContainer headline="Top Spiele" kategorien={topSpiele} maxKategorien={5} art="spiele"/>
                <SmallEventcardContainer headline="Top Veranstalter" kategorien={topVeranstalter} maxKategorien={5} art="veranstalter"/>
                <SmallEventcardContainer headline="Top Länder" kategorien={topLaender} maxKategorien={5} art="laender"/>
            </div>
        </>
    )
}