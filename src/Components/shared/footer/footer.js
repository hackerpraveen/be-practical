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
      <div className='sec-footer ' >
        <div className='container'>
       <div className='m-md-5 m-3 '>
       <div className="row">
                <div className="col-lg-4 col-md-4 col-xs-12">
                    <div className="widget clearfix">
                        <div className="widget-title text-center w-md-75" style={{backgroundColor:'#fff',borderRadius:'50px',padding:'10px'}}>
                            <img width="130"  height="auto" className="mr-3" src={require('../../../img/be-logo.png')} alt=""/>
                        </div>
                        <p> <b>Be practical Academia</b> offers training in diverse domains to graduates, Be practical Academia offers training in diverse domains to graduates, during graduation phase. These certificate courses enable students to boost their career prospects and find placement in IT industries.  After the completion of these certificate courses across many sunrise segments such as Digital and Business Analytics, the learners will future-proof themselves and remain relevant for the rapidly evolving technology marketplace.  </p>   
						<div className="footer-right">
						</div>						
                    </div>
                </div>

				<div className="col-lg-4 col-md-4 col-xs-12 ">
                    <div className="widget clearfix text-md-center">
                        <div className="widget-title">
                            <h3>Information Link</h3>
                        </div>
                        <ul className="footer-links">
                            <li><a  onClick={()=>{onNavigation('home')}}>Home</a></li>
                            <li> <a onClick={()=>{onNavigation('Permanent-Staffing')}} >
              Permanent Staffing 
            </a></li>
                            <li> <a onClick={()=>{onNavigation('Temporary-Contract-Staffing')}} >
              Temporary / Contract Staffing
        </a></li>
                            <li> <a onClick={()=>{onNavigation('Train-Deploy')}}>
              Train & Deploy
        </a></li>
                            <li><a onClick={()=>{onNavigation('Corporate-Training-and-Induction-Program')}} className={window.location.pathname=='/Corporate-Training-and-Induction-Program'?'theme-color-1':''} >
              Corporate Training and Induction Program
            </a></li>
                            <li><a onClick={()=>{onNavigation('About-Us')}}>About Us</a></li>
                            <li><a onClick={()=>{onNavigation('Contact-Us')}}>Contact Us</a></li>

                        </ul>
                    </div>
                </div>
				
                <div className="col-lg-4 col-md-4 col-xs-12 ">
                    <div className="widget clearfix text-md-right">
                        <div className="widget-title">
                            <h3>Contact Details</h3>
                        </div>

                        <ul className="footer-links">
                            <li><a href="mailto:#">info@be-practical.com</a></li>
                            {/* <li><a href="#">www.yoursite.com</a></li>  */}
                            <li>#737C 1st Floor 1st Cross, 3rd Stage, 4th Block</li>
                            <li>Basaveshwara Nagar</li>
                            <li>Bengaluru-560079</li>
                            <li>+91-9242079119</li>
                        </ul>
                    </div>
                </div>
				
            </div>

       </div>
      </div>
      <div className="text-center p-2" style={{backgroundColor: '#272727',color: '#fff',borderTop:'1px solid #fff'}}>
      © Copyrights 2022 | Designed by Be Practical Tech Solutions
      </div>
      </div>
      
    )
}

export default Footer

