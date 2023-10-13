import React from 'react';
import {BiLogoFacebook} from 'react-icons/bi'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoYoutube} from 'react-icons/bi'
import {SiSwiper} from 'react-icons/si'
function Home(props) {
    return (
        <div>
   {/* <div className='hom1'>
            <video width="100%" height="" preload='none' muted playsInline autoPlay loop className='hom1'>

                <source src="https://cdn.shopify.com/s/files/1/0264/8817/6717/files/pexels-cottonbro-9512045.mp4?v=1637151689" type='video/mp4' />
                Your browser does not support the video tag.
            </video>
        </div> */}
        <div className='hom2'>
           <p  className='text-white text-center hom3'>FINAL</p>
           <p className='text-white text-center hom4'>CLEARANCE</p>
           <p className='text-white text-center hom5'> Take 20% Off 'Sale Must -Haves'</p>
        </div>

        <div className=' hom6  d-flex text-white '>
     
            <p className='text-white mt-2 hom7 '>© 2023 Shella Fashion Store Shopify. All Rights Reserved. Ecommerce Software by Shopify. Shopify Theme by MPIthemes.  </p>
      
            <div className='hom92 d-flex'>
                <BiLogoFacebook className='hom10'/>
                <AiOutlineTwitter className='hom10'/>
                <AiOutlineInstagram className='hom10'/>
                <BiLogoYoutube className='hom10'/>
                <SiSwiper className='hom10'/>
            </div>
        </div>

        </div>
     
    );
}

export default Home;