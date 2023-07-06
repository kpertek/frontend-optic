import './Pages.css';
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import { fetchData } from '../../../common/Requests';
import { useEffect, useState } from 'react';
import { SmallEventcardContainer } from '../Eventcards/SmallEventcardContainer';
export default function Veranstalter(props) {
    
    const [topVeranstalter, setTopVeranstalter] = useState([]);
    const [veranstalter, setVeranstalter] = useState([]);

    useEffect(() => {    
        fetchData("topveranstalter", setTopVeranstalter);
        fetchData("veranstalter", setVeranstalter);
    }, []);
    
    return (
        <>
            <NavIconGroup currentUser={props.currentUser}/>
            <Navbar />
            <Breadcrumbs />
            <div className='content'>
                <SmallEventcardContainer headline="Top Veranstalter" kategorien={topVeranstalter} maxKategorien={5} art="veranstalter"/>
                <SmallEventcardContainer headline="Alle Veranstalter" kategorien={veranstalter} art="veranstalter"/>
            </div>
            
        </>
    )
}