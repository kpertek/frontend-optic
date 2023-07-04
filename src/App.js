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

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
  };

  return (
    <div className='container'>
          <Routes>
              <Route path="/">
                  <Route index element={<Startseite/>}/>
                  <Route path="/startseite" element={<Startseite/>} />
                  <Route path="/startseite/events" element={<Event/>} />
                  <Route path="/startseite/spiele" element={<Spiele/>} />
                  <Route path="/startseite/veranstalter" element={<Veranstalter/>} />
                  <Route path="/startseite/laender" element={<Laender/>} />
                  <Route path="/startseite/warenkorb" element={<Warenkorb/>} />
                  <Route path="/startseite/favoriten" element={<Favoriten/>} />
                  <Route path="/startseite/events/:eventID" element={<EinzelnesEvent/>} />
                  <Route path="/versand" element={<Versand/>} />
                  <Route path="/zahlungsmethode" element={<Zahlungsmethode/>} />
                  <Route path="/bestelluebersicht" element={<Uebersicht/>} />
                  <Route path="/anmeldung/anmelden" element={<Anmeldung />} />
                  <Route path="/anmeldung/registrieren" element={<Registrieren />} />
                  <Route path="/anmeldung/gastanmeldung" element={<GastAnmeldung />} />
              </Route>
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;
