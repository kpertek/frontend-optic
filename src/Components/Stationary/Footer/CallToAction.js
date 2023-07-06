import React from "react";
import './CallToAction.css';

export default function CallToAction() {
    return (
        <div id="action-box">
            <title className="Normal-text-action-box" id="action-title">Erlebe mit uns großartigen E-Sports</title>
            <p className="Normal-text-action-box" id="action-box-text1">
                Wir verbringen unsere Zeit damit, E-Sport-Events zu finden und zu recherchieren, dadurch können Sie sie genießen. Verwenden Sie OPTIC, um die besten Veranstaltungen, Tickets, Preise und Anbieter zu finden. 
            </p>
            <button className="Button" id="action-box-button1" type="button">BENUTZERKONTO ERSTELLEN</button>
            <p className="Normal-text-action-box" id="action-box-text2">
                Abonnieren Sie unseren Newsletter, um die neusten E-Sport-Turniere und News über Ticketkauf direkt in Ihren Post-eingang zu erhalten:
            </p>
            <div id="divin">
                <form className="form" action="" method="">
                    <input className="input" type="text" placeholder="  E-Mail-Adresse"></input>
                </form>
                <button className="Button" id="action-box-button2" type="button">ABONNIEREN</button>
            </div>
        </div>
    )
}