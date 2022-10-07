import React, { useEffect, useState } from 'react';
import './pages.css';
import axios from 'axios';
import { Select, Spin } from 'antd';
import { useHistory } from 'react-router-dom';



const Career = () => {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);

  const history = useHistory();
  const onNavigation = (url,val) =>{
    history.push(`/${url}/${val}`);
  }
  useEffect(() => {
    axios.get(`http://localhost:4000/api/job-post/getall`).then((res)=>{
        console.log(res.data);
        setJobData(res.data);

        setLoading(false)

    })
   
  }, []);

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
                <div className='container mt-md-5 '  >
               <h6 style={{    textTransform: 'uppercase', color: '#737373'}}>WE ARE HIRING</h6> 
                <h1 style={{fontWeight:'800'}}>A Dream Job Awaits You</h1>
                <p style={{fontSize:'18px'}}>We have the right job for you!</p>
                {/* <Spin spinning={loading}> */}
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

              
                {/* <div className='row m-md-5 mt-4 mb-4'>
                  {jobData?.map((e)=>{
                    return(
                      <div className='col-md-6 col-12 text-left' key={e._id}>
                      <div className='card mt-md-1 mt-3 mb-md-1 mb-3 h-100'>
                        <div className='card-body'>
                          <h5><b>Job Title:</b> {e.jobTitle}</h5>
                          <div className='p-1'><i class="fas fa-scale-balanced pr-4"/>{e.jobCategory}</div>
                          <div className='p-1'><i class="fas  fa-gears pr-4"/>{e.jobSpecification}</div>
                          <div className='p-1'><i class="fa-brands fa-black-tie pr-4"/>{e.jobTitle}</div>
                          <div className='p-1'><i class="fa-solid fa-building-columns pr-4"/>{e.education}</div>
                          <div className='p-1'><i class="fas fa-box-archive pr-4"/>{e.experience}</div>
                          <div className='p-1'><i class="fas fa-dollar-sign pr-4"/>{e.jobSalary}</div>
                          <div className='ml-3 mt-3' style={{cursor:'pointer'}} onClick={()=>{onNavigation('Job-post',e._id)}}><b>More Details</b> <i class="fas fa-right-long"/></div>
                        </div>
                        </div>
                     </div> 

                    )
                     

                  })
                   

                  }
                  

                </div> */}
                {/* </Spin > */}

                </div>

              </div>
            
            </div>
            
        </>
    );
}

export default Career;
