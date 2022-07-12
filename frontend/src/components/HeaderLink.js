import React from "react";
import "../css/Header.css"
import { useNavigate } from "react-router-dom";

export function HeaderLink(props) {
    const navigate = useNavigate();
    return (
        <div className="DivHeaderLink" tabIndex={1} onClick={() => {navigate(props.link)}}>
            <p>{props.text}</p>
        </div>
    );
}
