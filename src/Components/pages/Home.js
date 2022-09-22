import React from 'react';
import './pages.css';
import { Carousel } from 'antd';
import blog_1 from '../../img/blog_1.jpg'
import { useHistory } from 'react-router-dom';

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };

const Home = () => {
  const history = useHistory();
  const onNavigation = (url) =>{
    history.push(`/${url}`);
  }
    return (
        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={require('../../img/blog_1.jpg')} class="d-block w-100" style={{height:'600px',objectFit: 'cover'}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={require('../../img/blog_2.jpg')} class="d-block w-100" style={{height:'600px',objectFit: 'cover'}} alt="..."/>
    </div>
    <div class="carousel-item">
    <img src={require('../../img/blog_3.jpg')} class="d-block w-100" style={{height:'600px',objectFit: 'cover'}} alt="..."/>
    </div>
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
            <div class="card " >
  <div class="card-body text-center">
    <i className='fas fa-person-chalkboard mb-4 mt-3' style={{fontSize:'80px'}}></i>
    <h5 class="card-title">Corporate Training and Induction Program </h5>
     <div style={{height:'150px',width:'100%'}} className='p-bgImg'>

<div style={{backgroundImage:`url(${require('../../img/blog_2.jpg')})`}} className='bgImg'>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center'>

    <button className='btn btn-secondary' onClick={()=>{onNavigation('Corporate-Training-and-Induction-Program')}}>Read More</button>
  </div>
</div>

</div>
  </div>
</div>

            </div>
            <div className='col-md-3 '>
            <div class="card " >
  <div class="card-body text-center">
    <i className='fas fa-person-chalkboard mb-4 mt-3' style={{fontSize:'80px'}}></i>
    <h5 class="card-title">Permanent Staffing </h5><br/>
     <div style={{height:'150px',width:'100%'}} className='p-bgImg'>

<div style={{backgroundImage:`url(${require('../../img/blog_2.jpg')})`}} className='bgImg'>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center'>

    <button className='btn btn-secondary' onClick={()=>{onNavigation('Permanent-Staffing')}}>Read More</button>
  </div>
</div>

</div>
  </div>
</div>

            </div>
            <div className='col-md-3 '>
            <div class="card " >
  <div class="card-body text-center">
    <i className='fas fa-person-chalkboard mb-4 mt-3' style={{fontSize:'80px'}}></i>
    <h5 class="card-title">Temporary / Contract Staffing </h5>
     <div style={{height:'150px',width:'100%'}} className='p-bgImg'>

<div style={{backgroundImage:`url(${require('../../img/blog_2.jpg')})`}} className='bgImg'>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center'>

    <button className='btn btn-secondary' onClick={()=>{onNavigation('Temporary-Contract-Staffing')}}>Read More</button>
  </div>
</div>

</div>
  </div>
</div>

            </div>
            <div className='col-md-3 '>
            <div class="card " >
  <div class="card-body text-center">
    <i className='fas fa-person-chalkboard mb-4 mt-3' style={{fontSize:'80px'}}></i>
    <h5 class="card-title">Train & Deploy </h5><br/>
     <div style={{height:'150px',width:'100%'}} className='p-bgImg'>

<div style={{backgroundImage:`url(${require('../../img/blog_2.jpg')})`}} className='bgImg'>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center'>

    <button className='btn btn-secondary' onClick={()=>{onNavigation('Train-Deploy')}}>Read More</button>
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
                        <h4>Why choose us?</h4>
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
