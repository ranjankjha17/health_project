import React from 'react'
import './styles/experts.scss'
const Experts = () => {
    return (
        <div className='row'>
            <div className='col-6'>
                <div className='line' style={{height:"5px",width:"5rem"}}></div>
                <h2 className='heading' style={{fontSize:"3rem"}}>Meet Our Experts</h2>
                <div className='description w-75' style={{paddingRight:"4rem",marginBottom:"3rem"}}>Problems trying to resolve the conflict between
                    the two major realms of Classical physics:
                    Newtonian mechanics
                 </div>
                 <div style={{marginBottom:"3rem"}}>
                 <a className='button3' href='#'>Learn More {'>'}</a>

                 </div>
                    
            </div>
            <div className='col-6 d-flex justify-content-end' style={{marginBottom:"5rem"}}>
            <img src="./images/expert.png" alt="doctor" className='mt-3 right_image'/>
            </div>
        </div>
    )
}

export default Experts