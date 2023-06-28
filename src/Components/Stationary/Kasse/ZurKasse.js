import './ZurKasse.css';
import zahlArt1 from './assets/GiroPay.png';
import zahlArt2 from './assets/ApplePay.png';
import zahlArt3 from './assets/GooglePay.png';
import zahlArt4 from './assets/Klarna.png';
import zahlArt5 from './assets/Visa.png';
import zahlArt6 from './assets/Mastercard.png';
import zahlArt7 from './assets/PayPal.png';
import zahlArt8 from './assets/SofortÜberweisung.png';
export default function ZurKasse() {
    return (
        <div className="bezahlungsfeld">
            <div className="kassefeld">
                <p className="gesamt">GESAMT: (INKL:MWST)</p>
                <p className="versand">VERSAND:</p>
                <button className="zurkasse">ZUR KASSE</button>
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