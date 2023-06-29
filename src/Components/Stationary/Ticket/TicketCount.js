import React from "react";
import "./TicketCount.css";

export default function TicketCount() {
    const [count, setCount] = React.useState(1);
    function increment() {
        setCount(count + 1);
    }
    function decrement() {
        setCount(count - 1);
    }
    return (
        <div class="ticket-count">
            <button class={"ticket-count__button_minus " + 'ausgeblendet'} onClick={decrement} disabled={count==1}>-</button>
            <input class="ticket-count__input" type="text" value={count} />
            <button class="ticket-count__button_plus" onClick={increment}>+</button>
        </div>     
    );
}