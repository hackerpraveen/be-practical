import React from 'react';
import './pages.css';

import { useHistory } from 'react-router-dom';
import { Tabs } from 'antd';


const Home = () => {
  const history = useHistory();
  const onNavigation = (url) =>{
    history.push(`/${url}`);
  }
    return (
        <div style={{backgroundColor:"#f6f6f6"}}>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <div className='w-100 d-flex justify-content-center align-items-center p-4' style={{backgroundImage:`url(${require('../../img/slide-01.jpg')})`,height:'600px',backgroundSize: "cover"}}  >
      <div className='text-white '>
        <h1 className='text-white' style={{fontSize:'55px'}}>The Right Candidate for your Business </h1>
        <p style={{fontStyle:'italic',fontFamily: 'Roboto',fontSize:'25px'}}>There are many of passages of lorem Ipsum, but the majori have <br/>suffered alteration in some form.</p>
        </div>

      </div>
    </div>
    <div class="carousel-item">
    <div className='w-100 d-flex justify-content-center align-items-center p-4' style={{backgroundImage:`url(${require('../../img/slide-02.jpg')})`,height:'600px',backgroundSize: "cover"}}  >
      <div className='text-white '>
        <h1 className='text-white' style={{fontSize:'55px'}}>The Right Candidate for your Business </h1>
        <p style={{fontStyle:'italic',fontFamily: 'Roboto',fontSize:'25px'}}>There are many of passages of lorem Ipsum, but the majori have <br/>suffered alteration in some form.</p>
        </div>

      </div>    </div>
    {/* <div class="carousel-item">
    <div className='w-100 d-flex justify-content-center align-items-center p-4' style={{backgroundImage:`url(${require('../../img/slide-04.jpg')})`,height:'600px',backgroundSize: "cover"}}  >
      <div className='text-white '>
        <h1 className='text-white' style={{fontSize:'55px'}}>The Right Candidate for your Business </h1>
        <p style={{fontStyle:'italic',fontFamily: 'Roboto',fontSize:'25px'}}>There are many of passages of lorem Ipsum, but the majori have <br/>suffered alteration in some form.</p>
        </div>

      </div>   </div> */}
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    <div className='container pb-md-5'>
        <div className='row ml-md-5 mr-md-5 mt-md-5 mt-2'>
            <div className='col-md-3 '>
            <div class="card mt-md-1 mt-3 mb-md-1 mb-3" >
            <div className='bg-img-zoom'  style={{backgroundImage:`url(${require('../../img/ctip-01.jpg')})`,height:'200px'}} >
              <div className=' w-100 h-100  p-3' style={{ backgroundColor: 'rgba(52, 73, 94, 0.75)'}}>
                <div className='text-right'>
              <button className='btn bg-white' style={{fontSize:"12px",fontWeight:"bold"}}>MANAGEMENT</button>
                </div>
                <div className='d-flex align-items-end pb-3 h-100'>
                <i className='fas fa-person-chalkboard mb-4 mt-3 theme-color-1' style={{fontSize:'50px' }}></i>  
                </div>

                </div>
                
              </div>
  <div class="card-body text-center">
    {/* <i className='fas fa-person-chalkboard mb-4 mt-3 theme-color-1' style={{fontSize:'80px'}}></i> */}
    <h5 class="card-title">Corporate Training and Induction Program </h5>
    <img src={require('../../img/shape-2.png')} /><br/>
    <button className='btn btn-secondary theme-bgcolor-1' onClick={()=>{onNavigation('Corporate-Training-and-Induction-Program')}}>Read More</button>
    {/* <div className='light-icon'>
      <img src="https://cdn-icons-png.flaticon.com/512/2329/2329029.png" />

    </div> */}
     {/* <div style={{height:'150px',width:'100%'}} className='p-bgImg'>
  

<div style={{backgroundImage:`url(${require('../../img/ctip-01.jpg')})`}} className='bgImg'>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center'>

  </div>
</div>

</div> */}
  </div>
</div>

            </div>
            <div className='col-md-3 '>
            <div class="card mt-md-1 mt-3 mb-md-1 mb-3" >
            <div className='bg-img-zoom'  style={{backgroundImage:`url(${require('../../img/hr_03.png')})`,height:'200px'}} >
              <div className=' w-100 h-100  p-3' style={{ backgroundColor: 'rgba(52, 73, 94, 0.75)'}}>
                <div className='text-right'>
              <button className='btn bg-white' style={{fontSize:"12px",fontWeight:"bold"}}>RESOURCES</button>
                </div>
                <div className='d-flex align-items-end pb-3 h-100'>
                <i className='fas fa-people-group mb-4 mt-3 theme-color-1' style={{fontSize:'50px' }}></i>  
                </div>

                </div>
                
              </div>
  <div class="card-body text-center">
    {/* <i className='fas fa-people-group mb-4 mt-3 theme-color-1' style={{fontSize:'80px'}}></i> */}
    <h5 class="card-title">Permanent Staffing </h5><br/>
    <img src={require('../../img/shape-2.png')} /><br/>
    <button className='btn btn-secondary theme-bgcolor-1' onClick={()=>{onNavigation('Permanent-Staffing')}}>Read More</button>
     {/* <div style={{height:'150px',width:'100%'}} className='p-bgImg'>

<div style={{backgroundImage:`url(${require('../../img/hr_03.png')})`}} className='bgImg'>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center'>

  </div>
</div>

</div> */}
  </div>
</div>

            </div>
            <div className='col-md-3 '>
            <div class="card mt-md-1 mt-3 mb-md-1 mb-3" >
            <div className='bg-img-zoom'  style={{backgroundImage:`url(${require('../../img/hr_04.png')})`,height:'200px'}} >
              <div className=' w-100 h-100  p-3' style={{ backgroundColor: 'rgba(52, 73, 94, 0.75)'}}>
                <div className='text-right'>
              <button className='btn bg-white' style={{fontSize:"12px",fontWeight:"bold"}}>RESOURCES</button>
                </div>
                <div className='d-flex align-items-end pb-3 h-100'>
                <i className='fas fa-users-between-lines mb-4 mt-3 theme-color-1' style={{fontSize:'50px' }}></i>  
                </div>

                </div>
                
              </div>
  <div class="card-body text-center">
    {/* <i className='fas fa-users-between-lines mb-4 mt-3 theme-color-1' style={{fontSize:'80px'}}></i> */}
    <h5 class="card-title">Temporary / Contract Staffing </h5>
    <img src={require('../../img/shape-2.png')} /><br/>
    <button className='btn btn-secondary theme-bgcolor-1' onClick={()=>{onNavigation('Temporary-Contract-Staffing')}}>Read More</button>
     {/* <div style={{height:'150px',width:'100%'}} className='p-bgImg'>

<div style={{backgroundImage:`url(${require('../../img/hr_04.png')})`}} className='bgImg'>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center'>

  </div>
</div>

</div> */}
  </div>
</div>

            </div>
            <div className='col-md-3 '>
            <div class="card mt-md-1 mt-3 mb-md-1 mb-3" >
              <div className='bg-img-zoom'  style={{backgroundImage:`url(${require('../../img/blog_2.jpg')})`,height:'200px'}} >
              <div className=' w-100 h-100  p-3' style={{ backgroundColor: 'rgba(52, 73, 94, 0.75)'}}>
                <div className='text-right'>
              <button className='btn  bg-white ' style={{fontSize:"12px",fontWeight:"bold"}}>RESOURCES</button>
                </div>
                <div className='d-flex align-items-end pb-3 h-100'>
                <i className='fas fa-person-walking-luggage mb-4 mt-3 theme-color-1' style={{fontSize:'50px' }}></i>  
                </div>

                </div>
                
              </div>
  <div class="card-body text-center">
    {/* <i className='fas fa-person-walking-luggage mb-4 mt-3 theme-color-1' style={{fontSize:'80px' }}></i> */}
    <h5 class="card-title">Train & Deploy </h5><br/>
    <img src={require('../../img/shape-2.png')} /><br/>
     <button className='btn btn-secondary theme-bgcolor-1' onClick={()=>{onNavigation('Train-Deploy')}}>Read More</button>
     {/* <div style={{height:'150px',width:'100%'}} className='p-bgImg'>


<div style={{backgroundImage:`url(${require('../../img/blog_2.jpg')})`}} className='bgImg'>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center'>

  </div>
</div>

</div> */}
  </div>
</div>

            </div>
     
            
        </div>
  
    </div>
    <div style={{backgroundColor:'#fff'}} className='pt-md-2 pb-md-2 pt-1 pb-1'>
    <div className='container'>
    <div class="row align-items-center m-md-5 mt-4 mb-4 ">
    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="post-media wow fadeIn">
                        <img src="https://recvite.smartdemowp.com/wp-content/uploads/about-1-1.jpg" alt="" class="img-fluid img-rounded w-100"/>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="message-box mt-md-0 mt-4">
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
    <div style={{backgroundImage: `url(${require('../../img/sec-bg-01.jpg')})`, backgroundRepeat: "no-repeat",backgroundSize: 'cover', backgroundAttachment: 'fixed',}}>
    <div className=' w-100 h-100 pt-md-5 pb-md-5 pt-2 pb-2' style={{ backgroundColor: 'rgba(39, 39, 39, 0.9)'}}>
      <div className='container'>
      <div class="row align-items-center m-md-5 mt-4 mb-4 ">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="message-box">
                        <h4 className='theme-color-1' style={{fontSize:'20px'}}>Learn About Agency</h4>
                        <h1 className='text-white' style={{fontSize:'50px',fontWeight:700}}>We’re Reliable & Cost Efficiant Recruitment Agency</h1>
                        <button className='btn btn-secondary theme-bgcolor-1' >Discover More</button>

                       
                    </div>
                </div>
				
				<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="post-media wow fadeIn">
                    <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: `For Employers`,
        key: '1',
        children:(<div className='row fade-in'>
          <div className='col-md-5 '>
              <img src={require('../../img/sec-img-01.jpg')}/>
          </div>
          <div className='col-md-7 '>
            <p  style={{fontSize: '18px',lineHeight: "34px",fontWeight: '600',color:'#bfbfbf'}}>There are many simply free text available variations of passages of but the majority have in some.</p>
            <ul class="list clearfix">
              <li>Support on hiring employeers</li>
              <li>Get rxceptional service for growth</li>
              <li>Outsourced consulting business</li> </ul>
          </div>

        </div>),
      },
      {
        label: `For Employees`,
        key: '2',
       children:(<div className='row fade-in'>
        <div className='col-md-5 '>
            <img src={require('../../img/sec-img-01.jpg')}/>
        </div>
        <div className='col-md-7 '>
          <p  style={{fontSize: '18px',lineHeight: "34px",fontWeight: '600',color:'#bfbfbf'}}>There are many simply free text available variations of passages of but the majority have in some.</p>
          <ul class="list clearfix">
            <li>Support on hiring employeers</li>
            <li>Get rxceptional service for growth</li>
            <li>Outsourced consulting business</li> </ul>
        </div>

      </div>),
      }
    ]}
  />
                    </div>
                </div>
			</div>

      </div>
      </div>
    </div>
 
    {/* <div className='container'>
    <div class="row align-items-center m-md-5 mt-4 mb-4 m-3">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="message-box">
                        <h4 className='theme-color-1'>Why choose us?</h4>
                        <h1>Because we make us different.</h1>
                        <p style={{fontSize:'18px'}}><b className='theme-color-1'>Be practical Academia</b> offers training in diverse domains to graduates, Be practical Academia offers training in diverse domains to graduates, during graduation phase. These certificate courses enable students to boost their career prospects and find placement in IT industries.  After the completion of these certificate courses across many sunrise segments such as Digital and Business Analytics, the learners will future-proof themselves and remain relevant for the rapidly evolving technology marketplace. 
&nbsp;&nbsp;</p>
                    </div>
                </div>
				
				<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="post-media wow fadeIn">
                        <img src={require('../../img/blog_3.jpg')} alt="" class="img-fluid img-rounded w-100"/>
                    </div>
                </div>
			</div>
    </div> */}
        </div>
    );
}

export default Home;
