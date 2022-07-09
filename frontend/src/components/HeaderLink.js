import React from "react";
import "../css/Header.css"

export function HeaderLink(props) {

    return (
        <div className="DivHeaderLink" tabIndex={1} onClick={() => {console.log("Header click")}}>
            <a link={props.link}>{props.text}</a>
        </div>
    );
}
