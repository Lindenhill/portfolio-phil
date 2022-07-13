import React from "react";
import "../css/Body.css";
import {
  Outlet,
  Link,
} from "react-router-dom";

export function Body(props)
{
  return(
    <div className="DivBody">
      <div className="DivBodyContent">
        <div className="DivImgBody">
        </div>
        <div className="DivFloater">
          <Outlet />
        </div>
      </div>
      <div className="DivBodyGlow">
      </div>
    </div>
  );
}
