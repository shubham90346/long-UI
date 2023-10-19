import React from 'react';
import img from '../Blog_images/blog1.webp';
import img1 from '../Blog_images/blog2.webp';
import img2 from '../Blog_images/blog3.webp';
import { CiSearch } from 'react-icons/ci';
import { GoQuestion } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import { BsHeart } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { IoIosArrowDown } from 'react-icons/io';
import { BiLogoFacebook } from 'react-icons/bi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import { BiLogoYoutube } from 'react-icons/bi';
import { SiSwiper } from 'react-icons/si';
import { AiOutlineBehance } from 'react-icons/ai';
import { LiaPinterest } from 'react-icons/lia';
import { BsArrowUp } from 'react-icons/bs';


function Blog_Home(props) {

    return (
        <div>

            {/* ----HEADER----- */}


            <div className='container'>
                <div className='row' id='heades'>
                    <div className='col-lg-6'>
                        <h5 className=' text-end mt-2 navi1'> <i className='navic'>Shella</i></h5>
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


            {/* ------NAVIGATION BAR------ */}


            <div className='container'>
                <div className='navi6  d-flex  '>
                    <div className='navi5' >
                        <p className=' navi5 d-flex'>LAYOUTS<span className='nav9'><IoIosArrowDown /></span> </p>
                    </div>

                    <div className='navi4' >
                        <p className=' d-flex'>SHOP  <span className='nav9'><IoIosArrowDown /></span></p>
                    </div>

                    <div className='navi4 dropdown ' >
                        <p className=' d-flex dropbtn' >BLOG  <span className='nav9'><IoIosArrowDown /></span> </p>

                    </div>

                    <div className='navi4 dropdown' >
                        <p className=' d-flex dropbtn'>GALLERY  <span className='nav9'><IoIosArrowDown /></span></p>

                    </div>

                    <div className='navi4 dropdown' >
                        <p className=' d-flex dropbtn'>PAGES  <span className='nav9'><IoIosArrowDown /></span></p>

                    </div>

                    <div className='navi4' >
                        <p className=' d-flex'>WOMEN'S  <span className='nav9'><IoIosArrowDown /></span></p>
                    </div>

                    <div className='navi4' >
                        <p className=' d-flex'>MEN'S  <span className='nav9'><IoIosArrowDown /></span></p>
                    </div>

                    <div className='navi4' >
                        <p className=' d-flex'> BUYNOW!<span className='nav9'><IoIosArrowDown /></span>
                            <div className='n26 '>
                                <p className='text-white'>SALE</p>
                            </div></p>
                    </div>

                </div>

            </div>
            <hr className='navi8'></hr>


            {/* ----HOME----- */}


            <div className='container'>
                <div className='d-flex'>
                    <p className='home1 text-secondary'>Home<span className='home3'>/</span></p>
                    <p className='home2 text-secondary'>News</p>
                    <p className='home2 text-secondary'>How To Layer Sweaters</p>
                </div>

                <div className='row'>
                    <div className='col-lg-8'>
                        <p className='home4 text-center'>How To Layer Sweaters</p>
                        <p className='text-center home6 text-secondary  mb-0'>October 30, 2018 Posted by SHOPIFY API</p>
                        <img src={img} alt='' className='mt-4 home7' />
                        <p className='mt-4 text-secondary home8'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet conse ctetur adipisicing eli. Shella Shopify Theme.  </p>
                        <p className='mt-5 text-secondary home8'>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur. Shella Shopify Theme. </p>
                        <p className='mt-5  home9'>Sample Paragraph Text With Images</p>
                        <p className='mt-4 text-secondary home8'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur amet conse ctetur adipisicing eli.</p>
                        <p className='d-flex ho1 text-secondary text-center mt-5'>
                            <img src={img2} className='' />
                            Lorem ipsum dolor sit amet conse  ctetur adipisicing elit sed do eiusmod sed do sed do , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod
                        </p>
                        <p className='ho1 text-secondary'> Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <div className='d-flex'>
                            <p className='text-secondary ho1'>Lorem ipsum dolor  amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt </p>
                            <img src='https://cdn.shopify.com/s/files/1/0026/2956/6516/files/12_large.png?v=1533833654' className='ho2' />
                        </div>
                        <p className='text-secondary ho1'>labore et dolore magna aliqua. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className='ho3 mt-5'>Sample Unordered List</p>
                        <ul>
                            <li className='text-secondary ho1'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit;</li>
                            <li className='text-secondary ho1'>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</li>
                            <li className='text-secondary ho1'>Quis nostrud exercitation ullamco laboris nisi ut aliquip.</li>
                        </ul>

                        <p className='ho1 text-secondary mt-4'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing eli.</p>

                        <div className='d-flex mt-5'>
                            <div className="vl"></div>
                            <div>
                                <p className='ho4'>To create something exceptional, your mindset must be relentlessly focused on the smallest detail. </p>
                                <p className=' ho6'>- Giorgio Armani</p>
                            </div>
                        </div>

                        <p className='text-secondary ho1 mt-4'>Iusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet conse ctetur adipisicing eli. Shella Shopify Theme. </p>
                        <hr className='mt-5'></hr>

                        <p className='ho7 text-end mt-5'>Three of the best?</p>
                        <p className='text-secondary ho8 text-end'>Next Post</p>

                    </div>


                    <div className='col-lg-4'>
                        <div className='b12'>
                            <p className="home5 mt-3">ABOUT</p>
                            <img src={img1} alt='' className='home10' />
                            <p className='home11 mt-3'>Annie Greenberg</p>
                            <p className='mt-3 text-secondary home12 text-center'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Lorem ipsum dolor sit amet conse ctetur adipisicing eli.</p>
                            <img src='https://cdn.shopify.com/s/files/1/0026/2956/6516/files/blogs-about.png?9425565926943578041' className='home13 mt-3' />
                            <hr className='mt-4'></hr>

                            <p className='mt-4 home14'>CATEGORIES</p>
                            <p className='home16 text-secondary'>Fashion</p>
                            <p className=' home15 text-secondary'>Trands</p>
                            <p className='home15 text-secondary'>Women</p>
                            <p className='home15 text-secondary'>Men</p>
                            <hr className='mt-5'></hr>

                            <p className='home14'>RECENT POSTS</p>
                            <p className='home17'>High-street cleansing creams</p>
                            <p className=' home18 text-secondary  '>October 30, 2018 Posted by SHOPIFY API</p>
                            <hr class="dashed-line mt-4"></hr>

                            <p className='home17'>How To Layer Sweaters</p>
                            <p className=' home18 text-secondary  '>October 30, 2018 Posted by SHOPIFY API</p>
                            <hr class="dashed-line mt-4"></hr>

                            <p className='home17'>What I wore this week: white jeans</p>
                            <p className=' home18 text-secondary  '>October 30, 2018 Posted by SHOPIFY API</p>
                            <hr className='mt-4'></hr>

                            <p className='home14'>TAGS</p>
                            <div className='d-flex '>
                                <p className='home20 text-secondary text-center'>Awsome</p>
                                <p className=' home19 text-secondary text-center'>Cool</p>
                                <p className='home19 text-secondary text-center'>News</p>
                                <p className=' home19 text-secondary text-center'>Nice</p>
                                <p className='home19 text-secondary text-center'>Summer</p>
                            </div>
                            <hr className='mt-3'></hr>


                            <div className=''>
                                <p className='home14 '>NEWSLETTER SUBSCRIPTION</p>
                                <p className='text-secondary home21'>Sign up for Shella updates to receive information about new arrivals, future events and specials.</p>
                                <div className='d-flex'>
                                    <input type='text' className='home22' placeholder='Enter your Email Address' />
                                    <div className='home23'>
                                        <p className=' text-center mt-1 '>SUBSCRIBE!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br /> <br />
            <hr className='mt-5'></hr>


            {/* -----FOOTER------ */}

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
                <br />

            </div>
            <div className='foo10  text-white d-flex justify-content-center'>

                <a href='#heades'> <BsArrowUp className='mt-2 foo12' /></a>

            </div>




        </div>
    );
}

export default Blog_Home;