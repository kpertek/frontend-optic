import React from "react";
import "./TicketCount.css";

export default function TicketCount(props) {
    return (
        <div class="ticket-count">
            <button class={"ticket-count__button_minus " + 'ausgeblendet'} onClick={props.decrement} disabled={props.count==1}>-</button>
            <input class="ticket-count__input" type="text" value={props.count} />
            <button class="ticket-count__button_plus" onClick={props.increment}>+</button>
        </div>     
    );
}