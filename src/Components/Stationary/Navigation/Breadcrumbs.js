import {Link, useLocation} from "react-router-dom";
import './Breadcrumbs.css'

export default function Breadcrumbs(props) {
    const location = useLocation()

    let currentLink = ''

    const crumbStrings = location.pathname.split('/')
        .filter(crumb => crumb !== '');

    if (crumbStrings.length > 0 && props.sitename !== null && props.sitename !== undefined)
    {
        crumbStrings[crumbStrings.length-1] = props.sitename;
    }
        
    const crumbs = crumbStrings.map(crumb => {
        currentLink += `/${crumb}`

        return (
            <div className="crumb" key={crumb}>
                <Link to={currentLink}>{crumb}</Link>
            </div>
        )
    })

    if (crumbs.length <= 1)
    {
        return (
            <div className="breadcrumbs"></div>
        )
    }
    else{
        return (
            <div className="breadcrumbs">
                {crumbs}
            </div>
        )
    }
}