import React, { useState } from 'react';
import { GoQuestion } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import { BsHeart } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineInbox } from 'react-icons/ai';
import { MdPayment } from 'react-icons/md';
import { HiArrowUturnLeft } from 'react-icons/hi2';
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
import { IoCallOutline } from 'react-icons/io5';
import { TfiAlarmClock } from 'react-icons/tfi';
import { VscMail } from 'react-icons/vsc';
import { IoIosArrowDown } from 'react-icons/io';
import Women from '../Components/Women';
import Mens from '../Components/Mens';
import Layout from '../Components/Layout';
import Shop from '../Components/Shop';
import { BsPlus } from 'react-icons/bs'
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'
import { RiMenuSearchLine } from 'react-icons/ri'
import { Link } from "react-router-dom";
import { BsArrowUp } from 'react-icons/bs';


function Customer(props) {
    const [active, IsActive] = useState(0);
    const [showText, setShowText] = useState(false);
    const [showTextt, setShowTextt] = useState(false);
    const [showText1, setShowText1] = useState(false);
    const [showText11, setShowText11] = useState(false);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);

    const navigate = useNavigate();

    const handle = () => {
        navigate('/')

    }


    return (
        <div>


            {/* ---HEADER----*/}

            <div className='' id='topp1' >
                <p className='gallery text-center text-white '>FINAL CLEARANCE: Take 20% off 'Sale Must-Haves' </p>
            </div>
            <div className='container hide1'>
                <div className='row gallery1' id='heades'>
                    <div className='col-lg-6' onClick={handle}>
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
            <hr className='navi3 hide1'></hr>


            {/* ----NAVIGATION BAR---- */}


            <div className='container hide1'>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-lg-0  a6" >

                                <li className="nav-item a2 ">
                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(1)} style={active === 1 ? { color: 'black ' } : { color: 'rgb(113, 107, 110)' }}>
                                        LAYOUTS <span className='nav9'><IoIosArrowDown /></span> </a>
                                </li>
                                <li className="nav-item a1 ">
                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(2)} style={active === 2 ? { color: 'black ' } : { color: ' rgb(113, 107, 110)' }}>SHOP <span className='nav9'><IoIosArrowDown /></span></a>
                                </li>


                                <li className="nav-item a1 ">
                                    <div className=' dropdown ' onMouseOver={() => IsActive(3)} style={active === 3 ? { color: 'black' } : { color: ' rgb(113, 107, 110)' }}>
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
                                    <div className=' dropdown ' onMouseOver={() => IsActive(4)} style={active === 4 ? { color: 'black' } : { color: ' rgb(113, 107, 110)' }}>
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
                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(6)} style={active === 6 ? { color: ' black ' } : { color: 'rgb(113, 107, 110)' }}>WOMEN'S <span className='nav9'><IoIosArrowDown /></span></a>
                                </li>
                                <li className="nav-item a1">
                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(7)} style={active === 7 ? { color: ' black' } : { color: ' rgb(113, 107, 110)' }}>MEN'S <span className='nav9'><IoIosArrowDown /></span></a>
                                </li>
                                <li className="nav-item  a1">
                                    <a className="nav-link d-flex" href="#"
                                        onMouseOver={() => IsActive(8)} style={active === 8 ? { color: 'black  ' } : { color: 'rgb(113, 107, 110)' }}
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
            <hr className='navi3 hide1'></hr>

            {/* NAVIGATION RESPONSIVE */}


            {/* <div className='container-fluid hide2'>
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

            </div> */}


            <div className=' hide2'>

                <div className=' '>
                    <div className='mkk1'>
                        <div className='d-flex '>
                            <a className="btn new21" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <RiMenuSearchLine />
                            </a>

                            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                                <div class="offcanvas-header">

                                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>
                                <div class="offcanvas-body">
                                    <div className=''>
                                        <div className='d-flex'>
                                            <input type="text" value="Search Product..." className='off1' />
                                            <BsSearch className='off3' />
                                        </div>
                                        <hr className='off2'></hr>


                                        <div className='mt-2'>
                                            <div className='' onClick={() => setShow(!show)} >
                                                <p className='off6 d-flex'>LAYOUTS<span className='off5'><IoIosArrowForward /></span> </p>
                                            </div>
                                            <div className=''>
                                                {
                                                    show && <>


                                                        <div className='row'>
                                                            <div className='col'>

                                                                <div className='' >
                                                                    <p className='text-black text-black lay1  mt-4 '>LAYOUTS</p>
                                                                    <div className='text-secondary lay2 d-flex mt-1'>
                                                                        <Link className="nav-link" aria-current="page" to="/homev1">
                                                                            HomeV1
                                                                        </Link>
                                                                        <div className='lay4 text-white text-center'>HOT</div>
                                                                    </div>
                                                                    <div className='lay3 text-secondary mt-1'>
                                                                        <Link className="nav-link" aria-current="page" to="/blog">
                                                                            Blog
                                                                        </Link>

                                                                    </div>
                                                                    <div className='lay3 text-secondary d-flex mt-1'>
                                                                        <Link className="nav-link" aria-current="page" to="/Gallery">
                                                                            Gallery
                                                                        </Link>

                                                                        <div className='lay4 text-white text-center'>HOT</div>
                                                                    </div>
                                                                    <div className='lay3 text-secondary mt-1'>
                                                                        <Link className="nav-link" aria-current="page" to="/aboutus">
                                                                            About Us
                                                                        </Link>
                                                                    </div>

                                                                    <div className='lay3 text-secondary d-flex mt-1'>
                                                                        <Link className="nav-link" aria-current="page" to="/customer">
                                                                            Customer
                                                                        </Link>

                                                                        <div className='lay5 text-white text-center'>ACTIVE</div>
                                                                    </div>
                                                                    <div className='lay3 text-secondary d-flex mt-1'>HomeV6

                                                                        <div className='lay4 text-white text-center'>HOT</div>
                                                                    </div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV7</div>

                                                                    <div className='lay3 text-secondary d-flex mt-1'>HomeV8
                                                                        <div className='lay6 text-white text-center'>SLIDER</div>
                                                                    </div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV9</div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV10</div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV11</div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV12</div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV13</div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV14</div>
                                                                    <div className='lay3 text-secondary mt-1'>HomeV15</div>
                                                                    <div className='lay3 text-secondary d-flex mt-1'>HomeV16
                                                                        <div className='lay4 text-white text-center'>HOT</div>
                                                                    </div>

                                                                    <div className='lay3 text-secondary d-flex mt-1'>HomeV17
                                                                        <div className='lay4 text-white text-center'>HOT</div>
                                                                        <div className='lay6 text-white text-center'>NEW</div>
                                                                    </div>
                                                                    <div className='lay3 text-secondary d-flex mt-1'>HomeV18
                                                                        <div className='lay4 text-white text-center'>HOT</div>
                                                                        <div className='lay6 text-white text-center'>NEW</div>
                                                                    </div>


                                                                </div>

                                                            </div>
                                                            <div className='col'>
                                                                <div className='' >
                                                                    <p className='text-black text-black lay1  mt-4 '>SKINS</p>
                                                                    <div className='text-secondary lay2 d-flex'>SKIN1-<span> Boutique</span>

                                                                    </div>
                                                                    <div className='text-secondary lay2 d-flex mt-1'>SKIN2-<span> Books</span>
                                                                    </div>

                                                                    <div className='text-secondary lay2 d-flex mt-1'>SKIN3-<span>Jewellery</span>
                                                                    </div>


                                                                    <div className='lay2 d-flex text-secondary mt-1'>SKIN4-<span>Product</span>
                                                                        <div className='lay4 text-white text-center'>HOT</div>

                                                                    </div>

                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN5-<span>Tools</span>
                                                                    </div>
                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN6-<span>Gadgets</span>
                                                                    </div>
                                                                    <div className='lay2 text-secondary mt-1'>SKIN7-<span>Furniture</span>
                                                                    </div>

                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN8-<span>Cosmetics</span>

                                                                    </div>
                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN9-<span>Computers</span></div>
                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN10-<span>Kitchen</span></div>
                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN11-<span>Christmas</span></div>

                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN12-<span>Cannabis</span>
                                                                        <div className='lay4 text-white text-center '>HOT</div>

                                                                    </div>

                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN13-<span>Wine</span>
                                                                        <div className='lay10 text-white text-center '>NEW</div>
                                                                    </div>

                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN14- <span>FoodDelivery</span>
                                                                        <div className='lay10 text-white text-center '>NEW</div>
                                                                    </div>

                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN15-<span>Lenses</span>
                                                                        <div className='lay10 text-white text-center '>NEW</div>
                                                                    </div>
                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN16-<span>Cakes</span>
                                                                        <div className='lay10 text-white text-center '>NEW</div>
                                                                    </div>

                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN17-<span>Plants</span>

                                                                        <div className='lay10 text-white text-center '>NEW</div>
                                                                    </div>
                                                                    <div className='lay2 text-secondary d-flex mt-1'>SKIN18-<span>Pasta</span>

                                                                        <div className='lay10 text-white text-center  '> NEW</div>
                                                                    </div>


                                                                </div>

                                                            </div>

                                                        </div>
                                                    </>
                                                }
                                            </div>

                                        </div>




                                        <div className='mt-2 '>
                                            <div className='' onClick={() => setShow1(!show1)}>
                                                <p className='off6 d-flex'>SHOP<span className='off7'><IoIosArrowForward /></span> </p>
                                            </div>

                                            <div className=''>
                                                {
                                                    show1 && <>

                                                        <div className='row'>
                                                            <div className='col'>
                                                                <div className=''>
                                                                    <p className='shop1 text-black'>COLLECTION LAYOUTS</p>
                                                                    <div className='text-secondary shop2 '>List Collections V1</div>
                                                                    <div className='text-secondary shop2 mt-1'>List Collections V2</div>
                                                                    <div className='text-secondary shop2 mt-1'>2 Products per Row</div>
                                                                    <div className='text-secondary shop2 mt-1'>3 Products per Row</div>
                                                                    <div className='text-secondary shop2 mt-1'>4 Products per Row</div>
                                                                    <div className='text-secondary shop2 mt-1'>List Products</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex'>List Products V2
                                                                        <div className='shop3 text-white text-center mt-1'>HOT</div>
                                                                        <div className='shop4 text-white text-center mt-1  d-flex'>NEW</div>
                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1'>Left Sidebar </div>
                                                                    <div className='text-secondary shop2 mt-1'>Right Sidebar </div>
                                                                    <div className='text-secondary shop2 mt-1'>Left Sidebar </div>
                                                                </div>
                                                            </div>

                                                            <div className='col'>
                                                                <div className=''>
                                                                    <p className='shop1 text-black'>SINGLE PRODUCTS LAYOUTS</p>
                                                                    <div className='text-secondary shop2 '>Product V1- Classic</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Product V2- Thumbs List</div>
                                                                    <div className='text-secondary shop2 mt-1'>Product V3- 3 Columns</div>
                                                                    <div className='text-secondary shop2 mt-1'>Product V4- Sticky Side</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex'>Product V5- Grid
                                                                        <div className='shop3 text-white text-center mt-1'>HOT</div>
                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1'>Product V6- Slider</div>
                                                                    <div className='text-secondary shop2 mt-1'>Product V1- With Column</div>
                                                                    <div className='text-secondary shop2 mt-1'>Product V2- With Column</div>
                                                                    <div className='text-secondary shop2 d-flex mt-1'>3D Model and Video
                                                                        <div className='shop3 text-white text-center mt-1'>HOT</div>
                                                                    </div>
                                                                    <div className='text-secondary shop2 d-flex mt-1'>Pre Order
                                                                        <div className='shop3 text-white text-center mt-1'>HOT</div>
                                                                        <div className='shop4 text-white text-center d-flex mt-1'>NEW</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className='col-sm-12'>
                                                                <div className='text-center mt-5'>
                                                                    <p className='shop1 text-black'>PRODUCT OPTIONS</p>
                                                                    <div className='text-secondary shop2 '>On Listing</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Color,Text</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Image,Text</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Big Image,Text</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Color,Select Dropdown</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Small text,Text</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex justify-content-center'>Custom Image,Text
                                                                        <div className='shop4 text-white text-center mt-1  d-flex'>NEW</div>
                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1 '>Custom Big Image</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Custom Color,Text</div>
                                                                    <div className='text-secondary shop2 mt-1 '>Square Color,Text</div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </>
                                                }
                                            </div>

                                        </div>





                                        <div className='mt-2'>
                                            <div className='' onClick={() => setShow2(!show2)}>
                                                <p className='off6 d-flex'>BLOG<span className='off7'><IoIosArrowForward /></span> </p>
                                            </div>

                                            <div className=''>
                                                {
                                                    show2 && <>
                                                        <div className=''>
                                                            <p className='foot33 text-secondary text-center'>Blog V1-Classic</p>
                                                            <p className='foot33 text-secondary text-center'>Blog V2-Grid</p>
                                                            <p className='foot33 text-secondary text-center'>Blog V3-Masonry</p>
                                                            <p className='foot33 text-secondary text-center'>Blog V4-Slider</p>
                                                            <p className='foot33 text-secondary text-center'>Single Post</p>
                                                        </div>
                                                    </>
                                                }

                                            </div>

                                        </div>




                                        <div className='mt-2'>
                                            <div className='' onClick={() => setShow3(!show3)}>
                                                <p className='off6 d-flex'>GALLERY<span className='off5'><IoIosArrowForward /></span> </p>
                                            </div>

                                            <div className=''>
                                                {
                                                    show3 && <>
                                                        <div className='text-center'>
                                                            <p className='foot33 text-secondary text-center'>Gallery V1-Masonry</p>
                                                            <p className='foot33 text-secondary text-center'>Gallery V1-imagess</p>
                                                            <p className='foot33 text-secondary text-center'>Gallery V1-cases</p>
                                                            <p className='foot33 text-secondary text-center'>Gallery V1-Masonry</p>
                                                            <p className='foot33 text-secondary text-center'>Single Post</p>
                                                        </div>

                                                    </>
                                                }

                                            </div>

                                        </div>




                                        <div className='mt-2 '>
                                            <div className='' onClick={() => setShow4(!show4)} >
                                                <p className='off6 d-flex'>PAGES<span className='off8'><IoIosArrowForward /></span> </p>
                                            </div>

                                            <div>
                                                {
                                                    show4 && <>

                                                        <div className='text-center'>
                                                            <p className='foot33 text-secondary text-center'>About us</p>
                                                            <p className='foot33 text-secondary text-center'>Customer Service</p>
                                                            <p className='foot33 text-secondary text-center'>Sizing Guide</p>
                                                            <p className='foot33 text-secondary text-center'>FAQ's</p>
                                                            <p className='foot33 text-secondary text-center'>Contact us</p>
                                                            <p className='foot33 text-secondary text-center'>Coming Soon</p>
                                                            <p className='foot33 text-secondary text-center'>Page 404</p>
                                                            <p className='foot33 text-secondary text-center'>Contact Builder</p>
                                                        </div>

                                                    </>
                                                }
                                            </div>

                                        </div>

                                        <div className='mt-2'>
                                            <div className='' onClick={() => setShow5(!show5)}>
                                                <p className='off6 d-flex'>WOMEN'S<span className='off9'><IoIosArrowForward /></span> </p>
                                            </div>

                                            <div className=''>
                                                {
                                                    show5 && <>
                                                        <div className='row'>
                                                            <div className='col'>
                                                                <div className=''>
                                                                    <p className='shop1 text-black'>CLOTHING</p>
                                                                    <div className='text-secondary shop2 '>Coats</div>
                                                                    <div className='text-secondary shop2 mt-1'>Jackets</div>
                                                                    <div className='text-secondary shop2 mt-1'>Blazers</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex'>Dressess

                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1'>Playsuits & Jackets</div>
                                                                    <div className='text-secondary shop2 mt-1'>Trousers</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex'>Jeans
                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1'>Knitwear</div>
                                                                    <div className='text-secondary shop2 mt-1'>Sweatshirts & Hoddies </div>
                                                                    <div className='text-secondary shop2 mt-1'>T-shirts </div>

                                                                </div>
                                                            </div>

                                                            <div className='col'>
                                                                <div className=''>
                                                                    <p className='shop1 text-black'>SHOES</p>
                                                                    <div className='text-secondary shop2 '>Trainers</div>
                                                                    <div className='text-secondary shop2 mt-1'>Boots and Ankle Boots</div>

                                                                    <div className='text-secondary shop2 mt-1 d-flex'>Heels

                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1'>Flats</div>
                                                                    <div className='text-secondary shop2 mt-1'>Platforms</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex'>Heeled Sandals</div>
                                                                </div>
                                                            </div>

                                                            <div className='col'>
                                                                <div className=''>
                                                                    <p className='shop1 text-black'>ACCESSORIES</p>
                                                                    <div className='text-secondary shop2 '>Bags</div>
                                                                    <div className='text-secondary shop2 mt-1'>BagsPacks</div>
                                                                    <div className='text-secondary shop2 mt-1'>Glasses</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex'>Jewellery

                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1'>Earings</div>
                                                                    <div className='text-secondary shop2 mt-1'>iPhone Cases</div>
                                                                    <div className='text-secondary shop2 mt-1 d-flex'>Gadgets
                                                                    </div>
                                                                    <div className='text-secondary shop2 mt-1'>Hats & Beanie</div>
                                                                    <div className='text-secondary shop2 mt-1'>Purses</div>
                                                                    <div className='text-secondary shop2 mt-1'>Belts</div>
                                                                    <div className='text-secondary shop2 mt-1'>Socks</div>

                                                                </div>
                                                            </div>



                                                        </div>


                                                    </>
                                                }

                                            </div>
                                        </div>




                                        <div className='mt-2'>
                                            <div className='' onClick={() => setShow6(!show6)} >
                                                <p className='off6 d-flex'>MEN'S<span className='off8'><IoIosArrowForward /></span> </p>
                                            </div>
                                            <div>
                                                {
                                                    show6 && <>

                                                        <div className='row'>
                                                            <div className='col'>
                                                                <p className='shop1 mt-5 text-black'>CLOTHING</p>
                                                                <div>
                                                                    <img src='https://shella-demo5.myshopify.com/cdn/shop/files/09_170x.progressive.png.jpg?v=1614334854' alt='' className='' />
                                                                </div>
                                                                <div className='text-secondary shop2 mt-1'>Coats</div>
                                                                <div className='text-secondary shop2 mt-1 d-flex'>Jackets
                                                                    <div className='shop3 text-white text-center mt-1'>SALE</div>
                                                                </div>
                                                                <div className='text-secondary shop2 mt-1'>Jeans</div>
                                                                <div className='text-secondary shop2 mt-1'>T-shirts</div>
                                                                <div className='text-secondary shop2 mt-1'>Sweatshirts</div>
                                                                <div className='text-secondary shop2 mt-1'>Knitwear</div>
                                                                <div className='text-secondary shop2 mt-1'>Shirts</div>
                                                                <div className='text-secondary shop2 mt-1'>Trousers</div>
                                                                <div className='text-secondary shop2 mt-1'>Shorts</div>

                                                            </div>


                                                            <div className='col'>
                                                                <p className='shop1 mt-5 d-flex text-black'>SHOES

                                                                </p>
                                                                <div>
                                                                    <img src='https://shella-demo5.myshopify.com/cdn/shop/files/10_170x.progressive.png.jpg?v=1614334854' alt='' className='' />
                                                                </div>
                                                                <div className='text-secondary shop2 mt-1'>Trainers</div>
                                                                <div className='text-secondary shop2 mt-1'>Boots & Ankle Boots</div>
                                                                <div className='text-secondary shop2 mt-1'></div>
                                                                <div className='text-secondary shop2 mt-1'>Shoes</div>
                                                                <div className='text-secondary shop2 mt-1'>Sandals</div>
                                                                <div className='text-secondary shop2 mt-1'>Knitwear</div>
                                                                <div className='text-secondary shop2 mt-1'>Shirts</div>
                                                                <div className='text-secondary shop2 mt-1'>Trousers</div>
                                                            </div>


                                                        </div>

                                                    </>
                                                }
                                            </div>
                                        </div>




                                        <div className='   mt-2 '>
                                            <div className=''>
                                                <p className='off6 d-flex'>BUY NOW!<span className='off9'><IoIosArrowForward /></span> </p>
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>


                            <div className='new22' onClick={handle}>
                                <p className='text-white d-flex justify-content-center new23'>S</p>
                            </div>  

                            <div className='d-flex new24'>
                                <CiSearch className='new25' />
                                <GoQuestion className='new25' />
                                <GoPerson className='new25' />
                                <BsHeart className='new25' />
                                <HiOutlineShoppingBag className='off13' />

                            </div>

                        </div>

                    </div>
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
            </div>


            <hr className='navi3 hide71'></hr>


            {/* ----HOME---- */}

            <div className='container'>
                <div className='d-flex'>
                    <p className='home1 text-secondary'>Home<span className='home3'>/</span></p>
                    <p className='home2 text-secondary'>News</p>
                </div>

                <p className='customer text-center'>Customer Service</p>
                <p className='text-secondary customer1 text-center mt-5'>Should you require information or help, please contact us by email or by phone and we will be happy to assist you.</p>
                <div className='d-flex customer4'>
                    <AiOutlineInbox className='customer2' />
                    <p className='customer3'>SHIPPING TIMES AND COSTS</p>
                </div>

                <ul className='customer5 text-secondary'>
                    <li>Complimentary ground shipping within 1 to 7 business days</li>
                    <li>In-store collection available within 1 to 7 business days</li>
                    <li>Next-day and Express delivery options also available</li>
                    <li>Purchases are delivered in an orange box tied with a Bolduc ribbon, with the exception of certain items</li>
                    <li>See the delivery FAQs for details on shipping methods, costs and delivery times</li>
                </ul>

                <div className='d-flex mt-5 customer4'>
                    <MdPayment className='customer2' />
                    <p className='customer3'>PAYMENT METHODS</p>
                </div>
                <p className='customer6 text-secondary'>Shella accepts the following payment methods:-</p>
                <ul className='customer5 text-secondary'>
                    <li>Credit Card: Visa, MasterCard, Discover, American Express, JCB, Visa Electron. The total will be charged to your card when the<br /> order is shipped.</li>
                    <li>Shella features a Fast Checkout option, allowing you to securely save your credit card details so that you don't have to re-enter<br /> them for future purchases.</li>
                    <li>PayPal: Shop easily online without having to enter your credit card details on the website.Your account will be charged once<br /> the order is completed. To register for a PayPal account, visit the website paypal.com.</li>
                </ul>

                <div className='d-flex mt-5 customer5'>
                    <HiArrowUturnLeft className='customer2' />
                    <p className='customer3'>EXCHANGES, RETURNS AND REFUNDS</p>
                </div>
                <p className='text-secondary customer6 mt-2'>Items returned within 14 days of their original shipment date in same as new condition will be eligible for a full refund or store credit.,<br /> Refunds will be charged back to the original form of payment used for purchase. Customer is responsible for shipping charges when <br /> making returns and shipping/handling fees of original purchase is non-refundable.</p>

            </div>

            <hr className='mt-5'></hr>


            {/* ----FOOTER---- */}

            <div className='container hide1'>
                <div className=' row mt-5'>
                    <div className='col-lg-6 col-md-12'>
                        <div className=''>
                            <p className='ft1'>NEWSLETTER SUBSCRIPTION</p>
                            <p className='ft2 text-secondary'>Sign up for Shella updates to receive information about new arrivals, future events and specials.</p>
                        </div>

                        <div className='mt-5 d-flex '>
                            <div className='lk'>
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

                    <div className='col-lg-6 col-md-12'>
                        <div className='d-flex justify-content-center hide14'>
                            <input type='text' className='ft6' placeholder='Enter your Email Address' />
                            <div className='ft7'>
                                <p className=' text-center mt-1 '>SUBSCRIBE!</p>
                            </div>
                        </div>

                        <div className=' justify-content-center mt-4'>
                            <input type='text' className='ft66 hide2' placeholder='Enter your Email Address' />
                            <div className='ft77 hide2'>
                                <p className=' text-center mt-1 '>SUBSCRIBE!</p>
                            </div>
                        </div>


                        <div className='d-flex mt-3'>
                            <div className="form-check for3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                <p className='ft8 '>I agree with the Privacy. Tristique senectus et netus et malesuada. Nunc scelerisque viverra mauris in.</p>
                            </div>
                        </div>

                        <div className='d-flex for4'>
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

            <hr className='hide1'></hr>

            <div className='container'>
                <div className='hide1'>
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

            {/*  RESPONSIVE FOOTER */}


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

            <div className='row footer3 mt-4'>
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
            <hr className='hide4'></hr>




            {/* TABLET */}

            <div className='container'>
                <div className='hide2'>
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

            <div className='top11'>
                <a className='tp1 text-white d-flex justify-content-center mt-1' href='#topp1'><BsArrowUp className='mt-2 foo12' /></a>
            </div>

        </div>
    );
}

export default Customer;