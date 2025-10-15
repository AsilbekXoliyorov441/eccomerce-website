import React from 'react'

const ProfilePage = () => {
  return (
    <>
      <section className='mt-[180px]'>
        <div className="container mx-auto px-[100px]">
          <div className='fixed top-0 z-[800] bg-[white] left-0 duration-300 w-full h-full'>
            <div className='text-[#616064]'>
              <div className='py-[15px] flex items-center justify-end px-[25px]'>
                <p>Войти / Зарегистрироваться</p>
              </div>
              <hr className='text-[#ebebef] border-[4px]' />
              <div className='flex flex-col gap-[15px] px-[20px] py-[20px]'>
                <div className='flex items-center gap-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#616064"><path d="M200-80q-33 0-56.5-23.5T120-160v-480q0-33 23.5-56.5T200-720h80q0-83 58.5-141.5T480-920q83 0 141.5 58.5T680-720h80q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H200Zm0-80h560v-480H200v480Zm280-240q83 0 141.5-58.5T680-600h-80q0 50-35 85t-85 35q-50 0-85-35t-35-85h-80q0 83 58.5 141.5T480-400ZM360-720h240q0-50-35-85t-85-35q-50 0-85 35t-35 85ZM200-160v-480 480Z" /></svg>
                  <p>Мои заказы</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#616064"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z" /></svg>
                  <p>Избранное</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#616064"><path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" /></svg>
                  <p>Город</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#616064"><path d="m600-120-240-84-186 72q-20 8-37-4.5T120-170v-560q0-13 7.5-23t20.5-15l212-72 240 84 186-72q20-8 37 4.5t17 33.5v560q0 13-7.5 23T812-192l-212 72Zm-40-98v-468l-160-56v468l160 56Zm80 0 120-40v-474l-120 46v468Zm-440-10 120-46v-468l-120 40v474Zm440-458v468-468Zm-320-56v468-468Z" /></svg>
                  <p>Пункты выдачи</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#616064"><path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" /></svg>
                  <p>Настройки</p>
                </div>
              </div>
              <hr className='text-[#ebebef] border-[4px]' />
              <div className='flex flex-col gap-[15px] px-[20px] py-[20px]'>
                <div className='flex items-center gap-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#616064"><path d="M478-240q21 0 35.5-14.5T528-290q0-21-14.5-35.5T478-340q-21 0-35.5 14.5T428-290q0 21 14.5 35.5T478-240Zm-36-154h74q0-33 7.5-52t42.5-52q26-26 41-49.5t15-56.5q0-56-41-86t-97-30q-57 0-92.5 30T342-618l66 26q5-18 22.5-39t53.5-21q32 0 48 17.5t16 38.5q0 20-12 37.5T506-526q-44 39-54 59t-10 73Zm38 314q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" /></svg>
                  <p>Вопрос-ответ</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#616064"><path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z" /></svg>
                  <p>Связаться с нами</p>
                </div>
                <div className='flex items-center gap-[10px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#616064"><path d="M280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v124q18 7 29 22t11 34v80q0 19-11 34t-29 22v404q0 33-23.5 56.5T680-40H280Zm0-80h400v-720H280v720Zm0 0v-720 720Zm200-200 160-160-56-56-64 62v-166h-80v166l-64-62-56 56 160 160Z" /></svg>
                  <p>Приложение Sifat</p>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[10px]'>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#616064"><path d="M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z" /></svg>
                    <p>Язык сайта</p>
                  </div>
                  <div>
                    <p>Русский</p>
                  </div>
                </div>
              </div>
              <hr className='text-[#ebebef] border-[4px]' />
              <div className='flex flex-col gap-[15px] px-[20px] py-[20px]'>
                <div>
                  <p>Партнерам</p>
                </div>
                <hr className='text-[#ebebef] border-[1.5px]' />
                <div>
                  <p>О нас</p>
                </div>
                <hr className='text-[#ebebef] border-[1.5px]' />
              </div>
            </div>

          </div>
        </div>
      </section>
      {/* <section className='mt-[180px]'>
        <div className="container mx-auto px-[100px]">
          <div className='fixed top-0 z-[800] bg-[white] left-0 duration-300 w-full h-full'>
            <div className='flex items-center justify-between py-[10px] px-[16px]'>
              <div className='flex items-center gap-[7px]'>
                <img src="Arrow right.png" alt="arrow" />
                <p className='text-[20px] text-[#1B1D1F]'>Личный кабинет</p>
              </div>
              <svg className='' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2 9C2 5.13401 5.13401 2 9 2C12.866 2 16 5.13401 16 9C16 12.866 12.866 16 9 16C5.13401 16 2 12.866 2 9ZM9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C11.125 18 13.078 17.2635 14.6177 16.0319L18.2929 19.7071C18.6834 20.0976 19.3166 20.0976 19.7071 19.7071C20.0976 19.3166 20.0976 18.6834 19.7071 18.2929L16.0319 14.6177C17.2635 13.078 18 11.125 18 9C18 4.02944 13.9706 0 9 0Z" fill="#5946D7" />
              </svg>

            </div>
            <hr className='text-[#F9F9FB] border-15' />
            <div className='pl-[20px] flex flex-col gap-[10px] pt-[15px] pr-[10px]'>
              <div className='flex items-center justify-between py-[13px]'>
                <div className='flex items-center gap-[15px]'>
                  <img src="/profile-1.png" alt="img" />
                  <p>Персональная информация</p>
                </div>
                <img src="/Arrow-3.png" alt="arrow" />
              </div>
              <hr className='text-[#E3E3E8]' />
              <div className='flex items-center justify-between py-[13px]'>
                <div className='flex items-center gap-[15px]'>
                  <img src="/profile-2.png" alt="img" />
                  <p>История заказов</p>
                </div>
                <img src="/Arrow-3.png" alt="arrow" />
              </div>
              <hr className='text-[#E3E3E8]' />
              <div className='flex items-center justify-between py-[13px]'>
                <div className='flex items-center gap-[15px]'>
                  <img src="/profile-3.png" alt="img" />
                  <p>Мои адреса</p>
                </div>
                <img src="/Arrow-3.png" alt="arrow" />
              </div>
              <hr className='text-[#E3E3E8]' />
              <div className='flex items-center justify-between py-[13px]'>
                <div className='flex items-center gap-[15px]'>
                  <img src="/profile-4.png" alt="img" />
                  <p>Мои реквизиты</p>
                </div>
                <img src="/Arrow-3.png" alt="arrow" />
              </div>
              <hr className='text-[#E3E3E8]' />
              <div className='flex items-center justify-between py-[13px]'>
                <div className='flex items-center gap-[15px]'>
                  <img src="/profile-5.png" alt="img" />
                  <p>Мои чаты</p>
                </div>
                <img src="/Arrow-3.png" alt="arrow" />
              </div>
              <hr className='text-[#E3E3E8]' />
              <div className='flex items-center justify-between py-[13px]'>
                <div className='flex items-center gap-[15px]'>
                  <img src="/profile-6.png" alt="img" />
                  <p className='text-[red]'>Выйти</p>
                </div>
              </div>
              <hr className='text-[#E3E3E8]' />
            </div>
          </div>
        </div>
      </section> */}
      {/* <div className={`fixed top-0 z-[800] bg-[#F9F9FB] left-0 duration-300 w-full h-full ${Info ? "left-0" : "left-[100%]"}`}>
        <div className='flex items-center gap-[8px]  py-[10px] px-[16px]'>
          <img src="/public/Arrow right.png" alt="img" />
          <p className='text-[20px]'>Персональная информация</p>
        </div>
        <hr className='text-[#F9F9FB] border-[15px]' />
        <div className='mx-[20px] bg-[white] py-[30px] rounded-[6px]'>
          <div className='flex flex-col px-[20px]'>
            <input className='max-w-[305px] h-[48px] border-[#DEDEE2] border-[1px] w-full rounded-[6px] pl-[20px] py-[13px] text-[#55556D] outline-none' placeholder='Фамили и имя' type="text" /> <br />
            <input className='max-w-[305px] h-[48px] border-[#DEDEE2] border-[1px] w-full rounded-[6px] pl-[20px] py-[13px] text-[#55556D] outline-none' placeholder='Телефон *' type="tel" /> <br />
            <input className='max-w-[305px] h-[48px] border-[#DEDEE2] border-[1px] w-full rounded-[6px] pl-[20px] py-[13px] text-[#55556D] outline-none' placeholder='Электронная почта' type="email" /> <br />
            <button className='max-w-[187px] cursor-pointer h-[44px] rounded-[6px] bg-[#6B59CC] text-[white]'>
              <p>Сохранить изменения</p>
            </button>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default ProfilePage