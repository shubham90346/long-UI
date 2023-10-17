import React from 'react';
import img1 from '../main11.webp';
import img2 from '../main22.webp';
import imgc3 from '../cr11.jpg';
import imgc4 from '../cr22.jpg';
import imgc5 from '../cr33.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Main(props) {
    return (
        <div>
            <div className='container main2 '>
                <div className='m1'>
                    <img src='	https://shella-fashion.myshopify.com/cdn/shop/files/slide_1170x.progressive.png.jpg?v=1614726512' alt='' className='mt-5 main1' />
                </div>
                <div className='main3'>
                    <p className=' text-center main4 '>FINAL</p>
                    <p className=' text-center main5'>CLEARANCE</p>
                    <p className=' text-center main6'> Take 20% Off 'Sale Must -Haves'</p>
                    <div className='main7  text-center  '>
                       DISCOVER MORE
                    </div>
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
                               
                                <br/> <br/>
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
                               
                                <br/> <br/>
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
                               
                                <br/> <br/>
                            </div>
                        </SwiperSlide>




                    </Swiper> 


                </div>
                <br /> <br />

                <div>
                    <div className='row'>
                        <div className='col-lg-4 main22'>
                            <img src='https://shella-fashion.myshopify.com/cdn/shop/files/09_408x.progressive.png.jpg?v=1614727415' className='main17 main21'/>
                            <h5 className='text-center mt-4 main18'>SPRING</h5>
                            <p className='text-center main19 text-secondary'>DISCOVER MORE</p>
                        </div>

                        <div className='col-lg-4 main22'>
                        <img src='	https://shella-fashion.myshopify.com/cdn/shop/files/10_408x.progressive.png.jpg?v=1614727415' className='main17 main21'/>
                        <h5 className='text-center mt-4 main18'>DRESSES</h5>
                            <p className='text-center main19 text-secondary'>DISCOVER MORE</p>
                        </div>

                        <div className='col-lg-4 main22'>
                           <img src='https://shella-fashion.myshopify.com/cdn/shop/files/11_408x.progressive.png.jpg?v=1614727415' className='main17 main21'/>
                           <h5 className='text-center mt-4 main18'>JACKETS</h5>
                            <p className='text-center main19 text-secondary'>DISCOVER MORE</p>
                        </div>

                    </div>
                    <br/>   
                </div>
            </div>
            <hr></hr>

        </div>
    );
}

export default Main;