import "./CheckOut.css"
import NavbarCheckOut from "./NavbarCheckOut";
import NavbarAnmeldung from "./NavbarAnmeldung";
import {Link} from "react-router-dom";

export default function GastAnmeldung() {
    return (
        <>
            <NavbarCheckOut />
            <div className="gastanmeldefenster">
                <NavbarAnmeldung />
                <div className="eingabefelderaAnmeldungGast">
                    <input type="text" id="email" name="email" placeholder="E-Mail-Adresse"/>
                </div>
                <div className="gastanmelden">
                    <button><Link to="/versand">Anmelden</Link></button>
                </div>
            </div>
        </>
    )
}