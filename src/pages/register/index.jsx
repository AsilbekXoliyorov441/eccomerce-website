import React from 'react'

const RegisterPage = () => {
    return (
        <>
            <section className='pt-[180px] sm:pt-[250px] pb-[70px]'>
                <div className="container mx-auto px-[15px] sm:px-[0px] flex items-center justify-center mt-[-85px] py-[0px] sm:py-[60px]">
                    <div className='max-w-[500px] w-full bg-[white] py-[20px] rounded-[12px] shadow-2xl'>
                        <div className='flex items-center justify-center'>
                            <h1 className='text-[24px] font-bold pb-[20px]'>Войти</h1>
                        </div>
                        <hr className='text-[#E3E3E8]' />
                        <div className='px-[20px] sm:px-[50px] py-[30px] whitespace-nowrap flex items-center justify-between'>
                            <button className='max-w-[200px] w-full pb-[10px] cursor-pointer border-b-[2px] border-[#6B59CC]'>
                                <p className='text-[#6B59CC] text-[15px] sm:text-[18px]'>Электронная почта</p>
                            </button>
                            <button className='max-w-[200px] w-full pb-[10px] cursor-pointer border-b-[1px]   border-[#DEDEE2] w-full'>
                                <p className='text-[15px] sm:text-[18px]'>Номер телефона</p>
                            </button>
                        </div>
                        <div className='px-[20px] sm:px-[50px] flex flex-col gap-[20px] pb-[20px]'>
                            <input className='max-w-[400px] pl-[20px] py-[13px] outline-none rounded-[6px] w-full border-[1px] border-[#DEDEE2] h-[48px]' placeholder='Электронная почта *' type="email" />
                            <input className='max-w-[400px] px-[20px] py-[13px] outline-none rounded-[6px] w-full border-[1px] border-[#DEDEE2] h-[48px]' placeholder='Пароль*' type="password" />
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center text-[14px] sm:text-[16px] gap-[7px]'>
                                    <input className='border-[1px] w-[20px] h-[20px] border-[#DEDEE2]' type="checkbox" />
                                    <p>Запомнить меня</p>
                                </div>
                                <p className='text-[#6B59CC]'>Я забыл свой пароль</p>
                            </div>
                            <button className='text-[white] w-full h-[48px] bg-[#6B59CC] rounded-[6px]'>
                                Войти
                            </button>
                        </div>
                        <hr className='text-[#DEDEE2]' />
                        <div className='flex items-center text-[14px] sm:text-[18px] justify-center gap-[10px] px-[50px] pt-[20px]'>
                            <p>Нет аккаунта?</p>
                            <p className='text-[#6B59CC]'>Зарегистрироваться</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default RegisterPage