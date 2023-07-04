import "./CheckOut.css"
import NavbarCheckOut from "./NavbarCheckOut";
import giropay from './assets/GiroPay.png';
import applepay from './assets/ApplePay.png';
import googlepay from './assets/GooglePay.png';
import klarna from './assets/Klarna.png';
import visa from './assets/Visa.png';
import mastercard from './assets/Mastercard.png';
import paypal from './assets/PayPal.png';
import sofort from './assets/SofortÜberweisung.png';
import {Link} from "react-router-dom";
export default function Zahlungsmethode() {
    return (
        <>
            <NavbarCheckOut/>
            <div className="zahlungsmethoden">
                <div className="ueberschriftZahlungsmethoden">
                    <p>Zahlungsmethoden</p>
                </div>
                <ul id="list">
                    <li className="options">
                        <div>
                            <p>PayPal</p>
                        </div>
                        <div>
                            <img src={paypal}/>
                        </div>
                    </li>
                    <li className="options">
                        <div>
                            <p>Klarna</p>
                        </div>
                        <div>
                            <img src={klarna}/>
                        </div>
                    </li>
                    <li className="options">
                        <div>
                            <p>Mastercard</p>
                        </div>
                        <div>
                            <img src={mastercard}/>
                        </div>
                    </li>
                    <li className="options">
                        <div>
                            <p>Visa</p>
                        </div>
                        <div>
                            <img src={visa}/>
                        </div>
                    </li>
                    <li className="options">
                        <div>
                            <p>Apple Pay</p>
                        </div>
                        <div>
                            <img src={applepay}/>
                        </div>
                    </li>
                    <li className="options">
                        <div>
                            <p>Google Pay</p>
                        </div>
                        <div>
                            <img src={googlepay}/>
                        </div>
                    </li>
                    <li className="options">
                        <div>
                            <p>Giropay</p>
                        </div>
                        <div>
                            <img src={giropay}/>
                        </div>
                    </li>
                    <li className="options">
                        <div>
                            <p>Sofort Überweisung</p>
                        </div>
                        <div>
                            <img src={sofort}/>
                        </div>
                    </li>
                </ul>
                <div className="weiterZuUbersicht">
                    <button><Link to="/bestelluebersicht">Weiter zur Übersicht</Link></button>
                </div>
            </div>
        </>
    )
}