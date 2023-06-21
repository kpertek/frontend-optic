import React from "react";
import './Metanavi.css';

export default function Metanavi() {
    return (
        <div className="link-box">
            <div className="div-links-box">
                <div className="links-box" id="links-box-1">
                    <title className="link-box-title">INFO</title>
                    <a href="" className="link-text" id="link-1-1">Über uns</a>
                    <a href="" className="link-text" id="link-1-2">Blog</a>
                    <a href="" className="link-text" id="link-1-3">OPTIC GMbH</a>  
                </div>
                <div className="links-box" id="links-box-2">
                    <title className="link-box-title">KUNDENBETREUUNG</title>
                    <a href="" className="link-text" id="link-2-1">Kontaktieren Sie uns</a>
                    <a href="" className="link-text" id="link-2-2">Zahlung und Steuern</a>
                    <a href="" className="link-text" id="link-2-3">Bonuspunkte und Geschenke</a>
                </div>
            </div>

            <div id="meta-navi-box">
                <div id="first-3-links">
                    <a href="" className="metalink-text">IMPRESSUM</a>
                    <text className="strich">|</text>
                    <a href="" className="metalink-text">DATENSCHUTZ</a>
                    <text className="strich">|</text>
                    <a href="" className="metalink-text">COOKIE-RICHTLINIEN</a>
                    <text className="strich">|</text>
                </div>
                <a href="" className="metalink-text" id="last-link" >ALLGEMEINE GESCHÄFTSBEDINGUNGEN</a>
            </div>

            <text className="last-row-footer">©2020-2023 OPTIC Alle Rechte vorbehalten</text>
        </div>
    )
}