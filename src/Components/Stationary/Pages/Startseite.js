import './Pages.css';
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import Headline from "../Navigation/Headline";
import Eventcard from "../Eventcards/Eventcard";
import SmallEventcard from "../Eventcards/SmallEventcard";

export default function Startseite() {
    return (
        <>
            <NavIconGroup />
            <Navbar />
            <Breadcrumbs />
            <div className="eventgruppe">
                <Headline text="Top Events"/>
                <div className="eventcards">
                    <Eventcard />
                    <Eventcard />
                    <Eventcard />
                    <Eventcard />
                    <Eventcard />
                </div>
            </div>
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