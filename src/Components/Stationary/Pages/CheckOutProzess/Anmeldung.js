import "./CheckOut.css";
import "../Pages.css";
import NavbarCheckOut from "./NavbarCheckOut";
import NavbarAnmeldung from "./NavbarAnmeldung";
import {Link} from "react-router-dom";
import NavIconGroupCheck from "./NavIconGroupCheck";

export default function Anmeldung() {
    return (
        <>
            <NavIconGroupCheck showBackgroundCheck = {false}/>
            <NavbarCheckOut />
            <div className="content">
                <div className="anmeldefenster">
                    <NavbarAnmeldung />
                    <div className="eingabefelderaAnmeldung">
                        <input type="text" id="email" name="email" placeholder="E-Mail-Adresse"/>
                        <input type="password" id="passwort" name="passwort" placeholder="Passwort"/>
                    </div>
                    <div className="anmelden">
                        <Link to="/versand"><button>Anmelden</button></Link>
                    </div>
                </div>
            </div>
        </>
    )
}