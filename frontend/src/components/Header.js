import React, {useState} from "react"
import "../css/Header.css"
import { HeaderLink } from "./HeaderLink";
import { useNavigate } from "react-router-dom";

export function Header(props)
{
    const [currentPath, setCurrentPath] = useState("/home");
    const navigate = useNavigate();

    const onInPathChange = (event) => {
        setCurrentPath(event.target.value);
    };

    const onInPathSubmit = (event) => {
        event.preventDefault();
        navigate(currentPath);
    }

    return(
        <div className="DivHeader">
            <div className="DivHeaderInner">
                <div className="DivHeaderLeftHolder">
                    <div className="DivPath">
                        <p className="PPath">pruf70</p>
                        <form onSubmit={onInPathSubmit}>
                            <input className="InPath"
                                type="text" value={currentPath}
                                onChange={onInPathChange}
                                onSubmit={onInPathSubmit}>
                            </input>
                        </form>
                    </div>
                </div>
                <div className="DivHeaderLinkHolder">
                    <HeaderLink text="home" link="/home" />
                    <HeaderLink text="blog" link="/blog" />
                    <HeaderLink text="projects" link="/projects" />
                    <HeaderLink text="about" link="/about" />
                </div>
            </div>
        </div>
    );
}
