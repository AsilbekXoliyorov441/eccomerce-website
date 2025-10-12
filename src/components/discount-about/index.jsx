import React from 'react'
import { Link } from 'react-router-dom';

const ProductAbout = ({ name, desc, url }) => {
    return (
        <Link to={`filter/name`} className="relative rounded-[10px] max-w-[410px] w-full h-auto  bg-[#DEDEE2]">
            <img src={url} alt="Img" />
            <p className='absolute top-[30px] text-[24px] font-bold left-[30px]'>{name}</p>
            <img className='absolute top-[180px] left-[140px]' src="/rate-full.svg" alt="Star" />
            <img className='absolute top-[100px] left-[160px]' src="/rate-full.svg" alt="Star" />
            <img className='absolute top-[70px] left-[280px]' src="/rate-full.svg" alt="Star" />
            <div className='absolute top-[114px] left-[30px] flex gap-[4px] pl-[20px] pr-[15px]  rounded-2xl text-[white] p-[8px] items-center bg-[#5946D7]'>
                <Link to={`filter/name`} className=' '>{desc}</Link>
                <img src="/public/Arrow-2.png" alt="" />
            </div>
        </Link>
    );
}


export default ProductAbout