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
    <div className="d-flex sec-header">
      <div className="container px-0" >
        <nav className="navbar navbar-expand-md navbar-light justify-content-between align-items-center  px-0 " >
          <a onClick={()=>{onNavigation('')}} className="navbar-brand col-auto pl-0">
            <h1 className='m-0'>headerlogo
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
          <a className="nav-link" onClick={()=>{onNavigation('')}}>  Home </a>
            <a className="nav-link" onClick={()=>{onNavigation('about-us')}}>  About Us </a>
            <a className="nav-link" onClick={()=>{onNavigation('services')}}>  Services </a>
            <a className="nav-link" onClick={()=>{onNavigation('contact-us')}}>  Contact Us </a>
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
