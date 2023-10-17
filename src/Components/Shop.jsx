import React from 'react';
import img1 from '../sh1.jpg';
import img2 from '../sh2.jpg';
import B1 from '../B1.jpg';
import B2 from '../B2.jpg';
import B3 from '../B3.jpg';
import B4 from '../B4.jpg';
import B5 from '../B5.jpg';

function Shop(props) {
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-2 mt-4 '>
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
                            <div className='text-secondary shop2 mt-1'>Without Sidebar </div>
                            <div className='text-secondary shop2 mt-1'>Without Sidebar with Banner </div>
                            <div className='text-secondary shop2 mt-1'>With Description </div>
                            <div className='text-secondary shop2 mt-1'>Look Book</div>
                            <div className='text-secondary shop2 mt-1 d-flex'>Look Book V2
                                <div className='shop3 text-white text-center mt-1'>HOT</div>
                            </div>
                            <div className='text-secondary shop2 mt-1'>Catalog Mode </div>
                        </div>
                    </div>

                    <div className='col-lg-2 mt-4'>
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

                    <div className='col-lg-2 mt-4'>
                        <div className=''>
                            <p className='shop1 text-black'>PRODUCT OPTIONS</p>
                            <div className='text-secondary shop2 '>On Listing</div>
                            <div className='text-secondary shop2 mt-1 '>Color,Text</div>
                            <div className='text-secondary shop2 mt-1 '>Image,Text</div>
                            <div className='text-secondary shop2 mt-1 '>Big Image,Text</div>
                            <div className='text-secondary shop2 mt-1 '>Color,Select Dropdown</div>
                            <div className='text-secondary shop2 mt-1 '>Small text,Text</div>
                            <div className='text-secondary shop2 mt-1 d-flex '>Custom Image,Text
                                <div className='shop4 text-white text-center mt-1  d-flex'>NEW</div>
                            </div>
                            <div className='text-secondary shop2 mt-1 '>Custom Big Image</div>
                            <div className='text-secondary shop2 mt-1 '>Custom Color,Text</div>
                            <div className='text-secondary shop2 mt-1 '>Square Color,Text</div>
                        </div>
                    </div>

                    <div className='col-lg-2 mt-4'>
                        <div className=''>
                            <p className='shop10 text-black'>FEATURED PRODUCT</p>
                            <img src={img2} alt='' />
                            <p className='shop5 mt-2  ' >Cotton T-shirt <span className='shop6 ' > with print </span> <span className='shop7 d-block'>$150.00</span></p>
                        </div>
                    </div>

                    <div className='col-lg-2 mt-4'>
                        <div className=''>

                            <img src={img1} alt='' className='mt-5' />
                            <p className='shop5 mt-2  ' >Cotton Crewneck <span className='shop6 '>Sweater</span> <span className='shop7 d-block'>$350.00</span></p>
                        </div>
                    </div>

                    <div className='col-lg-2 mt-4'>
                        <div className=''>
                            <p className='shop1 text-black'>TOP BRANDS</p>
                            <div className='d-flex'>
                                <img src={B1} alt='' className='shop8' />
                                <img src={B2} alt='' className='shop9' />
                            </div>
                            <div className='d-flex'>
                                <img src={B3} alt='' className='shop8' />
                                <img src={B4} alt='' className='shop9' />
                            </div>
                            <div className='d-flex'>
                                <img src={B5} alt='' className='shop8' />
                                <img src={B5} alt='' className='shop9' />
                            </div>
                        </div>
                    </div>
                </div>
                <br />
            </div>
        </div>
    );
}

export default Shop;