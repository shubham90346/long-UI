import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import Women from '../Components/Women';
import Mens from '../Components/Mens';
import Layout from '../Components/Layout';
import Shop from '../Components/Shop';
import { CiSearch } from 'react-icons/ci'
import { GoQuestion } from 'react-icons/go'
import { GoPerson } from 'react-icons/go'
import { BsHeart } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { RiMenuSearchLine } from 'react-icons/ri'
import { LiaBalanceScaleSolid } from 'react-icons/lia'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoYoutube } from 'react-icons/bi'
import { SiSwiper } from 'react-icons/si'

import { IoIosArrowForward } from 'react-icons/io'
import { Link } from "react-router-dom";
function New_Home(props) {
    const [active, IsActive] = useState(0);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);



    return (
        <div>
            <div>
                <div className=''>
                    <video preload='none' width="100%" muted playsInline autoPlay loop className='new1 new31'>
                        <source src="https://cdn.shopify.com/s/files/1/0264/8817/6717/files/pexels-cottonbro-9512045.mp4?v=1637151689" type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>


                {/* ----NAVBAR--- */}


                <div className=' new2 '>


                    <div className='container d-flex new14'>
                        <h5 className='text-white new9'> <i className='navic'>Shella</i></h5>

                        <nav className="navbar navbar-expand-lg navbar-light new3">
                            <div className="">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav  mb-lg-0  a6" >


                                        <li className="nav-item a2 ">
                                            <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(1)} style={active === 1 ? { color: 'rgb(113, 107, 110)' } : { color: 'white' }}>
                                                LAYOUTS <span className='nav9'><IoIosArrowDown /></span> </a>
                                        </li>

                                        <li className="nav-item a1 ">
                                            <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(2)} style={active === 2 ? { color: 'rgb(113, 107, 110) ' } : { color: 'white ' }}>SHOP <span className='nav9'><IoIosArrowDown /></span></a>
                                        </li>


                                        <li className="nav-item a1 ">
                                            <div className=' dropdown ' onMouseOver={() => IsActive(3)} style={active === 3 ? { color: 'rgb(113, 107, 110)' } : { color: 'white ' }}>
                                                <a className="nav-link d-flex text-white" href="#">BLOG<span className='nav9'><IoIosArrowDown /></span></a>
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
                                            <div className=' dropdown ' onMouseOver={() => IsActive(4)} style={active === 4 ? { color: 'rgb(113, 107, 110)' } : { color: 'white ' }}>
                                                <a className="nav-link d-flex text-white" href="#">GALLERY<span className='nav9'><IoIosArrowDown /></span></a>
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
                                            <div className=' dropdown ' onMouseOver={() => IsActive(5)} style={active === 5 ? { color: 'rgb(113, 107, 110) ' } : { color: 'white' }}>
                                                <a className="nav-link d-flex text-white" href="#">PAGES<span className='nav9'><IoIosArrowDown /></span></a>
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
                                            <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(6)} style={active === 6 ? { color: ' rgb(113, 107, 110) ' } : { color: 'white' }}>WOMEN'S <span className='nav9'><IoIosArrowDown /></span></a>
                                        </li>
                                        <li className="nav-item a1">
                                            <a className="nav-link d-flex" href="#" onMouseOver={() => IsActive(7)} style={active === 7 ? { color: ' rgb(113, 107, 110)' } : { color: 'white ' }}>MEN'S <span className='nav9'><IoIosArrowDown /></span></a>
                                        </li>
                                        <li className="nav-item  a1">
                                            <a className="nav-link d-flex" href="#"
                                                onMouseOver={() => IsActive(8)} style={active === 8 ? { color: 'rgb(113, 107, 110) ' } : { color: 'white' }}
                                                onMouseLeave={() => IsActive(0)}
                                            >BUYNOW! <span className='nav9'><IoIosArrowDown /></span></a>
                                        </li>


                                    </ul>

                                </div>
                            </div>
                        </nav>

                        <div className='d-flex new6'>
                            <CiSearch className='new7' />
                            <GoQuestion className='new7' />
                            <GoPerson className='new7' />
                            <BsHeart className='new7' />
                            <LiaBalanceScaleSolid className="new7" />
                            <HiOutlineShoppingBag className='new7' />
                            <p className='text-white new8'>Bag(0)</p>
                        </div>


                    </div>




                    <div className='  new4'>
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
                                <div onMouseLeave={() => IsActive(0)} className='new5'>
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


                {/* ----RESPONSIVE NAVBAR---- */}


                <div className='new20'>
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
                                                                    <div className='lay4 text-white text-center d-flex'>HOT</div>

                                                                </div>

                                                                <div className='lay2 text-secondary d-flex mt-1'>SKIN13-<span>Wine</span>
                                                                    <div className='lay10 text-white text-center d-flex'>NEW</div>
                                                                </div>

                                                                <div className='lay2 text-secondary d-flex mt-1'>SKIN14- <span>FoodDelivery</span>
                                                                    <div className='lay10 text-white text-center d-flex'>NEW</div>
                                                                </div>

                                                                <div className='lay2 text-secondary d-flex mt-1'>SKIN15-<span>Lenses</span>
                                                                    <div className='lay10 text-white text-center d-flex'>NEW</div>
                                                                </div>
                                                                <div className='lay2 text-secondary d-flex mt-1'>SKIN16-<span>Cakes</span>
                                                                    <div className='lay10 text-white text-center d-flex'>NEW</div>
                                                                </div>

                                                                <div className='lay2 text-secondary d-flex mt-1'>SKIN17-<span>Plants</span>

                                                                    <div className='lay10 text-white text-center d-flex'>NEW</div>
                                                                </div>
                                                                <div className='lay2 text-secondary d-flex mt-1'>SKIN18-<span>Pasta</span>

                                                                    <div className='lay10 text-white text-center  d-flex'> NEW</div>
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


                        <div className='new22'>
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








                <div className='new30'>
                    <p className='text-white text-center new26'>FINAL</p>
                    <p className='text-white text-center new29'>CLEARANCE</p>
                    <p className='text-white text-center new28'> Take 20% Off 'Sale Must -Haves'</p>
                </div>




                {/* ----FOOTER---- */}

                <div className='new32'>
                    <div className=' new11  d-flex text-white '>
                        <p className='text-white mt-2 hom7 '>© 2023 Shella Fashion Store Shopify. All Rights Reserved. Ecommerce Software by Shopify. Shopify Theme by MPIthemes.  </p>
                        <div className='hom92 d-flex'>
                            <BiLogoFacebook className='new12' />
                            <AiOutlineTwitter className='new12' />
                            <AiOutlineInstagram className='new12' />
                            <BiLogoYoutube className='new12' />
                            <SiSwiper className='new12' />
                        </div>
                    </div>

                </div>



                {/* -----RESPONSIVE FOOTER---- */}

                <div className='row r1'>
                    <div className='col-md-12'>
                        <div className='container'>

                            <p className=' text-center mt-3  text-secondary '>© 2023 Shella Fashion Store Shopify. All Rights Reserved. Ecommerce Software by Shopify. Ecommerce Software by Shopify. Ecommerce Software by Shopify. Shopify Theme by MPIthemes.  </p>
                        </div>

                    </div>


                    <div className='col-md-12'>
                        <div className='mt-3 d-flex justify-content-center'>
                            <BiLogoFacebook className='hommm10' />
                            <AiOutlineTwitter className='hom10' />
                            <AiOutlineInstagram className='hom10' />
                            <BiLogoYoutube className='hom10' />
                            <SiSwiper className='hom10' />
                        </div>
                        <br />
                    </div>

                </div>



            </div>
        </div>
    );
}

export default New_Home;