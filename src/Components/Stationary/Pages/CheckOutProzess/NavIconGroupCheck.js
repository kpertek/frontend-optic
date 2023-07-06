import Herz from './assets/Herz.svg';
import Account from './assets/Account.svg';
import Warenkorb from './assets/Warenkorb.svg';
import './NavIconGroupCheck.css';
import {Link} from "react-router-dom";
import logo from "./assets/logo3.png";

export default function NavIconGroupCheck(props) {
    return (
        <nav className={"navIconGroupCheck " + (props.showBackgroundCheck && "backgroundCheck")}>
            <div className="logoCheck">
                <Link to="/"><img src={logo}/></Link>
            </div>
            <div className="iconsCheck">
                <div className="navIconGroupItemCheck">
                    <Link to="/startseite/warenkorb">
                        <img src={Warenkorb} alt="Warenkorb"></img>
                        {props.itemCount>0 && <div className="navIconGroupItemCountCheck">{props.itemCount}</div>}
                        <p>Warenkorb</p>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

NavIconGroupCheck.defaultProps = {
    showBackgroundCheck: true
}