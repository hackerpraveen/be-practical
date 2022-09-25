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
    <h5 className='text-white text-bold'><span className='theme-color-1'>Home </span> -  About Us</h5>
        </div>

  </div>
</div>
            </div>
            <div >
            <div style={{backgroundColor:'#fff'}} className='pt-md-2 pb-md-2 pt-1 pb-1'>
    <div className='container'>
    <div className="row align-items-center m-md-5 mt-4 mb-4 ">
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="post-media wow fadeIn">
                        <img src="https://recvite.smartdemowp.com/wp-content/uploads/about-1-1.jpg" alt="" className="img-fluid img-rounded w-100"/>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="message-box mt-md-0 mt-4">
                        <h4 className='theme-color-1'style={{fontSize:'20px'}} >Welcome to Agency</h4>
                        <h1 style={{fontSize:'50px',fontWeight:700}}>Best Quality Recruitment Staffing Agency</h1>
                        <p style={{fontSize:'18px'}} className="detail-text-color"><b className='theme-color-1'>Be practical Academia</b> offers training in diverse domains to graduates, Be practical Academia offers training in diverse domains to graduates, during graduation phase. These certificate courses enable students to boost their career prospects and find placement in IT industries.  After the completion of these certificate courses across many sunrise segments such as Digital and Business Analytics, the learners will future-proof themselves and remain relevant for the rapidly evolving technology marketplace. 
                            &nbsp;&nbsp;</p>
                            <div className='row'>
                              <div className='col-md-6 col-12'>
                                <div className='p-2 green-line-h2'>
                                  <h5><span>01</span>Strategic Partners</h5>
                                  <p className='detail-text-color'>Lorem ipsum dolor sited is amet consectetur notted.</p>
                                </div>

                              </div>
                              <div className='col-md-6 col-12'>
                              <div className='p-2 green-line-h2'>
                                  <h5><span>02</span>Strategic Partners</h5>
                                  <p className='detail-text-color'>Lorem ipsum dolor sited is amet consectetur notted.</p>
                                </div>
                              </div>
                              
                            </div>
                            <hr/>
                            <div className='row'>
                              <div className='col-md-6 col-12'>
                                <div className='d-flex p-2'>
                                  <div className=''>
                                    <div className='author-thumb'>
                                          <img src="https://recvite.smartdemowp.com/wp-content/uploads/author-1.png" width='100%' height='100%'/>
                                    </div>
                                  </div>
                                  <div className='m-3'>
                                    <h5 className='theme-color-1'>NAME</h5>
                                    <span style={{fontSize: "16px"}} className='detail-text-color'>CEO & CO FOUNDER</span>
                                  </div>

                                </div>

                              </div>
                              <div className='col-md-6 col-12'>
                                <div className='p-2'>
                                  <div className='experienct-box'>
                                      <div className='inner pt-2'>
                                      <h2>38</h2>
                                      <p>Years of Experience</p>
                                      </div>
                                  </div>

                                </div>

                                </div>
                            </div>
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
