import React from 'react';
import './pages.css';

const Career = () => {
    return (
        <>
             <div className='banner'>
            <div style={{backgroundImage:`url(${require('../../img/career.jpg')})`,height:'300px'}} className='bgImg '>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center' style={{ backgroundColor: 'rgba(52, 73, 94, 0.75)'}}>
    <div className='text-center '>
    <h1 className='text-white'> Career</h1>
    {/* <h5 className='text-white text-bold'><span className='theme-color-1'>Home </span> -  About Us</h5> */}
        </div>

  </div>
</div>
            </div>
            <div >
              <div className='pt-md-2 pb-md-2 pt-1 pb-1'>
                <div className='container mt-md-5' >
               <h6 style={{    textTransform: 'uppercase', color: '#737373'}}>WE ARE HIRING</h6> 
                <h1 style={{fontWeight:'800'}}>A dream job awaits you</h1>
                <p style={{fontSize:'18px'}}>We have the right job for you!</p>
                <div className='career-card'>
                    <div className='career-card-header'>
                        Hiring IT & Non IT Recruiters with min 6 months Experience
                    </div>
                    <div className='career-card-body'>
                            <h6 style={{borderBottom: '2px solid rgba(0, 0, 0, 0.5)', width: 'fit-content'}}>
                            <b>Descriptions:</b>
                            </h6>
                            <p style={{fontSize:'16px'}}>
                            Be Practical having 150 Recruiters onboard is looking to expand their Business.

                            </p>
                            <h6 style={{borderBottom: '2px solid rgba(0, 0, 0, 0.5)', width: 'fit-content'}}>
                            <b>Desired Skills:</b>
                            </h6>
                            <ul  style={{fontSize:'16px'}}>
<li>Willingness to learn New Technology concepts and processes</li>
<li>Graduates with good communication skills, both verbal and written.</li>
<li>Proven experience in a recruiting role.</li>
<li>Talented candidates willing to get back to their career after a break are also welcome.</li>
<li>multilingual candidates would have an added advantage.</li>
<li>Ability to explore new ways of reaching potential candidates.</li>
<li>Keen ability to evaluate candidates and determine if they may fit with the position and company.</li>
</ul>
<h6 >
                            <b>Drop your CV to info@be-practical.com
</b>
                            </h6>
                            <button type="button" class="btn btn-light m-3">APPLY NOW</button>

                    </div>

                </div>
                <div className='career-card'>
                    <div className='career-card-header'>
                    Statutory Compliance Executives
                    </div>
                    <div className='career-card-body'>
                            <h6 style={{borderBottom: '2px solid rgba(0, 0, 0, 0.5)', width: 'fit-content'}}>
                            <b>Descriptions:</b>
                            </h6>
                            <p style={{fontSize:'16px'}}>
                            Be Practical Having head office in Bangalore and having branches across regions is looking for the below aspirants

                            </p>
                            <h6 style={{borderBottom: '2px solid rgba(0, 0, 0, 0.5)', width: 'fit-content'}}>
                            <b>Desired Skills:</b>
                            </h6>
                           <p style={{fontSize:'16px'}}>MSW in any specialization and having aspiration to build career in Statutory Compliances / Payroll
                           <br/><em>Please note: Reference is given to the candidates from rural colleges and deserving family background.

                                        </em>

                                        </p>

                                        <h6 >
                            <b>Drop your CV to info@be-practical.com
</b>
                            </h6>
                            <button type="button" class="btn btn-light m-3">APPLY NOW</button>

                    </div>

                </div>

                </div>

              </div>
            
            </div>
            
        </>
    );
}

export default Career;
