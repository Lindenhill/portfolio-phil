import React from "react"
import "../css/Header.css"
import { HeaderLink } from "./HeaderLink";

export function Header(props)
{
    return(
        <div className="DivHeader">
            <div className="DivHeaderLinkHolder">
                <HeaderLink text="Home"/>
                <HeaderLink text="Blog"/>
                <HeaderLink text="Projects"/>
            </div>
            <div className="DivHeaderSpace">
            </div>
        </div>
    );
}
