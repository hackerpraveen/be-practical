import React from 'react';

const TrainDeploy = () => {
    return (
        <div>
        <div className='banner'>
            <div style={{backgroundImage:`url(${require('../../img/card-3.jpg')})`,height:'300px'}} className='bgImg '>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center' style={{ backgroundColor: 'rgba(52, 73, 94, 0.75)'}}>
    <div className='text-center '>
    <h1 className='text-white'> Train & Deploy</h1>
    {/* <h5 className='text-white text-bold'><span className='theme-color-1'>Home </span> -  Train & Deploy</h5> */}
        </div>

  </div>
</div>
            </div>
        <div className='body'>
            <div className='container'>
                <div className='d-flex justify-content-center m-md-5 mt-4 mb-4 m-3'>
                    <div className='text-center'>
                    <img src={require('../../img/td-01.jpg')} alt="" className="img-fluid img-rounded mb-md-5"/>
                    <div className="message-box ">
                        {/* <h4>Why choose us?</h4> */}
                        {/* <h1>Permanent Staffing</h1> */}
                        <p style={{fontSize:'18px'}}>Talent acquisition is the most critical part of business today, and businesses need to stay ahead of the most recent recruiting trends to gain the best talent required. Be Practical  finds the right candidates from different sources, trains them on the exact skill set required by the companies, and deploys them with the clients once the training is finished. This way, companies save a lot of time and money and get the resources with the exact skill set and technology for the project.&nbsp;&nbsp;</p>
                        <img src={require('../../img/td-02.png')} alt="" className="img-fluid img-rounded mb-md-5"/>
                        <p style={{fontSize:'18px'}}>
Companies are eagerly searching for capable trainees, graduates, and professionals to start work immediately, but without investing in many resources training them. To help our clients to find a capable employee, we developed a training program, which benefits both parties. We have developed a selection program, which joins fully trained employees with a company in need of their skills and talent.
&nbsp;&nbsp;</p>
                    </div>
                    </div>
                </div>
                <div className="row align-items-center m-md-5 mt-4 mb-4 m-3">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="post-media wow fadeIn">
                        <img src={require('../../img/blog_3.jpg')} alt="" className="img-fluid img-rounded w-100"/>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                    <div className="message-box">
                        {/* <h4>Why choose us?</h4> */}
                        <h3 >Benefits of Hire, Train & Deploy staffing services are :</h3>
                        <p style={{fontSize:'18px'}}><b>Faster resource identification:</b>   Hiring the right resource is a time-consuming task. Be  Practical has a ready pool of candidates who have undergone processes like pre-screening, aptitude tests, interviews, etc and are ready to be deployed.&nbsp;&nbsp;</p>
                        <p style={{fontSize:'18px'}}><b>Effective placement:</b>  We guarantee smooth on-boarding and final placement of candidates by taking care of processes like placement offers, salary-related formalities, etc. Since the candidate is appropriately selected and trained, there are chances that the placement will generate more ROI.&nbsp;&nbsp;</p>
                        <p style={{fontSize:'18px'}}><b>Cost-effective: </b>  Training the candidates for the specific project requires setting up infrastructure which can give them practical hands-on training. Hire, Train & Deploy service provider has a dedicated team and infrastructure to train the manpower on various skillsets and innovative technologies. This way you can save money on investing in setting up the infrastructure and team inside the organization.&nbsp;&nbsp;</p>
                        <ul className="list clearfix pr-md-3 pl-3 text-dark" >
              <li>Aids in the adoption of new technology and processes </li>
              <li>Increases strategy and product innovation</li> </ul>
                    </div>
                </div>
				
				
			</div>
            <div className="row align-items-center m-md-5 mt-4 mb-4 m-3 flex-md-row-reverse">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                    <div className="post-media wow fadeIn">
                        <img src={require('../../img/td-1.jpg')} alt="" className="img-fluid img-rounded w-100"/>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-12 col-12">
                    <div className="message-box">
                        {/* <h4>Why choose us?</h4> */}
                        <h3 >Be Practical  Provides  training for the Most sought-after skills</h3>
                        <div className='pl-md-4'>

                        <p style={{fontSize:'18px'}}><b>1. Fullstack Development Courses</b>  
                        <ul className="list clearfix pl-md-4" style={{color:'#757575'}}>
              <li>Mean Fullstack</li>
              <li>Mern Fullstack</li>
              <li>Mearn Fullstack</li>
              <li>Python Fullstack</li>
              <li>Java Fullstack</li>
              <li>Php Fullstack</li>
              <li>Dot net Fullstack</li> </ul></p>
                        <p style={{fontSize:'18px'}}><b>2. Software Testing </b>  
                        <ul className="list clearfix pl-md-4" style={{color:'#757575'}}>
              <li>Manual testing </li>
              <li>Automation Testing</li>
              </ul></p>
              <p style={{fontSize:'18px'}}><b>3. Cloud Computing </b>  </p>
              <p style={{fontSize:'18px'}}><b>4. Digital Marketing </b>  </p>
              <p style={{fontSize:'18px'}}><b>5. Hardware Networking </b>  </p>
              </div>

                                            </div>
                </div>
				
				
			</div>
            {/* <div className='d-flex justify-content-center m-md-5 mt-4 mb-4 m-3'>
                    <div className='text-center'>
                        <h1>TRAIN  AND DEPLOY PROCESS @Be-practical</h1>
                    <img src={require('../../img/td-2.png')} alt="" className="img-fluid w-md-75 img-rounded mb-md-5"/>
                    <div className="message-box ">
                      
                    </div>
                    </div>
                </div> */}
            </div>
        </div>
    </div>
    );
}

export default TrainDeploy;
