import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='fixed top-0 z-50 bg-white left-0 w-full '>
      <div className='container mx-auto  px-[15px] lg:px-25 pt-[18px]'>
        <div className='flex justify-between items-center gap-[20px] pb-[18px]'>
          <div className='flex items-center gap-[7px]'>
            <img className='flex sm:hidden' src="/public/toggle.png" alt="" />
            <img className='max-w-[119px] sm:max-w-[135px] h-[23.18px] sm:h-[30.77px]' src="/public/head-logo.png" alt="img" />
          </div>
          <div className='max-w-[530px] w-full hidden sm:flex'>
            <input className='border-1 border-[#DEDEE2] bg-[#F4F5F6] outline-none text-black rounded-[10px]  h-[44px] w-full px-[28px] py-[20px]' placeholder='Введите номер запчасти или VIN' type="search" />
          </div>
          <div className='flex items-center gap-[20px]  xl:gap-[30px]'>
            <div className='flex items-center gap-1 text-black whitespace-nowrap'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z" stroke="#2E1066" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z" stroke="#410F9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z" stroke="#453888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z" stroke="#5946D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z" stroke="#6B59CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z" stroke="#2E1066" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z" stroke="#410F9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z" stroke="#453888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z" stroke="#5946D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z" stroke="#6B59CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <p className='hidden xl:flex'>Санкт-Петербург</p>
            </div>
            <div className='flex items-center gap-1 text-black font-bold text-[18px] whitespace-nowrap'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.965 16.61L17.792 15.437C17.206 14.851 16.256 14.851 15.671 15.437L14.749 16.359C14.543 16.565 14.231 16.634 13.965 16.517C12.629 15.932 11.309 15.045 10.132 13.868C8.96002 12.696 8.07602 11.382 7.49002 10.051C7.36802 9.77597 7.43902 9.45297 7.65202 9.23997L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.61V16.61Z" stroke="#2E1066" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.965 16.61L17.792 15.437C17.206 14.851 16.256 14.851 15.671 15.437L14.749 16.359C14.543 16.565 14.231 16.634 13.965 16.517C12.629 15.932 11.309 15.045 10.132 13.868C8.96002 12.696 8.07602 11.382 7.49002 10.051C7.36802 9.77597 7.43902 9.45297 7.65202 9.23997L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.61V16.61Z" stroke="#410F9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.965 16.61L17.792 15.437C17.206 14.851 16.256 14.851 15.671 15.437L14.749 16.359C14.543 16.565 14.231 16.634 13.965 16.517C12.629 15.932 11.309 15.045 10.132 13.868C8.96002 12.696 8.07602 11.382 7.49002 10.051C7.36802 9.77597 7.43902 9.45297 7.65202 9.23997L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.61V16.61Z" stroke="#453888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.965 16.61L17.792 15.437C17.206 14.851 16.256 14.851 15.671 15.437L14.749 16.359C14.543 16.565 14.231 16.634 13.965 16.517C12.629 15.932 11.309 15.045 10.132 13.868C8.96002 12.696 8.07602 11.382 7.49002 10.051C7.36802 9.77597 7.43902 9.45297 7.65202 9.23997L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.61V16.61Z" stroke="#5946D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18.965 16.61L17.792 15.437C17.206 14.851 16.256 14.851 15.671 15.437L14.749 16.359C14.543 16.565 14.231 16.634 13.965 16.517C12.629 15.932 11.309 15.045 10.132 13.868C8.96002 12.696 8.07602 11.382 7.49002 10.051C7.36802 9.77597 7.43902 9.45297 7.65202 9.23997L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.61V16.61Z" stroke="#6B59CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <g opacity="0.5">
                  <path d="M13 6.99099C14.031 6.97699 15.067 7.35899 15.854 8.14599C16.641 8.93299 17.023 9.969 17.009 11M13 2.96399C15.056 2.96399 17.113 3.74899 18.682 5.31799C20.251 6.88699 21.036 8.94399 21.036 11" stroke="#2E1066" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M13 6.99099C14.031 6.97699 15.067 7.35899 15.854 8.14599C16.641 8.93299 17.023 9.969 17.009 11M13 2.96399C15.056 2.96399 17.113 3.74899 18.682 5.31799C20.251 6.88699 21.036 8.94399 21.036 11" stroke="#410F9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M13 6.99099C14.031 6.97699 15.067 7.35899 15.854 8.14599C16.641 8.93299 17.023 9.969 17.009 11M13 2.96399C15.056 2.96399 17.113 3.74899 18.682 5.31799C20.251 6.88699 21.036 8.94399 21.036 11" stroke="#453888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M13 6.99099C14.031 6.97699 15.067 7.35899 15.854 8.14599C16.641 8.93299 17.023 9.969 17.009 11M13 2.96399C15.056 2.96399 17.113 3.74899 18.682 5.31799C20.251 6.88699 21.036 8.94399 21.036 11" stroke="#5946D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M13 6.99099C14.031 6.97699 15.067 7.35899 15.854 8.14599C16.641 8.93299 17.023 9.969 17.009 11M13 2.96399C15.056 2.96399 17.113 3.74899 18.682 5.31799C20.251 6.88699 21.036 8.94399 21.036 11" stroke="#6B59CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </g>
              </svg>
              <a className='hidden xl:flex' href="tel:770147703">
                +998-77-014-77-03
              </a>
            </div>
            <div className='flex items-center text-black  gap-1 whitespace-nowrap'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z" fill="#5946D7" fill-opacity="0.1" />
                <path d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z" stroke="#2E1066" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z" stroke="#410F9E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z" stroke="#453888" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z" stroke="#5946D7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z" stroke="#6B59CC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <circle cx="12" cy="7" r="4" stroke="#2E1066" stroke-width="1.5" />
                <circle cx="12" cy="7" r="4" stroke="#410F9E" stroke-width="1.5" />
                <circle cx="12" cy="7" r="4" stroke="#453888" stroke-width="1.5" />
                <circle cx="12" cy="7" r="4" stroke="#5946D7" stroke-width="1.5" />
                <circle cx="12" cy="7" r="4" stroke="#6B59CC" stroke-width="1.5" />
              </svg>
              <p className='hidden xl:flex'>Вход / Регистрация</p>
            </div>
          </div>
        </div>

        <hr className='text-[#E3E3E8] border-[1px]' />

        <div className='max-w-[530px] h-[1px] w-full flex sm:hidden pt-[13px]'>
          <input className='border-1 border-[#DEDEE2]  bg-[#F4F5F6] outline-none text-black rounded-[10px]  h-full w-full px-[28px] py-[20px]' placeholder='Введите номер запчасти или VIN' type="search" />
        </div>

        <div className='pt-[20px] flex items-center justify-between gap-[10px] hidden sm:flex pb-[20px]'>
          <NavLink to="cart" className='text-black flex items-center justify-center whitespace-nowrap max-w-[220px] w-full border-[#DEDEE2] border-[1px]  p-[8px] hover:bg-[#F4F5F6] duration-[0.2s] rounded-[5px] hidden xl:flex' href="">
            Запчасти для ТО
          </NavLink>
          <NavLink to="cart" className='text-black flex items-center justify-center whitespace-nowrap max-w-[220px] w-full border-[#DEDEE2] border-[1px]  p-[8px] hover:bg-[#F4F5F6] duration-[0.2s] rounded-[5px] hidden xl:flex' href="">
            Автомасла
          </NavLink>
          <NavLink to="cart" className='text-black flex items-center justify-center whitespace-nowrap max-w-[220px] w-full border-[#DEDEE2] border-[1px]  p-[8px] hover:bg-[#F4F5F6] duration-[0.2s] rounded-[5px]' href="">
            Оригинальные запчасти
          </NavLink>
          <NavLink to="cart" className='text-black flex items-center justify-center whitespace-nowrap max-w-[220px] w-full border-[#DEDEE2] border-[1px]  p-[8px] hover:bg-[#F4F5F6] duration-[0.2s] rounded-[5px] hidden xl:flex' href="">
            Неоригинальные запчасти
          </NavLink>
          <NavLink to="cart" className='text-black flex items-center justify-center whitespace-nowrap max-w-[220px] w-full border-[#DEDEE2] border-[1px]  p-[8px] hover:bg-[#F4F5F6] duration-[0.2s] rounded-[5px]' href="">
            Лампочки
          </NavLink>
          <NavLink to="cart" className='text-black flex items-center justify-center whitespace-nowrap max-w-[220px] w-full border-[#DEDEE2] border-[1px]  p-[8px] hover:bg-[#F4F5F6] duration-[0.2s] rounded-[5px]' href="">
            Аккумуляторы
          </NavLink>
          <NavLink to="cart" className='text-black flex items-center justify-center whitespace-nowrap max-w-[150px] w-full border-[#DEDEE2] border-[1px]  p-[2.7px] hover:bg-[#F4F5F6] duration-[0.2s] rounded-[5px] gap-[5px]' href="">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.83203 9.33337L9.8787 18.9947C10.16 20.3254 11.3987 21.2307 12.7534 21.096L21.8414 20.1867C22.9614 20.0747 23.8894 19.272 24.1627 18.18L25.96 10.9907C26.1707 10.148 25.5347 9.33337 24.6667 9.33337H13.5827" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.83203 9.33337L9.8787 18.9947C10.16 20.3254 11.3987 21.2307 12.7534 21.096L21.8414 20.1867C22.9614 20.0747 23.8894 19.272 24.1627 18.18L25.96 10.9907C26.1707 10.148 25.5347 9.33337 24.6667 9.33337H13.5827" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.83203 9.33337L9.8787 18.9947C10.16 20.3254 11.3987 21.2307 12.7534 21.096L21.8414 20.1867C22.9614 20.0747 23.8894 19.272 24.1627 18.18L25.96 10.9907C26.1707 10.148 25.5347 9.33337 24.6667 9.33337H13.5827" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.83203 9.33337L9.8787 18.9947C10.16 20.3254 11.3987 21.2307 12.7534 21.096L21.8414 20.1867C22.9614 20.0747 23.8894 19.272 24.1627 18.18L25.96 10.9907C26.1707 10.148 25.5347 9.33337 24.6667 9.33337H13.5827" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.83203 9.33337L9.8787 18.9947C10.16 20.3254 11.3987 21.2307 12.7534 21.096L21.8414 20.1867C22.9614 20.0747 23.8894 19.272 24.1627 18.18L25.96 10.9907C26.1707 10.148 25.5347 9.33337 24.6667 9.33337H13.5827" stroke="#6B59CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.83184 9.33337L6.96517 5.33337H4.6665" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.83184 9.33337L6.96517 5.33337H4.6665" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.83184 9.33337L6.96517 5.33337H4.6665" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.83184 9.33337L6.96517 5.33337H4.6665" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7.83184 9.33337L6.96517 5.33337H4.6665" stroke="#6B59CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.812 25.6893C22.5426 25.6893 22.324 25.908 22.3266 26.1773C22.3266 26.4466 22.5453 26.6653 22.8146 26.6653C23.084 26.6653 23.3026 26.4466 23.3026 26.1773C23.3013 25.908 23.0826 25.6893 22.812 25.6893" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.812 25.6893C22.5426 25.6893 22.324 25.908 22.3266 26.1773C22.3266 26.4466 22.5453 26.6653 22.8146 26.6653C23.084 26.6653 23.3026 26.4466 23.3026 26.1773C23.3013 25.908 23.0826 25.6893 22.812 25.6893" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.812 25.6893C22.5426 25.6893 22.324 25.908 22.3266 26.1773C22.3266 26.4466 22.5453 26.6653 22.8146 26.6653C23.084 26.6653 23.3026 26.4466 23.3026 26.1773C23.3013 25.908 23.0826 25.6893 22.812 25.6893" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.812 25.6893C22.5426 25.6893 22.324 25.908 22.3266 26.1773C22.3266 26.4466 22.5453 26.6653 22.8146 26.6653C23.084 26.6653 23.3026 26.4466 23.3026 26.1773C23.3013 25.908 23.0826 25.6893 22.812 25.6893" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M22.812 25.6893C22.5426 25.6893 22.324 25.908 22.3266 26.1773C22.3266 26.4466 22.5453 26.6653 22.8146 26.6653C23.084 26.6653 23.3026 26.4466 23.3026 26.1773C23.3013 25.908 23.0826 25.6893 22.812 25.6893" stroke="#6B59CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.5958 25.6894C11.3265 25.6894 11.1078 25.908 11.1105 26.1774C11.1078 26.448 11.3278 26.6667 11.5972 26.6667C11.8665 26.6667 12.0852 26.448 12.0852 26.1787C12.0852 25.908 11.8665 25.6894 11.5958 25.6894" stroke="#2E1066" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.5958 25.6894C11.3265 25.6894 11.1078 25.908 11.1105 26.1774C11.1078 26.448 11.3278 26.6667 11.5972 26.6667C11.8665 26.6667 12.0852 26.448 12.0852 26.1787C12.0852 25.908 11.8665 25.6894 11.5958 25.6894" stroke="#410F9E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.5958 25.6894C11.3265 25.6894 11.1078 25.908 11.1105 26.1774C11.1078 26.448 11.3278 26.6667 11.5972 26.6667C11.8665 26.6667 12.0852 26.448 12.0852 26.1787C12.0852 25.908 11.8665 25.6894 11.5958 25.6894" stroke="#453888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.5958 25.6894C11.3265 25.6894 11.1078 25.908 11.1105 26.1774C11.1078 26.448 11.3278 26.6667 11.5972 26.6667C11.8665 26.6667 12.0852 26.448 12.0852 26.1787C12.0852 25.908 11.8665 25.6894 11.5958 25.6894" stroke="#5946D7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M11.5958 25.6894C11.3265 25.6894 11.1078 25.908 11.1105 26.1774C11.1078 26.448 11.3278 26.6667 11.5972 26.6667C11.8665 26.6667 12.0852 26.448 12.0852 26.1787C12.0852 25.908 11.8665 25.6894 11.5958 25.6894" stroke="#6B59CC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Корзина</p>
          </NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header