import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [menus, setMenus] = useState(false)
  return (
    <>
      <header className="fixed shadow-lg shadow-blue-300/20 top-0 z-50 bg-white left-0 w-full">
        <div className="container mx-auto px-[12px] sm:px-[15px] lg:px-25 pt-[18px]">
          <div className="flex justify-between items-center gap-[20px] pb-[18px]">
            <div className="flex items-center gap-[7px]">
              {/* <svg
                onClick={() => setToggle(true)}
                className="flex sm:hidden"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6H20"
                  stroke="#1B1D1F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M4 12H20"
                  stroke="#1B1D1F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  opacity="0.4"
                  d="M4 18H20"
                  stroke="#1B1D1F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg> */}
              <Link to={""}>
                <img className='max-w-[170px] w-full sm:w-[370px]  h-[43.18px] sm:h-[50.77px]' src="/Sifat.jpg" alt="" />
              </Link>
            </div>
            <div className="max-w-[530px] w-full hidden sm:flex">
              <input
                className="border-1 border-[#DEDEE2] bg-[#F4F5F6] outline-none text-black rounded-[10px]  h-[44px] w-full px-[28px] py-[20px]"
                placeholder="Введите номер запчасти или VIN"
                type="search"
              />
            </div>
            <div className="flex items-center gap-[20px]  xl:gap-[30px]">
              <div className="flex items-center gap-1 hidden sm:flex text-black whitespace-nowrap">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.5">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z"
                      stroke="#2E1066"
                      strokeWidth="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z"
                      stroke="#410F9E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z"
                      stroke="#453888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z"
                      stroke="#5946D7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z"
                      stroke="#6B59CC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z"
                    stroke="#2E1066"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z"
                    stroke="#410F9E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z"
                    stroke="#453888"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z"
                    stroke="#5946D7"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z"
                    stroke="#6B59CC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="">Санкт-Петербург</p>
              </div>
              <div className="flex items-center hidden sm:flex gap-1 text-black font-bold text-[18px] whitespace-nowrap">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.965 16.61L17.792 15.437C17.206 14.851 16.256 14.851 15.671 15.437L14.749 16.359C14.543 16.565 14.231 16.634 13.965 16.517C12.629 15.932 11.309 15.045 10.132 13.868C8.96002 12.696 8.07602 11.382 7.49002 10.051C7.36802 9.77597 7.43902 9.45297 7.65202 9.23997L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.61V16.61Z"
                    stroke="#2E1066"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.965 16.61L17.792 15.437C17.206 14.851 16.256 14.851 15.671 15.437L14.749 16.359C14.543 16.565 14.231 16.634 13.965 16.517C12.629 15.932 11.309 15.045 10.132 13.868C8.96002 12.696 8.07602 11.382 7.49002 10.051C7.36802 9.77597 7.43902 9.45297 7.65202 9.23997L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.61V16.61Z"
                    stroke="#410F9E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.965 16.61L17.792 15.437C17.206 14.851 16.256 14.851 15.671 15.437L14.749 16.359C14.543 16.565 14.231 16.634 13.965 16.517C12.629 15.932 11.309 15.045 10.132 13.868C8.96002 12.696 8.07602 11.382 7.49002 10.051C7.36802 9.77597 7.43902 9.45297 7.65202 9.23997L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.61V16.61Z"
                    stroke="#453888"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.965 16.61L17.792 15.437C17.206 14.851 16.256 14.851 15.671 15.437L14.749 16.359C14.543 16.565 14.231 16.634 13.965 16.517C12.629 15.932 11.309 15.045 10.132 13.868C8.96002 12.696 8.07602 11.382 7.49002 10.051C7.36802 9.77597 7.43902 9.45297 7.65202 9.23997L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.61V16.61Z"
                    stroke="#5946D7"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M18.965 16.61L17.792 15.437C17.206 14.851 16.256 14.851 15.671 15.437L14.749 16.359C14.543 16.565 14.231 16.634 13.965 16.517C12.629 15.932 11.309 15.045 10.132 13.868C8.96002 12.696 8.07602 11.382 7.49002 10.051C7.36802 9.77597 7.43902 9.45297 7.65202 9.23997L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.61V16.61Z"
                    stroke="#6B59CC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g opacity="0.5">
                    <path
                      d="M13 6.99099C14.031 6.97699 15.067 7.35899 15.854 8.14599C16.641 8.93299 17.023 9.969 17.009 11M13 2.96399C15.056 2.96399 17.113 3.74899 18.682 5.31799C20.251 6.88699 21.036 8.94399 21.036 11"
                      stroke="#2E1066"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13 6.99099C14.031 6.97699 15.067 7.35899 15.854 8.14599C16.641 8.93299 17.023 9.969 17.009 11M13 2.96399C15.056 2.96399 17.113 3.74899 18.682 5.31799C20.251 6.88699 21.036 8.94399 21.036 11"
                      stroke="#410F9E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13 6.99099C14.031 6.97699 15.067 7.35899 15.854 8.14599C16.641 8.93299 17.023 9.969 17.009 11M13 2.96399C15.056 2.96399 17.113 3.74899 18.682 5.31799C20.251 6.88699 21.036 8.94399 21.036 11"
                      stroke="#453888"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13 6.99099C14.031 6.97699 15.067 7.35899 15.854 8.14599C16.641 8.93299 17.023 9.969 17.009 11M13 2.96399C15.056 2.96399 17.113 3.74899 18.682 5.31799C20.251 6.88699 21.036 8.94399 21.036 11"
                      stroke="#5946D7"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13 6.99099C14.031 6.97699 15.067 7.35899 15.854 8.14599C16.641 8.93299 17.023 9.969 17.009 11M13 2.96399C15.056 2.96399 17.113 3.74899 18.682 5.31799C20.251 6.88699 21.036 8.94399 21.036 11"
                      stroke="#6B59CC"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
                <a className="hidden xl:flex" href="tel:770147703">
                  +998-77-014-77-03
                </a>
              </div>
              <Link to='/register' className="flex items-center hidden sm:flex text-black  gap-1 whitespace-nowrap">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z"
                    fill="#5946D7"
                    fillOpacity="0.1"
                  />
                  <path
                    d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z"
                    stroke="#2E1066"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z"
                    stroke="#410F9E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z"
                    stroke="#453888"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z"
                    stroke="#5946D7"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z"
                    stroke="#6B59CC"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="#2E1066"
                    stroke-width="1.5"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="#410F9E"
                    stroke-width="1.5"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="#453888"
                    stroke-width="1.5"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="#5946D7"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="7"
                    r="4"
                    stroke="#6B59CC"
                    strokeWidth="1.5"
                  />
                </svg>
                <p className="hidden xl:flex">Вход / Регистрация</p>
              </Link>
              <svg className='flex ml-[-30px] sm:hidden' onClick={(el) => setMenus(true)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C11.125 18 13.078 17.2635 14.6177 16.0319L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L16.0319 14.6177C17.2635 13.078 18 11.125 18 9C18 4.02944 13.9706 0 9 0Z" fill="#5946D7" />
              </svg>

            </div>
          </div>
          <hr className="hidden sm:flex text-[#E3E3E8] border-[1px]" />

          <div className="pt-[20px] flex items-center justify-between gap-[10px] hidden sm:flex pb-[20px]">
            <NavLink
              to="filter/name"
              className="text-black flex items-center justify-center whitespace-nowrap max-w-[220px] w-full border-[#DEDEE2] border-[1px]  p-[8px] hover:bg-[#F4F5F6] duration-[0.2s] rounded-[5px] hidden xl:flex"
              href=""
            >
              Запчасти для ТО
            </NavLink>
            <NavLink
              to="filter/name"
              className="text-black flex items-center justify-center whitespace-nowrap max-w-[220px] w-full border-[#DEDEE2] border-[1px]  p-[8px] hover:bg-[#F4F5F6] duration-[0.2s] rounded-[5px] hidden xl:flex"
              href=""
            >
              Автомасла
            </NavLink>
            <NavLink
              to="filter/name"
              className="text-black flex items-center justify-center whitespace-nowrap max-w-[220px] w-full border-[#DEDEE2] border-[1px]  p-[8px] hover:bg-[#F4F5F6] duration-[0.2s] rounded-[5px]"
              href=""
            >
              Оригинальные запчасти
            </NavLink>
            <NavLink
              to="filter/name"
              className="text-black flex items-center justify-center whitespace-nowrap max-w-[220px] w-full border-[#DEDEE2] border-[1px]  p-[8px] hover:bg-[#F4F5F6] duration-[0.2s] rounded-[5px] hidden xl:flex"
              href=""
            >
              Неоригинальные запчасти
            </NavLink>
            <NavLink
              to="filter/name"
              className="text-black flex items-center justify-center whitespace-nowrap max-w-[220px] w-full border-[#DEDEE2] border-[1px]  p-[8px] hover:bg-[#F4F5F6] duration-[0.2s] rounded-[5px]"
              href=""
            >
              Лампочки
            </NavLink>
            <NavLink
              to="filter/name"
              className="text-black flex items-center justify-center whitespace-nowrap max-w-[220px] w-full border-[#DEDEE2] border-[1px]  p-[8px] hover:bg-[#F4F5F6] duration-[0.2s] rounded-[5px]"
              href=""
            >
              Аккумуляторы
            </NavLink>
            <NavLink to="cart" className='text-black flex items-center justify-center whitespace-nowrap max-w-[150px] w-full border-[#DEDEE2] border-[1px]  p-[7px] hover:bg-[#F4F5F6] duration-[0.2s] rounded-[5px] gap-[5px]' href="">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5946D7"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
              <p>Корзина</p>
            </NavLink>
          </div>
        </div>
      </header>

      {/* <div className={`fixed top-0 z-[1000] bg-[white] left-0 duration-300 w-full h-full ${toggle ? "left-0" : "left-[-100%]"}`}>
        <div className={`flex justify-between items-center  px-[12px]  py-[9px]`}>
          <img onClick={() => setToggle(false)} src="/close.png" alt="close" />
          <div className="flex items-center text-black  gap-1 whitespace-nowrap">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z"
                fill="#5946D7"
                fillOpacity="0.1"
              />
              <path
                d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z"
                stroke="#2E1066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z"
                stroke="#410F9E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z"
                stroke="#453888"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z"
                stroke="#5946D7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 14.5C15.4706 14.5 17.4641 15.3527 18.5932 16.2164C19.8076 17.1453 20 18.775 20 20.3039C20 21.2406 19.2406 22 18.3039 22H5.69607C4.75936 22 4 21.2406 4 20.3039C4 18.775 4.19243 17.1453 5.40682 16.2164C6.53589 15.3527 8.52943 14.5 12 14.5Z"
                stroke="#6B59CC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <circle
                cx="12"
                cy="7"
                r="4"
                stroke="#2E1066"
                stroke-width="1.5"
              />
              <circle
                cx="12"
                cy="7"
                r="4"
                stroke="#410F9E"
                stroke-width="1.5"
              />
              <circle
                cx="12"
                cy="7"
                r="4"
                stroke="#453888"
                stroke-width="1.5"
              />
              <circle
                cx="12"
                cy="7"
                r="4"
                stroke="#5946D7"
                strokeWidth="1.5"
              />
              <circle
                cx="12"
                cy="7"
                r="4"
                stroke="#6B59CC"
                strokeWidth="1.5"
              />
            </svg>
            <p className="">Вход / Регистрация</p>
          </div>
        </div>
        <hr className='text-[#E3E3E8]' />
        <div className='flex flex-col gap-[15px] items-start px-[15px] py-[20px]'>
          <Link className="flex items-center gap-[10px] text-black whitespace-nowrap">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z"
                  stroke="#2E1066"
                  strokeWidth="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z"
                  stroke="#410F9E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z"
                  stroke="#453888"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z"
                  stroke="#5946D7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 13V13C10.343 13 9 11.657 9 10V10C9 8.343 10.343 7 12 7V7C13.657 7 15 8.343 15 10V10C15 11.657 13.657 13 12 13Z"
                  stroke="#6B59CC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z"
                stroke="#2E1066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z"
                stroke="#410F9E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z"
                stroke="#453888"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z"
                stroke="#5946D7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 21C12 21 5 15.25 5 10C5 6.134 8.134 3 12 3C15.866 3 19 6.134 19 10C19 15.25 12 21 12 21Z"
                stroke="#6B59CC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p className="">Санкт-Петербург</p>
          </Link>
          <Link className="flex items-center gap-[10px] text-black whitespace-nowrap">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.965 16.61L17.792 15.437C17.206 14.851 16.256 14.851 15.671 15.437L14.749 16.359C14.543 16.565 14.231 16.634 13.965 16.517C12.629 15.932 11.309 15.045 10.132 13.868C8.96002 12.696 8.07602 11.382 7.49002 10.051C7.36802 9.77597 7.43902 9.45297 7.65202 9.23997L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.61V16.61Z"
                stroke="#2E1066"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.965 16.61L17.792 15.437C17.206 14.851 16.256 14.851 15.671 15.437L14.749 16.359C14.543 16.565 14.231 16.634 13.965 16.517C12.629 15.932 11.309 15.045 10.132 13.868C8.96002 12.696 8.07602 11.382 7.49002 10.051C7.36802 9.77597 7.43902 9.45297 7.65202 9.23997L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.61V16.61Z"
                stroke="#410F9E"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.965 16.61L17.792 15.437C17.206 14.851 16.256 14.851 15.671 15.437L14.749 16.359C14.543 16.565 14.231 16.634 13.965 16.517C12.629 15.932 11.309 15.045 10.132 13.868C8.96002 12.696 8.07602 11.382 7.49002 10.051C7.36802 9.77597 7.43902 9.45297 7.65202 9.23997L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.61V16.61Z"
                stroke="#453888"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.965 16.61L17.792 15.437C17.206 14.851 16.256 14.851 15.671 15.437L14.749 16.359C14.543 16.565 14.231 16.634 13.965 16.517C12.629 15.932 11.309 15.045 10.132 13.868C8.96002 12.696 8.07602 11.382 7.49002 10.051C7.36802 9.77597 7.43902 9.45297 7.65202 9.23997L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.61V16.61Z"
                stroke="#5946D7"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.965 16.61L17.792 15.437C17.206 14.851 16.256 14.851 15.671 15.437L14.749 16.359C14.543 16.565 14.231 16.634 13.965 16.517C12.629 15.932 11.309 15.045 10.132 13.868C8.96002 12.696 8.07602 11.382 7.49002 10.051C7.36802 9.77597 7.43902 9.45297 7.65202 9.23997L8.47802 8.41397C9.14902 7.74297 9.14902 6.79397 8.56302 6.20797L7.39002 5.03497C6.60902 4.25397 5.34302 4.25397 4.56202 5.03497L3.91002 5.68597C3.16902 6.42697 2.86002 7.49597 3.06002 8.55597C3.55402 11.169 5.07202 14.03 7.52102 16.479C9.97002 18.928 12.831 20.446 15.444 20.94C16.504 21.14 17.573 20.831 18.314 20.09L18.965 19.439C19.746 18.658 19.746 17.392 18.965 16.61V16.61Z"
                stroke="#6B59CC"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g opacity="0.5">
                <path
                  d="M13 6.99099C14.031 6.97699 15.067 7.35899 15.854 8.14599C16.641 8.93299 17.023 9.969 17.009 11M13 2.96399C15.056 2.96399 17.113 3.74899 18.682 5.31799C20.251 6.88699 21.036 8.94399 21.036 11"
                  stroke="#2E1066"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 6.99099C14.031 6.97699 15.067 7.35899 15.854 8.14599C16.641 8.93299 17.023 9.969 17.009 11M13 2.96399C15.056 2.96399 17.113 3.74899 18.682 5.31799C20.251 6.88699 21.036 8.94399 21.036 11"
                  stroke="#410F9E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 6.99099C14.031 6.97699 15.067 7.35899 15.854 8.14599C16.641 8.93299 17.023 9.969 17.009 11M13 2.96399C15.056 2.96399 17.113 3.74899 18.682 5.31799C20.251 6.88699 21.036 8.94399 21.036 11"
                  stroke="#453888"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 6.99099C14.031 6.97699 15.067 7.35899 15.854 8.14599C16.641 8.93299 17.023 9.969 17.009 11M13 2.96399C15.056 2.96399 17.113 3.74899 18.682 5.31799C20.251 6.88699 21.036 8.94399 21.036 11"
                  stroke="#5946D7"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13 6.99099C14.031 6.97699 15.067 7.35899 15.854 8.14599C16.641 8.93299 17.023 9.969 17.009 11M13 2.96399C15.056 2.96399 17.113 3.74899 18.682 5.31799C20.251 6.88699 21.036 8.94399 21.036 11"
                  stroke="#6B59CC"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
            <a className="" href="tel:770147703">
              +998-77-014-77-03
            </a>
          </Link>
          <NavLink to="cart" className='text-black flex items-center  gap-[15px]' href="">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5946D7"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
            <p>Корзина</p>
          </NavLink>
        </div>
        <hr className='text-[#E3E3E8]' />
        <div className='flex flex-col items-start gap-[15px] py-[34px] px-[20px]'>
          <NavLink
            to="cart"
            className="text-black"
            href=""
          >
            Запчасти для ТО
          </NavLink>
          <NavLink
            to="cart"
            className="text-black"
            href=""
          >
            Автомасла
          </NavLink>
          <NavLink
            to="cart"
            className="text-black "
            href=""
          >
            Оригинальные запчасти
          </NavLink>
          <NavLink
            to="cart"
            className="text-black"
          >
            Неоригинальные запчасти
          </NavLink>
          <NavLink
            to="cart"
            className="text-black"
            href=""
          >
            Лампочки
          </NavLink>
          <NavLink
            to="cart"
            className="text-black"
            href=""
          >
            Аккумуляторы
          </NavLink>

        </div>
        <hr className='text-[#E3E3E8]' />
        <ul className='flex flex-col gap-[12px] px-[20px] pt-[20px] overflow-scrollY'>
          <li className='text-[18px] font-bold pb-[5px]'>Помощь</li>
          <li>Консультация Online</li>
          <li className=''>Оплата заказа</li>
          <li className=''>Возврат товара</li>
          <li>Забыл пароль</li>
        </ul>
      </div> */}



      <div className={`fixed top-0 z-[100] pt-[10px] bg-[white] left-0  w-full h-full ${menus ? "left-0" : "left-[-100%]"}`}>
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
      </div>



      <ul id="menus-2"
        class="flex sm:hidden bg-[white] flex fixed h-[10vw] w-[100vw] bottom-[0px] justify-between items-center flex py-[30px] px-[15px] z-[900]">
        <li>
          <Link onClick={(el) => setMenus(false)} to={""} className="flex flex-col text-[12px] text-[#3D3D4B] items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 20.5002V16.0002C9.5 14.6192 10.619 13.5002 12 13.5002V13.5002C13.381 13.5002 14.5 14.6192 14.5 16.0002V20.5002H20V11.9143C20 11.3843 19.789 10.8752 19.414 10.5002L12.707 3.79325C12.316 3.40225 11.683 3.40225 11.293 3.79325L4.586 10.5002C4.211 10.8752 4 11.3843 4 11.9143V20.5002H9.5Z" stroke="#55556D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <p>Главная</p>
          </Link>
        </li>
        <li>
          <Link className="flex flex-col text-[12px] text-[#3D3D4B] items-center">
            <svg onClick={(el) => setMenus(true)} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.99622 3.9963H21.0037" stroke="#55556D" stroke-width="1.5" stroke-linecap="round" />
              <path d="M2.99622 10.9992H7.9983" stroke="#55556D" stroke-width="1.5" stroke-linecap="round" />
              <path d="M2.99622 18.0022H7.9983" stroke="#55556D" stroke-width="1.5" stroke-linecap="round" />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M15.7515 17.4772C18.0997 17.4772 20.0033 15.5736 20.0033 13.2254C20.0033 10.8772 18.0997 8.97363 15.7515 8.97363C13.4033 8.97363 11.4998 10.8772 11.4998 13.2254C11.4998 15.5736 13.4033 17.4772 15.7515 17.4772Z" stroke="#55556D" stroke-width="1.5" />
              <path d="M18.5027 16.4766L21.0037 19.0029" stroke="#55556D" stroke-width="1.5" stroke-linecap="round" />
            </svg>
            <p>Каталог</p>
          </Link>
        </li>
        <li>
          <Link onClick={(el) => setMenus(false)} to={"filter/name"} className="flex flex-col text-[12px] text-[#3D3D4B] items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#55556D"><path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z" /></svg>
            <p>Продукт</p>
          </Link>
        </li>
        <li>
          <Link onClick={(el) => setMenus(false)} to={"cart"} className="flex flex-col text-[12px] text-[#3D3D4B] items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#55556D"><path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" /></svg>
            <p>Корзина</p>
          </Link>
        </li>
        <li>
          <Link to={"profile"} onClick={(el) => setMenus(false)} className="flex flex-col text-[12px] text-[#3D3D4B] items-center">
            <svg width="24" height="24" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 12.5C12.4706 12.5 14.4641 13.3527 15.5932 14.2164C16.8076 15.1453 17 16.775 17 18.3039C17 19.2406 16.2406 20 15.3039 20H2.69607C1.75936 20 1 19.2406 1 18.3039C1 16.775 1.19243 15.1453 2.40682 14.2164C3.53589 13.3527 5.52943 12.5 9 12.5Z" stroke="#55556D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="9" cy="5" r="4" stroke="#55556D" stroke-width="1.5" />
            </svg>
            <p>Профиль</p>
          </Link>
        </li>
      </ul>




    </>
  )
}

export default Header