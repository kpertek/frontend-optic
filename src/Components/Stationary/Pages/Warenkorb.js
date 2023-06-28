import './Pages.css';
import ZurKasse from "../Kasse/ZurKasse";
import Headline from "../Navigation/Headline";
import NavIconGroup from "../Navigation/NavIconGroup";
import Navbar from "../Navigation/Navbar";
import Breadcrumbs from "../Navigation/Breadcrumbs";

export default function Warenkorb () {
    return (
        <>
            <NavIconGroup showBackground = {false}/>
            <Navbar />
            <Breadcrumbs />
            <Headline text="Warenkorb"/>
            <ZurKasse/>
        </>
    )
}