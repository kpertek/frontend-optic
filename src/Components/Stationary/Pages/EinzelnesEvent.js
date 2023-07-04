import NavIconGroup from "../Navigation/NavIconGroup";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import Headline from "../Navigation/Headline";
import NavbarEvent from "../Navigation/NavbarEvent";
import { useParams } from "react-router-dom";

export default function EinzelnesEvent() {
    
    let { eventName } = useParams();
    
    return (
        <>
            <NavIconGroup />
            <NavbarEvent />
            <Breadcrumbs />
            <Headline text="EventName"/>
            <Headline text="Tickets"/>
            <Headline text="Bewertung"/>
            <Headline text="Weitere Events"/>
        </>
    )
}