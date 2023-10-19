import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io'

function Blog_Navigation(props) {
    const [active, IsActive] = useState(0);
    return (
        <div>
            {/* <div className='container'>
                <div className='navi6  d-flex  '>
                    <div className='navi5' >
                        <p className=' navi5 d-flex'>LAYOUTS<span className='nav9'><IoIosArrowDown /></span> </p>
                    </div>

                    <div className='navi4' >
                        <p className=' d-flex'>SHOP  <span className='nav9'><IoIosArrowDown /></span></p>
                    </div>

                    <div className='navi4 dropdown ' >
                        <p className=' d-flex dropbtn' >BLOG  <span className='nav9'><IoIosArrowDown /></span> </p>

                    </div>

                    <div className='navi4 dropdown' >
                        <p className=' d-flex dropbtn'>GALLERY  <span className='nav9'><IoIosArrowDown /></span></p>

                    </div>

                    <div className='navi4 dropdown' >
                        <p className=' d-flex dropbtn'>PAGES  <span className='nav9'><IoIosArrowDown /></span></p>

                    </div>

                    <div className='navi4' >
                        <p className=' d-flex'>WOMEN'S  <span className='nav9'><IoIosArrowDown /></span></p>
                    </div>

                    <div className='navi4' >
                        <p className=' d-flex'>MEN'S  <span className='nav9'><IoIosArrowDown /></span></p>
                    </div>

                    <div className='navi4' >
                        <p className=' d-flex'> BUYNOW!<span className='nav9'><IoIosArrowDown /></span>
                            <div className='n26 '>
                                <p className='text-white'>SALE</p>
                            </div></p>
                    </div>

                </div>

            </div>
            <hr className='navi8'></hr> */}

        </div>
    );
}

export default Blog_Navigation;