import React from 'react';
// import FooterLogoSvg from '../../pages/sections/svg/footerLogoSvg';
// import LinkedinIconSvg from '../../pages/sections/svg/linkedinIconSvg';
// import TwitterIconSvg from '../../pages/sections/svg/twitterIconSvg';
import './footer.css';
import { useHistory } from 'react-router-dom';


function Footer(props) {
    const history = useHistory();
    const onNavigation = (url) =>{
      history.push(`/${url}`);
    }
    return (
      <div className='sec-footer bgImg' style={{backgroundImage:`url(${require('../../../img/footer.png')})`}}  >

        <div className='container'>
       <div className='m-md-5 m-3 '>
       <div className="row">
                <div className="col-lg-4 col-md-4 col-xs-12">
                    <div className='title'>
                        PHONE
                    </div>
                    <div className='line'/>
                    <h2 className='content'>
                    +91-9242079119
                    </h2>
                    <div className='title'>
                    EMAIL
                    </div>
                    <div className='line'/>
                    <h2 className='content'>
                    info@be-practical.com
                    </h2>
                    <div className='title'>
                    ADDRESS
                    </div>
                    <div className='line'/>
                    <h2 className='content'>
                    #737C 1st Floor 1st Cross, 3rd Stage, 4th Block Basaveshwara Nagar Bengaluru-560079

                    </h2>

                </div>

				<div className="col-lg-4 col-md-4 col-xs-12 pl-md-5">
                <div className='title'>
                QUICKLINKS

                    </div>
                    <div className='line'/>
                    <div className='content-link' onClick={()=>{onNavigation('home')}}>
                    Home
                    </div>
                    <div className='content-link' onClick={()=>{onNavigation('Permanent-Staffing')}}>
                    Permanent Staffing
                    </div>
                    <div className='content-link' onClick={()=>{onNavigation('Temporary-Contract-Staffing')}}>
                    Temporary / Contract Staffing
                    </div>
                    <div className='content-link' onClick={()=>{onNavigation('Train-Deploy')}}>
                    Train & Deploy
                    </div>
                    <div className='content-link' onClick={()=>{onNavigation('Corporate-Training-and-Induction-Program')}}>
                    Corporate Training and Induction Program
                    </div>
                    <div className='content-link' onClick={()=>{onNavigation('About-Us')}}>
                    About Us
                    </div>
                    <div className='content-link' onClick={()=>{onNavigation('Contact-Us')}}>
                    Contact Us
                    </div>


                </div>
				
                <div className="col-lg-3 col-md-3 col-xs-12 ">
                   
                </div>
				
            </div>
        <div className='d-md-flex justify-content-between mt-5'>
        <div className='footer-cr'>	All rights reserved. © Be Practical 2022						</div>
        <div className='footer-cr' style={{fontSize:'18px'}}>
          <i className="fab fa-square-facebook mr-2"/> <i className="fab fa-square-twitter mr-2"/> <i className="fas fa-envelope mr-2"/> 
          </div>
        </div>
       </div>
      </div>
      {/* <div className="text-center p-2" style={{backgroundColor: '#272727',color: '#fff',borderTop:'1px solid #fff'}}>
      © Copyrights 2022 | Designed by Be Practical Tech Solutions
      </div> */}
      </div>
      
    )
}

export default Footer

