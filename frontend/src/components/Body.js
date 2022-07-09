import React from "react";
import "../css/Body.css";
import { AboutCard } from "./AboutCard";

export function Body(props)
{
  return(
    <div className="DivBody">
      <div className="DivImgBody">
        <img className="ImgBody"
          src={require("../images/taiki-ishikawa-daQvZ_XZTbo-unsplash.jpg")}></img>
      </div>
      <div className="DivFloater">
        <AboutCard/>
      </div>
    </div>
  );
}
