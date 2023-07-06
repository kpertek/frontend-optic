import "./AccountPopUp.css";
import X from "./assets/Close.svg";
import Login from "./Login";
import Register from "./Register";
export default function AccountPopUp() {
    return (
        <div className="popup">
            <div className="popup_ueberschrift_close">
                <div className="popup_ueberschrift">
                    <p>Account</p>
                </div>
                <div className="popup_close">
                    <img src={X}/>
                </div>
            </div>
            <div className="popup_navbar">
                <div className="popup_registrieren active">
                    Registrieren
                </div>
                <div className="popup_anmelden">
                    Anmelden
                </div>
            </div>
            <div className="login">
                <Login />
            </div>
            <div className="register">
                {/*<Register />*/}
            </div>
        </div>
    )
}