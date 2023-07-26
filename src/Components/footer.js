import React from "react";
import twitter from "../Twitter Icon.png";
import facebook from "../Facebook Icon.png";
import instagram from "../Instagram Icon.png";
import github from "../GitHub Icon.png";

export default function Footer() {
    return (
        <footer className="footer_section">
            <ul className="list_box">
                <li>
                    <img src={twitter} alt="icons"></img>
                </li>
                <li>
                    <img src={facebook} alt="icons"></img>
                </li>
                <li>
                    <img src={instagram} alt="icons"></img>
                </li>
                <li>
                    <img src={github} alt="icons"></img>
                </li>
                
            </ul>
        </footer>
    )
}