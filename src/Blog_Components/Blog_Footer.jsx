import React from 'react';
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoYoutube } from 'react-icons/bi'
import { SiSwiper } from 'react-icons/si'
import { AiOutlineBehance } from 'react-icons/ai'
import { LiaPinterest } from 'react-icons/lia'
import { BsArrowUp } from 'react-icons/bs'

function Blog_Footer(props) {
    return (
        <div>
            <div className='container'>
                <p className='foo1 text-center mt-4'>NEWSLETTER SUBSCRIPTION</p>
                <p className='text-secondary foo2 text-center'>Sign up for Shella updates to receive information about new arrivals, future events and specials.</p>
                <div className='d-flex justify-content-center mt-4'>
                    <input type='text' className='foo3' placeholder='Enter your Email Address' />
                    <div className='foo4'>
                        <p className=' text-center mt-1 '>SUBSCRIBE!</p>
                    </div>
                </div>
            </div>
            <hr className='mt-5'></hr>

            <div className='container'>

                <p className='foo5 text-center text-secondary'>© 2023 Shella Fashion Store Shopify. All Rights Reserved. Ecommerce Software by Shopify.</p>
                <p className='foo6 text-center text-secondary'>Shopify Theme by MPIthemes.</p>

                <div className='d-flex justify-content-center foo7'>
                    <BiLogoFacebook className='foo8' />
                    <AiOutlineTwitter className='foo8' />
                    <AiOutlineInstagram className='foo8' />
                    <LiaPinterest className="foo8" />
                    <BiLogoYoutube className='foo8' />
                    <AiOutlineBehance className='foo8' />
                    <SiSwiper className='foo8' />
                </div>
                <br/>

            </div>
            <div className='foo10  text-white d-flex justify-content-center'>

               <a href='#heades'> <BsArrowUp className='mt-2 foo12'/></a> 
        
            </div>
        </div>
    );
}

export default Blog_Footer;