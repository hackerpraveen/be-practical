import React, { useEffect, useState } from 'react';
import './pages.css';
import axios from 'axios';
import { Button, Empty, Form, Input, Modal, Select, Spin, Upload } from 'antd';
import { useHistory } from 'react-router-dom';
import { PlusOutlined } from '@ant-design/icons';



const Career = () => {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData,setModalData] = useState({})


  const history = useHistory();
  const onNavigation = (url,val) =>{
    history.push(`/${url}/${val}`);
  }
  useEffect(() => {
    axios.get(`https://be-practical-api.herokuapp.com/api/job-post/getall`).then((res)=>{
        console.log(res.data);
        setJobData(res.data);
        setLoading(false)
    })
   
  }, []);

   const applyNow=(data)=>{
    setModalData(data)
    setIsModalOpen(true)

   }
  //  const handleOk = () => {
  //   setIsModalOpen(false);
  //   setModalData({})
  // };

  const handleCancel = () => {
    setIsModalOpen(false);
    setModalData({})

  };
  const [image, setImage] = useState(null)

  const updateImage =   (e) => {
    // var file = document.querySelector('input[type=file]').files[0];
    // console.log(file);
    // let base64Image =  convertBase64String(file);
    // base64Image.then(response=>setImage(response))
    console.log(e.target.files[0],"typr");
    setImage(e.target.files[0])
};

const onFinish = (val) =>{
  console.log(val);
  const formData = new FormData()
  formData.append('file', image)
  formData.append('fileName', image.name)
  formData.append('data',JSON.stringify({...val,jobId:modalData._id,jobTitle:modalData.jobTitle,fileType:image.type}))
  axios.post("https://be-practical-api.herokuapp.com/apply-post/insert",formData).then((res)=>{
    console.log(res);
    setIsModalOpen(false);
    setModalData({});
    alert("Applied Successfully")


  })
}
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
                <Spin spinning={loading}>
                  {jobData.length>0?( 
                  jobData.map((e)=>{
                    return ( <div className='career-card'>
                    <div className='career-card-header'>
                        {e.jobTitle}
                    </div>
                    <div className='career-card-body'>
                            <h6 style={{borderBottom: '2px solid rgba(0, 0, 0, 0.5)', width: 'fit-content'}}>
                            <b>Descriptions:</b>
                            </h6>
                            <p style={{fontSize:'16px'}}>
                              {e.jobDesc}
                            </p>
                            {JSON.parse(e.desiredSkills).length>0?(<>
                          
                            <h6 style={{borderBottom: '2px solid rgba(0, 0, 0, 0.5)', width: 'fit-content'}}>
                            <b>Desired Skills:</b>
                            </h6>
                            <ul  style={{fontSize:'16px'}}>
                            {JSON.parse(e.desiredSkills).map((val)=>{   
                                    return(
                                    <li>{val}</li>
                                    )
                                  })}
                              </ul>
                              </>):null}
                              <h6 >
                            <b>Drop your CV to info@be-practical.com
                                </b>
                            </h6>
                            <button type="button" class="btn btn-light m-3" onClick={()=>applyNow(e)}>APPLY NOW</button>

                    </div>

                </div>)
                  })
                 
                ):<Empty />}
              

              
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
                </Spin >

                </div>

              </div>
            
            </div>
            <Modal title={modalData.title} open={isModalOpen} footer={null} onCancel={handleCancel}>
              <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        onFinish={onFinish}
        onFinishFailed={(e)=>console.log(e)}
        
        >
        <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input your Name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email ID"
        name="email"
        rules={[{ required: true, message: 'Please input your Email ID!',type: 'email' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Mobile Number"
        name="mobile"
        rules={[{ required: true, message: 'Please input your Mobile Number!' }]}
      >
        <Input />
      </Form.Item>
      {/* valuePropName="fileList" */}
        <Form.Item label="Upload"  name="upload">
          {/* <Upload action={(e)=>{console.log(e);}} listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload> */}
                   <input  type="file"  onChange={updateImage} />

        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>

        </Form>
      </Modal>
            
        </>
    );
}

export default Career;
