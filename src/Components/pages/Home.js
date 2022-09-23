import React from 'react';
import './pages.css';

import { useHistory } from 'react-router-dom';


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
    <div className='container'>
        <div className='row ml-md-5 mr-md-5 mt-md-5 mt-2'>
            <div className='col-md-3 '>
            <div class="card mt-md-1 mt-3 mb-md-1 mb-3" >
  <div class="card-body text-center">
    <i className='fas fa-person-chalkboard mb-4 mt-3' style={{fontSize:'80px',color:'#eb3225'}}></i>
    <h5 class="card-title">Corporate Training and Induction Program </h5>
     <div style={{height:'150px',width:'100%'}} className='p-bgImg'>

<div style={{backgroundImage:`url(${require('../../img/ctip-01.jpg')})`}} className='bgImg'>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center'>

    <button className='btn btn-secondary bg-color-1st' onClick={()=>{onNavigation('Corporate-Training-and-Induction-Program')}}>Read More</button>
  </div>
</div>

</div>
  </div>
</div>

            </div>
            <div className='col-md-3 '>
            <div class="card mt-md-1 mt-3 mb-md-1 mb-3" >
  <div class="card-body text-center">
    <i className='fas fa-people-group mb-4 mt-3' style={{fontSize:'80px',color:'#eb3225'}}></i>
    <h5 class="card-title">Permanent Staffing </h5><br/>
     <div style={{height:'150px',width:'100%'}} className='p-bgImg'>

<div style={{backgroundImage:`url(${require('../../img/hr_03.png')})`}} className='bgImg'>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center'>

    <button className='btn btn-secondary bg-color-1st' onClick={()=>{onNavigation('Permanent-Staffing')}}>Read More</button>
  </div>
</div>

</div>
  </div>
</div>

            </div>
            <div className='col-md-3 '>
            <div class="card mt-md-1 mt-3 mb-md-1 mb-3" >
  <div class="card-body text-center">
    <i className='fas fa-users-between-lines mb-4 mt-3' style={{fontSize:'80px',color:'#eb3225'}}></i>
    <h5 class="card-title">Temporary / Contract Staffing </h5>
     <div style={{height:'150px',width:'100%'}} className='p-bgImg'>

<div style={{backgroundImage:`url(${require('../../img/hr_04.png')})`}} className='bgImg'>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center'>

    <button className='btn btn-secondary bg-color-1st' onClick={()=>{onNavigation('Temporary-Contract-Staffing')}}>Read More</button>
  </div>
</div>

</div>
  </div>
</div>

            </div>
            <div className='col-md-3 '>
            <div class="card mt-md-1 mt-3 mb-md-1 mb-3" >
  <div class="card-body text-center">
    <i className='fas fa-person-walking-luggage mb-4 mt-3' style={{fontSize:'80px' ,color:'#eb3225'}}></i>
    <h5 class="card-title">Train & Deploy </h5><br/>
     <div style={{height:'150px',width:'100%'}} className='p-bgImg'>

<div style={{backgroundImage:`url(${require('../../img/blog_2.jpg')})`}} className='bgImg'>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center'>

    <button className='btn btn-secondary bg-color-1st' onClick={()=>{onNavigation('Train-Deploy')}}>Read More</button>
  </div>
</div>

</div>
  </div>
</div>

            </div>
     
            
        </div>
  
    </div>
    <div className='container'>
    <div class="row align-items-center m-md-5 mt-4 mb-4 m-3">
                <div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="message-box">
                        <h4 style={{color:"#eb3225"}}>Why choose us?</h4>
                        <h1>Because we make us different.</h1>
                        <p style={{fontSize:'18px'}}><b>Be practical Academia</b> offers training in diverse domains to graduates, Be practical Academia offers training in diverse domains to graduates, during graduation phase. These certificate courses enable students to boost their career prospects and find placement in IT industries.  After the completion of these certificate courses across many sunrise segments such as Digital and Business Analytics, the learners will future-proof themselves and remain relevant for the rapidly evolving technology marketplace. 
&nbsp;&nbsp;</p>
                    </div>
                </div>
				
				<div class="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div class="post-media wow fadeIn">
                        <img src={require('../../img/blog_3.jpg')} alt="" class="img-fluid img-rounded w-100"/>
                    </div>
                </div>
			</div>
    </div>
        </div>
    );
}

export default Home;
