import './App.css';
import Navbar from "./Components/Stationary/Navigation/Navbar";
import {Route, Routes} from "react-router-dom"
import Event from "./Components/Stationary/Pages/Event";
import Spiele from "./Components/Stationary/Pages/Spiele";
import Veranstalter from "./Components/Stationary/Pages/Veranstalter";
import Laender from "./Components/Stationary/Pages/Länder";
import Breadcrumbs from "./Components/Stationary/Navigation/Breadcrumbs";
import Headline from "./Components/Stationary/Navigation/Headline";
import NavIconGroup from './Components/Stationary/Navigation/NavIconGroup';
import Footer from './Components/Stationary/Footer/Footer';

function App() {
  return (
    <>
        <Navbar />
        <Breadcrumbs />
        <Headline />
        <NavIconGroup />
        <div className="container">
            <Routes> {/*Route für Startseite fehlt noch*/}
                <Route path="startseite/events" element={<Event />} />
                <Route path="startseite/spiele" element={<Spiele />} />
                <Route path="startseite/veranstalter" element={<Veranstalter />} />
                <Route path="startseite/laender" element={<Laender />} />
            </Routes>
        </div>

        <Footer/>
    </>
  );
}

export default App;
