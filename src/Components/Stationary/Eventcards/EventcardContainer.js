import "./EventcardContainer.css"

import Eventcard from "./Eventcard"
import Headline from "../Navigation/Headline";

export const EventcardContainer = (props) =>
{
    let events = props.events;
    //Make sure only the given amount of events are shown
    if(props.maxEvents > 0) events = props.events.slice(0, props.maxEvents);
    
    return (
        <div className="eventgruppe">
            <Headline text={props.headline}/>
            <div className="eventcards">
                {events.map((event, i) => <Eventcard key={i} event={event}/>)}
            </div>
        </div>
    )
}

EventcardContainer.defaultProps = {
    maxEvents: 0,
    events: [],
}