import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ name, url, discount, rating, article, price }) => {
    return (
        <div className="hover:shadow-xl cursor-pointer  bg-[white] group duration-300 w-[180px] sm:w-[280px] lg:w-[315px] 2xl:w-[325px] border-[1px] rounded-[6px] overflow-hidden p-[7px] sm:p-[20px]  border-[#E3E3E8]">
            <img className='h-[100px] sm:h-[170px] xl:h-[222px] pl-[35px] sm:pl-[25px]' src={url} alt="Img" />
            <div className='flex items-center justify-between gap-[10px] pt-[14px]'>
                <p className='text-[#7A7680] text-[10px] sm:text-[12px] xl:text-[13px] whitespace-nowrap'>{article}</p>
                <img className='w-[70px] sm:w-[90px] xl:w-[117px] h-[12px] sm:h-[15px] xl:h-[20px]' src="/rating.png" alt="Star" />
            </div>
            <div className='pt-[10px] line-clamp-2 text-[13px] sm;text-[15px] xl:text-[16px]'>
                <h3>{name}</h3>
            </div>
            <div className='flex items-center justify-between gap-[10px] pt-[6px] sm:pt-[16px]'>
                <div className='flex items-start gap-[10px]'>
                    <p className='text-[18px] sm:text-[21px] whitespace-nowrap xl:text-[30px] '>{price}</p>
                    <strike className="text-[#7A7680] whitespace-nowrap text-[11px] sm:text-[14px] xl:text-[16px]">{discount}</strike>
                </div>
                <Link to={"cart"} className='border-[2px] cursor-pointer border-[#5946D7] p-[5px] rounded-[8px] bg-transparent hover:bg-[#5946D7] duration-200 hover:fill="white"'>
                    <svg className='w-[16px] sm:w-[20px] xl:w-[24px] h-[16px] sm:h-[20px] xl:h-[24px]' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5946D7" ><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                </Link>
            </div>

        </div>
    );
}

export default ProductCard