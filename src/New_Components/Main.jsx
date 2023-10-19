import React, { useState } from 'react';
import img1 from '../main11.webp';
import img2 from '../main22.webp';
import imgc3 from '../cr11.jpg';
import imgc4 from '../cr22.jpg';
import imgc5 from '../cr33.jpg';
import imgc6 from '../cr44.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { CiSearch } from 'react-icons/ci'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BsPlus } from 'react-icons/bs'



import { BiLogoYoutube } from 'react-icons/bi'
import { SiSwiper } from 'react-icons/si'

import { GoQuestion } from 'react-icons/go'
import { GoPerson } from 'react-icons/go'
import { BsHeart } from 'react-icons/bs'
import { TbWeight } from 'react-icons/tb'
import { IoIosArrowDown } from 'react-icons/io'
import { LiaBalanceScaleSolid } from 'react-icons/lia'
import Layout from '../Components/Layout';
import Shop from '../Components/Shop';
import Women from '../Components/Women';
import Mens from '../Components/Mens';

function Main(props) {
    const [active, IsActive] = useState(0);
    const [showText, setShowText] = useState(false);
    const [showTextt, setShowTextt] = useState(false);
    const [showText1, setShowText1] = useState(false);
    return (
        <div>
            {/* ---- HEADER------ */}

            <div className=' d-flex head23'>
                <p className=' head1'>SHELLA</p>
                <div className='d-flex head2 mt-2'>
                    <CiSearch className='head3' />
                    <HiOutlineShoppingBag className='head3' />
                    <p className='head4 mt-1'>Bag(0)</p>
                </div>
            </div>
            <hr className='head5'></hr>


            {/* -----NAVIGATION BAR----- */}

            <div className='container navii2'>
                <nav class="navbar navbar-expand-lg navbar-light navv3 ">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav  mb-2 mb-lg-0 navv2">
                                <li class="nav-item">
                                    <a class="nav-link " aria-current="page" href="#">NEW</a>
                                </li>

                                <li class="nav-item dropdown">
                                    <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        CLOTHING
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Dressess & Jumpsuits</a></li>
                                        <li><a class="dropdown-item" href="#">Polo Suits</a></li>

                                        <li><a class="dropdown-item" href="#">T-shirts</a></li>
                                        <li><a class="dropdown-item" href="#">Sweaters</a></li>
                                        <li><a class="dropdown-item" href="#">Blazer</a></li>
                                        <li><a class="dropdown-item" href="#">Jackets</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        SHOES
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Dressess & Jumpsuits</a></li>
                                        <li><a class="dropdown-item" href="#">Polo Suits</a></li>

                                        <li><a class="dropdown-item" href="#">T-shirts</a></li>
                                        <li><a class="dropdown-item" href="#">Sweaters</a></li>
                                        <li><a class="dropdown-item" href="#">Blazer</a></li>
                                        <li><a class="dropdown-item" href="#">Jackets</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        ACCESSORIES
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Dressess & Jumpsuits</a></li>
                                        <li><a class="dropdown-item" href="#">Polo Suits</a></li>

                                        <li><a class="dropdown-item" href="#">T-shirts</a></li>
                                        <li><a class="dropdown-item" href="#">Sweaters</a></li>
                                        <li><a class="dropdown-item" href="#">Blazer</a></li>
                                        <li><a class="dropdown-item" href="#">Jackets</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        BUYNON!
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Back To Main</a></li>

                                    </ul>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>



                <div className='nav-2 d-flex'>
                    <nav class="navbar navbar-expand-lg navbar-light  navig1 ">
                        <div class="container-fluid">

                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav  mb-2 mb-lg-0 navv2">
                                    <li class="nav-item">
                                        <a class="nav-link " aria-current="page" href="#">NEW</a>
                                    </li>

                                    <li class="nav-item dropdown">
                                        <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            CLOTHING
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#">Dressess & Jumpsuits</a></li>
                                            <li><a class="dropdown-item" href="#">Polo Suits</a></li>

                                            <li><a class="dropdown-item" href="#">T-shirts</a></li>
                                            <li><a class="dropdown-item" href="#">Sweaters</a></li>
                                            <li><a class="dropdown-item" href="#">Blazer</a></li>
                                            <li><a class="dropdown-item" href="#">Jackets</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            SHOES
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#">Dressess & Jumpsuits</a></li>
                                            <li><a class="dropdown-item" href="#">Polo Suits</a></li>

                                            <li><a class="dropdown-item" href="#">T-shirts</a></li>
                                            <li><a class="dropdown-item" href="#">Sweaters</a></li>
                                            <li><a class="dropdown-item" href="#">Blazer</a></li>
                                            <li><a class="dropdown-item" href="#">Jackets</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            ACCESSORIES
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#">Dressess & Jumpsuits</a></li>
                                            <li><a class="dropdown-item" href="#">Polo Suits</a></li>

                                            <li><a class="dropdown-item" href="#">T-shirts</a></li>
                                            <li><a class="dropdown-item" href="#">Sweaters</a></li>
                                            <li><a class="dropdown-item" href="#">Blazer</a></li>
                                            <li><a class="dropdown-item" href="#">Jackets</a></li>
                                        </ul>
                                    </li>
                                    <li class="nav-item dropdown">
                                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            BUYNON!
                                        </a>
                                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a class="dropdown-item" href="#">Back To Main</a></li>

                                        </ul>
                                    </li>

                                </ul>

                            </div>
                        </div>
                    </nav>
                    <p className=' head11 navig1'>SHELLA</p>
                    <div className='d-flex head22 mt-2'>
                        <HiOutlineShoppingBag className='head33 navig1' />

                    </div>
                </div>
            </div>

            {/* <div className=' '>
                <div className=''>
                    <video width="100%" height="" preload='none' muted playsInline autoPlay loop className=''>
                        <source src="https://cdn.shopify.com/s/files/1/0264/8817/6717/files/pexels-cottonbro-9512045.mp4?v=1637151689" type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='nav1 d-flex text-white'>
                    <h5 className='text-white nav2 mt-2'> <i className='navic'>Shella</i></h5>
                    <div className='nav3  d-flex mt-2 '>
                        <div className='nav4 ' onMouseOver={() => IsActive(1)} style={active === 1 ? { color: '  rgb(113, 107, 110)' } : { color: '' }}>
                            <p className=' nav4 d-flex text-black'>LAYOUTS<span className='nav9'><IoIosArrowDown /></span> </p>
                        </div>

                        <div className='nav5' onMouseOver={() => IsActive(2)} style={active === 2 ? { color: '  rgb(113, 107, 110)' } : { color: '' }}>
                            <p className='nav5 d-flex'>SHOP  <span className='nav9'><IoIosArrowDown /></span></p>
                        </div>

                        <div className='nav5 dropdown ' onMouseOver={() => IsActive(3)} style={active === 3 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>
                            <p className='nav5 d-flex dropbtn' >BLOG  <span className='nav9'><IoIosArrowDown /></span> </p>
                            <div class="dropdown-content">
                                <a href="#" className='tab4 text-secondary'>Blog V1-Classic</a>
                                <a href="#" className='tab5  text-secondary'>Blog V2-Grid</a>
                                <a href="#" className='tab5 text-secondary'>Blog V3-Masonry</a>
                                <a href="#" className='tab5 text-secondary'>Blog V4-Slider</a>
                                <a href="#" className='tab5 text-secondary'>Single Post</a>

                            </div>
                        </div>

                        <div className='nav5 dropdown' onMouseOver={() => IsActive(4)} style={active === 4 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>
                            <p className='nav5 d-flex dropbtn'>GALLERY  <span className='nav9'><IoIosArrowDown /></span></p>
                            <div class="dropdown-content">
                                <a href="#" className='tab4 text-secondary'>Gallery V1-Masonry</a>
                                <a href="#" className='tab5  text-secondary'>Gallery V2-Masonry</a>
                                <a href="#" className='tab5 text-secondary'>Gallery V3-Grid </a>
                                <a href="#" className='tab5 text-secondary'>Gallery V4-Grid</a>
                                <a href="#" className='tab5 text-secondary'>Single </a>

                            </div>
                        </div>

                        <div className='nav5 dropdown' onMouseOver={() => IsActive(5)} style={active === 5 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>
                            <p className='nav5 d-flex dropbtn'>PAGES  <span className='nav9'><IoIosArrowDown /></span></p>
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

                        <div className='nav5' onMouseOver={() => IsActive(6)} style={active === 6 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>
                            <p className='nav5 d-flex'>WOMEN'S  <span className='nav9'><IoIosArrowDown /></span></p>
                        </div>

                        <div className='nav5' onMouseOver={() => IsActive(7)} style={active === 7 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>
                            <p className='nav5 d-flex'>MEN'S  <span className='nav9'><IoIosArrowDown /></span></p>
                        </div>

                        <div className='nav5' onMouseOver={() => IsActive(8)} style={active === 8 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>
                            <p className='nav5 d-flex'> BUYNOW!<span className='nav9'><IoIosArrowDown /></span>  <div className='tab7 text-white text-center mt-1'>SALE</div></p>

                        </div>

                    </div>
                    <div className=' tab1'>
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


                    <div className='d-flex nav6'>
                        <CiSearch className='nav7' onMouseOver={() => IsActive(9)} style={active === 9 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                        <GoQuestion className='nav7' onMouseOver={() => IsActive(10)} style={active === 10 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                        <GoPerson className='nav7' onMouseOver={() => IsActive(11)} style={active === 11 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                        <BsHeart className='nav7' onMouseOver={() => IsActive(12)} style={active === 12 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                        <LiaBalanceScaleSolid className="nav7" onMouseOver={() => IsActive(13)} style={active === 13 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                        <HiOutlineShoppingBag className='nav7' onMouseOver={() => IsActive(14)} style={active === 14 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                        <p className='nav8' onMouseOver={() => IsActive(15)} style={active === 15 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>Bag(0)</p>
                    </div>

                </div>

            </div> */}

            <div >
                <p className='navii3 text-center text-white '>FINAL CLEARANCE: Take 20% off 'Sale Must-Haves' </p>
            </div>




            <div className='container main2 '>
                <div className='m1'>
                    <img src='https://shella-fashion.myshopify.com/cdn/shop/files/slide_1170x.progressive.png.jpg?v=1614726512' alt='' className='mt-5 main1' />
                </div>
                <div className='main3 '>
                    <p className=' text-center main4 '>FINAL</p>
                    <p className=' text-center main5'>CLEARANCE</p>
                    <p className=' text-center main6'> Take 20% Off 'Sale Must -Haves'</p>
                    <div className='main7  text-center  '>
                        DISCOVER MORE
                    </div>
                </div>


                <div className='maj1'>
                    <img src='https://shella-fashion.myshopify.com/cdn/shop/files/slide_1170x.progressive.png.jpg?v=1614726512' alt='' className='mt-5 main1' />
                </div>
                <div className='maj2'>
                    <p className=' text-center main4 '>FINAL</p>
                    <p className=' text-center main5'>CLEARANCE</p>
                    <p className=' text-center main6'> Take 20% Off 'Sale Must -Haves'</p>
                    <div className='main7  text-center  '>
                        DISCOVER MORE
                    </div>
                </div>





                <div className='man1'>
                    <p className=' text-center main4 mt-3 '>FINAL</p>
                    <p className=' text-center main5'>CLEARANCE</p>
                    <p className=' text-center main6'> Take 20% Off 'Sale Must -Haves'</p>
                    <div className='main7  text-center  '>
                        DISCOVER MORE
                    </div>
                    <img src={imgc6} alt='' className='mt-3 main1' />
                </div>





                <br /> <br />


                <div>
                    <p className='text-center main8'>Shop by Category</p>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-12 main22'>
                            <img src='	https://shella-fashion.myshopify.com/cdn/shop/files/02_297x.progressive.png.jpg?v=1614727412' alt='' className='main21' />
                            <h5 className='text-center mt-2 main9'>NEW</h5>
                            <p className='text-center main10 text-secondary'>24 product</p>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <img src='	https://shella-fashion.myshopify.com/cdn/shop/files/03_297x.progressive.png.jpg?v=1614727412' className='main21' />
                            <h5 className='text-center mt-2 main9'>CLOTHING</h5>
                            <p className='text-center main10 text-secondary'>20 product</p>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <img src={img1} className='main21' />
                            <h5 className='text-center mt-2 main9'>SHOES</h5>
                            <p className='text-center main10 text-secondary'>15 product</p>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-12'>
                            <img src={img2} className='main21' />
                            <h5 className='text-center mt-2 main9'>ACCESSORIES</h5>
                            <p className='text-center main10 text-secondary'>32 product</p>
                        </div>

                    </div>
                </div>
                <br /> <br />


                <div>
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                    >

                        <SwiperSlide>
                            <div className='main11'>
                                <img src="	https://shella-fashion.myshopify.com/cdn/shop/files/06_1170x.progressive.png.jpg?v=1614727412" className='main23' />
                                <div className=' main12'>
                                    <h1 className='fw-bold main13'>THE NAVI BLAZER</h1>
                                    <p className='main14'>Springs Layer to Brings Now</p>
                                    <div className='main15  text-center mt-4 '>
                                        <p>   DISCOVER MORE</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='main11'>
                                <img src="https://shella-fashion.myshopify.com/cdn/shop/files/07_1170x.progressive.png.jpg?v=1614727415" className='main23' />
                                <div className=' main12'>
                                    <h1 className='fw-bold t2 main13'>THE PANT</h1>
                                    <p className='main14'>Springs Layer to Brings Now</p>
                                    <div className='main16 text-center mt-4 '>
                                        <p>   DISCOVER MORE</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='main11'>
                                <img src="	https://shella-fashion.myshopify.com/cdn/shop/files/08_1170x.progressive.png.jpg?v=1614727415" className='main23' />
                                <div className=' main12'>
                                    <h1 className='fw-bold t2 main13 text-white'>THE TRENCH COAT</h1>
                                    <p className='main14'>Springs Layer to Brings Now</p>
                                    <div className='main15  text-center'>DISCOVER MORE
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>



                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        <SwiperSlide>
                            <div className='m11'>
                                <h1 className=' main133 text-center'>THE NAVI BLAZER</h1>
                                <p className='main144 text-center'>Springs Layer to Brings Now</p>
                                <div className='main155  text-center mt-4 '>
                                    <p>   DISCOVER MORE</p>
                                </div>

                                <img src={imgc3} className='main233' />

                                <br /> <br />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='m12'>
                                <h1 className=' main133 text-center'>THE WEISST PANT</h1>
                                <p className='main144 text-center'>Springs Layer to Brings Now</p>
                                <div className='main155  text-center mt-4 '>
                                    <p>   DISCOVER MORE</p>
                                </div>

                                <img src={imgc4} className='main233' />

                                <br /> <br />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='m13'>
                                <h1 className=' main133 text-center text-white'>THE TRENCH COAT</h1>
                                <p className='main144 text-center'>Springs Layer to Brings Now</p>
                                <div className='main155  text-center mt-4 '>
                                    <p>   DISCOVER MORE</p>
                                </div>

                                <img src={imgc5} className='main233' />

                                <br /> <br />
                            </div>
                        </SwiperSlide>
                    </Swiper>


                </div>
                <br /> <br />

                <div>
                    <div className='row'>
                        <div className='col-lg-4 main22'>
                            <img src='https://shella-fashion.myshopify.com/cdn/shop/files/09_408x.progressive.png.jpg?v=1614727415' className='main17 main21' />
                            <h5 className='text-center mt-4 main18'>SPRING</h5>
                            <p className='text-center main19 text-secondary'>DISCOVER MORE</p>
                        </div>

                        <div className='col-lg-4 main22'>
                            <img src='	https://shella-fashion.myshopify.com/cdn/shop/files/10_408x.progressive.png.jpg?v=1614727415' className='main17 main21' />
                            <h5 className='text-center mt-4 main18'>DRESSES</h5>
                            <p className='text-center main19 text-secondary'>DISCOVER MORE</p>
                        </div>

                        <div className='col-lg-4 main22'>
                            <img src='https://shella-fashion.myshopify.com/cdn/shop/files/11_408x.progressive.png.jpg?v=1614727415' className='main17 main21' />
                            <h5 className='text-center mt-4 main18'>JACKETS</h5>
                            <p className='text-center main19 text-secondary'>DISCOVER MORE</p>
                        </div>

                    </div>
                    <br />
                </div>
            </div>
            <hr></hr>

            {/* ------FOOTER----- */}


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
                            <p className='foot15 '>INFORMATION <span className='ic1'><BsPlus /></span></p>
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



        </div>
    );
}

export default Main;