import { useState } from "react";
import "./AccountPopUp.css";
import X from "./assets/Close.svg";
import Login from "./Login";
import Register from "./Register";
export default function AccountPopUp() {

    const [content, setContent] = useState("Registrieren");

    const setContentReg  = () =>
    {
        setContent("Registrieren");
    }

    const setContentLogin  = () =>
    {
        setContent("Login");
    }

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
                <div className={"popup_registrieren" + (content==="Registrieren" ? " active" : "")} onClick={setContentReg}>
                    Registrieren
                </div>
                <div className={"popup_anmelden" + (content==="Login" ? " active" : "")} onClick={setContentLogin}>
                    Anmelden
                </div>
            </div>
            <div className="login">
                {content==="Login" && <Login />}
            </div>
            <div className="register">
                {content==="Registrieren" && <Register />}
            </div>
        </div>
    )
}