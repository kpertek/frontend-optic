import './Navbar.css';
import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar() {
    return (
      <nav className="nav">
          <ul>
              <NavLink to="/startseite/events">Events</NavLink>
              <NavLink to="/startseite/spiele">Spiele</NavLink>
              <NavLink to="/startseite/veranstalter">Veranstalter</NavLink>
              <NavLink to="/startseite/laender">Länder</NavLink>
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