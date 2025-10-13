import React from 'react'
import { Link } from 'react-router-dom';

const CategoryHero = ({ name, number, url, id }) => {
  return (
    <Link to={`filter/name`} className="p-[10px] sm:items-start  sm:flex sm:whitespace-wrap sm:border-[1px] sm:px-[5px] sm:rounded-[10px] sm:rounded-[0px] sm:max-w-[680px] sm:w-full sm:bg-[white] border-[#DEDEE2] cursor-pointer sm:hover:bg-[#F4F5F6] sm:duration-[0.2s] text-black sm:items-center sm:py-[26px] pl-[10px] sm:pl-[20px]">
      {/* <img className='bg-[#e8e5e5] rounded-[10px]' width={60} src={url} alt="Salom" /> */}
      <svg className='bg-[#6B59CC] sm:bg- rounded-[10px]' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M43.942 23.942C43.942 12.928 35.014 4 24 4V11.976C30.608 11.976 35.966 17.332 35.966 23.942H43.942Z" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M43.942 23.942C43.942 12.928 35.014 4 24 4V11.976C30.608 11.976 35.966 17.332 35.966 23.942H43.942Z" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M43.942 23.942C43.942 12.928 35.014 4 24 4V11.976C30.608 11.976 35.966 17.332 35.966 23.942H43.942Z" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M43.942 23.942C43.942 12.928 35.014 4 24 4V11.976C30.608 11.976 35.966 17.332 35.966 23.942H43.942Z" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M39.8419 23.942V25.05C39.8419 34.412 32.2539 42 22.8919 42C13.5299 42 5.94189 34.412 5.94189 25.05C5.94189 15.688 13.5299 8.10001 22.8919 8.10001H23.9999" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M39.8419 23.942V25.05C39.8419 34.412 32.2539 42 22.8919 42C13.5299 42 5.94189 34.412 5.94189 25.05C5.94189 15.688 13.5299 8.10001 22.8919 8.10001H23.9999" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M39.8419 23.942V25.05C39.8419 34.412 32.2539 42 22.8919 42C13.5299 42 5.94189 34.412 5.94189 25.05C5.94189 15.688 13.5299 8.10001 22.8919 8.10001H23.9999" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M39.8419 23.942V25.05C39.8419 34.412 32.2539 42 22.8919 42C13.5299 42 5.94189 34.412 5.94189 25.05C5.94189 15.688 13.5299 8.10001 22.8919 8.10001H23.9999" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M27.3568 20.5854C29.8226 23.0512 29.8226 27.049 27.3568 29.5148C24.891 31.9805 20.8932 31.9805 18.4275 29.5148C15.9617 27.049 15.9617 23.0512 18.4275 20.5854C20.8932 18.1196 24.891 18.1196 27.3568 20.5854" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M27.3568 20.5854C29.8226 23.0512 29.8226 27.049 27.3568 29.5148C24.891 31.9805 20.8932 31.9805 18.4275 29.5148C15.9617 27.049 15.9617 23.0512 18.4275 20.5854C20.8932 18.1196 24.891 18.1196 27.3568 20.5854" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M27.3568 20.5854C29.8226 23.0512 29.8226 27.049 27.3568 29.5148C24.891 31.9805 20.8932 31.9805 18.4275 29.5148C15.9617 27.049 15.9617 23.0512 18.4275 20.5854C20.8932 18.1196 24.891 18.1196 27.3568 20.5854" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M27.3568 20.5854C29.8226 23.0512 29.8226 27.049 27.3568 29.5148C24.891 31.9805 20.8932 31.9805 18.4275 29.5148C15.9617 27.049 15.9617 23.0512 18.4275 20.5854C20.8932 18.1196 24.891 18.1196 27.3568 20.5854" stroke="#ffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>

      <div>
        <p className='text-[13px] line-clamp-2 pl-[8px] sm:pl-[8px] pt-[5px] sm:pt-[0px] sm:text-[20px]'>{name}</p> <p className='hidden sm:flex text-[14px] pl-[8px] sm:pl-[8px] pt-[8px]  sm:pt-[5px] text-[#505255]'>{number} </p>
      </div>
    </Link>
  );
}


export default CategoryHero