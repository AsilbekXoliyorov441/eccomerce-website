import React from 'react'

const CategoryHero = ({name , number , url}) => {
  return (
    <div className=" items-start  sm:flex whitespace-wrap border-[1px] rounded-[10px] sm:rounded-[0px] max-w-[680px] w-full bg-[white] border-[#DEDEE2] cursor-pointer hover:bg-[#F4F5F6] duration-[0.2s] text-black items-center py-[26px] pl-[10px] sm:pl-[20px]">
      <img
      width={60}
        src={url}
        alt="Salom"
      />
      <div>
        <p className='text-[18px]'>{name}</p> <p>{number} </p>
      </div>
    </div>
  );
}

export default CategoryHero