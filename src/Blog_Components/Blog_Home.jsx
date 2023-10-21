import React, { useState } from 'react';
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
import Women from '../Components/Women';
import Mens from '../Components/Mens';
import Layout from '../Components/Layout';
import Shop from '../Components/Shop';
import { BsPlus } from 'react-icons/bs'
import { IoCallOutline } from 'react-icons/io5';
import { TfiAlarmClock } from 'react-icons/tfi';
import { VscMail } from 'react-icons/vsc';
import { BiLogoVisa } from 'react-icons/bi';
import { RiMastercardFill } from 'react-icons/ri';
import { FaCcPaypal } from 'react-icons/fa';
import { LiaCcDiscover } from 'react-icons/lia';
import { FaCcAmazonPay } from 'react-icons/fa';
import { CiFilter } from 'react-icons/ci';
import {  useNavigate } from "react-router-dom";

function Blog_Home(props) {
    const [active, IsActive] = useState(0);
    const [showText, setShowText] = useState(false);
    const [showTextt, setShowTextt] = useState(false);
    const [showText1, setShowText1] = useState(false);
    const [showText11, setShowText11] = useState(false);
     
    const navigate = useNavigate();
 
    const handleclickk=()=>{
        navigate('/')

    }

    return (
        <div>

            {/* ----HEADER----- */}


            <div className='container hide1'>
                <div className='row'  >
                    <div className='col-lg-6' onClick={handleclickk}>
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
            <hr className='navi3 '></hr>

            {/* ------NAVIGATION BAR------ */}



            <div className='container hide1' >
                <nav className="navbar navbar-expand-lg navbar-light blognav">
                    <div className="">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-lg-0  a6" >

                                <li className="nav-item a2 ">
                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(1)} style={active === 1 ? { color: 'black ' } : { color: ' rgb(113, 107, 110)' }}>
                                        LAYOUTS <span className='nav9'><IoIosArrowDown /></span> </a>
                                </li>
                                <li className="nav-item a1 ">
                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(2)} style={active === 2 ? { color: 'black ' } : { color: ' rgb(113, 107, 110)' }}>SHOP <span className='nav9'><IoIosArrowDown /></span></a>
                                </li>


                                <li className="nav-item a1 ">
                                    <div className=' dropdown ' onMouseOver={() => IsActive(3)} style={active === 3 ? { color: ' black' } : { color: 'rgb(113, 107, 110)' }}>
                                        <a className="nav-link d-flex" href="#">BLOG<span className='nav9'><IoIosArrowDown /></span></a>
                                        <div class="dropdown-content">
                                            <a href="#" className='tab4 text-secondary'>Blog V1-Classic</a>
                                            <a href="#" className='tab5  text-secondary'>Blog V2-Grid</a>
                                            <a href="#" className='tab5 text-secondary'>Blog V3-Masonry</a>
                                            <a href="#" className='tab5 text-secondary'>Blog V4-Slider</a>
                                            <a href="#" className='tab5 text-secondary'>Single Post</a>

                                        </div>
                                    </div>
                                </li>
                                <li className="nav-item a1 ">
                                    <div className=' dropdown ' onMouseOver={() => IsActive(4)} style={active === 4 ? { color: 'black ' } : { color: 'rgb(113, 107, 110)' }}>
                                        <a className="nav-link d-flex" href="#">GALLERY<span className='nav9'><IoIosArrowDown /></span></a>
                                        <div class="dropdown-content">
                                            <a href="#" className='tab4 text-secondary'>Gallery V1-Masonry</a>
                                            <a href="#" className='tab5  text-secondary'>Gallery V2-Masonry</a>
                                            <a href="#" className='tab5 text-secondary'>Gallery V3-Grid </a>
                                            <a href="#" className='tab5 text-secondary'>Gallery V4-Grid</a>
                                            <a href="#" className='tab5 text-secondary'>Single </a>

                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item a1 ">
                                    <div className=' dropdown ' onMouseOver={() => IsActive(5)} style={active === 5 ? { color: 'black ' } : { color: 'rgb(113, 107, 110)' }}>
                                        <a className="nav-link d-flex" href="#">PAGES<span className='nav9'><IoIosArrowDown /></span></a>
                                        <div class="dropdown-content">
                                            <a href="#" className='tab4 text-secondary'>About Us</a>
                                            <a href="#" className='tab5  text-secondary'>Customer Service</a>
                                            <a href="#" className='tab5 text-secondary'>Sizing Guide</a>
                                            <a href="#" className='tab5 text-secondary'>FAQ's</a>
                                            <a href="#" className='tab5 text-secondary'>Contact us</a>
                                            <a href="#" className='tab5 text-secondary'>Coming Soon</a>
                                            <a href="#" className='tab5 text-secondary'>Page 404</a>
                                            <a href="#" className='tab5 text-secondary'>Icons</a>
                                            <a href="#" className='tab5 text-secondary'>Documentations</a>
                                        </div>
                                    </div>
                                </li>

                                <li className="nav-item a1">
                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(6)} style={active === 6 ? { color: 'black ' } : { color: ' rgb(113, 107, 110)' }}>WOMEN'S <span className='nav9'><IoIosArrowDown /></span></a>
                                </li>
                                <li className="nav-item a1">
                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(7)} style={active === 7 ? { color: ' black' } : { color: ' rgb(113, 107, 110)' }}>MEN'S <span className='nav9'><IoIosArrowDown /></span></a>
                                </li>
                                <li className="nav-item  a1">
                                    <a className="nav-link d-flex" href="#"
                                     onMouseOver={() => IsActive(8)} style={active === 8 ? { color: 'black ' } : { color: ' rgb(113, 107, 110)' }}
                                     onMouseLeave={() => IsActive(0)}
                                     >BUYNOW! <span className='nav9'><IoIosArrowDown /></span></a>
                                </li>


                            </ul>

                        </div>
                    </div>
                </nav>
                <div className=' a4'>
                    {
                        active == 1 && <>
                            <div onMouseLeave={() => IsActive(0)}>
                                <Layout />
                            </div>


                        </>
                    }
                    {
                        active == 2 && <>
                            <div onMouseLeave={() => IsActive(0)}>
                                <Shop />
                            </div>

                        </>
                    }
                    {
                        active == 6 && <>
                            <div onMouseLeave={() => IsActive(0)}>
                                <Women />
                            </div>

                        </>
                    }
                    {
                        active == 7 && <>
                            <div onMouseLeave={() => IsActive(0)}>
                                <Mens />
                            </div>

                        </>
                    }


                </div>
            </div>
            <hr className='navi3 hide1 navi313'></hr>


            {/* NAVIGATION RESPONSIVE */}

            <div className='container-fluid hide2'>
                <div className='row b4 '>
                    <div className='col-md-6 col'>
                        <div className='d-flex'>
                            <div className=' '>
                                <nav className="navbar navbar-expand-lg navbar-light">
                                    <div className="">
                                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav  mb-lg-0  a6" >

                                                <li className="nav-item a2 ">
                                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(1)} style={active === 1 ? { color: '  rgb(113, 107, 110)' } : { color: '' }}>
                                                        LAYOUTS <span className='nav9'><IoIosArrowDown /></span> </a>
                                                </li>
                                                <li className="nav-item a1 ">
                                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(2)} style={active === 2 ? { color: '  rgb(113, 107, 110)' } : { color: '' }}>SHOP <span className='nav9'><IoIosArrowDown /></span></a>
                                                </li>


                                                <li className="nav-item a1 ">
                                                    <div className=' dropdown ' onMouseOver={() => IsActive(3)} style={active === 3 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>
                                                        <a className="nav-link d-flex" href="#">SHOP <span className='nav9'><IoIosArrowDown /></span></a>
                                                        <div class="dropdown-content">
                                                            <a href="#" className='tab4 text-secondary'>Blog V1-Classic</a>
                                                            <a href="#" className='tab5  text-secondary'>Blog V2-Grid</a>
                                                            <a href="#" className='tab5 text-secondary'>Blog V3-Masonry</a>
                                                            <a href="#" className='tab5 text-secondary'>Blog V4-Slider</a>
                                                            <a href="#" className='tab5 text-secondary'>Single Post</a>

                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item a1 ">
                                                    <div className=' dropdown ' onMouseOver={() => IsActive(4)} style={active === 4 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>
                                                        <a className="nav-link d-flex" href="#">GALLERY<span className='nav9'><IoIosArrowDown /></span></a>
                                                        <div class="dropdown-content">
                                                            <a href="#" className='tab4 text-secondary'>Gallery V1-Masonry</a>
                                                            <a href="#" className='tab5  text-secondary'>Gallery V2-Masonry</a>
                                                            <a href="#" className='tab5 text-secondary'>Gallery V3-Grid </a>
                                                            <a href="#" className='tab5 text-secondary'>Gallery V4-Grid</a>
                                                            <a href="#" className='tab5 text-secondary'>Single </a>

                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="nav-item a1 ">
                                                    <div className=' dropdown ' onMouseOver={() => IsActive(5)} style={active === 5 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>
                                                        <a className="nav-link d-flex" href="#">PAGES<span className='nav9'><IoIosArrowDown /></span></a>
                                                        <div class="dropdown-content">
                                                            <a href="#" className='tab4 text-secondary'>About Us</a>
                                                            <a href="#" className='tab5  text-secondary'>Customer Service</a>
                                                            <a href="#" className='tab5 text-secondary'>Sizing Guide</a>
                                                            <a href="#" className='tab5 text-secondary'>FAQ's</a>
                                                            <a href="#" className='tab5 text-secondary'>Contact us</a>
                                                            <a href="#" className='tab5 text-secondary'>Coming Soon</a>
                                                            <a href="#" className='tab5 text-secondary'>Page 404</a>
                                                            <a href="#" className='tab5 text-secondary'>Icons</a>
                                                            <a href="#" className='tab5 text-secondary'>Documentations</a>
                                                        </div>
                                                    </div>
                                                </li>

                                                <li className="nav-item a1">
                                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(6)} style={active === 6 ? { color: '  rgb(113, 107, 110)' } : { color: '' }}>WOMEN'S <span className='nav9'><IoIosArrowDown /></span></a>
                                                </li>
                                                <li className="nav-item a1">
                                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(7)} style={active === 7 ? { color: '  rgb(113, 107, 110)' } : { color: '' }}>MEN'S <span className='nav9'><IoIosArrowDown /></span></a>
                                                </li>
                                                <li className="nav-item  a1">
                                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(8)} style={active === 8 ? { color: '  rgb(113, 107, 110)' } : { color: '' }}>BUYNOW! <span className='nav9'><IoIosArrowDown /></span></a>
                                                </li>


                                            </ul>

                                        </div>
                                    </div>
                                </nav>
                                <div className=' a4'>
                                    {
                                        active == 1 && <>

                                            <Layout />
                                        </>
                                    }
                                    {
                                        active == 2 && <>
                                            <Shop />
                                        </>
                                    }
                                    {
                                        active == 6 && <>
                                            <Women />
                                        </>
                                    }
                                    {
                                        active == 7 && <>
                                            <Mens />
                                        </>
                                    }


                                </div>


                            </div>

                            <div className='b2'>
                                <SiSwiper className='b1' />
                            </div>
                        </div>
                    </div>


                    <div className='col-md-6 col d-flex justify-content-end '>
                        <CiSearch className='b3 mt-3' />
                        <GoQuestion className='b3 mt-3' />
                        <GoPerson className='b3 mt-3' />
                        <BsHeart className='b3 mt-3' />
                        <HiOutlineShoppingBag className='b3 mt-3 ' />

                    </div>

                </div>

            </div>
            <hr className='navi3 '></hr>








            {/* ----HOME----- */}


            <div className='container' id='heades'>
                <div className='d-flex'>
                    <p className='home1 text-secondary'>Home<span className='home3'>/</span></p>
                    <p className='home2 text-secondary'>News</p>
                    <p className='home2 text-secondary'>How To Layer Sweaters</p>
                </div>


                <div className='row'>
                    <div className='col-lg-8'>
                        <p className='home4 text-center'>How To Layer Sweaters</p>
                        <p className='text-center home6 text-secondary  mb-0'>October 30, 2018 Posted by SHOPIFY API</p>

                        {/* ----RESPONSIVE SIDEBAR---- */}
                        <div className='hide52'>

                            <a className="side1" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <CiFilter className='side2' />
                                SHOW SIDEBAR
                            </a>
                            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasExampleLabel"> </h5>
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body">
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


                        <img src={img} alt='' className='mt-4 home7' />
                        <p className='mt-4 text-secondary home8'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet conse ctetur adipisicing eli. Shella Shopify Theme.  </p>
                        <p className='mt-5 text-secondary home8'>Nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur. Shella Shopify Theme. </p>
                        <p className='mt-5  home9'>Sample Paragraph Text With Images:-</p>
                        <p className='mt-4 text-secondary home8'>Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur amet conse ctetur adipisicing eli.</p>
                        <p className=' ho1 ho11 text-secondary text-center mt-5'>
                            <img src={img2} className='' />
                            <p> Lorem ipsum dolor sit amet conse  ctetur adipisicing elit sed do eiusmod sed do sed do , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod</p>
                        </p>
                        <p className='ho1 text-secondary'> Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut  Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                        <div className='d-flex hn1'>
                            <p className='text-secondary ho1 ho11'>Lorem ipsum dolor  amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt </p>
                            <img src='https://cdn.shopify.com/s/files/1/0026/2956/6516/files/12_large.png?v=1533833654' className='ho2' />
                        </div>
                        <p className='text-secondary ho1'>labore et dolore magna aliqua. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <p className='ho3 mt-5'>Sample Unordered List</p>
                        <ul className='hn2'>
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


                    <div className='col-lg-4 '>
                        <div className='b12 hide54'>
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
            <hr className='mt-5 hide55'></hr>


            {/* -----FOOTER------ */}

            <div className='container side5 hide57  '>
                <p className='foo1 text-center mt-4'>NEWSLETTER SUBSCRIPTION</p>
                <p className='text-secondary foo2 text-center'>Sign up for Shella updates to receive information about new arrivals, future events and specials.</p>
                <div className='d-flex justify-content-center mt-4'>
                    <input type='text' className='foo3' placeholder='Enter your Email Address' />
                    <div className='foo4'>
                        <p className=' text-center mt-1 '>SUBSCRIBE!</p>
                    </div>
                </div>
            </div>
            <hr className='mt-5 hide57'></hr>

            <div className='container '>
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



            {/*   RESPONSIVE FOOTER */}

            <div className='row f11'>
                <div className='col-sm-12 '>
                    <div className=''>
                        <p className='foot5  text-center mt-4'>NEWSLETTER SUBSCRIPTION</p>
                        <p className='foot6 text-secondary text-center'>Sign up for Shella updates to receive information about new arrivals, future events and specials.</p>
                    </div>

                </div>

                <div className='col-sm-12'>
                    <div className='d-flex mt-2'>
                        <input type="text" placeholder='Enter Your Email Address' className='foot7' />
                    </div>

                    <div className='col-sm-12'>
                        <div className='foot18 mt-3  text-center'>SUBSCRIBE!</div>
                    </div>

                    <div className='col-sm-12'>
                        <div className='d-flex mt-3'>
                            <div className="form-check b10">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <p className='ft8 text-center'>I agree with the Privacy. Tristique senectus et netus et malesuada. Nunc scelerisque viverra mauris in.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='row footer3 mt-4 '>
                <div className='col-sm-12'>
                    <hr className=''></hr>
                    <div className='' onClick={() => setShowText(!showText)}
                    //  {active === 1 ? setShowText(!showText)  : ""}

                    >
                        <p className='foot16 '>SHOP<span className='ic3'><BsPlus /></span> </p>
                    </div>
                    <div className=''>
                        {
                            showText && <>
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
                    <div className='' onClick={() => setShowTextt(!showTextt)}>
                        <p className='foot15 '>INFORMATION <span className='mob6'><BsPlus /></span></p>
                    </div>
                    <div className=''>
                        {
                            showTextt && <>
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

                <div className='col-sm-12'>
                    <div className='' onClick={() => setShowText11(!showText11)}>
                        <p className='mob3 '>HERE TO HELP <span className='mob4'><BsPlus /></span></p>
                    </div>
                    <div>
                        {
                            showText11 && <>
                                <p className='foot33 text-secondary text-center'>Have a question? You may find an answer in our FAQs.But you can also contact us:</p>
                                <p className='foot33  text-center'>Customer Service</p>
                                <div className='d-flex justify-content-center'>
                                    <IoCallOutline className='ft13' />
                                    <p className='text-secondary ft14'>Call Us: 800-123-4567</p>
                                </div>

                                <div className='d-flex justify-content-center'>
                                    <TfiAlarmClock className='ft13' />
                                    <p className='text-secondary ft14'>
                                        Mon-Fri: 9:00 am - 6:00 pm<br />
                                        Sat: 9:00 am - 4:00 pm<br />
                                        Sun: 9:00 am - 2:00 pm</p>
                                </div>

                                <div className='d-flex justify-content-center'>
                                    <VscMail className='ft13' />
                                    <p className='text-secondary ft14'>Send us an email</p>
                                </div>

                            </>
                        }
                        <hr className=''></hr>
                    </div>
                </div>
            </div>

            <br /> <br />
            {/* <hr className='hide4'></hr> */}








            <div className='container hide1'>
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


            <div className='container'>
                <div className='hide2 '>
                    <div className='row ft18'>
                        <div className='col-md-12 '>
                            <h5 className=' text-center mt-2 navi1'> <i className='navic'>Shella</i></h5>

                        </div>

                        <div className='col-md-12 '>

                            <p className='text-secondary text-center ft19'>© 2023 Shella Shopify theme. All Rights Reserved. Ecommerce Software by Shopify.</p>
                        </div>

                        <div className=' col-md-12 d-flex justify-content-center  '>
                            <div className='d-flex mt-2'>
                                <BiLogoVisa className='b11' />
                                <RiMastercardFill className='b11' />
                                <FaCcPaypal className='b11' />
                                <LiaCcDiscover className='b11' />
                                <FaCcAmazonPay className='b11' />
                            </div>

                        </div>

                    </div>
                </div>


            </div>



























            <div className='foo10  text-white d-flex justify-content-center'>
                <a href='#heades'> <BsArrowUp className='mt-2 foo12' /></a>
            </div>




        </div>
    );
}

export default Blog_Home;