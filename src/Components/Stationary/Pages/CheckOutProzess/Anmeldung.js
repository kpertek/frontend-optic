import "./CheckOut.css";
import NavbarCheckOut from "./NavbarCheckOut";
import NavbarAnmeldung from "./NavbarAnmeldung";
import {Link} from "react-router-dom";

export default function Anmeldung() {
    return (
        <>
            <NavbarCheckOut />
            <div className="anmeldefenster">
                <NavbarAnmeldung />
                <div className="eingabefelderaAnmeldung">
                    <input type="text" id="email" name="email" placeholder="E-Mail-Adresse"/>
                    <input type="password" id="passwort" name="passwort" placeholder="Passwort"/>
                </div>
                <div className="anmelden">
                    <button><Link to="/versand">Anmelden</Link></button>
                </div>
            </div>
        </>
    )
}