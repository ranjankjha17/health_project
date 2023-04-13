import React from 'react'
import './styles/footer.scss'
import {BsTelephone} from 'react-icons/bs'
import {GrMail} from 'react-icons/gr'
import {SlLocationPin} from 'react-icons/sl'
import SocialMedia from './SocialMedia'
const Footer = () => {
    return (
        <div style={{marginTop:"10rem"}}>
            <footer class="bg-light py-3">
                <div>
                    <div class="row">
                        <div class="col-12 col-lg-2">
                            <h5 className='title'>Company Info</h5>
                            <ul class="list-unstyled">
                                <li><a href=" #" className='text-muted'>About Us</a></li>
                                <li><a href=" #" className='text-muted'>Carrier</a></li>
                                <li><a href=" #" className='text-muted'>We are hiring</a></li>
                                <li><a href=" #" className='text-muted'>Blog</a></li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-2">
                            <h5 className='title'>Legal</h5>
                            <ul class="list-unstyled">
                                <li><a href=" #" className='text-muted'>About Us</a></li>
                                <li><a href=" #" className='text-muted'>Carrier</a></li>
                                <li><a href=" #" className='text-muted'>We are hiring</a></li>
                                <li><a href=" #" className='text-muted'>Blog</a></li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-2">
                            <h5 className='title'>Features</h5>
                            <ul class="list-unstyled">
                                <li><a href=" #" className='text-muted'>Business Marketing</a></li>
                                <li><a href=" #" className='text-muted'>User Analytic</a></li>
                                <li><a href=" #" className='text-muted'>Live Chat</a></li>
                                <li><a href=" #" className='text-muted'>Unlimited Support</a></li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-2">
                            <h5 className='title'>Resources</h5>
                            <ul class="list-unstyled">
                                <li><a href=" #" className='text-muted'>IOS & Android</a></li>
                                <li><a href=" #" className='text-muted'>Watch a Demo</a></li>
                                <li><a href=" #" className='text-muted'>Customers</a></li>
                                <li><a href=" #" className='text-muted'>API</a></li>
                            </ul>
                        </div>
                        <div class="col-12 col-lg-4">
                            <h5 className='title'>Get In Touch</h5>
                            <ul class="list-unstyled">
                                <li><a href=" #"  className='text-muted'><BsTelephone style={{color:"#FF685B",marginRight:"1rem"}} /></a>(480) 555-0103</li>
                                <li><a href=" #"  className='text-muted'><SlLocationPin style={{color:"#FF685B",marginRight:"1rem"}}/></a>4517 Washington Ave. Manchester,
                                    Kentucky 39495</li>
                                <li><a href=" #"  className='text-muted'><GrMail style={{color:"#FF685B",marginRight:"1rem"}}/></a>debra.holt@example.com</li>
                            </ul>
                        </div>
                    </div>
                    <div class="row mt-3 d-flex justify-content-between">
                        <div class="col-12 col-lg-9 text-left text-muted">
                            Made With Love By Figmaland All Right Reserved
                        </div>
                       <div className='col-12 col-lg-3'>
                       <SocialMedia/>
                       </div>
                        
                       
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Footer