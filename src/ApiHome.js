import React, { Fragment } from "react";
import './ApiHome.css'
import { useLocation, useNavigate } from "react-router-dom";
function ApiHome(){
  const navigate = useNavigate()
  const loc = useLocation()
  return(
    <Fragment>
      <label> HOME </label>
      <div className="main">
        <button onClick={() => navigate('/')}
          className={`click ${loc.pathname === '/' && 'clicked' }`}> Api Home </button>

        <button onClick={() => navigate('/ApiProducts')}
          className={`click ${loc.pathname === '/ApiProducts' && 'clicked' }`}> Api Products </button>
      </div>

    </Fragment>
  )
}
export default ApiHome