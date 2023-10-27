import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { AiTwotoneStar } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { AiOutlineInbox } from 'react-icons/ai';
import { HiArrowUturnLeft } from 'react-icons/hi2';
import { MdPayment } from 'react-icons/md';
import img from '../Mens_Images/men1.jpg'
import img1 from '../Mens_Images/men2.jpg'
import img2 from '../Mens_Images/men3.jpg'
import img3 from '../Mens_Images/men4.webp'
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { GoHeart } from 'react-icons/go';
import { MdBalance } from 'react-icons/md';

function N_Home(props) {
    return (
        <div >

            <p className='text-secondary cloth'>Home / Men clothing</p>

            <div className='row'>
                <div className='col-lg-3'>

                    <div class=" mt-3">
                        <a href="#demo" className="cloth1" data-bs-toggle="collapse">COLLECTION <span className='naaav9'><IoIosArrowDown /></span></a>
                        <div id="demo" className="collapse">
                            <div className='d-flex'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>Women's</p>
                                    <IoIosArrowDown className='cloth3' />
                                </div>
                            </div>

                            <div className='cloth5 d-flex'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>Men's</p>
                                    <IoIosArrowDown className='cloth3' />
                                </div>
                            </div>

                            <div className='cloth5 d-flex'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>Accessories</p>

                                </div>
                            </div>


                        </div>
                    </div>
                    <hr></hr>

                    <div class=" mt-3">
                        <a href="#demo1" className="cloth1" data-bs-toggle="collapse">COLOR<span className='naaav9'><IoIosArrowDown /></span></a>
                        <div id="demo1" className="collapse">

                            <div className='d-flex mt-3'>
                                <div className='cloth6'> </div>
                                <div className='cloth7'> </div>
                                <div className='cloth8'> </div>
                                <div className='cloth9'> </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>


                    <div class=" mt-3">
                        <a href="#demo2" className="cloth1" data-bs-toggle="collapse">PRICE<span className='naaav9'><IoIosArrowDown /></span></a>
                        <div id="demo2" className="collapse">
                            <div>
                                <input type="range" min="1" max="100" value="100" className="slider" id="myRange" />
                            </div>

                        </div>
                    </div>
                    <hr></hr>

                    <div class=" mt-3">
                        <a href="#demo3" className="cloth1" data-bs-toggle="collapse">AVAILABILITY <span className='naaav9'><IoIosArrowDown /></span></a>
                        <div id="demo3" className="collapse">
                            <div className='d-flex mt-3'>
                                <input type="checkbox1" id="switch" /><label for="switch">Toggle</label>
                                <p className='cloth11 text-secondary'>In Stock</p>
                            </div>

                        </div>
                    </div>
                    <hr></hr>

                    <div class=" mt-3">
                        <a href="#demo4" className="cloth1" data-bs-toggle="collapse">SIZE<span className='naaav9'><IoIosArrowDown /></span></a>
                        <div id="demo4" className="collapse">
                            <div className='d-flex'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>30</p>

                                </div>
                            </div>
                            <div className='d-flex cloth5'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>32</p>

                                </div>
                            </div>
                            <div className='d-flex cloth5'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>34</p>

                                </div>
                            </div>
                            <div className='d-flex cloth5'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>36</p>

                                </div>
                            </div>
                            <div className='d-flex cloth5'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>38</p>

                                </div>
                            </div>
                            <div className='d-flex cloth5'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>40</p>

                                </div>
                            </div>

                        </div>
                    </div>
                    <hr></hr>

                    <div class=" mt-3">
                        <a href="#demo5" className="cloth1" data-bs-toggle="collapse">BRAND<span className='naaav9'><IoIosArrowDown /></span></a>
                        <div id="demo5" className="collapse">
                            <div className='d-flex'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>Calvin Klein </p>

                                </div>
                            </div>

                            <div className='d-flex cloth5'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>Chanel</p>

                                </div>
                            </div>

                            <div className='d-flex cloth5'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>Dolce & Gabana</p>

                                </div>
                            </div>

                            <div className='d-flex cloth5'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>Gap</p>

                                </div>
                            </div>

                            <div className='d-flex cloth5'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>Locasta</p>

                                </div>
                            </div>

                            <div className='d-flex cloth5'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>Zara</p>

                                </div>
                            </div>

                            <div className='d-flex cloth5'>
                                <input type="checkbox" />
                                <div className='cloth4 d-flex mt-3'>
                                    <p className='cloth2  text-secondary'>Levi's</p>

                                </div>
                            </div>

                        </div>
                    </div>
                    <hr></hr>


                    <div>
                        <p className='cloth12'>FEATURED PRODUCT</p>

                        <div className='d-flex'>
                            <img src={img} alt='' />
                            <div className='cl3'>
                                <p className='cl1 text-secondary'>Gap</p>
                                <p className='cl2'>Blend Field Jacket</p>
                                <p className='cl4'>$470.00</p>
                                <div className='d-flex'>
                                    <AiTwotoneStar />
                                    <AiTwotoneStar />
                                    <AiTwotoneStar />
                                    <AiTwotoneStar />
                                    <AiOutlineStar />

                                </div>
                            </div>
                        </div>



                        <div className='d-flex mt-3'>
                            <img src={img1} alt='' />
                            <div className='cl3'>
                                <p className='cl1 text-secondary'>Gap</p>
                                <p className='cl2'>Cotton Sweater</p>
                                <p className='cl4'>$350.00</p>
                                <div className='d-flex'>
                                    <AiTwotoneStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />
                                    <AiOutlineStar />

                                </div>
                            </div>
                        </div>


                        <div className='d-flex mt-3'>
                            <img src={img2} alt='' />
                            <div className='cl3'>
                                <p className='cl1 text-secondary'>Gap</p>
                                <p className='cl2'>Boxy Fit T-Shirt</p>
                                <p className='cl4'>$470.00</p>
                                <div className='d-flex'>
                                    <AiTwotoneStar />
                                    <AiTwotoneStar />
                                    <AiTwotoneStar />
                                    <AiTwotoneStar />
                                    <AiOutlineStar />

                                </div>
                            </div>
                        </div>

                    </div>
                    <hr></hr>


                    <div>
                        <p className='cloth12'>CUSTOM BLOCK</p>

                        <div className='d-flex'>
                            <AiOutlineInbox className='cl6' />
                            <p className='cl5 text-secondary'>Free shipping all orders of $49 or more of eligible items across any product category qualify.</p>
                        </div>


                        <div className='d-flex'>
                            <MdPayment className='cl6' />
                            <p className='cl5 text-secondary'>FCredit Card: Visa, MasterCard, Maestro, American Express.more of eligible items across any product category qualify.</p>
                        </div>


                        <div className='d-flex'>
                            <HiArrowUturnLeft className='cl6' />
                            <p className='cl5 text-secondary'>Returns and Refunds: You can return any item purchased on Shella within 20 days of the delivery date.</p>
                        </div>

                    </div>


                    <div>
                        <img src={img3} className='cl7' />
                    </div>

                    <br /> <br /> <br />

                </div>




                <div className='col-lg-9'>
                    <p className='cl8'> Men Clothing</p>
                    <div className=''>
                        <div class=" mt-3">
                            <a href="#demo7" className="cl9 text-secondary " data-bs-toggle="collapse">Sort:Best Selling<span className='naaav9'><IoIosArrowDown /></span></a>
                            <div id="demo7" className="collapse">
                                <div>
                                    <p className='text-secondary cl11'>Featured</p>
                                    <p className='text-secondary cl10'>best Seling</p>
                                    <p className='text-secondary cl10'>Low Price </p>
                                    <p className='text-secondary cl10'>Alphabets </p>
                                    <p className='text-secondary cl10'>Date,Old & New</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-lg-3'>
                            <img src='https://shella-demo.myshopify.com/cdn/shop/products/2894580250_1_1_1_390x.progressive.jpg?v=1525094027' className='tog1' />
                            <div className='mt-3 tog15'>
                                <p className='text-secondary tog2'>Chanel</p>
                                <p className='tog3'>T-shirt with slogan</p>
                                <p className='tog4'>$470.00</p>
                            </div>

                            <div>
                                <div className='tog5 d-flex justify-content-center '>
                                    <HiOutlineShoppingBag className='tog7 ' />
                                    <p className=' tog6'>ADD TO CART</p>
                                </div>
                            </div>

                            <div className='d-flex mt-3'>
                                <GoHeart className='tog9' />
                                <MdBalance className='tog10' />
                            </div>

                        </div>


                        <div className='col-lg-3'>
                            <img src='https://shella-demo.myshopify.com/cdn/shop/products/2046033800_1_1_1_390x.progressive.jpg?v=1525093946https://shella-demo.myshopify.com/cdn/shop/products/2898880250_1_1_1_390x.progressive.jpg?v=1525093930' className='tog1' />
                            <div className='mt-3'>
                                <p className='text-secondary tog2'>Levi's</p>
                                <p className='tog3'>Sweatshirt and trousers</p>
                                <p className='tog4'>$470.00</p>
                            </div>

                            <div className='tog12'></div>

                            <div className='d-flex mt-2'>
                                <div className='tog13 text-center'>30</div>
                                <div className='tog14 text-center'>32</div>
                                <div className='tog14 text-center'>34</div>
                                <div className='tog14 text-center'>36</div>



                            </div>

                            <div>
                                <div className='tog5 d-flex justify-content-center mt-3 '>
                                    <HiOutlineShoppingBag className='tog7 ' />
                                    <p className=' tog6'>ADD TO CART</p>
                                </div>
                            </div>

                            <div className='d-flex mt-3'>
                                <GoHeart className='tog9' />
                                <MdBalance className='tog10' />
                            </div>

                        </div>

                        <div className='col-lg-3'>
                            <img src='https://shella-demo.myshopify.com/cdn/shop/products/2898880250_1_1_1_390x.progressive.jpg?v=1525093930' className='tog1' />
                            <div className='mt-3 tog15'>
                                <p className='text-secondary tog2'>Locaste</p>
                                <p className='tog3'>Simoson Sweatshirt</p>
                                <p className='tog4'>$470.00</p>
                            </div>

                            <div>
                                <div className='tog5 d-flex justify-content-center '>
                                    <HiOutlineShoppingBag className='tog7 ' />
                                    <p className=' tog6'>ADD TO CART</p>
                                </div>
                            </div>

                            <div className='d-flex mt-3'>
                                <GoHeart className='tog9' />
                                <MdBalance className='tog10' />
                            </div>

                        </div>


                        <div className='col-lg-3'>
                            <img src='https://shella-demo.myshopify.com/cdn/shop/products/2033127800_1_1_1_390x.progressive.jpg?v=1525093910' className='tog1' />
                            <div className='mt-3 tog15'>
                                <p className='text-secondary tog2'>Chanel</p>
                                <p className='tog3'>T-shirt with slogan</p>
                                <p className='tog4'>$470.00</p>
                            </div>

                            <div>
                                <div className='tog5 d-flex justify-content-center '>
                                    <HiOutlineShoppingBag className='tog7 ' />
                                    <p className=' tog6'>ADD TO CART</p>
                                </div>
                            </div>

                            <div className='d-flex mt-3'>
                                <GoHeart className='tog9' />
                                <MdBalance className='tog10' />
                            </div>




                        </div>

                    </div>


                    <div className='row mt-5'>
                        <div className='col-lg-3'>
                            <img src='https://shella-demo.myshopify.com/cdn/shop/products/0278211506_1_1_1_390x.progressive.jpg?v=1525093887' className='tog1' />
                            <div className='mt-3 '>
                                <p className='text-secondary tog2'>Kalvin Klein</p>
                                <p className='tog3'>Super skinny ripped jeans</p>
                                <p className='tog4'>$470.00</p>
                            </div>

                            <div>
                                <div className='tog5 d-flex justify-content-center '>
                                    <HiOutlineShoppingBag className='tog7 ' />
                                    <p className=' tog6'>ADD TO CART</p>
                                </div>
                            </div>

                            <div className='d-flex mt-3'>
                                <GoHeart className='tog9' />
                                <MdBalance className='tog10' />
                            </div>

                        </div>


                        <div className='col-lg-3'>
                            <img src='https://shella-demo.myshopify.com/cdn/shop/products/5333043427_1_1_1_390x.progressive.jpg?v=1542368814' className='tog1' />
                            <div className='mt-3'>
                                <p className='text-secondary tog2'>Dolce & Gabbana</p>
                                <p className='tog3'>Super skinny jeans</p>
                                <p className='tog4'>$470.00</p>
                            </div>



                            <div>
                                <div className='tog5 d-flex justify-content-center mt-3 '>
                                    <HiOutlineShoppingBag className='tog7 ' />
                                    <p className=' tog6'>ADD TO CART</p>
                                </div>
                            </div>

                            <div className='d-flex mt-3'>
                                <GoHeart className='tog9' />
                                <MdBalance className='tog10' />
                            </div>

                        </div>

                        <div className='col-lg-3'>
                            <img src='https://shella-demo.myshopify.com/cdn/shop/products/3424322754_1_1_1_390x.progressive.jpg?v=1525093860' className='tog1' />
                            <div className='mt-3 '>
                                <p className='text-secondary tog2'>Zara</p>
                                <p className='tog3'>Sports bermuda shorts</p>
                                <p className='tog4'>$470.00</p>
                            </div>

                            <div>
                                <div className='tog5 d-flex justify-content-center '>
                                    <HiOutlineShoppingBag className='tog7 ' />
                                    <p className=' tog6'>ADD TO CART</p>
                                </div>
                            </div>

                            <div className='d-flex mt-3'>
                                <GoHeart className='tog9' />
                                <MdBalance className='tog10' />
                            </div>

                        </div>


                        <div className='col-lg-3'>
                            <img src='https://shella-demo.myshopify.com/cdn/shop/products/1720433712_1_1_1_390x.progressive.jpg?v=1525093539' className='tog1' />
                            <div className='mt-3 '>
                                <p className='text-secondary tog2'>Chanel</p>
                                <p className='tog3'>Knit cardigan</p>
                                <p className='tog4'>$470.00</p>
                            </div>

                            <div>
                                <div className='tog5 d-flex justify-content-center '>
                                    <HiOutlineShoppingBag className='tog7 ' />
                                    <p className=' tog6'>ADD TO CART</p>
                                </div>
                            </div>

                            <div className='d-flex mt-3'>
                                <GoHeart className='tog9' />
                                <MdBalance className='tog10' />
                            </div>




                        </div>

                    </div>


                    <div className='row mt-5'>
                        <div className='col-lg-3'>
                            <img src='https://shella-demo.myshopify.com/cdn/shop/products/2879899039_1_1_1_390x.progressive.jpg?v=1542543939' className='tog1' />
                            <div className='mt-3 '>
                                <p className='text-secondary tog2'>Kalvin Klein</p>
                                <p className='tog3'>Super skinny ripped jeans</p>
                                <p className='tog4'>$470.00</p>
                            </div>

                            <div>
                                <div className='tog5 d-flex justify-content-center '>
                                    <HiOutlineShoppingBag className='tog7 ' />
                                    <p className=' tog6'>ADD TO CART</p>
                                </div>
                            </div>

                            <div className='d-flex mt-3'>
                                <GoHeart className='tog9' />
                                <MdBalance className='tog10' />
                            </div>

                        </div>


                        <div className='col-lg-3'>
                            <img src='https://shella-demo.myshopify.com/cdn/shop/products/2893033250_1_1_1_195x.progressive.jpg?v=1525093736' className='tog1' />
                            <div className='mt-3'>
                                <p className='text-secondary tog2'>Dolce & Gabbana</p>
                                <p className='tog3'>Super skinny jeans</p>
                                <p className='tog4'>$470.00</p>
                            </div>



                            <div>
                                <div className='tog5 d-flex justify-content-center mt-3 '>
                                    <HiOutlineShoppingBag className='tog7 ' />
                                    <p className=' tog6'>ADD TO CART</p>
                                </div>
                            </div>

                            <div className='d-flex mt-3'>
                                <GoHeart className='tog9' />
                                <MdBalance className='tog10' />
                            </div>

                        </div>

                        <div className='col-lg-3'>
                            <img src='https://shella-demo.myshopify.com/cdn/shop/products/3410534250_1_1_1_195x.progressive.jpg?v=1525093418' className='tog1' />
                            <div className='mt-3 '>
                                <p className='text-secondary tog2'>Zara</p>
                                <p className='tog3'>Sports bermuda shorts</p>
                                <p className='tog4'>$470.00</p>
                            </div>

                            <div>
                                <div className='tog5 d-flex justify-content-center '>
                                    <HiOutlineShoppingBag className='tog7 ' />
                                    <p className=' tog6'>ADD TO CART</p>
                                </div>
                            </div>

                            <div className='d-flex mt-3'>
                                <GoHeart className='tog9' />
                                <MdBalance className='tog10' />
                            </div>

                        </div>


                        <div className='col-lg-3'>
                            <img src='https://shella-demo.myshopify.com/cdn/shop/products/2861922250_1_1_1_195x.progressive.jpg?v=1525093754' className='tog1' />
                            <div className='mt-3 '>
                                <p className='text-secondary tog2'>Chanel</p>
                                <p className='tog3'>Knit cardigan</p>
                                <p className='tog4'>$470.00</p>
                            </div>

                            <div>
                                <div className='tog5 d-flex justify-content-center '>
                                    <HiOutlineShoppingBag className='tog7 ' />
                                    <p className=' tog6'>ADD TO CART</p>
                                </div>
                            </div>

                            <div className='d-flex mt-3'>
                                <GoHeart className='tog9' />
                                <MdBalance className='tog10' />
                            </div>




                        </div>

                    </div>


                    <div className='row mt-5'>
                        <div className='col-lg-3'>
                            <img src='https://cdn.shopify.com/s/files/1/0026/2910/7764/products/3553987250_1_1_1_195x.progressive.jpg?v=1525093768' className='tog1' />
                            <div className='mt-3 '>
                                <p className='text-secondary tog2'>Kalvin Klein</p>
                                <p className='tog3'>Super skinny ripped jeans</p>
                                <p className='tog4'>$470.00</p>
                            </div>

                            <div>
                                <div className='tog5 d-flex justify-content-center '>
                                    <HiOutlineShoppingBag className='tog7 ' />
                                    <p className=' tog6'>ADD TO CART</p>
                                </div>
                            </div>

                            <div className='d-flex mt-3'>
                                <GoHeart className='tog9' />
                                <MdBalance className='tog10' />
                            </div>

                        </div>


                        <div className='col-lg-3'>
                            <img src='https://cdn.shopify.com/s/files/1/0026/2910/7764/products/1271613811_1_1_1_195x.progressive.jpg?v=1525093743' className='tog1' />
                            <div className='mt-3'>
                                <p className='text-secondary tog2'>Dolce & Gabbana</p>
                                <p className='tog3'>Super skinny jeans</p>
                                <p className='tog4'>$470.00</p>
                            </div>



                            <div>
                                <div className='tog5 d-flex justify-content-center mt-3 '>
                                    <HiOutlineShoppingBag className='tog7 ' />
                                    <p className=' tog6'>ADD TO CART</p>
                                </div>
                            </div>

                            <div className='d-flex mt-3'>
                                <GoHeart className='tog9' />
                                <MdBalance className='tog10' />
                            </div>

                        </div>

                        <div className='col-lg-3'>
                            <img src='https://cdn.shopify.com/s/files/1/0026/2910/7764/products/2092293726_1_1_1_195x.progressive.jpg?v=1525093761' className='tog1' />
                            <div className='mt-3 '>
                                <p className='text-secondary tog2'>Zara</p>
                                <p className='tog3'>Sports bermuda shorts</p>
                                <p className='tog4'>$470.00</p>
                            </div>

                            <div>
                                <div className='tog5 d-flex justify-content-center '>
                                    <HiOutlineShoppingBag className='tog7 ' />
                                    <p className=' tog6'>ADD TO CART</p>
                                </div>
                            </div>

                            <div className='d-flex mt-3'>
                                <GoHeart className='tog9' />
                                <MdBalance className='tog10' />
                            </div>

                        </div>




                    </div>
                  
                  <br/> <br/>   <br/> <br/>

                  <div className='last1 '>
                    <p className='text-secondary last2'>NO MORE PRODUCTS</p>
                  </div>
 
                  <br/> <br/>
                  <br/> <br/>

                </div>

            </div>













        </div>
    );
}

export default N_Home;