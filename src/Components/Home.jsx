import React, { useState } from 'react';
import { BiLogoFacebook } from 'react-icons/bi'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { BiLogoYoutube } from 'react-icons/bi'
import { SiSwiper } from 'react-icons/si'
import { CiSearch } from 'react-icons/ci'
import { GoQuestion } from 'react-icons/go'
import { GoPerson } from 'react-icons/go'
import { BsHeart } from 'react-icons/bs'
import { BsSearch } from 'react-icons/bs'
import { RiMenuSearchLine } from 'react-icons/ri'
import { TbWeight } from 'react-icons/tb'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { IoIosArrowDown } from 'react-icons/io'
import { IoIosArrowForward } from 'react-icons/io'
import { LiaBalanceScaleSolid } from 'react-icons/lia'
import Layout from './Layout';
import Shop from './Shop';
import img1 from '../lay1.webp';
import img2 from '../lay2.webp';
import Women from './Women';
import Mens from './Mens';

function Home(props) {
    const [active, IsActive] = useState(0);

    return (
        <div>

            <div className=''>
                <div className=''>
                    <video preload='none' muted playsInline autoPlay loop className=''>
                        <source src="https://cdn.shopify.com/s/files/1/0264/8817/6717/files/pexels-cottonbro-9512045.mp4?v=1637151689" type='video/mp4' />
                        Your browser does not support the video tag.
                    </video>
                </div>


                {/* ----RESPONSIVE NAVBAR---- */}

                <div className='off0'>
                    <div className='d-flex '>
                        <a className="btn off4" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
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
                                        <div className=''>
                                            <p className='off6 d-flex'>LAYOUTS<span className='off5'><IoIosArrowForward /></span> </p>
                                        </div>
                                    </div>


                                    <div className='mt-2 '>
                                        <div className=''>
                                            <p className='off6 d-flex'>SHOP<span className='off7'><IoIosArrowForward /></span> </p>
                                        </div>
                                    </div>


                                    <div className='mt-2'>
                                        <div className=''>
                                            <p className='off6 d-flex'>BLOG<span className='off7'><IoIosArrowForward /></span> </p>
                                        </div>
                                    </div>


                                    <div className='mt-2'>
                                        <div className=''>
                                            <p className='off6 d-flex'>GALLERY<span className='off5'><IoIosArrowForward /></span> </p>
                                        </div>
                                    </div>


                                    <div className='   mt-2 '>
                                        <div className=''>
                                            <p className='off6 d-flex'>PAGES<span className='off8'><IoIosArrowForward /></span> </p>
                                        </div>
                                    </div>

                                    <div className='   mt-2 '>
                                        <div className=''>
                                            <p className='off6 d-flex'>WOMEN'S<span className='off9'><IoIosArrowForward /></span> </p>
                                        </div>
                                    </div>

                                    <div className='   mt-2 '>
                                        <div className=''>
                                            <p className='off6 d-flex'>MEN'S<span className='off8'><IoIosArrowForward /></span> </p>
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


                        <div className='off10'>
                            <p className='text-white d-flex justify-content-center off11'>S</p>
                        </div>


                        <div className='d-flex off12'>
                            <CiSearch className='off13' />
                            <GoQuestion className='off13' />
                            <GoPerson className='off13' />
                            <BsHeart className='off13' />
                            <HiOutlineShoppingBag className='off13' />

                        </div>

                    </div>
                </div>



                {/* ----NAV BAR----  */}

                <div className='clss'>
                    <div className=' shu1 '>
                        <div className='nav1 d-flex text-white'>
                            <h5 className='text-white nav2 mt-2'> <i className='navic'>Shella</i></h5>
                            <div className='nav3  d-flex mt-2 '>
                                <div className='nav4 '
                                    onMouseOver={() => IsActive(1)} style={active === 1 ? { color: '  rgb(113, 107, 110)' } : { color: '' }}

                                >
                                    <p className=' nav4 d-flex'>LAYOUTS<span className='nav9'><IoIosArrowDown /></span> </p>
                                </div>

                                <div className='nav5' onMouseOver={() => IsActive(2)} style={active === 2 ? { color: '  rgb(113, 107, 110)' } : { color: '' }}>
                                    <p className='nav5 d-flex'>SHOP  <span className='nav9'><IoIosArrowDown /></span></p>
                                </div>

                                <div className='nav5 dropdown '
                                    onMouseOver={() => IsActive(3)} style={active === 3 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}
                                    onMouseLeave={() => IsActive(0)}
                                >
                                    <p className='nav5 d-flex dropbtn' >BLOG  <span className='nav9'><IoIosArrowDown /></span> </p>
                                    <div class="dropdown-content">
                                        <a href="#" className='tab4 text-secondary'>Blog V1-Classic</a>
                                        <a href="#" className='tab5  text-secondary'>Blog V2-Grid</a>
                                        <a href="#" className='tab5 text-secondary'>Blog V3-Masonry</a>
                                        <a href="#" className='tab5 text-secondary'>Blog V4-Slider</a>
                                        <a href="#" className='tab5 text-secondary'>Single Post</a>

                                    </div>
                                </div>

                                <div className='nav5 dropdown'
                                    onMouseOver={() => IsActive(4)} style={active === 4 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}
                                    onMouseLeave={() => IsActive(0)}
                                >
                                    <p className='nav5 d-flex dropbtn'>GALLERY  <span className='nav9'><IoIosArrowDown /></span></p>
                                    <div class="dropdown-content">
                                        <a href="#" className='tab4 text-secondary'>Gallery V1-Masonry</a>
                                        <a href="#" className='tab5  text-secondary'>Gallery V2-Masonry</a>
                                        <a href="#" className='tab5 text-secondary'>Gallery V3-Grid </a>
                                        <a href="#" className='tab5 text-secondary'>Gallery V4-Grid</a>
                                        <a href="#" className='tab5 text-secondary'>Single </a>

                                    </div>
                                </div>

                                <div className='nav5 dropdown'
                                    onMouseOver={() => IsActive(5)} style={active === 5 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}
                                    onMouseLeave={() => IsActive(0)}
                                >
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

                                <div className='nav5'
                                    onMouseOver={() => IsActive(8)} style={active === 8 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}
                                    onMouseLeave={() => IsActive(0)}
                                >
                                    <p className='nav5 d-flex'> BUYNOW!<span className='nav9'><IoIosArrowDown /></span>  <div className='tab7 text-white text-center mt-1'>SALE</div></p>

                                </div>

                            </div>

                            <div className=' tab1'>
                                {
                                    active == 1 && <>
                                        <div className='container' onMouseLeave={() => IsActive(0)}>
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


                            <div className='d-flex nav6'>

                                <CiSearch className='nav7'  />

                                <GoQuestion className='nav7' onMouseOver={() => IsActive(10)} style={active === 10 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                                <GoPerson className='nav7' onMouseOver={() => IsActive(11)} style={active === 11 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                                <BsHeart className='nav7' onMouseOver={() => IsActive(12)} style={active === 12 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                                <LiaBalanceScaleSolid className="nav7" onMouseOver={() => IsActive(13)} style={active === 13 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                                <HiOutlineShoppingBag className='nav7' onMouseOver={() => IsActive(14)} style={active === 14 ? { color: ' rgb(113, 107, 110)' } : { color: '' }} />
                                <p className='nav8' onMouseOver={() => IsActive(15)} style={active === 15 ? { color: ' rgb(113, 107, 110)' } : { color: '' }}>Bag(0)</p>
                            </div>

                        </div>
                    </div>
                </div>




            </div>




            {/* ---HOME--- */}

            <div className='hom2'>
                <p className='text-white text-center hom3'>FINAL</p>
                <p className='text-white text-center hom4'>CLEARANCE</p>
                <p className='text-white text-center hom5'> Take 20% Off 'Sale Must -Haves'</p>
            </div>



            {/* ----FOOTER---- */}

            <div className='shu1'>
                <div className=' hom6   d-flex text-white '>
                    <p className='text-white mt-2 hom7 '>© 2023 Shella Fashion Store Shopify. All Rights Reserved. Ecommerce Software by Shopify. Shopify Theme by MPIthemes.  </p>
                    <div className='hom92 d-flex'>
                        <BiLogoFacebook className='hom10' />
                        <AiOutlineTwitter className='hom10' />
                        <AiOutlineInstagram className='hom10' />
                        <BiLogoYoutube className='hom10' />
                        <SiSwiper className='hom10' />
                    </div>
                </div>

            </div>



            {/* ----RESPONSIVE FOOTER---- */}

            <div className='row off14 '>
                <div className='col-md-12'>
                    <div className='container'>

                        <p className=' text-center mt-3  text-secondary  off15'>© 2023 Shella Fashion Store Shopify. All Rights Reserved. Ecommerce Software by Shopify. Ecommerce Software by Shopify. Ecommerce Software by Shopify. Shopify Theme by MPIthemes.  </p>
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

    );
}

export default Home;