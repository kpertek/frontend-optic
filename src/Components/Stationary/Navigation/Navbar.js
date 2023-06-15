import './Navigation.css';

export default function Navbar() {
    return (
      <div id="navbar">
        <button className="navbarButton">Events</button>
        <button className="navbarButton">Spiele</button>
        <button className="navbarButton">Veranstalter</button>
        <button className="navbarButton navbarButtonRight">Länder</button>
      </div>
    );
}