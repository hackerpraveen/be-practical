import React from "react";
import { useHistory } from 'react-router-dom';
import "./header.css";

const Header = () => {
  const history = useHistory();
  const onNavigation = (url) =>{
    history.push(`/${url}`);
  }
  return (
  <div  >
    <div className="sec-header border-bottom border-dark">
      <div className="container">
        <div className="d-md-flex p-1 justify-content-between">
          <div style={{color:"#a7a7a7"}} className="row">
          <span className="mr-3 "><i className="fas fa-envelope mr-1"/>  info@be-practical.com</span>
           <span className="mr-3 "><i className="fas fa-phone mr-1"/> +91-9242079119</span>
           <span className="mr-3 "><i className="fas fa-location-dot mr-1"/> Bengaluru</span>


          </div>
          <div style={{color:"#a7a7a7"}}>
          <i className="fab fa-square-facebook mr-2"/> <i className="fab fa-square-twitter mr-2"/> <i className="fab fa-square-instagram mr-1"/> 
          </div>
        </div>

      </div>
    </div>
   
    <div className="d-flex sec-header text-white">
      <div className="container px-0" >
        <nav className="navbar navbar-expand-md navbar-dark justify-content-between align-items-center  px-0 " >
          <a onClick={()=>{onNavigation('home')}} className="navbar-brand col-auto pl-0">
            <h1 className='m-0 text-white'><img src={require('../../../img/logo_icon.png')} className="mr-2 mb-2"/> Be Practical
              {/* <img className="logo"  src="./assets/images/sss-logo.png"/> */}
            </h1>
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
         <div className=" pr-0" >
          <div className="collapse navbar-collapse menu " id="navbarCollapse">
          <a className="nav-link" onClick={()=>{onNavigation('home')}}>  Home </a>
            <a className="nav-link" >  About Us </a>
            <a className="nav-link" >  Services </a>
            <a className="nav-link">  Contact Us </a>
            <a  className="nav-link rounded-pill btn bg-color-1st btn-lg text-white font-weight-bold fs-16 border-0 px-4 py-3" onClick={()=>{onNavigation('members-login')}}> Book appointment</a>

          </div>

         </div>

        </nav>
        {/* <div className='col-12 gradient-color-1st pb-1'/> */}
      </div>
    </div>
  </div>
  );
};

export default Header;
