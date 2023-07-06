import "./CheckOut.css"
import "../Pages.css";
import NavbarCheckOut from "./NavbarCheckOut";
import NavbarAnmeldung from "./NavbarAnmeldung";
import {Link} from "react-router-dom";
import NavIconGroupCheck from "./NavIconGroupCheck";

export default function GastAnmeldung() {
    return (
        <>
            <NavIconGroupCheck showBackgroundCheck = {false}/>
            <NavbarCheckOut />
            <div className="content">
                <div className="gastanmeldefenster">
                    <NavbarAnmeldung />
                    <div className="eingabefelderaAnmeldungGast">
                        <input type="text" id="email" name="email" placeholder="E-Mail-Adresse"/>
                    </div>
                    <div className="gastanmelden">
                        <button><Link to="/versand">Anmelden</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}