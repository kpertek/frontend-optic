import Herz from './assets/Herz.svg';
import Account from './assets/Account.svg';
import Warenkorb from './assets/Warenkorb.svg';
import './Navigation.css';

export default function NavIconGroup() {
    return (
      <nav className="navIconGroup">
        <div className="navIconGroupItem">
          <img src={Herz}></img>
          <p>Favoriten</p>
        </div>
        <div className="navIconGroupItem">
          <img src={Warenkorb}></img>
          <p>Warenkorb</p>
        </div>
        <div className="navIconGroupItem">
          <img src={Account}></img>
          <p>Account</p>
        </div>
      </nav>
    );
}