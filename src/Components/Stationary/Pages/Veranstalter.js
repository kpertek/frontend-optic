import './Pages.css';
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import Headline from "../Navigation/Headline";
import SmallEventcard from "../Eventcards/SmallEventcard";
export default function Veranstalter() {
    return (
        <>
            <NavIconGroup />
            <Navbar />
            <Breadcrumbs />
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
                <Headline text="Alle Veranstalter"/>
                <div className="eventcards">
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
                    <SmallEventcard />
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