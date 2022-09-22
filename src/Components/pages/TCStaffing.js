import React from 'react';

const TCStaffing = () => {
    return (
        <div>
        <div className='banner'>
            <div style={{backgroundImage:`url(${require('../../img/blog_2.jpg')})`,height:'300px'}} className='bgImg '>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center' style={{ backgroundColor: 'rgba(52, 73, 94, 0.75)'}}>
    <div className='text-center '>
    <h1 className='text-white'> Temporary / Contract Staffing</h1>
    <h5 className='text-white text-bold'><span style={{color: '#eea412'}}>Home </span> -  Temporary / Contract Staffing</h5>
        </div>

  </div>
</div>
            </div>
        <div className='body'>
            <div className='container'>

        

        <div className="row align-items-center m-md-5 mt-4 mb-4 m-3">
       
                <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12">
                    <div class="message-box">
                        {/* <h4>Why choose us?</h4> */}
                        <h4 className='text-secondary'>HIRE THE RIGHT EMPLOYEES FOR YOUR BUSINESS</h4>
                        <p style={{fontSize:'18px'}}>Building an agile and flexible workforce requires an easy and fast access to expert talent, available on short notice. Be Practical offers a pool of pre-screened talent, hired on our rolls, for middle and senior level positions. Our Contract Staffing Services allows organisations the ease and flexibility to scale their workforce based on demand. It also helps organisations onboard niche skills to their workforce for short duration workloads at the most competitive cost.&nbsp;&nbsp;</p>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12 p-3">
                    <div class="post-media wow fadeIn">
                        <img src={require('../../img/TCS-1.png')} alt="" class="img-fluid img-rounded w-100"/>
                    </div>
                </div>
				
			</div>
            </div>
        </div>
    </div>
    );
}

export default TCStaffing;
