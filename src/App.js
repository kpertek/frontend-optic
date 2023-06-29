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

const API_URL = "http://localhost/api/";

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
        <div className="routen">
            <Routes>
                <Route path="/">
                    <Route index element={<Startseite apiURL={API_URL}/>}/>
                    <Route path="/startseite" element={<Startseite apiURL={API_URL}/>} />
                    <Route path="/startseite/events" element={<Event apiURL={API_URL}/>} />
                    <Route path="/startseite/spiele" element={<Spiele apiURL={API_URL}/>} />
                    <Route path="/startseite/veranstalter" element={<Veranstalter apiURL={API_URL}/>} />
                    <Route path="/startseite/laender" element={<Laender apiURL={API_URL}/>} />
                    <Route path="/startseite/warenkorb" element={<Warenkorb apiURL={API_URL}/>} />
                    <Route path="/startseite/favoriten" element={<Favoriten apiURL={API_URL}/>} />
                </Route>
            </Routes>
        </div>


        <Footer/>
    </>
  );
}

export default App;
