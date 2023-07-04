import './NavbarCheckOut.css';
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import zahlart from "./assets/Credit card_light.svg";
import ueberblick from "./assets/Paper_light.svg";
import versandlogo from "./assets/truck-02.svg";
import anmeldung from "./assets/User_cicrle.svg";

export default function NavbarCheckOut() {
    return (
        <nav className="navCheck">
            <ul>
                <NavLink to="/anmeldung"><img src={anmeldung}/></NavLink>
                <NavLink to="/versand">Versand</NavLink>
                <NavLink to="/zahlungsmethode"><img src={zahlart}/></NavLink>
                <NavLink to="/bestelluebersicht"><img src={ueberblick}/></NavLink>
            </ul>
        </nav>
    );
}

function NavLink({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}