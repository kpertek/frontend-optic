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
    <>
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
                  <Route path="/startseite/events/einzelnesevent" element={<EinzelnesEvent/>}/>
              </Route>
          </Routes>
        <Footer/>
    </>
  );
}

export default App;
