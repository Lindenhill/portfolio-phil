import React, {useState} from "react"
import "../css/Header.css"
import { HeaderLink } from "./HeaderLink";

export function Header(props)
{
    const [currentPath, setCurrentPath] = useState("/home");

    const onInPathChange = (event) => {
        setCurrentPath(event.target.value);
    };

    return(
        <div className="DivHeader">
            <div className="DivHeaderLeftHolder">
                <div className="DivPath">
                    <input className="InPath"
                        type="text" value={currentPath}
                        onChange={onInPathChange}>
                    </input>
                </div>
            </div>
            <div className="DivHeaderLinkHolder">
                <HeaderLink text="home"/>
                <HeaderLink text="blog"/>
                <HeaderLink text="projects"/>
                <HeaderLink text="about"/>
            </div>
        </div>
    );
}
