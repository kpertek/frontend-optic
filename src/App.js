import './App.css';
import Navbar from "./Components/Stationary/Navigation/Navbar";
import {Route, Routes} from "react-router-dom"
import Event from "./Components/Stationary/Pages/Event";
import Spiele from "./Components/Stationary/Pages/Spiele";
import Veranstalter from "./Components/Stationary/Pages/Veranstalter";
import Laender from "./Components/Stationary/Pages/Länder";
import Breadcrumbs from "./Components/Stationary/Navigation/Breadcrumbs";

function App() {
  return (
    <>
        <Navbar />
        <Breadcrumbs />
        <div className="container">
            <Routes> {/*Route für Startseite fehlt noch*/}
                <Route path="startseite/events" element={<Event />} />
                <Route path="startseite/spiele" element={<Spiele />} />
                <Route path="startseite/veranstalter" element={<Veranstalter />} />
                <Route path="startseite/laender" element={<Laender />} />
            </Routes>
        </div>
    </>
  );
}

export default App;
