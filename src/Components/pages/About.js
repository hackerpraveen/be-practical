import React from 'react';
import './pages.css';

const About = () => {
    return (
        <>
             <div className='banner'>
            <div style={{backgroundImage:`url(${require('../../img/about-us.jpg')})`,height:'300px'}} className='bgImg '>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center' style={{ backgroundColor: 'rgba(52, 73, 94, 0.75)'}}>
    <div className='text-center '>
    <h1 className='text-white'> About Us</h1>
    {/* <h5 className='text-white text-bold'><span className='theme-color-1'>Home </span> -  About Us</h5> */}
        </div>

  </div>
</div>
            </div>
            <div >
              <div style={{backgroundColor:'#f6f6f6'}} className='pt-md-2 pb-md-2 pt-1 pb-1'>
                <div className='container' >
                <div className="row align-items-start m-md-5 mt-4 mb-4 flex-md-row-reverse ">
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="post-media wow fadeIn">
                        <img src={require('../../img/about-01.jpg')} alt="" className="img-fluid img-rounded w-100"/>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                    <div className="message-box mt-md-0 mt-4">
                        <h4 className='theme-color-1'style={{fontSize:'20px'}} >ABOUT US</h4>
                        {/* <h1 style={{fontSize:'50px',fontWeight:700}}>Best Quality Recruitment Staffing Agency</h1> */}
                        <p style={{fontSize:'18px'}} className="detail-text-color"><b >Be practical</b>  an ISO certified and an emerging software firm in Bengaluru, with expertise in hiring and corporate training
for our esteemed clients since 2012. We develop products with efficiency and intelligence and 
committed in continuous enhancement of our intellect and expertise, thus accomplishing our success through the
pursuit of elevated performance and quality. We believe that our job is to deeply understand the requirement, 
research and then develop the product which is unique to each business. In fact, it is the longterm relationships 
with our clients that has served us as a solid foundation for our company. 
                            &nbsp;&nbsp;</p>
                            <span className='theme-color-1'style={{fontSize:'18px'}} >WHAT MAKES US DIFFERENT</span>
                            <ul className="list clearfix pr-md-3" style={{color:'#757575'}}>
              <li><b>We’re Add Value</b> </li>
              <p className='pl-4'>We don’t just mean commercially, although we will always strive to deliver 
solutions that are costeffective We also mean the values we bring to your business communications.<br/>
<b>solutions:</b> our trustworthiness, our knowledge and our reliability at all times. 

 </p>
 <li><b>Efficient Process</b> </li>
              <p className='pl-4'>We follow a very systematic approach where we understand our client’s requirements thoroughly before we start our search. This enables us to source the right candidates for them at minimal costs.
 </p>
 <li><b>Qualified and Diverse Team</b> </li>
              <p className='pl-4'>We have a team of qualified, experienced & friendly industry experts with senior consultants 
from diverse fields. They invest their rich industry experience and knowledge to source the best 
candidates for our clients.
 </p> 
 <li><b>Speed</b> </li>
              <p className='pl-4'>Our Promptness is directly proportional to our client’s growth, 
by finding the right service at the right time.
 </p> 
 </ul>
                           
                    </div>
                </div>
              
				
				
			</div>

                </div>

              </div>
            
            </div>
            
        </>
    );
}

export default About;
