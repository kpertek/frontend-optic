import './Pages.css';
import ZurKasse from "../Kasse/ZurKasse";
import Headline from "../Navigation/Headline";
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import TicketCount from "../Ticket/TicketCount";
import Ticket from "../Ticket/Ticket";

export default function Warenkorb () {
    return (
        <>
            <NavIconGroup showBackground = {false}/>
            <Navbar />
            <Breadcrumbs />
            <div className="content">
                <div className="singlePageInnerContainer">
                    <Headline text="Warenkorb"/>
                    <ZurKasse/>
                    {/*<Ticket  />*/}
                </div>
            </div>
        </>
    )
}