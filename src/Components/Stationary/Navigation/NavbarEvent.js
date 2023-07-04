import './NavbarEvent.css';
import {Link} from "react-router-dom"

export default function NavbarEvent() {
    return (
        <nav className="navE">
            <ul>
                <Link to="beschreibung">Beschreibung</Link>
                <Link to="tickets">Tickets</Link>
                <Link to="bewertung">Bewertung</Link>
                <Link to="weitereEvents">Weitere Events</Link>
            </ul>
        </nav>
    );
}