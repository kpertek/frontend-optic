import "./CheckOut.css";
import NavbarCheckOut from "./NavbarCheckOut";
import {Link} from "react-router-dom";

export default function Versand() {
    return (
        <>
            <NavbarCheckOut />
            <div className="versandadresse">
                <div className="ueberschriftVersand">
                    <p>Lieferadresse</p>
                </div>
                <div className="eingabefelder">
                    <input type="text" id="vname" name="vorname" placeholder="Vorname"/>
                    <input type="text" id="nname" name="nachname" placeholder="Nachname"/>
                    <input type="text" id="strunr" name="strunr" placeholder="Straße und Hausnummer"/>
                    <input type="text" id="plz" name="plz" placeholder="PLZ"/>
                    <input type="text" id="stadt" name="stadt" placeholder="Stadt"/>
                    <input type="text" id="gebdat" name="gebdat" placeholder="Geburtsdatum"/>
                </div>
                <div className="weiterZuZahlart">
                    <button><Link to="/zahlungsmethode">Weiter zur Zahlung</Link></button>
                </div>
            </div>
        </>
    )
}