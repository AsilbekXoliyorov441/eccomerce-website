import React from 'react'
import { Link } from 'react-router-dom';

const CategoryHero = ({name , number , url , id}) => {
  return (
    <Link to={`filter/name`} className=" items-start  sm:flex whitespace-wrap border-[1px] px-[5px] rounded-[10px] sm:rounded-[0px] max-w-[680px] w-full bg-[white] border-[#DEDEE2] cursor-pointer hover:bg-[#F4F5F6] duration-[0.2s] text-black items-center py-[26px] pl-[10px] sm:pl-[20px]">
      <img
      width={60}
        src={url}
        alt="Salom"
      />
      <div>
        <p className='text-[17px] pl-[8px] sm:pl-[8px] pt-[10px] sm:pt-[0px] sm:text-[20px]'>{name}</p> <p className='text-[14px] pl-[8px] sm:pl-[8px] pt-[8px]  sm:pt-[5px] text-[#505255]'>{number} </p>
      </div>
    </Link>
  );
}


export default CategoryHero