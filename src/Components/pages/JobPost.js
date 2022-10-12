import React, { useEffect, useState } from 'react';
import './pages.css';
import axios from 'axios';
import { Select, Spin } from 'antd';
import { useHistory } from 'react-router-dom';
import { useParams } from "react-router-dom";




const JobPost = () => {
  const [jobData, setJobData] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const history = useHistory();
  const onNavigation = (url) =>{
    history.push(`/${url}`);
  }
  useEffect(() => {

    axios.post(`https://be-practical-api.herokuapp.com/api/job-post/getById`,{_id:params.id}).then((res)=>{
        console.log(res.data);
        setJobData(res.data)
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
                <div className='container mt-md-5 text-center'  >
               <h6 style={{    textTransform: 'uppercase', color: '#737373'}}>WE ARE HIRING</h6> 
                <h1 style={{fontWeight:'800'}}>A Dream Job Awaits You</h1>
                <p style={{fontSize:'18px'}}>We have the right job for you!</p>
                <div>
                    <div className='text-left m-md-5 mt-4 mb-4'>
                    <div className='card'>
                    <Spin spinning={loading}>
                            <div className='card-body '>
                            <h2>Job Title : <b>{jobData.jobTitle}</b></h2>
                            <h5>Experience : {jobData.experience}</h5>
                            <h5>Education : {jobData.education}</h5>
                            <h6>Job Duties: </h6>
                            <p className='pl-md-5 pl-1'>{jobData.jobDuties}</p>
                            <p>Please mail resumes to:</p>
                            <div className='p-1'><i class="fas fa-scale-balanced mr-1"/><b>Job Category : </b> {jobData.jobCategory}</div>
                          <div className='p-1'><i class="fas  fa-gears mr-1"/><b>Specification : </b> {jobData.jobSpecification}</div>
                          <div className='p-1'><i class="fas fa-dollar-sign mr-1"/><b>Salary : </b> {jobData.jobSalary}</div>

                            
                        
                        </div>

                        
                        </Spin>
                    </div>
                    <div className='p-3'>
                        <button className='btn btn-light' onClick={()=>{onNavigation('Career')}}>{"<"} Click to go Back</button>
                    </div>
                    </div>
             
                </div>
                
                
                </div>

              </div>
            
            </div>
            
        </>
    );
}

export default JobPost;
