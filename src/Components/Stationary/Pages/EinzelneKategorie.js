import NavIconGroup from "../Navigation/NavIconGroup";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import Headline from "../Navigation/Headline";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../../../common/Requests";
import Navbar from "../Navigation/Navbar";

export default function EinzelneKategorie(props) {
    
    let { art, id } = useParams();

    const [kategorie, setKategorie] = useState([]);

    useEffect(() => {    
        fetchData(art + "/" + id, setKategorie);
    }, []);
    
    return (
        <>
            <NavIconGroup currentUser={props.currentUser}/>
            <Navbar />
            <Breadcrumbs sitename={kategorie.Name}/>
            <div className='content'>
                <div className='singlePageInnerContainer'>
                    <Headline text={kategorie.Name}/>
                    <p>{kategorie.Beschreibung}</p>
                    <Headline text="Events"/>
                </div>
            </div>
        </>
    )
}