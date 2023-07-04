import NavIconGroup from "../Navigation/NavIconGroup";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import Headline from "../Navigation/Headline";
import NavbarEvent from "../Navigation/NavbarEvent";

export default function EinzelnesEvent() {
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