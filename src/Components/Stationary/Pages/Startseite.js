import './Pages.css'
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import Headline from "../Navigation/Headline";
import Eventcard from "../Eventcards/Eventcard";
import SmallEventcard from "../Eventcards/SmallEventcard";
import { EventcardContainer } from "../Navigation/EventcardContainer";

export default function Startseite(props) {

    return (
        <>
            <NavIconGroup />
            <Navbar />
            <Breadcrumbs />
            <div className="eventgruppe">
                <Headline text="Top Spiele"/>
                <div className="eventcards">
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                </div>
            </div>
            <div className="eventgruppe">
                <Headline text="Top Veranstalter"/>
                <div className="eventcards">
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                </div>
            </div>
            <div className="eventgruppe">
                <Headline text="Top Länder"/>
                <div className="eventcards">
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                </div>
            </div>
        </>
    )
}