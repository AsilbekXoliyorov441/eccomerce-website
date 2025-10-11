import React from 'react'
import { Link } from 'react-router-dom';

const CategoryHero = ({name , number , url , id}) => {
  return (
    <Link
      to={`filter/${id}`}
      className="flex border-[1px] max-w-auto w-full border-[#DEDEE2]  rounded-[5px] cursor-pointer mt-[10px] hover:bg-[#F4F5F6] duration-[0.2s] text-black items-center py-[26px] pl-[20px]"
    >
      <img width={60} src={url} alt="Salom" />
      <div>
        <p className='text-[18px]'>{name}</p> <p>{number} </p>
      </div>
    </Link>
  );
}

export default CategoryHero