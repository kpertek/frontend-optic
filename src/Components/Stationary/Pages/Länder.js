import './Pages.css'
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import Headline from "../Navigation/Headline";
import SmallEventcard from "../Eventcards/SmallEventcard";
export default function Laender() {
    return (
        <>
            <NavIconGroup />
            <Navbar />
            <Breadcrumbs />
            <Headline text="Alle Länder"/>
            <SmallEventcard/>
        </>
    )
}