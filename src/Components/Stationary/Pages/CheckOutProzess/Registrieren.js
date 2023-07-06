import "./CheckOut.css";
import "../Pages.css";
import NavbarCheckOut from "./NavbarCheckOut";
import NavbarAnmeldung from "./NavbarAnmeldung";
import {Link} from "react-router-dom";
import NavIconGroupCheck from "./NavIconGroupCheck";

export default function Registrieren() {
    return (
        <>
            <NavIconGroupCheck showBackgroundCheck = {false}/>
            <NavbarCheckOut />
            <div className="content">
                <div className="registrierenfenster">
                    <NavbarAnmeldung />
                    <div className="eingabefelderRegistrieren">
                        <input type="text" id="vname" name="vname" placeholder="Vorname"/>
                        <input type="text" id="nname" name="nname" placeholder="Nachname"/>
                        <input type="text" id="email" name="email" placeholder="E-Mail-Adresse"/>
                        <input type="text" id="geb" name="geb" placeholder="Geburtsdatum (DD.MM.YYYY)"/>
                        <input type="password" id="passwort" name="passwort" placeholder="Passwort"/>
                        <input type="password" id="passwort" name="passwort" placeholder="Passwort wiederholen"/>
                    </div>
                    <div className="anmelden">
                        <button><Link to="/versand">Anmelden</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}