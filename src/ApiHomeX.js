import React, { Fragment } from "react";
import './ApiHome.css';
import { useLocation, useNavigate } from "react-router-dom";
function ApiHomeX(){
  const navigate = useNavigate();
  const loc = useLocation();
  return(
    <Fragment>
      <p className="oops"> Ooops! something went wrong </p>

      <div className="main">
        <button onClick={() => navigate('/')}
          className={`click ${loc.pathname === '/' && 'clicked' }`}> Api Home </button>
      </div>

    </Fragment>
  )
}
export default ApiHomeX