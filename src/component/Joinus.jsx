import React from 'react'
import "./styles/joinus.scss"
const Joinus = () => {
    return (
        <div className='row  text-center' style={{marginTop:"10rem"}}>
            <div className='col-12'>
                <h6 className='h6'>News Letter</h6>
                <h2 className='heading2'>JOIN US</h2>
                <p className='description'>Problems trying to resolve the conflict between<br/>
                    the two major realms of Classical physics: Newtonian mechanics </p>
                <div>
                    <div className='joinus_button_area'>
                        <input type="text" placeholder='Your Email'className='joinus_input w-50' />
                        <a href='#' className='joinus_button'>Subscribe</a>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Joinus