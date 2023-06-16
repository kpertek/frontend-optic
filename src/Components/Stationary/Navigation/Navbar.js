import './Navigation.css';
import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function Navbar() {
    return (
      <nav className="nav">
          <ul>
              <li><CustomLink to="/events">Events</CustomLink></li>
              <li><CustomLink to="/spiele">Spiele</CustomLink></li>
              <li><CustomLink to="/veranstalter">Veranstalter</CustomLink></li>
              <li><CustomLink to="/laender">Länder</CustomLink></li>
          </ul>
      </nav>
    );
}

function CustomLink({ to, children, ...props}) {
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