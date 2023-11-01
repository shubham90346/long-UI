import React, { useEffect, useState } from 'react';
import { GoQuestion } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import { BsHeart } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { LiaBalanceScaleSolid } from 'react-icons/lia';
import { CiSearch } from 'react-icons/ci';
import { AiFillTag } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { IoIosArrowDown } from 'react-icons/io';
import Women from '../Components/Women';
import Mens from '../Components/Mens';
import Layout from '../Components/Layout';
import Shop from '../Components/Shop';

function Brand_v2(props) {
    const [active, IsActive] = useState(0);

    const navigate = useNavigate();
    const handleclick = () => {
        navigate('/')

    }




    let Data = [
        {
            id: 1,
            head: "Someone Purchased a",
            main: "Silk Voile Shirt",
            foot: "17 min ago from Amsterdam",
            place: "ntherlands"
        },
        {
            id: 2,
            head: "Someone Purchased a",
            main: "Shreling Double Bedsheeet",
            foot: "6 min ago from Germany",
            place: "german"
        },
        {
            id: 3,
            head: "Someone Purchased a",
            main: "Cotton T-shirt",
            foot: "2 min ago from New York",
            place: "USA"
        },
        {
            id: 4,
            head: "Someone Purchased a",
            main: "Blend Filed Jascket",
            foot: "11 min ago from Moscow",
            place: "Russia"
        }
    ]


    return (
        <div>
            {/* ---HEADER----*/}

            <div className='' >
                <p className='gallery text-center text-white ' id='tpp'>FINAL CLEARANCE: Take 20% off 'Sale Must-Haves' </p>
            </div>

            <div className='container hide1 '>
                <div className='row gallery1' id='heades'>
                    <div className='col-lg-6' onClick={handleclick}>
                        <h5 className=' text-start mt-2 navi1'> <i className='navic'>Shella</i></h5>
                    </div>

                    <div className='col d-flex justify-content-end '>
                        <CiSearch className='navi2 mt-3' />
                        <GoQuestion className='navi2 mt-3' />
                        <GoPerson className='navi2 mt-3' />
                        <BsHeart className='navi2 mt-3' />
                        <LiaBalanceScaleSolid className="navi2 mt-3" />
                        <HiOutlineShoppingBag className='navi2 mt-3 ' />
                        <p className='navi2 hea1' data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" >Bag(0)</p>
                    </div>
                </div>
            </div>

            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">

                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <p className='canva1'>MY BAG ( 1 )</p>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='d-flex'>
                                <img src='https://shella-demo.myshopify.com/cdn/shop/products/1720433712_1_1_1_140x.progressive.jpg?v=1525093539' alt='' className='canva2' />
                                <p className='canva6'>Knit cardigan</p>
                            </div>

                        </div>
                        <div className='col-6'>
                            <p className='d-flex justify-content-end canva3'>$148.50</p>

                            <div className='d-flex justify-content-end'>

                                <div className='canva4'>
                                    <p className='text-center'> - </p>
                                </div>

                                <div className='canva5'>
                                    <p className='text-center'>1</p>
                                </div>

                                <div className='canva4'>
                                    <p className='text-center'>+</p>
                                </div>
                            </div>
                            <p className='text-secondary text-end mt-3 canva7'>REMOVE</p>
                        </div>
                    </div>
                    <hr className=''></hr>
                    <div className='d-flex'>
                        <div className='d-flex'>
                            <AiFillTag className='can1' />
                            <p className='can2 d-flex'>AUTO <span className='can3'>DISCOUNT</span></p>
                        </div>
                        <div className='can5'>
                            <p className='can4'>-$16.50</p>
                        </div>
                    </div>

                    <p className='can6'>SUBTOTAL: $148.50</p>
                    <div className='text-secondary can7'>Taxes and shipping fee will be calculated at checkout.</div>
                    <div className='d-flex mt-3'>
                        <div className="form-check b10">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <p className='ft8 '>I agree with the Terms and Conditions. Tristique senectus et netus et malesuada. Nunc scelerisque viverra mauris in.</p>
                        </div>
                    </div>
                    <div className='can8'>
                        <p className='text-white text-center can9'>PROCEED TO CHECKOUT</p>
                    </div>
                    <p className='can10 text-end mt-3'>VIEW CART</p>
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


                            <div className="d-flex blog_modal" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                <p className='blog_modal1 text-secondary '>SEARCH</p>
                                <CiSearch className='blog_modal2' />
                            </div>

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


            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen mod3">
                    <div className="modal-content container-fluid">
                        <div className="modal-header">

                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="modal-body">
                            <p className='text-secondary'>WHAT ARE YOU LOOKING FOR?</p>
                            <input type='text' className='mod4' placeholder='Search Products...' />
                        </div>


                    </div>
                </div>
            </div>

            {
                Data.map((ty) =>

                    <div className='tool1'>
                        <p>{ty.head}</p>
                        <p>{ty.foot}</p> 

                    </div>
                )
            }



        </div>
    );
}

export default Brand_v2;