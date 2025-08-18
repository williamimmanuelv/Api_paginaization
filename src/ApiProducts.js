import React, { Fragment, useEffect, useRef, useState } from "react";
import axios from 'axios';
import './ApiHome.css';
import { useLocation , useNavigate } from "react-router-dom";
function ApiProducts(){
  const [state,setstate] = useState()
  const [filter,setfilter] = useState('');
  const [res,setres] = useState([]);

  const navigate = useNavigate()
  const loc = useLocation()
  useEffect(() => {
    axios('https://fakestoreapi.com/products')
    .then(response =>{
      console.log(response.data)
      setTimeout(() => {
        setstate(response.data)
      },3000)
    })
  },[])

  const handle = (event) => {
    const values = event.target.value.toLowerCase();
    setfilter(values);

    const result = state.filter(user => user.title.toLowerCase().includes(values))
    setres(result)
  }

  const ref = useRef()

  useEffect(() => {
    ref.current.focus()
  })



  return(
    <Fragment>
      <label> Api Products </label>

      <div className="main">
        
        <button onClick={() => navigate('/')}
          className={`click ${loc.pathname === '/' && 'clicked' }`}> Api Home </button>
        <button onClick={() => navigate('/ApiProducts')}
          className={`click ${loc.pathname === '/ApiProducts' && 'clicked' }`}> Api Products </button>
      </div>

      <div className="relative">
        <div>
          <input ref={ref} className="input" placeholder="Search produts..." type="text" value={filter} onChange={handle}/>
          {/* <FontAwesomeIcon icon={faSearch} className="sea" /> */}
        </div>

        {res.length < 12 && res.length > 0 && (
          <div className="overlay">
            {res.map((value, index) => (
              <div key={index} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <img src={value.image} alt="img"/>
                <p>{value.title}</p>
                <button  onClick={() => navigate(`/ApiProductsDetails/${value.id}`)} className="sbuttons">View Product</button>
              </div>
            ))}{filter}
          </div>
        )}
      </div>


        {state ? (
          <div className="divvalue">
            {state.map((value,index) => 
            <div key={index} className="values">
              <img src={value.image} alt={index+'image'} width={100}/>
              <p > {value.title} </p>
              <button onClick={() => navigate(`/ApiProductsDetails/${value.id}`)} target="_blank" rel="noopener noreferrer" className="sbuttons"> View Product </button>
            </div>)}
              {state.map((value,index) => 
                <div key={index} className="values">
                  <img src={value.image} alt={index+'image'} width={100}/>
                  <p > {value.title} </p>
                  <button onClick={() => navigate(`/ApiProductsDetails/${value.id}`)} target="_blank" rel="noopener noreferrer" className="sbuttons"> View Product </button>
                </div>)}
            </div>)
            : <div className="waiting">   
                <p className="wait"> Wait a couple of seconds</p>   
                <div class="spinner-border text-primary"    role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>  
              }


    </Fragment>
  )
}
export default ApiProducts