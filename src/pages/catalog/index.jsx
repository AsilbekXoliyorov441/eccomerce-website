import React from 'react'

const CatalogPage = () => {
    return (
        <>
    {/* <div className={`fixed top-0 z-[100] pt-[10px] bg-[white] left-0  w-full h-full ${menus ? "left-0" : "left-[-100%]"}`}>
        <div onClick={(el) => setMenus(false)} className='flex px-[15px] pb-[7px] items-center gap-[4px]'>
          <img src="/Arrow right.png" alt="Arrow" />
          <p className='text-[20px] font-bold '>Каталог</p>
        </div>
        <div className=''>
          <div className='bg-[#DEDEE2] p-[50px] h-[48px] w-full flex sm:hidden pt-[13px]'>
            <input className='border-1 border-[#bbbbbb] h-full  bg-[#ffff] outline-none text-black rounded-[10px]  h-full w-full px-[28px] py-[20px]' placeholder='Введите номер запчасти или VIN' type="search" />
          </div>
        </div>
        <div className='px-[20px] overflow-y-scroll h-[500px]'>
          <NavLink onClick={(el) => setMenus(false)}
            to="filter/name"
            className="text-black flex gap-[10px] py-[9px] text-[14px] items-center"
            href=""
          >
            <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M43.942 23.942C43.942 12.928 35.014 4 24 4V11.976C30.608 11.976 35.966 17.332 35.966 23.942H43.942Z" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M43.942 23.942C43.942 12.928 35.014 4 24 4V11.976C30.608 11.976 35.966 17.332 35.966 23.942H43.942Z" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M43.942 23.942C43.942 12.928 35.014 4 24 4V11.976C30.608 11.976 35.966 17.332 35.966 23.942H43.942Z" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M43.942 23.942C43.942 12.928 35.014 4 24 4V11.976C30.608 11.976 35.966 17.332 35.966 23.942H43.942Z" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M39.8419 23.942V25.05C39.8419 34.412 32.2539 42 22.8919 42C13.5299 42 5.94189 34.412 5.94189 25.05C5.94189 15.688 13.5299 8.10001 22.8919 8.10001H23.9999" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M39.8419 23.942V25.05C39.8419 34.412 32.2539 42 22.8919 42C13.5299 42 5.94189 34.412 5.94189 25.05C5.94189 15.688 13.5299 8.10001 22.8919 8.10001H23.9999" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M39.8419 23.942V25.05C39.8419 34.412 32.2539 42 22.8919 42C13.5299 42 5.94189 34.412 5.94189 25.05C5.94189 15.688 13.5299 8.10001 22.8919 8.10001H23.9999" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M39.8419 23.942V25.05C39.8419 34.412 32.2539 42 22.8919 42C13.5299 42 5.94189 34.412 5.94189 25.05C5.94189 15.688 13.5299 8.10001 22.8919 8.10001H23.9999" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.3568 20.5854C29.8226 23.0512 29.8226 27.049 27.3568 29.5148C24.891 31.9805 20.8932 31.9805 18.4275 29.5148C15.9617 27.049 15.9617 23.0512 18.4275 20.5854C20.8932 18.1196 24.891 18.1196 27.3568 20.5854" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.3568 20.5854C29.8226 23.0512 29.8226 27.049 27.3568 29.5148C24.891 31.9805 20.8932 31.9805 18.4275 29.5148C15.9617 27.049 15.9617 23.0512 18.4275 20.5854C20.8932 18.1196 24.891 18.1196 27.3568 20.5854" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.3568 20.5854C29.8226 23.0512 29.8226 27.049 27.3568 29.5148C24.891 31.9805 20.8932 31.9805 18.4275 29.5148C15.9617 27.049 15.9617 23.0512 18.4275 20.5854C20.8932 18.1196 24.891 18.1196 27.3568 20.5854" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.3568 20.5854C29.8226 23.0512 29.8226 27.049 27.3568 29.5148C24.891 31.9805 20.8932 31.9805 18.4275 29.5148C15.9617 27.049 15.9617 23.0512 18.4275 20.5854C20.8932 18.1196 24.891 18.1196 27.3568 20.5854" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Оригинальные запчасти</p>

          </NavLink>
          <hr className='text-[#DEDEE2]' />
          <NavLink onClick={(el) => setMenus(false)}
            to="filter/name"
            className="text-black flex gap-[10px] py-[9px] text-[14px] items-center"
            href=""
          >
            <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.73595 24.708L10.564 21.88C12.126 20.318 14.658 20.318 16.22 21.88L26.12 31.78C27.682 33.342 27.682 35.874 26.12 37.436L23.292 40.264C21.73 41.826 19.198 41.826 17.636 40.264L7.73595 30.364C6.17395 28.802 6.17395 26.27 7.73595 24.708V24.708Z" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.73595 24.708L10.564 21.88C12.126 20.318 14.658 20.318 16.22 21.88L26.12 31.78C27.682 33.342 27.682 35.874 26.12 37.436L23.292 40.264C21.73 41.826 19.198 41.826 17.636 40.264L7.73595 30.364C6.17395 28.802 6.17395 26.27 7.73595 24.708V24.708Z" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.73595 24.708L10.564 21.88C12.126 20.318 14.658 20.318 16.22 21.88L26.12 31.78C27.682 33.342 27.682 35.874 26.12 37.436L23.292 40.264C21.73 41.826 19.198 41.826 17.636 40.264L7.73595 30.364C6.17395 28.802 6.17395 26.27 7.73595 24.708V24.708Z" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.73595 24.708L10.564 21.88C12.126 20.318 14.658 20.318 16.22 21.88L26.12 31.78C27.682 33.342 27.682 35.874 26.12 37.436L23.292 40.264C21.73 41.826 19.198 41.826 17.636 40.264L7.73595 30.364C6.17395 28.802 6.17395 26.27 7.73595 24.708V24.708Z" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.1399 31.78L4.8999 36.02" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.1399 31.78L4.8999 36.02" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.1399 31.78L4.8999 36.02" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.1399 31.78L4.8999 36.02" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.52 43.62L16.76 39.38" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.52 43.62L16.76 39.38" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.52 43.62L16.76 39.38" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M12.52 43.62L16.76 39.38" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M33.192 7.736L30.364 4.908C29.582 4.126 28.316 4.126 27.536 4.908L25.294 7.15C24.918 7.526 24.708 8.034 24.708 8.564V13.392L21.88 16.22C21.098 17.002 21.098 18.268 21.88 19.048L28.952 26.12C29.734 26.902 31 26.902 31.78 26.12L34.608 23.292H39.436C39.966 23.292 40.476 23.082 40.85 22.706L43.092 20.464C43.874 19.682 43.874 18.416 43.092 17.636L40.264 14.808" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M33.192 7.736L30.364 4.908C29.582 4.126 28.316 4.126 27.536 4.908L25.294 7.15C24.918 7.526 24.708 8.034 24.708 8.564V13.392L21.88 16.22C21.098 17.002 21.098 18.268 21.88 19.048L28.952 26.12C29.734 26.902 31 26.902 31.78 26.12L34.608 23.292H39.436C39.966 23.292 40.476 23.082 40.85 22.706L43.092 20.464C43.874 19.682 43.874 18.416 43.092 17.636L40.264 14.808" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M33.192 7.736L30.364 4.908C29.582 4.126 28.316 4.126 27.536 4.908L25.294 7.15C24.918 7.526 24.708 8.034 24.708 8.564V13.392L21.88 16.22C21.098 17.002 21.098 18.268 21.88 19.048L28.952 26.12C29.734 26.902 31 26.902 31.78 26.12L34.608 23.292H39.436C39.966 23.292 40.476 23.082 40.85 22.706L43.092 20.464C43.874 19.682 43.874 18.416 43.092 17.636L40.264 14.808" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M33.192 7.736L30.364 4.908C29.582 4.126 28.316 4.126 27.536 4.908L25.294 7.15C24.918 7.526 24.708 8.034 24.708 8.564V13.392L21.88 16.22C21.098 17.002 21.098 18.268 21.88 19.048L28.952 26.12C29.734 26.902 31 26.902 31.78 26.12L34.608 23.292H39.436C39.966 23.292 40.476 23.082 40.85 22.706L43.092 20.464C43.874 19.682 43.874 18.416 43.092 17.636L40.264 14.808" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M30.5 19.5L28.5 17.5" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M30.5 19.5L28.5 17.5" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M30.5 19.5L28.5 17.5" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M30.5 19.5L28.5 17.5" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M32 44V42" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M32 44V42" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M32 44V42" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M32 44V42" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M44 32H42" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M44 32H42" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M44 32H42" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M44 32H42" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M42 42L40 40" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M42 42L40 40" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M42 42L40 40" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M42 42L40 40" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 4V6" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 4V6" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 4V6" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 4V6" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 16H6" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 16H6" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 16H6" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4 16H6" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 6L8 8" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 6L8 8" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 6L8 8" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M6 6L8 8" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 29L19 33" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 29L19 33" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 29L19 33" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 29L19 33" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M43.0919 11.98L38.8499 16.222C38.0679 17.004 36.8019 17.004 36.0219 16.222L31.7779 11.98C30.9959 11.198 30.9959 9.932 31.7779 9.152L36.0199 4.91" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M43.0919 11.98L38.8499 16.222C38.0679 17.004 36.8019 17.004 36.0219 16.222L31.7779 11.98C30.9959 11.198 30.9959 9.932 31.7779 9.152L36.0199 4.91" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M43.0919 11.98L38.8499 16.222C38.0679 17.004 36.8019 17.004 36.0219 16.222L31.7779 11.98C30.9959 11.198 30.9959 9.932 31.7779 9.152L36.0199 4.91" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M43.0919 11.98L38.8499 16.222C38.0679 17.004 36.8019 17.004 36.0219 16.222L31.7779 11.98C30.9959 11.198 30.9959 9.932 31.7779 9.152L36.0199 4.91" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <p>Запчасти для ТО</p>
          </NavLink>
          <hr className='text-[#DEDEE2]' />
          <NavLink onClick={(el) => setMenus(false)}
            to="filter/name"
            className="text-black flex gap-[10px] py-[9px] text-[14px] items-center"
            href=""
          >
            <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 36H26" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 36H26" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 36H26" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 36H26" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 30H20" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 30H20" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 30H20" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 30H20" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 14C10 12.8954 10.8954 12 12 12H29.1716C29.702 12 30.2107 12.2107 30.5858 12.5858L39.4142 21.4142C39.7893 21.7893 40 22.298 40 22.8284V39C40 40.6569 38.6569 42 37 42H13C11.3431 42 10 40.6569 10 39V14Z" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 14C10 12.8954 10.8954 12 12 12H29.1716C29.702 12 30.2107 12.2107 30.5858 12.5858L39.4142 21.4142C39.7893 21.7893 40 22.298 40 22.8284V39C40 40.6569 38.6569 42 37 42H13C11.3431 42 10 40.6569 10 39V14Z" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 14C10 12.8954 10.8954 12 12 12H29.1716C29.702 12 30.2107 12.2107 30.5858 12.5858L39.4142 21.4142C39.7893 21.7893 40 22.298 40 22.8284V39C40 40.6569 38.6569 42 37 42H13C11.3431 42 10 40.6569 10 39V14Z" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 14C10 12.8954 10.8954 12 12 12H29.1716C29.702 12 30.2107 12.2107 30.5858 12.5858L39.4142 21.4142C39.7893 21.7893 40 22.298 40 22.8284V39C40 40.6569 38.6569 42 37 42H13C11.3431 42 10 40.6569 10 39V14Z" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25 12V7C25 6.44772 24.5523 6 24 6H15C14.4477 6 14 6.44772 14 7V12" stroke="#2E1066" stroke-width="2" />
              <path d="M25 12V7C25 6.44772 24.5523 6 24 6H15C14.4477 6 14 6.44772 14 7V12" stroke="#410F9E" stroke-width="2" />
              <path d="M25 12V7C25 6.44772 24.5523 6 24 6H15C14.4477 6 14 6.44772 14 7V12" stroke="#453888" stroke-width="2" />
              <path d="M25 12V7C25 6.44772 24.5523 6 24 6H15C14.4477 6 14 6.44772 14 7V12" stroke="#5946D7" stroke-width="2" />
              <rect x="27.1216" y="16.8787" width="10.7574" height="5.37868" rx="2.68934" transform="rotate(45 27.1216 16.8787)" stroke="#2E1066" stroke-width="2" />
              <rect x="27.1216" y="16.8787" width="10.7574" height="5.37868" rx="2.68934" transform="rotate(45 27.1216 16.8787)" stroke="#410F9E" stroke-width="2" />
              <rect x="27.1216" y="16.8787" width="10.7574" height="5.37868" rx="2.68934" transform="rotate(45 27.1216 16.8787)" stroke="#453888" stroke-width="2" />
              <rect x="27.1216" y="16.8787" width="10.7574" height="5.37868" rx="2.68934" transform="rotate(45 27.1216 16.8787)" stroke="#5946D7" stroke-width="2" />
            </svg>
            <p>Автомасла</p>
          </NavLink>
          <hr className='text-[#DEDEE2]' />
          <NavLink onClick={(el) => setMenus(false)}
            to="filter/name"
            className="text-black flex gap-[10px] py-[9px] text-[14px] items-center"
            href=""
          >
            <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 18V34" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2 18V34" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2 18V34" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2 18V34" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 6V14" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 6V14" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 6V14" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 6V14" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18 6H30" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18 6H30" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18 6H30" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M18 6H30" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M40 18V22H36L32 14H16L12 18H8V34H14L17.448 40.894C17.786 41.572 18.478 42 19.236 42H32C33.104 42 34 41.104 34 40V34H40V38H44C45.104 38 46 37.104 46 36V20C46 18.896 45.104 18 44 18H40Z" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M40 18V22H36L32 14H16L12 18H8V34H14L17.448 40.894C17.786 41.572 18.478 42 19.236 42H32C33.104 42 34 41.104 34 40V34H40V38H44C45.104 38 46 37.104 46 36V20C46 18.896 45.104 18 44 18H40Z" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M40 18V22H36L32 14H16L12 18H8V34H14L17.448 40.894C17.786 41.572 18.478 42 19.236 42H32C33.104 42 34 41.104 34 40V34H40V38H44C45.104 38 46 37.104 46 36V20C46 18.896 45.104 18 44 18H40Z" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M40 18V22H36L32 14H16L12 18H8V34H14L17.448 40.894C17.786 41.572 18.478 42 19.236 42H32C33.104 42 34 41.104 34 40V34H40V38H44C45.104 38 46 37.104 46 36V20C46 18.896 45.104 18 44 18H40Z" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 26H2" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 26H2" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 26H2" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M8 26H2" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p> Неоригинальные запчасти</p>
          </NavLink>
          <hr className='text-[#DEDEE2]' />
          <NavLink onClick={(el) => setMenus(false)}
            to="filter/name"
            className="text-black flex gap-[10px] py-[9px] text-[14px] items-center"
            href=""
          >
            <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_117_45632)">
                <path d="M34 14V10C34 8.896 34.896 8 36 8H40C41.104 8 42 8.896 42 10V14" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34 14V10C34 8.896 34.896 8 36 8H40C41.104 8 42 8.896 42 10V14" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34 14V10C34 8.896 34.896 8 36 8H40C41.104 8 42 8.896 42 10V14" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34 14V10C34 8.896 34.896 8 36 8H40C41.104 8 42 8.896 42 10V14" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34 23V29" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34 23V29" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34 23V29" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34 23V29" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M37 26H31" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M37 26H31" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M37 26H31" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M37 26H31" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 26H11" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 26H11" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 26H11" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M17 26H11" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 14V10C6 8.896 6.896 8 8 8H12C13.104 8 14 8.896 14 10V14" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 14V10C6 8.896 6.896 8 8 8H12C13.104 8 14 8.896 14 10V14" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 14V10C6 8.896 6.896 8 8 8H12C13.104 8 14 8.896 14 10V14" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 14V10C6 8.896 6.896 8 8 8H12C13.104 8 14 8.896 14 10V14" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M34 14H42C43.104 14 44 14.896 44 16V36C44 38.21 42.21 40 40 40H8C5.79 40 4 38.21 4 36V16C4 14.896 4.896 14 6 14H14L17.414 10.586C17.79 10.21 18.298 10 18.828 10H29.172C29.702 10 30.212 10.21 30.586 10.586L34 14V14Z" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M34 14H42C43.104 14 44 14.896 44 16V36C44 38.21 42.21 40 40 40H8C5.79 40 4 38.21 4 36V16C4 14.896 4.896 14 6 14H14L17.414 10.586C17.79 10.21 18.298 10 18.828 10H29.172C29.702 10 30.212 10.21 30.586 10.586L34 14V14Z" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M34 14H42C43.104 14 44 14.896 44 16V36C44 38.21 42.21 40 40 40H8C5.79 40 4 38.21 4 36V16C4 14.896 4.896 14 6 14H14L17.414 10.586C17.79 10.21 18.298 10 18.828 10H29.172C29.702 10 30.212 10.21 30.586 10.586L34 14V14Z" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M34 14H42C43.104 14 44 14.896 44 16V36C44 38.21 42.21 40 40 40H8C5.79 40 4 38.21 4 36V16C4 14.896 4.896 14 6 14H14L17.414 10.586C17.79 10.21 18.298 10 18.828 10H29.172C29.702 10 30.212 10.21 30.586 10.586L34 14V14Z" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_117_45632">
                  <rect width="48" height="48" fill="white" />
                </clipPath>
              </defs>
            </svg>

            <p>Аккумуляторы</p>
          </NavLink>
          <hr className='text-[#DEDEE2]' />
          <NavLink onClick={(el) => setMenus(false)}
            to="filter/name"
            className="text-black flex gap-[10px] py-[9px] text-[14px] items-center"
            href=""
          >
            <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.0045 23.5138H14.0962" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M34.0045 23.5138H14.0962" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M34.0045 23.5138H14.0962" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M34.0045 23.5138H14.0962" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.5017 27.8696H28.5021" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.5017 27.8696H28.5021" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.5017 27.8696H28.5021" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.5017 27.8696H28.5021" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9961 24.6142V30.6407C13.9961 32.4805 15.4857 33.9728 17.3255 33.9761L30.671 34.0041C31.5556 34.0036 32.4038 33.6517 33.0289 33.0258C33.6541 32.3999 34.005 31.5514 34.0044 30.6668V17.3332C34.0055 15.4935 32.5168 14.0002 30.677 13.9958H22.1835C21.1645 13.9958 20.2013 14.4617 19.5684 15.2603L15.4427 20.4765C14.5086 21.6537 13.9989 23.1115 13.9961 24.6142Z" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9961 24.6142V30.6407C13.9961 32.4805 15.4857 33.9728 17.3255 33.9761L30.671 34.0041C31.5556 34.0036 32.4038 33.6517 33.0289 33.0258C33.6541 32.3999 34.005 31.5514 34.0044 30.6668V17.3332C34.0055 15.4935 32.5168 14.0002 30.677 13.9958H22.1835C21.1645 13.9958 20.2013 14.4617 19.5684 15.2603L15.4427 20.4765C14.5086 21.6537 13.9989 23.1115 13.9961 24.6142Z" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9961 24.6142V30.6407C13.9961 32.4805 15.4857 33.9728 17.3255 33.9761L30.671 34.0041C31.5556 34.0036 32.4038 33.6517 33.0289 33.0258C33.6541 32.3999 34.005 31.5514 34.0044 30.6668V17.3332C34.0055 15.4935 32.5168 14.0002 30.677 13.9958H22.1835C21.1645 13.9958 20.2013 14.4617 19.5684 15.2603L15.4427 20.4765C14.5086 21.6537 13.9989 23.1115 13.9961 24.6142Z" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.9961 24.6142V30.6407C13.9961 32.4805 15.4857 33.9728 17.3255 33.9761L30.671 34.0041C31.5556 34.0036 32.4038 33.6517 33.0289 33.0258C33.6541 32.3999 34.005 31.5514 34.0044 30.6668V17.3332C34.0055 15.4935 32.5168 14.0002 30.677 13.9958H22.1835C21.1645 13.9958 20.2013 14.4617 19.5684 15.2603L15.4427 20.4765C14.5086 21.6537 13.9989 23.1115 13.9961 24.6142Z" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <rect x="5.99268" y="5.99249" width="36.015" height="36.015" rx="5" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <rect x="5.99268" y="5.99249" width="36.015" height="36.015" rx="5" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <rect x="5.99268" y="5.99249" width="36.015" height="36.015" rx="5" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <rect x="5.99268" y="5.99249" width="36.015" height="36.015" rx="5" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Кузовные запчасти</p>
          </NavLink>
          <hr className='text-[#DEDEE2]' />
          <NavLink onClick={(el) => setMenus(false)}
            to="filter/name"
            className="text-black flex gap-[10px] py-[9px] text-[14px] items-center"
            href=""
          >
            <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 36H26" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 36H26" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 36H26" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 36H26" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 30H20" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 30H20" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 30H20" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M16 30H20" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 14C10 12.8954 10.8954 12 12 12H29.1716C29.702 12 30.2107 12.2107 30.5858 12.5858L39.4142 21.4142C39.7893 21.7893 40 22.298 40 22.8284V39C40 40.6569 38.6569 42 37 42H13C11.3431 42 10 40.6569 10 39V14Z" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 14C10 12.8954 10.8954 12 12 12H29.1716C29.702 12 30.2107 12.2107 30.5858 12.5858L39.4142 21.4142C39.7893 21.7893 40 22.298 40 22.8284V39C40 40.6569 38.6569 42 37 42H13C11.3431 42 10 40.6569 10 39V14Z" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 14C10 12.8954 10.8954 12 12 12H29.1716C29.702 12 30.2107 12.2107 30.5858 12.5858L39.4142 21.4142C39.7893 21.7893 40 22.298 40 22.8284V39C40 40.6569 38.6569 42 37 42H13C11.3431 42 10 40.6569 10 39V14Z" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 14C10 12.8954 10.8954 12 12 12H29.1716C29.702 12 30.2107 12.2107 30.5858 12.5858L39.4142 21.4142C39.7893 21.7893 40 22.298 40 22.8284V39C40 40.6569 38.6569 42 37 42H13C11.3431 42 10 40.6569 10 39V14Z" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M25 12V7C25 6.44772 24.5523 6 24 6H15C14.4477 6 14 6.44772 14 7V12" stroke="#2E1066" stroke-width="2" />
              <path d="M25 12V7C25 6.44772 24.5523 6 24 6H15C14.4477 6 14 6.44772 14 7V12" stroke="#410F9E" stroke-width="2" />
              <path d="M25 12V7C25 6.44772 24.5523 6 24 6H15C14.4477 6 14 6.44772 14 7V12" stroke="#453888" stroke-width="2" />
              <path d="M25 12V7C25 6.44772 24.5523 6 24 6H15C14.4477 6 14 6.44772 14 7V12" stroke="#5946D7" stroke-width="2" />
              <rect x="27.1216" y="16.8787" width="10.7574" height="5.37868" rx="2.68934" transform="rotate(45 27.1216 16.8787)" stroke="#2E1066" stroke-width="2" />
              <rect x="27.1216" y="16.8787" width="10.7574" height="5.37868" rx="2.68934" transform="rotate(45 27.1216 16.8787)" stroke="#410F9E" stroke-width="2" />
              <rect x="27.1216" y="16.8787" width="10.7574" height="5.37868" rx="2.68934" transform="rotate(45 27.1216 16.8787)" stroke="#453888" stroke-width="2" />
              <rect x="27.1216" y="16.8787" width="10.7574" height="5.37868" rx="2.68934" transform="rotate(45 27.1216 16.8787)" stroke="#5946D7" stroke-width="2" />
            </svg>

            <p>Автохимия</p>
          </NavLink>
          <hr className='text-[#DEDEE2]' />
          <NavLink onClick={(el) => setMenus(false)}
            to="filter/name"
            className="text-black flex gap-[10px] py-[9px] text-[14px] items-center"
            href=""
          >
            <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0981 32.1534V32.1534C26.8287 32.3651 25.5305 32.0076 24.5485 31.1759C23.5664 30.3442 23 29.1225 23 27.8356V20.1644C23 18.8775 23.5664 17.6558 24.5485 16.8241C25.5305 15.9924 26.8287 15.6349 28.0981 15.8466V15.8466C32.0839 16.5108 35.0052 19.9593 35.005 24V24C35.0052 28.0407 32.0839 31.4892 28.0981 32.1534V32.1534Z" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0981 32.1534V32.1534C26.8287 32.3651 25.5305 32.0076 24.5485 31.1759C23.5664 30.3442 23 29.1225 23 27.8356V20.1644C23 18.8775 23.5664 17.6558 24.5485 16.8241C25.5305 15.9924 26.8287 15.6349 28.0981 15.8466V15.8466C32.0839 16.5108 35.0052 19.9593 35.005 24V24C35.0052 28.0407 32.0839 31.4892 28.0981 32.1534V32.1534Z" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0981 32.1534V32.1534C26.8287 32.3651 25.5305 32.0076 24.5485 31.1759C23.5664 30.3442 23 29.1225 23 27.8356V20.1644C23 18.8775 23.5664 17.6558 24.5485 16.8241C25.5305 15.9924 26.8287 15.6349 28.0981 15.8466V15.8466C32.0839 16.5108 35.0052 19.9593 35.005 24V24C35.0052 28.0407 32.0839 31.4892 28.0981 32.1534V32.1534Z" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M28.0981 32.1534V32.1534C26.8287 32.3651 25.5305 32.0076 24.5485 31.1759C23.5664 30.3442 23 29.1225 23 27.8356V20.1644C23 18.8775 23.5664 17.6558 24.5485 16.8241C25.5305 15.9924 26.8287 15.6349 28.0981 15.8466V15.8466C32.0839 16.5108 35.0052 19.9593 35.005 24V24C35.0052 28.0407 32.0839 31.4892 28.0981 32.1534V32.1534Z" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.9961 19.9983L17.9978 18.9979" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.9961 19.9983L17.9978 18.9979" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.9961 19.9983L17.9978 18.9979" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.9961 19.9983L17.9978 18.9979" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.9961 25.0004L17.9978 24" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.9961 25.0004L17.9978 24" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.9961 25.0004L17.9978 24" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.9961 25.0004L17.9978 24" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0002 42.0075V42.0075C14.0549 42.0075 5.99268 33.9453 5.99268 24V24C5.99268 14.0547 14.0549 5.99251 24.0002 5.99251V5.99251C33.9454 5.99251 42.0077 14.0547 42.0077 24V24C42.0077 33.9453 33.9454 42.0075 24.0002 42.0075V42.0075Z" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0002 42.0075V42.0075C14.0549 42.0075 5.99268 33.9453 5.99268 24V24C5.99268 14.0547 14.0549 5.99251 24.0002 5.99251V5.99251C33.9454 5.99251 42.0077 14.0547 42.0077 24V24C42.0077 33.9453 33.9454 42.0075 24.0002 42.0075V42.0075Z" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0002 42.0075V42.0075C14.0549 42.0075 5.99268 33.9453 5.99268 24V24C5.99268 14.0547 14.0549 5.99251 24.0002 5.99251V5.99251C33.9454 5.99251 42.0077 14.0547 42.0077 24V24C42.0077 33.9453 33.9454 42.0075 24.0002 42.0075V42.0075Z" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0002 42.0075V42.0075C14.0549 42.0075 5.99268 33.9453 5.99268 24V24C5.99268 14.0547 14.0549 5.99251 24.0002 5.99251V5.99251C33.9454 5.99251 42.0077 14.0547 42.0077 24V24C42.0077 33.9453 33.9454 42.0075 24.0002 42.0075V42.0075Z" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.9961 30.0025L17.9978 29.0021" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.9961 30.0025L17.9978 29.0021" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.9961 30.0025L17.9978 29.0021" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M13.9961 30.0025L17.9978 29.0021" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Автолампы</p>
          </NavLink>
          <hr className='text-[#DEDEE2]' />
          <NavLink onClick={(el) => setMenus(false)}
            to="filter/name"
            className="text-black flex gap-[10px] py-[9px] text-[14px] items-center"
            href=""
          >
            <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.2192 13.9958H24.7784" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.2192 13.9958H24.7784" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.2192 13.9958H24.7784" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.2192 13.9958H24.7784" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.9976 24H11.9951V38.0058" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.9976 24H11.9951V38.0058" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.9976 24H11.9951V38.0058" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M17.9976 24H11.9951V38.0058" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.995 38.0058H3.9917V15.1203C3.9917 13.7476 4.7362 12.4829 5.93651 11.8169L19.164 4.46786C20.3057 3.83351 21.6939 3.83351 22.8355 4.46786L36.0631 11.8169C37.2623 12.4837 38.0059 13.7481 38.0059 15.1203V17.9975" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.995 38.0058H3.9917V15.1203C3.9917 13.7476 4.7362 12.4829 5.93651 11.8169L19.164 4.46786C20.3057 3.83351 21.6939 3.83351 22.8355 4.46786L36.0631 11.8169C37.2623 12.4837 38.0059 13.7481 38.0059 15.1203V17.9975" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.995 38.0058H3.9917V15.1203C3.9917 13.7476 4.7362 12.4829 5.93651 11.8169L19.164 4.46786C20.3057 3.83351 21.6939 3.83351 22.8355 4.46786L36.0631 11.8169C37.2623 12.4837 38.0059 13.7481 38.0059 15.1203V17.9975" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.995 38.0058H3.9917V15.1203C3.9917 13.7476 4.7362 12.4829 5.93651 11.8169L19.164 4.46786C20.3057 3.83351 21.6939 3.83351 22.8355 4.46786L36.0631 11.8169C37.2623 12.4837 38.0059 13.7481 38.0059 15.1203V17.9975" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M44.0085 35.6048C44.0085 33.3948 42.2169 31.6031 40.0069 31.6031H24.0002C21.7901 31.6031 19.9985 33.3948 19.9985 35.6048" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M44.0085 35.6048C44.0085 33.3948 42.2169 31.6031 40.0069 31.6031H24.0002C21.7901 31.6031 19.9985 33.3948 19.9985 35.6048" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M44.0085 35.6048C44.0085 33.3948 42.2169 31.6031 40.0069 31.6031H24.0002C21.7901 31.6031 19.9985 33.3948 19.9985 35.6048" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M44.0085 35.6048C44.0085 33.3948 42.2169 31.6031 40.0069 31.6031H24.0002C21.7901 31.6031 19.9985 33.3948 19.9985 35.6048" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19.9985 35.6048V42.0075C19.9985 43.1125 20.8943 44.0083 21.9994 44.0083H23.9802C25.0852 44.0083 25.981 43.1125 25.981 42.0075V40.6849H38.026V42.0075C38.026 43.1125 38.9218 44.0083 40.0269 44.0083H42.0077C43.1127 44.0083 44.0085 43.1125 44.0085 42.0075V35.6048" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19.9985 35.6048V42.0075C19.9985 43.1125 20.8943 44.0083 21.9994 44.0083H23.9802C25.0852 44.0083 25.981 43.1125 25.981 42.0075V40.6849H38.026V42.0075C38.026 43.1125 38.9218 44.0083 40.0269 44.0083H42.0077C43.1127 44.0083 44.0085 43.1125 44.0085 42.0075V35.6048" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19.9985 35.6048V42.0075C19.9985 43.1125 20.8943 44.0083 21.9994 44.0083H23.9802C25.0852 44.0083 25.981 43.1125 25.981 42.0075V40.6849H38.026V42.0075C38.026 43.1125 38.9218 44.0083 40.0269 44.0083H42.0077C43.1127 44.0083 44.0085 43.1125 44.0085 42.0075V35.6048" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M19.9985 35.6048V42.0075C19.9985 43.1125 20.8943 44.0083 21.9994 44.0083H23.9802C25.0852 44.0083 25.981 43.1125 25.981 42.0075V40.6849H38.026V42.0075C38.026 43.1125 38.9218 44.0083 40.0269 44.0083H42.0077C43.1127 44.0083 44.0085 43.1125 44.0085 42.0075V35.6048" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.4756 36.2051H24.4844" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.4756 36.2051H24.4844" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.4756 36.2051H24.4844" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.4756 36.2051H24.4844" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M39.5225 36.2051H36.5312" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M39.5225 36.2051H36.5312" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M39.5225 36.2051H36.5312" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M39.5225 36.2051H36.5312" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M41.0171 31.4771L44.0083 29.9825" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M41.0171 31.4771L44.0083 29.9825" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M41.0171 31.4771L44.0083 29.9825" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M41.0171 31.4771L44.0083 29.9825" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.9998 31.4771L19.9985 29.9825" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.9998 31.4771L19.9985 29.9825" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.9998 31.4771L19.9985 29.9825" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.9998 31.4771L19.9985 29.9825" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.1373 24C25.7485 24.0035 24.5435 24.9594 24.2241 26.311L22.9556 31.7332L24.2241 26.311C24.5435 24.9594 25.7485 24.0035 27.1373 24H36.8694C38.2582 24.0035 39.4632 24.9594 39.7826 26.311L41.0511 31.7332" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.1373 24C25.7485 24.0035 24.5435 24.9594 24.2241 26.311L22.9556 31.7332L24.2241 26.311C24.5435 24.9594 25.7485 24.0035 27.1373 24H36.8694C38.2582 24.0035 39.4632 24.9594 39.7826 26.311L41.0511 31.7332" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.1373 24C25.7485 24.0035 24.5435 24.9594 24.2241 26.311L22.9556 31.7332L24.2241 26.311C24.5435 24.9594 25.7485 24.0035 27.1373 24H36.8694C38.2582 24.0035 39.4632 24.9594 39.7826 26.311L41.0511 31.7332" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M27.1373 24C25.7485 24.0035 24.5435 24.9594 24.2241 26.311L22.9556 31.7332L24.2241 26.311C24.5435 24.9594 25.7485 24.0035 27.1373 24H36.8694C38.2582 24.0035 39.4632 24.9594 39.7826 26.311L41.0511 31.7332" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>

            <p>Запчасти ВАЗ, ГАЗ, КАМАЗ</p>
          </NavLink>
          <hr className='text-[#DEDEE2]' />
          <NavLink onClick={(el) => setMenus(false)}
            to="filter/name"
            className="text-black flex gap-[10px] pt-[9px] pb-[2px] text-[14px] items-center"
            href=""
          >
            <svg width="30" height="30" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 20V10" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 20V10" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 20V10" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 20V10" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 38V28" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 38V28" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 38V28" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M24 38V28" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.8198 21.18L33.8998 14.1" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.8198 21.18L33.8998 14.1" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.8198 21.18L33.8998 14.1" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.8198 21.18L33.8998 14.1" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.1001 33.9L21.1801 26.82" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.1001 33.9L21.1801 26.82" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.1001 33.9L21.1801 26.82" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.1001 33.9L21.1801 26.82" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M28 24H38" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M28 24H38" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M28 24H38" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M28 24H38" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 24H20" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 24H20" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 24H20" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M10 24H20" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.8198 26.82L33.8998 33.9" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.8198 26.82L33.8998 33.9" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.8198 26.82L33.8998 33.9" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.8198 26.82L33.8998 33.9" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.1001 14.1L21.1801 21.18" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.1001 14.1L21.1801 21.18" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.1001 14.1L21.1801 21.18" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M14.1001 14.1L21.1801 21.18" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M38.1421 9.85786C45.9525 17.6683 45.9525 30.3317 38.1421 38.1421C30.3316 45.9525 17.6683 45.9525 9.85786 38.1421C2.04738 30.3316 2.04738 17.6683 9.85786 9.85786C17.6683 2.04738 30.3317 2.04738 38.1421 9.85786" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M38.1421 9.85786C45.9525 17.6683 45.9525 30.3317 38.1421 38.1421C30.3316 45.9525 17.6683 45.9525 9.85786 38.1421C2.04738 30.3316 2.04738 17.6683 9.85786 9.85786C17.6683 2.04738 30.3317 2.04738 38.1421 9.85786" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M38.1421 9.85786C45.9525 17.6683 45.9525 30.3317 38.1421 38.1421C30.3316 45.9525 17.6683 45.9525 9.85786 38.1421C2.04738 30.3316 2.04738 17.6683 9.85786 9.85786C17.6683 2.04738 30.3317 2.04738 38.1421 9.85786" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M38.1421 9.85786C45.9525 17.6683 45.9525 30.3317 38.1421 38.1421C30.3316 45.9525 17.6683 45.9525 9.85786 38.1421C2.04738 30.3316 2.04738 17.6683 9.85786 9.85786C17.6683 2.04738 30.3317 2.04738 38.1421 9.85786" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M33.8995 14.1005C39.3668 19.5678 39.3668 28.4321 33.8995 33.8995C28.4321 39.3668 19.5678 39.3668 14.1005 33.8995C8.63316 28.4321 8.63316 19.5678 14.1005 14.1005C19.5678 8.63316 28.4321 8.63316 33.8995 14.1005" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M33.8995 14.1005C39.3668 19.5678 39.3668 28.4321 33.8995 33.8995C28.4321 39.3668 19.5678 39.3668 14.1005 33.8995C8.63316 28.4321 8.63316 19.5678 14.1005 14.1005C19.5678 8.63316 28.4321 8.63316 33.8995 14.1005" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M33.8995 14.1005C39.3668 19.5678 39.3668 28.4321 33.8995 33.8995C28.4321 39.3668 19.5678 39.3668 14.1005 33.8995C8.63316 28.4321 8.63316 19.5678 14.1005 14.1005C19.5678 8.63316 28.4321 8.63316 33.8995 14.1005" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M33.8995 14.1005C39.3668 19.5678 39.3668 28.4321 33.8995 33.8995C28.4321 39.3668 19.5678 39.3668 14.1005 33.8995C8.63316 28.4321 8.63316 19.5678 14.1005 14.1005C19.5678 8.63316 28.4321 8.63316 33.8995 14.1005" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.8284 21.1716C28.3905 22.7337 28.3905 25.2664 26.8284 26.8285C25.2663 28.3906 22.7337 28.3906 21.1716 26.8285C19.6095 25.2664 19.6095 22.7337 21.1716 21.1716C22.7337 19.6095 25.2663 19.6095 26.8284 21.1716" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.8284 21.1716C28.3905 22.7337 28.3905 25.2664 26.8284 26.8285C25.2663 28.3906 22.7337 28.3906 21.1716 26.8285C19.6095 25.2664 19.6095 22.7337 21.1716 21.1716C22.7337 19.6095 25.2663 19.6095 26.8284 21.1716" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.8284 21.1716C28.3905 22.7337 28.3905 25.2664 26.8284 26.8285C25.2663 28.3906 22.7337 28.3906 21.1716 26.8285C19.6095 25.2664 19.6095 22.7337 21.1716 21.1716C22.7337 19.6095 25.2663 19.6095 26.8284 21.1716" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.8284 21.1716C28.3905 22.7337 28.3905 25.2664 26.8284 26.8285C25.2663 28.3906 22.7337 28.3906 21.1716 26.8285C19.6095 25.2664 19.6095 22.7337 21.1716 21.1716C22.7337 19.6095 25.2663 19.6095 26.8284 21.1716" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>



            <p>Диски</p>
          </NavLink>
          <hr className='text-[#DEDEE2]' />
        </div>
      </div> */}

        </>
    )
}

export default CatalogPage