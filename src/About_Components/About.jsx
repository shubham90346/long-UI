import React from 'react';
import { GoQuestion } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import { BsHeart } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { CiSearch } from 'react-icons/ci';
import { IoCallOutline } from 'react-icons/io5';
import { TfiAlarmClock } from 'react-icons/tfi';
import { VscMail } from 'react-icons/vsc';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoYoutube } from 'react-icons/bi';
import { SiSwiper } from 'react-icons/si';
import { AiOutlineBehance } from 'react-icons/ai';
import { LiaPinterest } from 'react-icons/lia';
import { BiLogoVisa } from 'react-icons/bi';
import { RiMastercardFill } from 'react-icons/ri';
import { FaCcPaypal } from 'react-icons/fa';
import { LiaCcDiscover } from 'react-icons/lia';
import { FaCcAmazonPay } from 'react-icons/fa';

function About(props) {
    return (
        <div>
            {/* ---HEADER----*/}

            <div className='' >
                <p className='gallery text-center text-white '>FINAL CLEARANCE: Take 20% off 'Sale Must-Haves' </p>
            </div>
            <div className='container'>
                <div className='row gallery1' id='heades'>
                    <div className='col-lg-6'>
                        <h5 className=' text-start mt-2 navi1'> <i className='navic'>Shella</i></h5>
                    </div>

                    <div className='col d-flex justify-content-end '>
                        <CiSearch className='navi2 mt-3' />
                        <GoQuestion className='navi2 mt-3' />
                        <GoPerson className='navi2 mt-3' />
                        <BsHeart className='navi2 mt-3' />
                        <LiaBalanceScaleSolid className="navi2 mt-3" />
                        <HiOutlineShoppingBag className='navi2 mt-3 ' />
                        <p className='navi2 hea1'>Bag(0)</p>
                    </div>
                </div>
            </div>
            <hr className='navi3'></hr>


            {/* ----HOME---- */}

            <div className='container'>
                <div className='d-flex'>
                    <p className='home1 text-secondary'>Home<span className='home3'>/</span></p>
                    <p className='home2 text-secondary'>News</p>
                </div>

                <p className='about1 text-center'>About Our Store</p>
                <div className=''>
                    <img src='	https://cdn.shopify.com/s/files/1/0026/2956/6516/files/about-page_1024x1024.jpg?v=1534148466' className='about2' />

                    <p className='text-secondary about3 text-center mt-5'>A great About Us page helps builds trust between you and your customers. The more content you provide about you and your <br /> business, the more confident people will be when purchasing from your store.</p>
                    <img src='https://cdn.shopify.com/s/files/1/0026/2956/6516/files/blogs-about_large.png?v=1533265367' className='about4 mt-4' />
                </div>
                <br /> <br />
            </div>
            <hr className='navi3'></hr>


            {/* ----FOOTER---- */}

            <div className='container'>
                <div className=' row mt-5'>
                    <div className='col-lg-6'>
                        <div className=''>
                            <p className='ft1'>NEWSLETTER SUBSCRIPTION</p>
                            <p className='ft2 text-secondary'>Sign up for Shella updates to receive information about new arrivals, future events and specials.</p>
                        </div>

                        <div className='mt-5 d-flex '>
                            <div className=''>
                                <p className='ft3'>SHOP</p>
                                <p className='foot3 text-secondary'>New</p>
                                <p className='foot3 text-secondary'>Clothing</p>
                                <p className='foot3 text-secondary'>Shoes</p>
                                <p className='foot3 text-secondary'>Accessories</p>
                                <p className='foot4 text-secondary'>Blog</p>
                                <p className='foot4 text-secondary'>Page 404</p>
                            </div>

                            <div className='ft4'>
                                <p className='ft3'>INFORMATION</p>
                                <p className='foot4 text-secondary '>About us</p>
                                <p className='foot4 text-secondary'>Sizing Guide</p>
                                <p className='foot4 text-secondary'>FAQ's</p>
                                <p className='foot4 text-secondary'>Contact us</p>
                                <p className='foot4 text-secondary'>Customer Service</p>
                                <p className='foot4 text-secondary'>Blog</p>
                                <p className='foot4 text-secondary'>Page 404</p>

                            </div>

                            <div className='ft4'>
                                <p className='ft3'>ORDER</p>
                                <p className='foot3 text-secondary'>My Account</p>
                                <p className='foot3 text-secondary'>View Blog</p>
                                <p className='foot3 text-secondary'>Wishlist</p>
                                <p className='foot3 text-secondary'>Compare</p>
                                <p className='foot4 text-secondary'>Blog</p>
                                <p className='foot4 text-secondary'>Page 404</p>

                            </div>
                        </div>

                    </div>

                    <div className='col-lg-6'>
                        <div className='d-flex justify-content-center '>
                            <input type='text' className='ft6' placeholder='Enter your Email Address' />
                            <div className='ft7'>
                                <p className=' text-center mt-1 '>SUBSCRIBE!</p>
                            </div>
                        </div>


                        <div className='d-flex mt-3'>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <p className='ft8 '>I agree with the Privacy. Tristique senectus et netus et malesuada. Nunc scelerisque viverra mauris in.</p>
                            </div>
                        </div>

                        <div className='d-flex'>
                            <div>
                                <p className='ft9'>HERE TO HELP</p>
                                <p className='ft11 text-secondary'>Have a question? You may find an answer in our FAQs</p>
                                <p className='ft12 text-secondary'> But you can also contact us:</p>
                                <p className='ft10'>Customer Service</p>
                                <div className='d-flex '>
                                    <IoCallOutline className='ft13' />
                                    <p className='text-secondary ft14'>Call Us: 800-123-4567</p>
                                </div>

                                <div className='d-flex '>
                                    <TfiAlarmClock className='ft13' />
                                    <p className='text-secondary ft14'>
                                        Mon-Fri: 9:00 am - 6:00 pm<br />
                                        Sat: 9:00 am - 4:00 pm<br />
                                        Sun: 9:00 am - 2:00 pm</p>
                                </div>

                                <div className='d-flex '>
                                    <VscMail className='ft13' />
                                    <p className='text-secondary ft14'>Send us an email</p>
                                </div>

                            </div>



                            <div className='ft15'>
                                <p className='ft9'>FOLLOW US</p>
                                <div className='d-flex '>
                                    <BiLogoFacebook className='foo8' />
                                    <p className='ft16 text-secondary'>Facebook</p>
                                </div>

                                <div className='d-flex ft17'>
                                    <AiOutlineTwitter className='foo8' />
                                    <p className='ft16 text-secondary'>Twitter</p>
                                </div>

                                <div className='d-flex ft17'>
                                    <AiOutlineInstagram className='foo8' />
                                    <p className='ft16 text-secondary'>Instagram</p>
                                </div>

                                <div className='d-flex ft17'>
                                    <LiaPinterest className="foo8" />
                                    <p className='ft16 text-secondary'>Pinterest</p>
                                </div>

                                <div className='d-flex ft17'>
                                    <BiLogoYoutube className='foo8' />
                                    <p className='ft16 text-secondary'>YouTube</p>
                                </div>

                                <div className='d-flex ft17'>
                                    <AiOutlineBehance className='foo8' />
                                    <p className='ft16 text-secondary'>Behance</p>
                                </div>

                                <div className='d-flex ft17'>
                                    <SiSwiper className='foo8' />
                                    <p className='ft16 text-secondary'>Swiper</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </div>
            <br /> <br />

            <hr className=''></hr>

            <div className='container'>
                <div className=''>
                    <div className='row ft18'>
                        <div className='col-lg-6 d-flex'>
                            <h5 className=' text-start mt-2 navi1'> <i className='navic'>Shella</i></h5>
                            <p className='text-secondary ft19'>© 2023 Shella Shopify theme. All Rights Reserved. Ecommerce Software by Shopify.</p>
                        </div>

                        <div className='col-lg-6 '>
                            <div className='d-flex ft21'>
                                <BiLogoVisa className='ft20' />
                                <RiMastercardFill className='ft20' />
                                <FaCcPaypal className='ft20' />
                                <LiaCcDiscover className='ft20' />
                                <FaCcAmazonPay className='ft20' />
                            </div>

                        </div>

                    </div>
                </div>


            </div>
            
        </div>
    );
}

export default About;