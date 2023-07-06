import './Pages.css';
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import { useEffect, useState } from 'react';
import { fetchData } from '../../../common/Requests';
import { SmallEventcardContainer } from '../Eventcards/SmallEventcardContainer';
export default function Spiele(props) {
    
    const [topSpiele, setTopSpiele] = useState([]);
    const [spiele, setSpiele] = useState([]);

    useEffect(() => {    
        fetchData("topspiele", setTopSpiele);
        fetchData("spiele", setSpiele);
    }, []);
    
    return (
        <>
            <NavIconGroup currentUser={props.currentUser}/>
            <Navbar />
            <Breadcrumbs />
            <div className='content'>
                <SmallEventcardContainer headline="Top Spiele" kategorien={topSpiele} maxKategorien={5} art="spiele"/>
                <SmallEventcardContainer headline="Alle Spiele" kategorien={spiele} art="spiele"/>
            </div>
            
        </>
    )
}