import './App.css';
import {Route, Routes} from "react-router-dom"
import Event from "./Components/Stationary/Pages/Event";
import Spiele from "./Components/Stationary/Pages/Spiele";
import Veranstalter from "./Components/Stationary/Pages/Veranstalter";
import Laender from "./Components/Stationary/Pages/Länder";
import Footer from './Components/Stationary/Footer/Footer';
import Warenkorb from "./Components/Stationary/Pages/Warenkorb";
import Favoriten from "./Components/Stationary/Pages/Favoriten";
import Startseite from "./Components/Stationary/Pages/Startseite";

import AuthService from "./services/auth.service";
import EventBus from "./common/EventBus";
import { useEffect, useState } from 'react';
import EinzelnesEvent from "./Components/Stationary/Pages/EinzelnesEvent";
import Versand from "./Components/Stationary/Pages/CheckOutProzess/Versand";
import Zahlungsmethode from "./Components/Stationary/Pages/CheckOutProzess/Zahlungsmethode";
import Uebersicht from "./Components/Stationary/Pages/CheckOutProzess/Uebersicht";
import Anmeldung from "./Components/Stationary/Pages/CheckOutProzess/Anmeldung";
import Registrieren from "./Components/Stationary/Pages/CheckOutProzess/Registrieren";
import GastAnmeldung from "./Components/Stationary/Pages/CheckOutProzess/GastAnmeldung";
import EinzelneKategorie from './Components/Stationary/Pages/EinzelneKategorie';
import Profil from './Components/Stationary/User/Profil';
import AccountPopUp from "./Components/Stationary/User/AccountPopUp";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    AuthService.attachUserObs(setCurrentUser);

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
      AuthService.removeUserObs(setCurrentUser);
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  console.log(currentUser);

  return (
    <div className='container'>
          <Routes>
              <Route path="/">
                  <Route index element={<Startseite currentUser={currentUser}/>}/>
                  <Route path="/startseite" element={<Startseite currentUser={currentUser}/>} />
                  <Route path="/startseite/events" element={<Event currentUser={currentUser}/>} />
                  <Route path="/startseite/spiele" element={<Spiele currentUser={currentUser}/>} />
                  <Route path="/startseite/veranstalter" element={<Veranstalter currentUser={currentUser}/>} />
                  <Route path="/startseite/laender" element={<Laender currentUser={currentUser}/>} />
                  <Route path="/startseite/account" element={<Profil currentUser={currentUser}/>} />
                  <Route path="/startseite/warenkorb" element={<Warenkorb currentUser={currentUser}/>} />
                  <Route path="/startseite/favoriten" element={<Favoriten currentUser={currentUser}/>} />
                  <Route path="/startseite/events/:eventID" element={<EinzelnesEvent currentUser={currentUser}/>} />
                  <Route path="/startseite/:art/:id" element={<EinzelneKategorie currentUser={currentUser}/>} />
                  <Route path="/versand" element={<Versand currentUser={currentUser}/>} />
                  <Route path="/zahlungsmethode" element={<Zahlungsmethode currentUser={currentUser}/>} />
                  <Route path="/bestelluebersicht" element={<Uebersicht currentUser={currentUser}/>} />
                  <Route path="/anmeldung/anmelden" element={<Anmeldung currentUser={currentUser}/>} />
                  <Route path="/anmeldung/registrieren" element={<Registrieren currentUser={currentUser}/>} />
                  <Route path="/anmeldung/gastanmeldung" element={<GastAnmeldung currentUser={currentUser}/>} />
                  <Route path="/popup" element={<AccountPopUp />} />
              </Route>
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;
