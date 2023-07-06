import Herz from './assets/Herz.svg';
import Account from './assets/Account.svg';
import Warenkorb from './assets/Warenkorb.svg';
import './NavIconGroup.css';
import {Link} from "react-router-dom";
import logo from "./assets/logo3.png";
import { useEffect, useState } from 'react';
import AuthService from '../../../services/auth.service';

export default function NavIconGroup(props) {
  
    const [user, setUser] = useState(undefined);
    const accountText = ((user===undefined) ? "Account" : user.vorname);

    useEffect(() => {    
        AuthService.attachUserObs(setUser);

        return () => AuthService.removeUserObs(setUser);
    }, []);
  
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
                    <Link to="/startseite/account">
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