import React from 'react'
import { Link } from 'react-router-dom';

const CategoryHero = ({name , number , url , id}) => {
  return (
    <Link className="flex border-[1px] max-w-auto w-full border-[#DEDEE2]  rounded-[5px] cursor-pointer mt-[10px] hover:bg-[#F4F5F6] duration-[0.2s] text-black items-center py-[26px] pl-[20px]">
      <img
      width={100}
        src={url}
        alt="Salom"
      />
      <div>
        {name} <br /> {number} 
      </div>
    </Link>
  );
}

export default CategoryHero