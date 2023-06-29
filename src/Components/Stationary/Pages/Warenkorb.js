import './Pages.css';
import ZurKasse from "../Kasse/ZurKasse";
import Headline from "../Navigation/Headline";
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import TicketCount from "../Ticket/TicketCount";

export default function Warenkorb () {
    return (
        <>
            <NavIconGroup showBackground = {false}/>
            <Navbar />
            <Breadcrumbs />
            <Headline text="Warenkorb"/>
            <ZurKasse/>
            <h1>Warenkorb</h1>
            <TicketCount />
        </>
    )
}