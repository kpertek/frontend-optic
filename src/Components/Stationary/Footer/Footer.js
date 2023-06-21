import React from "react";
import CallToAction from "./CallToAction";
import Metanavi from "./Metanavi";
import "./Footer.css";

export default function Footer() {
    return (
        <div id="footer">
            <Metanavi/>
            <CallToAction/>
        </div>
    )
}