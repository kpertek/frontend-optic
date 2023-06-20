import Herz from './assets/Herz.svg';
import Account from './assets/Account.svg';
import Warenkorb from './assets/Warenkorb.svg';
import './NavIconGroup.css';
import {Link} from "react-router-dom";
import logo from "./assets/logo3.png"

export default function NavIconGroup(props) {
  return (
      <nav className="navIconGroup">
          <Link to="/"><img src={logo}/></Link>
          <div>
              <div className="navIconGroupItem">
                  <img src={Herz}></img>
                  <p>Favoriten</p>
              </div>
              <div className="navIconGroupItem">
                  <img src={Warenkorb}></img>
                  {props.itemCount>0 && <div className="navIconGroupItemCount">{props.itemCount}</div>}
                  <p>Warenkorb</p>
              </div>
              <div className="navIconGroupItem">
                  <img src={Account}></img>
                  <p>Account</p>
              </div>
          </div>
      </nav>
    );
}