import React from 'react';
import './pages.css';

const CTIP = () => {
    return (
        <div>
            <div className='banner'>
            <div style={{backgroundImage:`url(${require('../../img/blog_2.jpg')})`,height:'300px'}} className='bgImg '>
  <div className='d-flex justify-content-center w-100 h-100  align-items-center' style={{ backgroundColor: 'rgba(52, 73, 94, 0.75)'}}>
    <div className='text-center '>
    <h1 className='text-white'>Corporate Training and Induction Program</h1>
    <h5 className='text-white text-bold'><span className='theme-color-1'>Home </span> - Corporate Training and Induction Program</h5>
        </div>

  </div>
</div>
            </div>
            <div className='body' style={{height:'800px'}}>
            Corporate Training and Induction Program
            </div>
        </div>
    );
}

export default CTIP;
