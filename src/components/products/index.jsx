import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ name, url, discount, rating, article, price }) => {
    return (
        <div className="hover:shadow-xl  bg-[white] hover:bg-[#F4F5F6] group duration-300 max-w-[400px] w-full border-[1px] rounded-[6px] overflow-hidden p-[10px] sm:p-[20px]  border-[#E3E3E8]">
            <img src={url} alt="Img" />
            <div className='flex items-center justify-between pt-[14px]'>
                <p className='text-[#7A7680] text-[13px]'>{article}</p>
                <img className='' src="/rating.png" alt="Star" />
            </div>
            <div className='pt-[10px] text-[16px]'>
                <h3>{name}</h3>
            </div>
            <div className='flex items-center justify-between pt-[16px]'>
                <div className='flex items-center gap-[10px]'>
                    <p className='text-[30px] '>{price}</p>
                    <strike className="text-[#7A7680]">{discount}</strike>
                </div>
                <Link to={"cart"} className='border-[2px] cursor-pointer border-[#5946D7] p-[5px] rounded-[8px] bg-transparent hover:bg-[#5946D7] duration-200 hover:fill="white"'>
                    <svg className='' xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5946D7" ><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
                </Link>
            </div>

        </div>
    );
}

export default ProductCard