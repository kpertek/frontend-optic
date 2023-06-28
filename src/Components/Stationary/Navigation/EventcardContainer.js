import "./EventcardContainer.css"

import Eventcard from "../Eventcards/Eventcard"
import Headline from "./Headline";

export const EventcardContainer = (props) =>
{
    //Make sure only the given amount of events are shown
    if(props.maxEvents > 0) props.events = props.events.slice(0, props.maxEvents);
    
    return (
        <div className="eventgruppe">
            <Headline text={props.headline}/>
            <div className="eventcards">
                {props.events.map((event, i) => <Eventcard key={i} event={event}/>)}
            </div>
        </div>
    )
}

EventcardContainer.defaultProps = {
    maxEvents: 0,
    events: [],
}