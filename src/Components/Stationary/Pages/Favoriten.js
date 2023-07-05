import './Pages.css';
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";
import Headline from "../Navigation/Headline";

export default function Favoriten() {
    return (
        <>
            <NavIconGroup showBackground = {false}/>
            <Navbar />
            <Breadcrumbs />
            <div className="content">
                <div className="singlePageInnerContainer">
                    <Headline text="Deine Favoriten" />
                </div>
            </div>
        </>
    )
}