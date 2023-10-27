import React from 'react';
import img1 from '../lay1.webp';
import img2 from '../lay2.webp';
import { Link } from "react-router-dom";


function Layout(props) {


    return (
        <div className="container">
            <div className='row'>
                <div className=' col-lg-2'>
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

                        <div className='lay3 text-secondary d-flex mt-1'>
                            <Link className="nav-link" aria-current="page" to="/mens">
                                Men's
                            </Link>
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


                <div className='col-lg-2'>

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

                        </div>

                        <div className='lay2 text-secondary d-flex mt-1'>SKIN13-<span>Wine</span>
                            <div className='lay10 text-white text-center '>NEW</div>
                        </div>

                        <div className='lay2 text-secondary  mt-1'>SKIN14- <span>FoodDelivery</span>

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

                            <div className='lay10 text-white text-center  '> NEW</div>
                        </div>


                    </div>
                </div>




                <div className=' col-lg-8'>
                    <div className=' row tab2'>
                        <div className=' col-lg-6 '>
                            <img src={img1} alt='' className='mt-5 lay13' />
                            <p className='text-center  lay11 mt-2'>NEW IN</p>
                            <p className='text-secondary text-center lay12'>Spring/Summer 2020 Collection</p>
                        </div>
                        <div className='col-lg-6'>
                            <img src={img2} alt='' className='mt-5 lay13' />
                            <p className='text-center lay11 mt-2'>SALE & SPECIAL OFFER</p>
                            <p className='text-secondary text-center lay12'>Get Upto 20% Off</p>
                        </div>

                    </div>

                </div>

            </div>
            <br /> <br />
        </div>
    );
}

export default Layout;