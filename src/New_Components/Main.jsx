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
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from 'react-icons/io'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineMenuUnfold } from 'react-icons/ai'
import { Link } from "react-router-dom";
import { BsArrowUp } from 'react-icons/bs';

function Main(props) {
    const [active, IsActive] = useState(0);
    const [showText, setShowText] = useState(false);
    const [showTextt, setShowTextt] = useState(false);
    const [showText1, setShowText1] = useState(false);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);

    const navigate = useNavigate();
    const handleclick = () => {
        navigate('/')
    }


    return (
        <div>
            {/* ---- HEADER------ */}

            <div className=' d-flex head23' id='ttp'>
                {/* <p className=' head1' onClick={handleclick}>SHELLA</p> */}
                <h5 className='head1  mt-2 navi1' onClick={handleclick}> <i className='navic'>Shella</i></h5>
                <div className='d-flex head2 mt-1'>
                    <CiSearch className='head3' />
                    <HiOutlineShoppingBag className='head3' />
                    <p className='head4 mt-1'>Bag(0)</p>
                </div>
            </div>
            <hr className='head5'></hr>


            {/*-----NAVIGATION BAR-----*/}

            <div className='main51' >
                <p className='navii3 text-center text-white'>FINAL CLEARANCE: Take 20% off 'Sale Must-Haves' </p>
            </div>


            <div className='container hide1'>
                <nav className="navbar navbar-expand-lg navbar-light main50">
                    <div className="">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav  mb-lg-0  a6">

                                <li className="nav-item a2">
                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(1)} style={active === 1 ? { color: 'black ' } : { color: 'rgb(113, 107, 110)' }}>
                                        LAYOUTS<span className='nav9'><IoIosArrowDown /></span> </a>
                                </li>
                                <li className="nav-item a1">
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
                                    <div className=' dropdown ' onMouseOver={() => IsActive(4)} style={active === 4 ? { color: ' black' } : { color: 'rgb(113, 107, 110)' }}>
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
                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(7)} style={active === 7 ? { color: 'black  ' } : { color: 'rgb(113, 107, 110)' }}>MEN'S <span className='nav9'><IoIosArrowDown /></span></a>
                                </li>
                                <li className="nav-item  a1">
                                    <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(8)} style={active === 8 ? { color: 'black  ' } : { color: 'rgb(113, 107, 110)' }}>BUYNOW! <span className='nav9'><IoIosArrowDown /></span>  <div className='tab7 text-white text-center mt-1'>SALE</div></a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
                <div className=' a4'>
                    {
                        active == 1 && <>
                            <div className='container-fluid' onMouseLeave={() => IsActive(0)}>
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

            <div className=' hide2 sr1'>

                <div className=' '>
                    <div className='mkk1'>
                        <div className='d-flex '>
                            <a className="btn new21" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                                <AiOutlineMenuUnfold />
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
                                                                    <div className='lay10 text-white text-center'>NEW</div>
                                                                </div>
                                                                <div className='lay2 text-secondary d-flex mt-1'>SKIN16-<span>Cakes</span>
                                                                    <div className='lay10 text-white text-center '>NEW</div>
                                                                </div>

                                                                <div className='lay2 text-secondary d-flex mt-1'>SKIN17-<span>Plants</span>

                                                                    <div className='lay10 text-white text-center '>NEW</div>
                                                                </div>
                                                                <div className='lay2 text-secondary d-flex mt-1'>SKIN18-<span>Pasta</span>

                                                                    <div className='lay10 text-white text-center'> NEW</div>
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


                            <div className='new22'  onClick={handleclick}>
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


            <hr className='navi3 hide7'></hr>




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
                                    {/* <div className='main15  text-center mt-4 '>
                                        <p>DISCOVER MORE</p>
                                    </div> */}
                                    <div className='mn50'>
                                        <p className='mn51'>DISCOVER MORE</p>

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
                                    {/* <div className='main16 text-center mt-4 '>
                                        <p>DISCOVER MORE</p>
                                    </div> */}
                                    <div className='mn501'>
                                        <p className='mn51'>DISCOVER MORE</p>

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
                                    {/* <div className='main15  text-center'>DISCOVER MORE
                                    </div> */}
                                    <div className='mn5001'>
                                        <p className='mn51'>DISCOVER MORE</p>

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

                    </div>

                </div>


            </div>

            <div className='top11'>
                <a className='tp1 text-white d-flex justify-content-center mt-1' href='#ttp'><BsArrowUp className='mt-2 foo12' /></a>
            </div>

            {/* <div className='foo10  text-white d-flex justify-content-center'>
                <a href='#heades'> <BsArrowUp className='mt-2 foo12' /></a>
            </div> */}
        </div>
    );
}

export default Main;