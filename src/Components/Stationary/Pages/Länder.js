import './Pages.css';
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import { fetchData } from '../../../common/Requests';
import { useEffect, useState } from 'react';
import { SmallEventcardContainer } from '../Eventcards/SmallEventcardContainer';

export default function Laender() {
    
    const [topLaender, setTopLaender] = useState([]);
    const [laender, setLaender] = useState([]);

    useEffect(() => {    
        fetchData("toplaender", setTopLaender);
        fetchData("laender", setLaender);
    }, []);
    
    return (
        <>
            <NavIconGroup />
            <Navbar />
            <Breadcrumbs />
            <div className='content'>
                <SmallEventcardContainer headline="Top Länder" kategorien={topLaender} maxKategorien={5} art="laender"/>
                <SmallEventcardContainer headline="Alle Länder" kategorien={laender} art="laender"/>
            </div>
            
        </>
    )
}