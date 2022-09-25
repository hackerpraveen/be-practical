import React, { useState } from 'react';

const Contact = () => {
    const [mail, setMail] = useState({
        email:'vtu7110@veltechuniv.edu.in',
        name:'',
        emailId:'',
        subject:'',
        body:'',
    });

    const handleOnChange = (e) =>{
            setMail({...mail,[e.target.name]:e.target.value})
    }
    return (
        <div>
         <div className='banner'>
            <div style={{backgroundImage:`url(${require('../../img/contact-us.jpg')})`,height:'300px'}} className='bgImg '>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center' style={{ backgroundColor: 'rgba(52, 73, 94, 0.75)'}}>
    <div className='text-center '>
    <h1 className='text-white'>Contact Us</h1>
    <h5 className='text-white text-bold'><span className='theme-color-1'>Home </span> - Contact Us</h5>
        </div>

  </div>
</div>
            </div>
            <div>
            <div style={{backgroundColor: '#DDDDDD'}} className="py-5 px-sm-3 px-md-5">
    <div className="container">
        <div className="row align-items-center m-md-5 mt-4 mb-4 ">
          
            <div className="col-lg-7 ">
                <h1 className=" text-uppercase font-weight-bold" style={{fontSize: '25px'}}>Contact Details</h1>
                <div className="row mt-4 ">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-3">
                                <div style={{padding: '14px', backgroundColor:'#F5F5F5', borderRadius: '50%'}} className="text-center">
                                    <i className="fas fa-map-marker-alt theme-color-1" style={{fontSize: "20px"}}></i>
                                </div>
                            </div>
                            <div className="col-9">
                                <h4 style={{fontSize: '20px',marginBottom: '8px',
                                color: '#012060'}} className="mt-1">Our Location</h4>
                                <span>
                                    #737C 1st Floor 1st Cross,<br/>
                                    3rd Stage, 4th Block<br/>
                                    Basaveshwara Nagar<br/>
                                    Bengaluru-560079<br/>
                                </span>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 pr-3 mt-md-0 mt-3">
                        <div className="row">
                            <div className="col-3">
                                <div style={{padding: '14px', backgroundColor:'#F5F5F5', borderRadius: '50%'}} className="text-center">
                                    <i className="fas fas fa-envelope theme-color-1" style={{fontSize: "20px"}}></i>
                                </div>
                            </div>
                            <div className="col-9">
                                <h4 style={{fontSize: '20px',marginBottom: "8px",
                                color: "#012060"}} className="mt-1">Our Email</h4>
                                <a href="info@be-practical.com" className='theme-color-1' style={{fontWeight:'bold'}}>info@be-practical.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                <h1 className="mb-4" style={{color: "#012060",fontSize: "25px"}}>Send Us a Message</h1>
                <div className="contact-form" style={{padding:" 30px"}}>
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" >
                        <div className="control-group">
                            <input type="text" className="form-control border-0 p-4" name="name" placeholder="Name"
                                required="required" data-validation-required-message="Please enter your name" onChange={handleOnChange} />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="email" className="form-control border-0 p-4" name="emailId" placeholder="Email"
                                required="required" data-validation-required-message="Please enter your email" onChange={handleOnChange} />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" className="form-control border-0 p-4" name="subject" placeholder="Subject"
                                required="required" data-validation-required-message="Please enter a subject" onChange={handleOnChange} />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control border-0 py-3 px-4" rows="3" name="body" onChange={handleOnChange} placeholder="Message"
                                required="required"
                                data-validation-required-message="Please enter your message"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div>
                            
                            <a className="btn py-3 px-4" style={{backgroundColor: "#eee",
                            border: "1px solid #ccc"}} href={`mailto:${mail.email}?subject=${mail.subject}&body='Name=${mail.name}\nEmailId=${mail.emailId}\n\n ${mail.body}'`}  id="sendMessageButton">Send
                                Message</a>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-5 pb-4 pb-lg-0">
                <h1 className="mb-4" style={{color: "#012060",fontSize: "25px"}}>Send Us a Message</h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.331384726338!2d77.50414527910155!3d12.993174699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d8ad89380bd%3A0xe619385693ac1684!2sBe%20Practical%20Solution!5e0!3m2!1sen!2sus!4v1661269221680!5m2!1sen!2sus"
                 width="100%" height="670px" style={{border:"0px"}}  loading="lazy" />
               
            </div>
        </div>
    </div>
</div>

            </div>
        </div>
    );
}

export default Contact;
