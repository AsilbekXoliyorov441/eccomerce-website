import React from 'react'
import { Link } from 'react-router-dom'

const RegisterPhonePage = () => {
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
                            <Link className='max-w-[200px] w-full pb-[10px] cursor-pointer border-b-[1px] border-[#DEDEE2]'>
                                <p className='text-[black] text-[15px] sm:text-[18px]'>Электронная почта</p>
                            </Link>
                            <button className='max-w-[200px] w-full pb-[10px] cursor-pointer border-b-[2px]   border-[#6B59CC] w-full'>
                                <p className='text-[15px] text-[#6B59CC] sm:text-[18px]'>Номер телефона</p>
                            </button>
                        </div>
                        <div className='px-[20px] mt-[-15px] sm:mt-[0px] sm:px-[50px] text-center'>
                            <p>Мы отправили вам код в SMS на номер: <br />
                                +79678676799</p>
                        </div>
                        <div className='px-[20px] sm:px-[50px] my-[23px]'>
                            <input className='w-full outline-none border-[1px] pl-[20px] py-[13px] rounded-[6px] border-[#DEDEE2] h-[48px]' placeholder='Введите код из SMS' type="number" />
                        </div>
                        <div className='px-[20px] sm:px-[50px] text-center'>
                            <button className='text-[white] w-full h-[48px] bg-[#6B59CC] rounded-[6px]'>
                                Войти
                            </button>
                            <p className='pt-[20px]'>Отправить код повторно через 59 сек.</p>
                            <p className='text-[#38A865] pt-[5px] pb-[20px]'>Получить новый код</p>
                        </div>
                        <hr className='text-[#DEDEE2]' />
                        <div className='flex items-center text-[14px] sm:text-[18px] justify-center gap-[10px] px-[50px] pt-[20px]'>
                            <p>Нет аккаунта?</p>
                            <p className='text-[#6B59CC]'>Зарегистрироваться</p>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default RegisterPhonePage