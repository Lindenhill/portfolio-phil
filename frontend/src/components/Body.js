import React from "react";
import "../css/Body.css";
import { Home } from "./Home";

export function Body(props)
{
  return(
    <div className="DivBody">
      <div className="DivBodyContent">
        <div className="DivImgBody">
        </div>
        <div className="DivFloater">
          <Home />
        </div>
      </div>
    </div>
  );
}
