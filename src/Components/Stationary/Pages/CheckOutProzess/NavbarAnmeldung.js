import "./NavbarAnmeldung.css";
import anmeldung from "./assets/User_cicrle.svg";
import zahlart from "./assets/Credit card_light.svg";
import {Link, useMatch, useResolvedPath} from "react-router-dom";

export default function NavbarAnmeldung() {
    return (
        <nav className="navAnmeldung">
            <ul>
                <NavLink to="/anmeldung/anmelden">Anmeldung</NavLink>
                <NavLink to="/anmeldung/registrieren">Registrieren</NavLink>
                <NavLink to="/anmeldung/gastanmeldung">Gast Anmeldung</NavLink>
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
