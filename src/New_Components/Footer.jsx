import React, { useState } from 'react';
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'

function Footer(props) {
    const [active, IsActive] = useState(0);
    const [showText, setShowText] = useState(false);
    const [showTextt, setShowTextt] = useState(false);
    const [showText1, setShowText1] = useState(false);
    
    

    return (
        <div className='container'>
            <div className='row footer1'>
                <div className='col-lg-6 d-flex col-md-12 col-sm-12'>
                    <div className=''>
                        <p className='foot5'>SHOP</p>
                        <p className='foot3 text-secondary'>New</p>
                        <p className='foot3 text-secondary'>Clothing</p>
                        <p className='foot3 text-secondary'>Shoes</p>
                        <p className='foot3 text-secondary'>Accessories</p>

                    </div>

                    <div className='foot1'>
                        <p className='foot5'>INFORMATION</p>
                        <p className='foot4 text-secondary '>About us</p>
                        <p className='foot4 text-secondary'>Sizing Guide</p>
                        <p className='foot4 text-secondary'>FAQ's</p>
                        <p className='foot4 text-secondary'>Contact us</p>

                    </div>

                    <div className='foot2'>
                        <p className='foot5'>ORDER</p>
                        <p className='foot3 text-secondary'>My Account</p>
                        <p className='foot3 text-secondary'>View Blog</p>
                        <p className='foot3 text-secondary'>Wishlist</p>
                        <p className='foot3 text-secondary'>Compare</p>

                    </div>
                </div>


                <div className='col-lg-6 col-md-12 col-sm-12 f1'>
                    <p className='foot5 mt-2'>NEWSLETTER SUBSCRIPTION</p>
                    <p className='foot6 text-secondary'>Sign up for Shella updates to receive information about new arrivals, future events and specials.</p>
                    <div className='d-flex mt-2'>
                        <input type="text" placeholder='Enter Your Email Address' className='foot7' />
                        <div className='foot8  text-center'>
                            <p className='mt-1'>    SUBSCRIBE!</p>
                        </div>
                    </div>
                    <p className='foot9 mt-4'>FOLLOW US</p>
                    <div className='d-flex'>
                        <BiLogoFacebook className='foot11' />
                        <AiOutlineInstagram className='foot10' />
                        <AiOutlineTwitter className='foot10' />

                    </div>

                </div>

            </div>





            <div className='row f11'>
                <div className='col-sm-12'>
                    <p className='foot5 mt-2 text-center'>NEWSLETTER SUBSCRIPTION</p>
                    <p className='foot6 text-secondary text-center'>Sign up for Shella updates to receive information about new arrivals, future events and specials.</p>
                </div>
                <div className='col-sm-12'>
                    <div className='d-flex mt-2'>
                        <input type="text" placeholder='Enter Your Email Address' className='foot7' />
                    </div>
                    <div className='col-sm-12'>
                       <div className='foot18 mt-3 text-center'>SUBSCRIBE!</div>
                    </div>
                </div>
            </div>



            <div className='row footer3 mt-4'>
                <div className='col-sm-12'>
                    <div className='' onClick={() => setShowText(!showText)} 
                    //  {active === 1 ? setShowText(!showText)  : ""}
                     
                     >
                        <p className='foot16 '>SHOP<span className='ic3'><BsPlus /></span> </p>
                    </div>
                    <div>
                        {
                             showText &&<>
                                <p className='foot33 text-secondary text-center'>New</p>
                                <p className='foot33 text-secondary text-center'>Clothing</p>
                                <p className='foot33 text-secondary text-center'>Shoes</p>
                                <p className='foot33 text-secondary text-center'>Accessories</p>
                            </>
                        }
                    </div>


                </div>
                <hr></hr>

                <div className='col-sm-12'>
                    <div className='' onClick={() =>  setShowTextt(!showTextt)}>
                        <p className='foot15 '>INFORMATION <span className='ic1'><BsPlus /></span></p>
                    </div>
                    <div>
                        {
                            showTextt &&  <>
                            
                                <p className='foot33 text-secondary text-center'>About us</p>
                                <p className='foot33 text-secondary text-center'>Sizing Guide</p>
                                <p className='foot33 text-secondary text-center'>FAQ's</p>
                                <p className='foot33 text-secondary text-center'>Contact us</p>
                            </>
                        }
                    </div>


                </div>
                <hr></hr>
                <div className='col-sm-12'>
                    <div className='' onClick={() => setShowText1(!showText1)}>
                        <p className='foot16 '>ORDER <span className='ic2'><BsPlus /></span></p>
                    </div>
                    <div>
                        {
                            showText1 && <>
                                <p className='foot33 text-secondary text-center'>My Account</p>
                                <p className='foot33 text-secondary text-center'>View Blog</p>
                                <p className='foot33 text-secondary text-center'>Wishlist</p>
                                <p className='foot33 text-secondary text-center'>Compare</p>

                            </>
                        }
                    </div>
                </div>
                <hr></hr>






            </div>


            <div className='row footer5'>
                <div className='col-sm-12 mt-3'>
                    <p className='foot6 text-secondary text-center'>© 2023 Shella Fashion Store Shopify. All Rights Reserved. Ecommerce Software by Shopify. Shopify Theme by MPIthemes.</p>
                    <div className='d-flex mt-4 footer4'>
                        <BiLogoFacebook className='foot11' />
                        <AiOutlineInstagram className='foot10' />
                        <AiOutlineTwitter className='foot10' />

                    </div>
                    <div className='foot18 mt-5 text-center'>TOP</div>
                </div>

            </div>


        </div>
    );
}

export default Footer;