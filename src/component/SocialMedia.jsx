import React from 'react'
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'

const SocialMedia = () => {
    return (
        <div className='row'>
            <div className='col-1'>
                <a href=" #" style={{ color: "#FF685B" }}><BsFacebook /></a>
            </div>
            <div className='col-1 mx-3'>
                <a href=" #" style={{ color: "#FF685B" }}><BsInstagram /></a>
            </div>
            <div className='col-1'>
                <a href=" #" style={{ color: "#FF685B" }}><BsTwitter /></a>
            </div>
        </div>
    )
}

export default SocialMedia