import React, { useState } from 'react';
import './pages.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useHistory } from 'react-router-dom';
import { Select, Tabs } from 'antd';
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const Home = (props) => {
  const [ddValue, setDdValue] = useState('Recruitment');
  const history = useHistory();
  const onNavigation = (url) =>{
    history.push(`/${url}`);
  }
const tabData = ()=>{
  switch(ddValue) {
    case 'Recruitment':
      return <div className='pl-3 fade-in'>
     
      <ul className="list clearfix pr-md-3">
        <li>we will help you to find right resources </li>
        <li>We’re Reliable & Cost Efficiant Recruitment Agency</li>
        <li>fully screened and qualified candidates in any industry</li> </ul>

  </div>;
    
      case 'Train and Deploy':
      return <div className='pl-3 fade-in'>
   
        
      <ul className="list clearfix pr-md-3">
        <li>Faster resource identification</li>
        <li> Effective placement</li>
        <li>Cost-effective</li> </ul>

  </div>;
   
      case 'Coporate Training':
      return <div className='pl-3 fade-in'>
 
       
      <ul className="list clearfix pr-md-3">
        <li>Prepare Your Organization with Essential Digital Skills​.</li>
        <li>Improve company’s reputation.</li>
        <li> Improve employee retention</li> </ul>

  </div>;
    default:
      return <div></div>;
  }
}

    return (
        <div style={{backgroundColor:"#f6f6f6"}}>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>

  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className='w-100 banner-class' style={{backgroundImage:`url(${require('../../img/banner_1.jpg')})`,backgroundSize: "cover",}}  >
        <div className='w-100 h-100 p-4 pr-md-4 d-flex justify-content-end align-items-center  fade-bg-dark' >

      <div className='text-white slide-up text-right pr-md-5 mr-md-5' >
        <h1 className='text-white' >Hire Right Candidate<br/> for your Business </h1>
        <p style={{fontStyle:'italic',fontFamily: 'Roboto'}}>Find and engage the right talent faster with<br/> our innovative sourcing  and screening<br/> strategies and step up your growth story.</p>
        <button className='btn btn-secondary theme-bgcolor-1' onClick={()=>{onNavigation('Permanent-Staffing')}}>Discover More</button>
  
        </div>
        </div>

      </div>
    </div>
    <div className="carousel-item">
    <div className='w-100 banner-class' style={{backgroundImage:`url(${require('../../img/banner_2.jpg')})`,backgroundSize: "cover"}}  >
    <div className='w-100 h-100 p-4 pr-md-4 d-flex align-items-center  fade-bg-dark' >

      <div className='text-white slide-up pl-md-5 ml-md-5'>
        <h1 className='text-white' >Solve your recruitment <br/>challenges with ease </h1>
        <p style={{fontStyle:'italic',fontFamily: 'Roboto'}}>With the right recruitment process outsourcing solution,<br/> you can steer clear 
of recruitment hassles and focus<br/> on the core processes of your company</p>
        <button className='btn btn-secondary theme-bgcolor-1' onClick={()=>{onNavigation('Temporary-Contract-Staffing')}}>Discover More</button>

        </div>
        </div>

      </div>  
        </div>
        <div className="carousel-item">
    <div className='w-100 banner-class' style={{backgroundImage:`url(${require('../../img/slide-01.jpg')})`,backgroundSize: "cover"}}  >
    <div className='w-100 h-100 p-4 pr-md-4 d-flex justify-content-end align-items-center  fade-bg-dark' >

      <div className='text-white slide-up pl-md-5 ml-md-5'>
        <h1 className='text-white' >Corporate Training   <br/>in Bangalore</h1>
        <p style={{fontStyle:'italic',fontFamily: 'Roboto'}}>Prepare Your Organization with Essential Digital Skills
</p>
        <button className='btn btn-secondary theme-bgcolor-1' onClick={()=>{window.open('https://be-practical.com/corporate-training-in-bangalore/ ')}}>Discover More</button>

        </div>
        </div>

      </div>  
        </div>
    {/* <div className="carousel-item">
    <div className='w-100 d-flex justify-content-center align-items-center p-4' style={{backgroundImage:`url(${require('../../img/slide-04.jpg')})`,height:'600px',backgroundSize: "cover"}}  >
      <div className='text-white '>
        <h1 className='text-white' style={{fontSize:'55px'}}>The Right Candidate for your Business </h1>
        <p style={{fontStyle:'italic',fontFamily: 'Roboto',fontSize:'25px'}}>There are many of passages of lorem Ipsum, but the majori have <br/>suffered alteration in some form.</p>
        </div>

      </div>   </div> */}
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
    <div className='container pb-md-5'>
        <div className='row  mt-md-5 mt-2'>
          
            <div className='col-md-3 mt-md-1 mt-3 mb-md-1 mb-3'>
            <div className="card mt-md-1 mt-3 mb-md-1 mb-3 h-100 card-effect" >
            {/* <div className='bg-img-zoom'  style={{backgroundImage:`url(${require('../../img/card-2.jpg')})`,height:'200px'}} >
              <div className=' w-100 h-100  p-3' >
                <div className='text-right'>
              <button className='btn bg-white' style={{fontSize:"12px",fontWeight:"bold"}}>RESOURCES</button>
                </div>
                <div className='d-flex align-items-end pb-3 h-100'>
                <i className='fas fa-people-group mb-4 mt-3 theme-color-1' style={{fontSize:'50px' }}></i>  
                </div>

                </div>
                
              </div> */}
  <div className="card-body ">
    <i className='fas fa-people-group mb-4 mt-3 logo-color-2 ' style={{fontSize:'40px'}}></i>
    <h4 className="">Permanent Staffing </h4>
    <p className='mt-3'>
    Our approach towards recruitment is fully tailor made for each requirement.
    </p>
    {/* <img src={require('../../img/shape-2.png')} /><br/> */}
    <div className='link-box' onClick={()=>{onNavigation('Permanent-Staffing')}}>Read More</div>
     {/* <div style={{height:'150px',width:'100%'}} className='p-bgImg'>

<div style={{backgroundImage:`url(${require('../../img/hr_03.png')})`}} className='bgImg'>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center'>

  </div>
</div>

</div> */}
  </div>
</div>

            </div>
            <div className='col-md-3 mt-md-1 mt-3 mb-md-1 mb-3'>
            <div className="card mt-md-1 mt-3 mb-md-1 mb-3 h-100 card-effect" >
            {/* style={{ backgroundColor: 'rgba(52, 73, 94, 0.75)'}} */}
            {/* <div className='bg-img-zoom'  style={{backgroundImage:`url(${require('../../img/card-1.jpg')})`,height:'200px'}} >
              <div className=' w-100 h-100  p-3'  >
                <div className='text-right'>
              <button className='btn bg-white' style={{fontSize:"12px",fontWeight:"bold"}}>RESOURCES</button>
                </div>
                <div className='d-flex align-items-end pb-3 h-100'>
                <i className='fas fa-users-between-lines mb-4 mt-3 theme-color-1' style={{fontSize:'50px' }}></i>  
                </div>

                </div>
                
              </div> */}
  <div className="card-body ">
    <i className='fas fa-users-between-lines mb-4 mt-3 logo-color-2' style={{fontSize:'40px'}}></i>
    <h4 className="card-title">Temporary / Contract Staffing </h4>
    <p className='mt-3'>
    Building an agile and flexible workforce requires an easy and fast access to expert talent, available on short notice.
    </p>
    {/* <img src={require('../../img/shape-2.png')} /><br/> */}
    <div className='link-box' onClick={()=>{onNavigation('Temporary-Contract-Staffing')}}>Read More</div>
     {/* <div style={{height:'150px',width:'100%'}} className='p-bgImg'>

<div style={{backgroundImage:`url(${require('../../img/hr_04.png')})`}} className='bgImg'>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center'>

  </div>
</div>

</div> */}
  </div>
</div>

            </div>
            <div className='col-md-3 mt-md-1 mt-3 mb-md-1 mb-3'>
            <div className="card mt-md-1 mt-3 mb-md-1 mb-3 h-100 card-effect" >
              {/* <div className='bg-img-zoom'  style={{backgroundImage:`url(${require('../../img/card-3.jpg')})`,height:'200px'}} >
              <div className=' w-100 h-100  p-3' >
                <div className='text-right'>
              <button className='btn  bg-white ' style={{fontSize:"12px",fontWeight:"bold"}}>RESOURCES</button>
                </div>
                <div className='d-flex align-items-end pb-3 h-100'>
                <i className='fas fa-person-walking-luggage mb-4 mt-3 theme-color-1' style={{fontSize:'50px' }}></i>  
                </div>

                </div>
                
              </div> */}
  <div className="card-body ">
    <i className='fas fa-person-walking-luggage mb-4 mt-3 logo-color-2' style={{fontSize:'40px' }}></i>
    <h4 className="card-title">Train & Deploy </h4>
    <p className='mt-3'>
    We provide Training & Development services for Indian clients. 
    </p>
    {/* <img src={require('../../img/shape-2.png')} /><br/> */}
     <div className='link-box' onClick={()=>{onNavigation('Train-Deploy')}}>Read More</div>
     {/* <div style={{height:'150px',width:'100%'}} className='p-bgImg'>


<div style={{backgroundImage:`url(${require('../../img/blog_2.jpg')})`}} className='bgImg'>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center'>

  </div>
</div>

</div> */}
  </div>
</div>

            </div>
            <div className='col-md-3 mt-md-1 mt-3 mb-md-1 mb-3'>
            <div className="card mt-md-1 mt-3 mb-md-1 mb-3 h-100 card-effect" >
            {/* <div className='bg-img-zoom'  style={{backgroundImage:`url(${require('../../img/card-4.jpg')})`,height:'200px'}} >
              <div className=' w-100 h-100  p-3' >
                <div className='text-right'>
              <button className='btn bg-white' style={{fontSize:"12px",fontWeight:"bold"}}>MANAGEMENT</button>
                </div>
                <div className='d-flex align-items-end pb-3 h-100'>
                <i className='fas fa-person-chalkboard mb-4 mt-3 theme-color-1' style={{fontSize:'50px' }}></i>  
                </div>

                </div>
                
              </div> */}
  <div className="card-body ">
    <i className='fas fa-person-chalkboard mb-4 mt-3 logo-color-2' style={{fontSize:'40px'}}></i>
    <h4 className="card-title">Corporate Training and Induction Program </h4>
    <p className='mt-3'>
    Be-practical provides corporate training to small, medium and large scale industry. 
    </p>
    {/* <img src={require('../../img/shape-2.png')} /><br/> */}
    <div className='link-box' onClick={()=>{window.open('https://be-practical.com/corporate-training-in-bangalore/ ')}}>Read More</div>
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
     
            
        </div>
  
    </div>
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
                        {/* <h4 className='theme-color-1'style={{fontSize:'20px'}} >Welcome to Agency</h4> */}
                        <h1 style={{fontSize:'50px',fontWeight:700}}>Best Quality Recruitment Staffing Agency</h1>
                        <p style={{fontSize:'18px'}} className="detail-text-color"><b className='theme-color-1'>Be practical solutions</b> offers training in diverse domains to graduates, Be practical Academia offers training in diverse domains to graduates, during graduation phase. These certificate courses enable students to boost their career prospects and find placement in IT industries.  After the completion of these certificate courses across many sunrise segments such as Digital and Business Analytics, the learners will future-proof themselves and remain relevant for the rapidly evolving technology marketplace. 
                            &nbsp;&nbsp;</p>
                            {/* <div className='row'>
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
                            </div> */}
                    </div>
                </div>
				
				
			</div>
    </div>

    </div>
    <div style={{backgroundImage: `url(${require('../../img/sec-bg-01.jpg')})`, backgroundRepeat: "no-repeat",backgroundSize: 'cover', backgroundAttachment: 'fixed',}}>
    <div className=' w-100 h-100 pt-md-5 pb-md-5 pt-2 pb-2' style={{ backgroundColor: 'rgba(110, 95, 95, 0.76)'}}>
      <div className='container'>
      <div className="row align-items-center m-md-5 mt-4 mb-4 ">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="message-box">
                        {/* <h4 className='theme-color-1' style={{fontSize:'20px'}}>Learn About Agency</h4> */}
                        <h1 className='text-white' style={{fontSize:'50px',fontWeight:700}}>We’re Reliable & Cost Efficient Recruitment Agency</h1>
                        {/* <button className='btn btn-secondary theme-bgcolor-1' onClick={()=>{onNavigation('Contact-Us')}} >Discover More</button> */}

                       
                    </div>
                </div>
				
				<div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                    <div className="post-media wow fadeIn">
                    <Select defaultValue="Recruitment" style={{ width: 200 }} onChange={(e)=>setDdValue(e)}>
      <Select.Option value="Recruitment">Recruitment</Select.Option>
      <Select.Option value="Train and Deploy">Train and Deploy</Select.Option>
    
      <Select.Option value="Coporate Training">Coporate Training</Select.Option>
    </Select>
    <div className='p-4'>

    {tabData()}
    </div>
                    {/* <Tabs
    defaultActiveKey="1"
    items={[
      {
        label: `Recruitment`,
        key: '1',
        children:(<div className='pl-3 fade-in'>
     
            <ul className="list clearfix pr-md-3">
              <li>we will help you to find right resources </li>
              <li>We’re Reliable & Cost Efficiant Recruitment Agency</li>
              <li>fully screened and qualified candidates in any industry</li> </ul>

        </div>),
      },
      {
        label: `Train and Deploy`,
        key: '2',
       children:(<div className='pl-3 fade-in'>
     
          
          <ul className="list clearfix pr-md-3">
            <li>Faster resource identification</li>
            <li> Effective placement</li>
            <li>Cost-effective</li> </ul>

      </div>),
      },
      {
        label: `Coporate Training `,
        key: '3',
       children:(<div className='pl-3 fade-in'>
    
          
          <ul className="list clearfix pr-md-3">
            <li>Prepare Your Organization with Essential Digital Skills​.</li>
            <li>Improve company’s reputation.</li>
            <li> Improve employee retention</li> </ul>

      </div>),
      }
    ]}
  /> */}
                    </div>
                </div>
			</div>

      </div>
      </div>
    </div>
    {/* <div className='overlap-cards '>
      <div className='container'>
      <div className="row align-items-center m-md-5 mt-4 mb-4 " style={{borderTop:'12px solid #25078a'}}>
        <div className='col-md-3 border bg-white text-center p-3'>
          <i className='fas fa-clipboard-check mt-2 mb-2 theme-color-1' style={{fontSize:'65px'}}/>
          <div>
          <span  data-speed="1500" data-stop="8080" style={{    fontSize: '40px', lineHeight: '50px', color: "#272727"}}>8080</span>
            <p className='detail-text-color' style={{fontWeight:'500',fontSize:'14px'}}>Project Completed</p>
          </div>
        </div>
        <div className='col-md-3 border bg-white text-center p-3'>
          <i className='far fa-id-badge mt-2 mb-2 theme-color-1' style={{fontSize:'65px'}}/>
          <div>
          <span  data-speed="1500" data-stop="697" style={{    fontSize: '40px', lineHeight: '50px', color: "#272727"}}>697</span>
            <p className='detail-text-color' style={{fontWeight:'500',fontSize:'14px'}}>Employer Solutions</p>
          </div>
        </div>
        <div className='col-md-3 border bg-white text-center p-3'>
          <i className='far fa-address-card mt-2 mb-2 theme-color-1' style={{fontSize:'65px'}}/>
          <div>
          <span  data-speed="1500" data-stop="440" style={{    fontSize: '40px', lineHeight: '50px', color: "#272727"}}>440</span>
            <p className='detail-text-color' style={{fontWeight:'500',fontSize:'14px'}}>Job Seekers</p>
          </div>
        </div>
        <div className='col-md-3 border bg-white text-center p-3'>
          <i className='far fa-smile mt-2 mb-2 theme-color-1' style={{fontSize:'65px'}}/>
          <div>
          <span  data-speed="1500" data-stop="2887" style={{    fontSize: '40px', lineHeight: '50px', color: "#272727"}}>2887
</span>
            <p className='detail-text-color' style={{fontWeight:'500',fontSize:'14px'}}>Happy Customers

</p>
          </div>
        </div>
    </div>
      </div>

    </div> */}
    <div  className='bg-white pt-2 pt-md-5'>
      <div className='container'>
      <div className='mr-md-5 ml-md-5 pb-md-5'>
      <Carousel
  swipeable={true}
  draggable={false}
  showDots={false}
  responsive={responsive}
  ssr={true} // means to render carousel on server-side.
  infinite={true}
  autoPlay={true}
  autoPlaySpeed={1200}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={1200}
  containerClass="carousel-container"
  removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
  deviceType={props.deviceType}
  dotListClass="custom-dot-list-style"
  itemClass="carousel-item-padding-40-px p-2 p-md-4"
>
  <div className='text-center'>
      <div className='shadow rounded-circle p-3'>
        <img src={require('../../img/client-1.png')} width={150} height={100}/>
      </div>
  </div>
  <div className='text-center'><div className='shadow rounded-circle p-3'>
        <img src={require('../../img/client-2.png')} width={150} height={100}/>
      </div></div>
  <div className='text-center'><div className='shadow rounded-circle p-3'>
        <img src={require('../../img/client-3.png')} width={150} height={100}/>
      </div></div>
  <div className='text-center'><div className='shadow rounded-circle p-3'>
        <img src={require('../../img/client-4.png')} width={150} height={100}/>
      </div></div>
</Carousel>

        </div>

      </div>

    </div>
    <div className='bg-white pt-2 pt-md-5'>
      <div className='container'>
        <div className='text-center '>
        {/* <h4 className='theme-color-1'style={{fontSize:'20px'}} >Staffing Recent Closed Projects</h4> */}
        <h1 style={{fontSize:'50px',fontWeight:700}}>Why Choose Be-Practical</h1>
        <div className='row mr-md-5 ml-md-5 mb-md-5'>
            <div className='col-md-4 text-center'>
                <img src={require('../../img/cont-1.png')}/>
                <h4>Understand your challenges </h4>
            </div>
            <div className='col-md-4 text-center'>
                <img src={require('../../img/cont-2.png')}/>
                <h4>Design best solutions that suits your needs</h4>
            </div>
            <div className='col-md-4 text-center'>
                <img src={require('../../img/cont-3.png')}/>
                <h4>Ensuring your satisfaction through High quality & timely  delivery</h4>
            </div>
        </div>
        </div>

      </div>

    </div>
        </div>
    );
}

export default Home;
