import './Pages.css'
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import Headline from "../Navigation/Headline";
import Eventcard from "../Eventcards/Eventcard";

const API_URL = "http://localhost/api/";

export default function Event() {
    return (
        <>
            <NavIconGroup />
            <Navbar />
            <Breadcrumbs />
            <Headline text="Alle Events"/>
            <Eventcard />
        </>
    )
}