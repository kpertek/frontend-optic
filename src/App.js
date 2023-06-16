import './App.css';
import Headline from './Components/Stationary/Navigation/Headline';
import Navbar from "./Components/Stationary/Navigation/Navbar";
import {Route, Routes} from "react-router-dom"
import Event from "./Components/Stationary/Pages/Event";
import Spiele from "./Components/Stationary/Pages/Spiele";
import Veranstalter from "./Components/Stationary/Pages/Veranstalter";
import Laender from "./Components/Stationary/Pages/Länder";

function App() {
  return (
    <>
        <Headline />
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/events" element={<Event />} />
                <Route path="/spiele" element={<Spiele />} />
                <Route path="/veranstalter" element={<Veranstalter />} />
                <Route path="/laender" element={<Laender />} />
            </Routes>
        </div>
    </>
  );
}

export default App;
