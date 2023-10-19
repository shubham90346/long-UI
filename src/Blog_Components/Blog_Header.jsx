import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { GoQuestion } from 'react-icons/go';
import { GoPerson } from 'react-icons/go';
import { BsHeart } from 'react-icons/bs';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { LiaBalanceScaleSolid } from 'react-icons/lia';


function Blog_Header(props) {
    return (
        <div>
            {/* <div className='container'>
                <div className='row' id='heades'>
                    <div className='col-lg-6'>
                        <h5 className=' text-end mt-2 navi1'> <i className='navic'>Shella</i></h5>
                    </div>

                    <div className='col d-flex justify-content-end '>
                        <CiSearch className='navi2 mt-3' />
                        <GoQuestion className='navi2 mt-3' />
                        <GoPerson className='navi2 mt-3' />
                        <BsHeart className='navi2 mt-3' />
                        <LiaBalanceScaleSolid className="navi2 mt-3" />
                        <HiOutlineShoppingBag className='navi2 mt-3 ' />
                        <p className='navi2 hea1'>Bag(0)</p>
                    </div>
                </div>
            </div>
            <hr className='navi3'></hr> */}

        </div>
    );
}

export default Blog_Header;