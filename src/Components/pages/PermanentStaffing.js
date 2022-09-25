import React from 'react';

const PermanentStaffing = () => {
    return (
        <div>
        <div className='banner'>
            <div style={{backgroundImage:`url(${require('../../img/card-2.jpg')})`,height:'300px'}} className='bgImg '>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center' style={{ backgroundColor: 'rgba(52, 73, 94, 0.75)'}}>
    <div className='text-center '>
    <h1 className='text-white'> Permanent Staffing</h1>
    <h5 className='text-white text-bold'><span className='theme-color-1'>Home </span> -  Permanent Staffing</h5>
        </div>

  </div>
</div>
            </div>
        <div className='body mb-3 mb-md-5 mt-md-5 mt-3'>
            <div className='container'>
            <div className="row align-items-center m-md-5 mt-4 mb-4 m-3">
        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="post-media wow fadeIn">
                        <img src={require('../../img/blog_3.jpg')} alt="" class="img-fluid img-rounded w-100"/>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="message-box">
                        {/* <h4>Why choose us?</h4> */}
                        <h1>Permanent Staffing</h1>
                        <p style={{fontSize:'18px'}}><b>BE Practical Tech solutions</b>  give you access to fully screened and qualified candidates in any industry . We have a strong team of recruiters who are passionate in  helping your company achieve its business objectives. Our water tight process  guarantees that we offer our clients the best candidates at any level, with the quick turnaround time.
Hiring good Talent into your organization is a serious commitment, so you better make sure that you’re making this commitment to the right people. We are here to help you pick out just the right ones

&nbsp;&nbsp;</p>
                    </div>
                </div>
				
				
			</div>
            <div className='d-flex justify-content-center  mb-3 mb-md-5 mt-md-5 mt-3'>
            <div className='card shadow-lg w-md-75  '>
            <div className="text-center align-items-center m-md-5 mt-4 mb-4 m-3">
            <div class="post-media wow fadeIn">
                        <img src={require('../../img/ps-1.png')} alt="" class="img-fluid img-rounded mb-md-5"/>
                    </div>
                {/* <div class="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12"> */}
                    <div class="message-box">
                        {/* <h4>Why choose us?</h4> */}
                        {/* <h1>Permanent Staffing</h1> */}
                        <p style={{fontSize:'18px'}}> Once we receive requirments (JD) from our customer, we meticulously study , undertake comprehensive research on the industry, and create interest around your company to attract the best talent. the quality of our candidates which we identify through our tried-and-tested processes. 
We will tailor our talent search to customer specific requirements so that we can shortlist the candidates that are most capable of handling the challenges that they will face at the organization.
Our expertize in permanent staffing services and our recruiting experts use client specific and consultative strategies to pick out just the right fit for your company's culture and business needs. We have a streamlined sourcing and delivery process which reduces all costs that are usually incurred when you recruit, on-board, and train new employees


&nbsp;&nbsp;</p>
                    </div>
                {/* </div> */}
                {/* <div class="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12"> */}
               
                {/* </div> */}
				
			</div>
            </div>
            </div>

            </div>
            
       
        </div>
    </div>
    );
}

export default PermanentStaffing;
