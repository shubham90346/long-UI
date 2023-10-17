import React from 'react';
import w1 from '../ww1.jpg';
import w2 from '../ww2.jpg';



function Women(props) {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 mt-4 '>
                        <div className=''>
                            <p className='shop1 text-black'>CLOTHING</p>
                            <div className='text-secondary shop2 '>Coats</div>
                            <div className='text-secondary shop2 mt-1'>Jackets</div>
                            <div className='text-secondary shop2 mt-1'>Blazers</div>
                            <div className='text-secondary shop2 mt-1 d-flex'>Dressess
                                <div className='shop4 text-white text-center mt-1  d-flex'>NEW</div>
                            </div>
                            <div className='text-secondary shop2 mt-1'>Playsuits & Jackets</div>
                            <div className='text-secondary shop2 mt-1'>Trousers</div>
                            <div className='text-secondary shop2 mt-1 d-flex'>Jeans
                            </div>
                            <div className='text-secondary shop2 mt-1'>Knitwear</div>
                            <div className='text-secondary shop2 mt-1'>Sweatshirts & Hoddies </div>
                            <div className='text-secondary shop2 mt-1'>T-shirts </div>
                            <div className='text-secondary shop2 mt-1'>Body suits</div>
                            <div className='text-secondary shop2 mt-1'>Shirts</div>
                            <div className='text-secondary shop2 mt-1'>Skirts</div>
                            <div className='text-secondary shop2 mt-1 d-flex'>Shorts </div>
                        </div>
                    </div>


                    <div className='col-lg-2 mt-4 '>
                        <div className=''>
                            <p className='shop1 text-black'>SHOES</p>
                            <div className='text-secondary shop2 '>Trainers</div>
                            <div className='text-secondary shop2 mt-1'>Boots and Ankle Boots</div>

                            <div className='text-secondary shop2 mt-1 d-flex'>Heels
                                <div className='shop3 text-white text-center mt-1'>HOT</div>
                            </div>
                            <div className='text-secondary shop2 mt-1'>Flats</div>
                            <div className='text-secondary shop2 mt-1'>Platforms</div>
                            <div className='text-secondary shop2 mt-1 d-flex'>Heeled Sandals</div>
                        </div>
                    </div>


                    <div className='col-lg-2 mt-4 '>
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

                    <div className='col-lg-6'>
                        <div className='d-flex mt-5'>
                            <div className='women3'>
                                <div className='women8'>
                                    <img src={w1} alt='' className='women1' />

                                </div>
                                <div className='women6 '>
                                    <p className='women4 text-center mt-1 text-black'>NEWIN</p>
                                    <p className='women5 text-center text-secondary'>Spring/Summer 2020 Collection</p>
                                </div>
                            </div>


                            <div className='women3'>
                                <div className='women8'>
                                    <img src={w2} alt='' className='women2' />
                                </div>

                                <div className='women7'>
                                    <p className='women4 text-center mt-1 text-black'>SALE & SPECIAL OFFER</p>
                                    <p className='women5 text-center text-secondary'>Get up to 20% off</p>
                                </div>
                            </div>
                        </div>


                        <div className='d-flex mt-4' >
                            <div className='women3'>
                                <div className='women8'>
                                    <img src="https://shella-demo5.myshopify.com/cdn/shop/files/06_309x.progressive.png.jpg?v=1614334854" alt='' className='women1' />
                                </div>

                                <div className='women6'>
                                    <p className='women4 text-center mt-1 text-black'>FEATURED</p>
                                    <p className='women5 text-center text-secondary'>Popular Items summers</p>
                                </div>
                            </div>


                            <div className='women3'>
                                <div className='women8'>
                                    <img src="	https://shella-demo5.myshopify.com/cdn/shop/files/05_297x.progressive.png.jpg?v=1614334854" alt='' className='women2' />
                                </div>
                                <div className='women7'>
                                    <p className='women4 text-center mt-1 text-black'>COMING SOON</p>
                                    <p className='women5 text-center text-secondary'>Autumn Collection</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <br />
                <br />
            </div>
        </div>
    );
}

export default Women;