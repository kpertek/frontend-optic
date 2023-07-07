import Herz from './assets/Herz.svg';
import Account from './assets/Account.svg';
import Warenkorb from './assets/Warenkorb.svg';
import './NavIconGroup.css';
import {Link} from "react-router-dom";
import logo from "./assets/logo3.png";

export default function NavIconGroup(props) {
  
    const accountText = ((props.currentUser===undefined) ? "Account" : props.currentUser.vorname);
  
    return (
      <nav className={"navIconGroup " + (props.showBackground && "background")}>
          <div className="logo">
              <Link to="/"><img src={logo}/></Link>
          </div>
          <div className="icons">
              <div className="navIconGroupItem">
                  <Link to="/startseite/favoriten">
                      <img src={Herz} alt="Favoriten"></img>
                      <p>Favoriten</p>
                  </Link>
              </div>
              <div className="navIconGroupItem">
                  <Link to="/startseite/warenkorb">
                      <img src={Warenkorb} alt="Warenkorb"></img>
                      {props.itemCount>0 && <div className="navIconGroupItemCount">{props.itemCount}</div>}
                      <p>Warenkorb</p>
                  </Link>
              </div>
              <div className="navIconGroupItem">
                    <Link to="/startseite/popup">
                        <img src={Account} alt="Account"></img>
                        <p>{accountText}</p>
                    </Link>
              </div>
          </div>
      </nav>
    );
}

NavIconGroup.defaultProps = {
    showBackground: true
}