import React from 'react'
import './styles/heroBanner.scss'
const HeroBanner = () => {
  return (
    <div class="row z-index-1" style={{marginTop:"7rem"}}>
      <div class="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <h6 className='h6' style={{fontWeight:"700",fontSize:"1rem"}}>Join Us</h6>
        <h1 className='heading'>A Great Place to  Receive Care</h1>
        <h6 className='heading_description'>Medical Recover is most focused in helping you
          discover your most beautiful smile</h6>
        <div className='button_area'>
          <a href=' #' className='button1'>Get Quote Now</a>
          <a  href=' #' className='button2'>Learn More</a>
        </div>
      </div>
      <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <div className='image_area'>
          <img src="./images/doctor.png" alt="doctor" className='mt-3 right_image'/>
        </div>
      </div>

    </div>
  )
}

export default HeroBanner