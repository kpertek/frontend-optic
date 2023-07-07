import Herz from './assets/Herz.svg';
import Account from './assets/Account.svg';
import Warenkorb from './assets/Warenkorb.svg';
import './NavIconGroup.css';
import {Link} from "react-router-dom";
import logo from "./assets/logo3.png";
import X from "./assets/Close.svg";
import {useState} from "react";
import AccountPopUp from "../User/AccountPopUp";

export default function NavIconGroup(props) {
  
    const accountText = ((props.currentUser===undefined) ? "Account" : props.currentUser.vorname);

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
  
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
                  <div className="account_button" onClick={toggleModal}>
                      <img src={Account} alt="Account"></img>
                      <p>{accountText}</p>
                  </div>
                  {modal && (
                      <div className="modal">
                          <div className="overlay" onClick={toggleModal}></div>
                          <div className="modal-content">
                              <AccountPopUp/>
                              <div className="close-modal" onClick={toggleModal}>
                                  <img src={X}/>
                              </div>
                          </div>
                      </div>
                  )}
              </div>
          </div>
      </nav>
    );
}

NavIconGroup.defaultProps = {
    showBackground: true
}