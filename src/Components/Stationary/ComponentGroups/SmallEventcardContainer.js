import "./SmallEventcardContainer.css"

import SmallEventcard from "../Eventcards/SmallEventcard"
import Headline from "../Navigation/Headline";

export const SmallEventcardContainer = (props) =>
{
    let kategorien = props.kategorien;
    //Make sure only the given amount of events are shown
    if(props.maxKategorien > 0) kategorien = props.kategorien.slice(0, props.maxKategorien);
    
    return (
        <div className="kategoriegruppe">
            <Headline text={props.headline}/>
            <div className="kategoriecards">
                {/* {kategorien.map((kategorie, i) => <SmallEventcard key={i} kategorie={kategorie}/>)} */}
                <SmallEventcard />
                <SmallEventcard />
                <SmallEventcard />
                <SmallEventcard />
                <SmallEventcard />
            </div>
        </div>
    )
}

SmallEventcardContainer.defaultProps = {
    maxKategorien: 0,
    kategorien: [],
}