import './ZurKasse.css';
import zahlArt1 from './assets/GiroPay.png';
import zahlArt2 from './assets/ApplePay.png';
import zahlArt3 from './assets/GooglePay.png';
import zahlArt4 from './assets/Klarna.png';
import zahlArt5 from './assets/Visa.png';
import zahlArt6 from './assets/Mastercard.png';
import zahlArt7 from './assets/PayPal.png';
import zahlArt8 from './assets/SofortÜberweisung.png';
import {Link} from "react-router-dom";
export default function ZurKasse() {
    return (
        <div className="bezahlungsfeld">
            <div className="kassefeld">
                <div className="kassefeld_text">
                    <div className="gesamt_preis">
                        <div className="gesamt_inkl">
                            <p className="gesamt">GESAMT:</p>
                            <p className="inkl">(INKL.MWST.)</p>
                        </div>
                        <div className="preis">
                            <p>Preis</p>
                        </div>
                    </div>
                    <div className="versand_preis">
                        <div className="versand">
                            <p>VERSAND:</p>
                        </div>
                        <div className="preis">
                            <p>Preis</p>
                        </div>
                    </div>
                </div>
                <div className="zurkasse">
                    <button><Link to="/versand">ZUR KASSE</Link></button>
                </div>
            </div>
            <div className="zahlungsarten">
                <img src={zahlArt1}/>
                <img src={zahlArt2}/>
                <img src={zahlArt3}/>
                <img src={zahlArt4}/>
                <img src={zahlArt5}/>
                <img src={zahlArt6}/>
                <img src={zahlArt7}/>
                <img src={zahlArt8}/>
            </div>
        </div>
    )
}