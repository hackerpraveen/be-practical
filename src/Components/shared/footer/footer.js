import React from 'react';
// import FooterLogoSvg from '../../pages/sections/svg/footerLogoSvg';
// import LinkedinIconSvg from '../../pages/sections/svg/linkedinIconSvg';
// import TwitterIconSvg from '../../pages/sections/svg/twitterIconSvg';
import './footer.css';

function Footer(props) {
    return (
      <div className='sec-footer ' >
        <div className='container'>
       <div className='m-md-5 m-3 '>
       <div class="row">
                <div class="col-lg-4 col-md-4 col-xs-12">
                    <div class="widget clearfix">
                        <div class="widget-title text-center w-md-75" style={{backgroundColor:'#fff',borderRadius:'50px',padding:'10px'}}>
                            <img width="130"  height="auto" class="mr-3" src={require('../../../img/logo_name.png')} alt=""/>
                        </div>
                        <p> <b>Be practical Academia</b> offers training in diverse domains to graduates, Be practical Academia offers training in diverse domains to graduates, during graduation phase. These certificate courses enable students to boost their career prospects and find placement in IT industries.  After the completion of these certificate courses across many sunrise segments such as Digital and Business Analytics, the learners will future-proof themselves and remain relevant for the rapidly evolving technology marketplace.  </p>   
						<div class="footer-right">
						</div>						
                    </div>
                </div>

				<div class="col-lg-4 col-md-4 col-xs-12 ">
                    <div class="widget clearfix text-md-center">
                        <div class="widget-title">
                            <h3>Information Link</h3>
                        </div>
                        <ul class="footer-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="about.html">About Us</a></li>
							{/* <li><a href="#">Corporate Training</a></li> */}
                            <li><a href="services.html">HR Services</a></li>

                        </ul>
                    </div>
                </div>
				
                <div class="col-lg-4 col-md-4 col-xs-12 ">
                    <div class="widget clearfix text-md-right">
                        <div class="widget-title">
                            <h3>Contact Details</h3>
                        </div>

                        <ul class="footer-links">
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
      </div>
      
    )
}

export default Footer

