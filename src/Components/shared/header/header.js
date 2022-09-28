import { Dropdown, Menu, Space } from "antd";
import React from "react";
import { useHistory } from 'react-router-dom';
import "./header.css";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';


const Header = () => {
  const history = useHistory();
  const onNavigation = (url) =>{
    history.push(`/${url}`);
  }
  const menu = (
    <Menu
      items={[
        {
          key: '1',
          label: (
            <a onClick={()=>{onNavigation('Permanent-Staffing')}} >
              Permanent Staffing 
            </a>
          ),
          icon: <i className="fas fa-people-group"/>,
        },
        {
          key: '2',
          label: (
            <a onClick={()=>{onNavigation('Temporary-Contract-Staffing')}} >
              Temporary / Contract Staffing
            </a>
          ),
          icon: <i className="fas fa-users-between-lines"/>,
        },
        {
          key: '3',
          label: (
            <a onClick={()=>{onNavigation('Train-Deploy')}}>
              Train & Deploy
            </a>
          ),
          icon: <i className="fas fa-person-walking-luggage"/>,
        },
        {
          key: '4',
          label: (
            <a onClick={()=>{onNavigation('Corporate-Training-and-Induction-Program')}} className={window.location.pathname=='/Corporate-Training-and-Induction-Program'?'theme-color-1':''} >
              Corporate Training and Induction Program
            </a>
          ),
          icon: <i  className={window.location.pathname=='/Corporate-Training-and-Induction-Program'?'theme-color-1 fas fa-person-chalkboard':'fas fa-person-chalkboard'} />,
        },
      ]}
    />
  );
  return (
  <div  >
    <div className="sec-header " style={{ borderBottom: "1px solid #25078a"}}>
      <div className="container">
        <div className="d-md-flex p-1 justify-content-between">
          <div style={{color:"#272727"}} className="row">
          <span className="mr-3 "><i className="fas fa-envelope mr-1 theme-color-1"/>  info@be-practical.com</span>
           <span className="mr-3 "><i className="fas fa-phone mr-1 theme-color-1"/> +91-9242079119</span>
           <span className="mr-3 "><i className="fas fa-location-dot mr-1 theme-color-1"/> Bengaluru</span>


          </div>
          <div style={{color:"#272727"}}>
          <i className="fab fa-square-facebook mr-3"/> <i className="fab fa-square-twitter mr-3"/> <i className="fab fa-square-instagram mr-1"/> 
          </div>
        </div>

      </div>
    </div>
   
    <div className="d-flex sec-header text-white">
      <div className="container px-0" >
        <nav className="navbar navbar-expand-md navbar-light justify-content-between align-items-center  px-0 " >
          <a onClick={()=>{onNavigation('home')}} className="navbar-brand col-auto pl-0">
          
            <img src={require('../../../img/be-logo.png')} className="" width='auto' height='49px'/> 
              {/* <img className="logo"  src="./assets/images/sss-logo.png"/> */}
            
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
          <a className={(window.location.pathname=='/home'||window.location.pathname=='/')?"theme-color-1 nav-link" : "nav-link"}  onClick={()=>{onNavigation('home')}}>  Home </a>
            <a className={(window.location.pathname=='/About-Us')?"theme-color-1 nav-link" : "nav-link"} onClick={()=>{onNavigation('About-Us')}} >  About Us </a>
        
            <Dropdown overlay={menu}>
              <a className={(window.location.pathname=='/Corporate-Training-and-Induction-Program'||
              window.location.pathname=='/Permanent-Staffing'||
              window.location.pathname=='/Temporary-Contract-Staffing'||
              window.location.pathname=='/Train-Deploy')?"theme-color-1 nav-link" : "nav-link"} onClick={e => e.preventDefault()}>
                    <Space>
                    Services
                    </Space>
                  </a>
                </Dropdown>
  {/* <a className="nav-link" >  Services </a> */}

            <a  className={(window.location.pathname=='/Contact-Us')?"theme-color-1 nav-link" : "nav-link"} onClick={()=>{onNavigation('Contact-Us')}}>  Contact Us </a>
            {/* <a  className="nav-link rounded-pill btn theme-bgcolor-1 btn-lg text-white font-weight-bold fs-16 border-0 px-4 py-3" onClick={()=>{onNavigation('members-login')}}> Book appointment</a> */}

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
