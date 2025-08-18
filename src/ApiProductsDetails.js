import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import './ApiHome.css'
import { useLocation, useNavigate, useParams } from "react-router-dom";
function ApiProductsDetails(){
  const {id} = useParams() 
  const [state,setstate] = useState(null)
  const navigate = useNavigate()
  const loc = useLocation()
  useEffect(() => {
    axios(`https://fakestoreapi.com/products/${id}`)
    .then(response =>{
      console.log(response.data)
      setTimeout(() => {
        setstate(response.data)
      },1000)
    })
  },[id])

  const AddToCarts = () => {

    axios.post('https://fakestoreapi.com/carts',{
      userId: 9,
      date: '',

    })
    .then(response =>{
      console.log(response.data)
      })
      return axios.get('https://fakestoreapi.com/carts')

  }
  return(
    <Fragment>
      <label> Api Products Details</label>

      <div className="main">
        <button onClick={() => navigate('/ApiProducts')}
          className={`click ${loc.pathname === '/ApiProducts' && 'clicked' }`}> Api Products 
        </button>
      </div>

      {state ? 
        <div className="Dvalues" >
          <p > {state.title} </p> 
          <div>
            <p className="des"> {state.description}</p>
            <img src={state.image} width={100} alt="img"/>
            <div>
              <p> {state.category} </p>
              <p> {state.price} </p>
              <p> {state.rating.count} </p>
              <p> {state.rating.rate} </p>
            </div>
          </div>

          <button className="Dsbuttons" onClick={() => AddToCarts()}> Add to carts </button>
        </div> 
      : <div className="waiting">   
          <p className="wait"> Wait a couple of seconds</p>   
          <div class="spinner-border text-primary"    role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div> }


    </Fragment>
  )
}
export default ApiProductsDetails