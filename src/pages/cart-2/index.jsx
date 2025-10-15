import React from 'react'

const Cart2Page = () => {
    return (
        <>
            <section>
                <div className="container mx-auto px-[0px] sm:px-[15px] lg:px-[100px] pt-[95px] sm:pt-[250px] pb-[50px] sm:pb-[0px]">
                    <h1 className='font-bold text-[20px] sm:text-[24px] px-[10px] pb-[10px]'>Оформление заказа</h1>
                    <div className='grid grid-cols-1 gap-[10px] sm:gap-[20px] 2xl:flex items-start justify-between'>
                        <div className='bg-[white] max-w-[940px] w-full'>
                            <div className='px-[30px] py-[30px]'>
                                <div className='flex items-center gap-[10px] bg-[#F4F5F6] max-w-[336px] w-full h-[47px] pb-[5px] px-[5px] rounded-[5px] border-[1px] border-[#E3E3E8]'>
                                    <button className='max-w-[147px] mt-[5px]  w-full h-[40px] cursor-pointer bg-[#6B59CC] rounded-[6px] text-[white]'>
                                        Физическое лицо
                                    </button>
                                    <button className='max-w-[147px] w-full h-[40px] hover:bg-[red] cursor-pointer  rounded-[6px] text-[black]'>
                                        Юридическое лицо
                                    </button>
                                </div>
                            </div>
                            <hr className='border-[4px] text-[#E3E3E8]' />
                            <div className='flex flex-col gap-[0px] px-[30px] py-[40px]'>
                                <h1 className='pb-[10px] text-[20px] sm:text-[24px] font-bold'>Данные получателя</h1>
                                <input className='max-w-[400px] outline-none w-full pl-[10px] rounded-[6px] h-[48px] border-[1px] border-[#DEDEE2]' placeholder='Фамилия и имя *' type="text" /> <br />
                                <input className='max-w-[400px] outline-none w-full pl-[10px] rounded-[6px] h-[48px] border-[1px] border-[#DEDEE2]' placeholder='Телефон *' type="tel" /> <br />
                                <input className='max-w-[400px] outline-none w-full pl-[10px] rounded-[6px] h-[48px] border-[1px] border-[#DEDEE2]' placeholder='Электронная почта *' type="email" />
                            </div>
                            <hr className='border-[4px] text-[#E3E3E8]' />
                            <h1 className='px-[30px] text-[20px] sm:text-[24px] font-bold pt-[30px]'>Способ доставки</h1>
                            <div className='px-[30px] grid grid-cols-1 sm:grid-cols-2 gap-[10px] xl:grid-cols-3 pt-[10px] pb-[30px]'>
                                <div className='flex items-start gap-[7px] border-[1px] border-[#DEDEE2] max-w-[286px] w-full px-[20px] pt-[15px] pb-[20px] duration-[0.2s] hover:shadow-md rounded-[6px]'>
                                    <input className='cursor-pointer w-[24px] h-[24px]' type="radio" id='option' name='group' />
                                    <div className='flex flex-col gap-[5px]'>
                                        <p>Курьерская доставка</p>
                                        <p>СДЭК, Boxberry, Деловые Линии <br />  — от 349 руб.</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-[7px] border-[1px] border-[#DEDEE2] max-w-[286px] w-full px-[20px] pt-[15px] pb-[20px] duration-[0.2s] hover:shadow-md rounded-[6px]'>
                                    <input className='cursor-pointer w-[24px] h-[24px]' type="radio" id='option2' name='group' />
                                    <div className='flex flex-col gap-[5px]'>
                                        <p>Самовывоз из магазина</p>
                                        <p>C29.04.2021 (четверг) <br />
                                            — бесплатно</p>
                                    </div>
                                </div>
                                <div className='flex items-start gap-[7px] border-[1px] border-[#DEDEE2] max-w-[286px] w-full px-[20px] pt-[15px] pb-[20px] duration-[0.2s] hover:shadow-md rounded-[6px]'>
                                    <input className='cursor-pointer w-[24px] h-[24px]' type="radio" id='option3' name='group' />
                                    <div className='flex flex-col gap-[5px]'>
                                        <p>Самовывоз из пункта выдачи</p>
                                        <p>СДЭК, Boxberry <br />
                                            — от 0 руб.</p>
                                    </div>
                                </div>
                            </div>
                            <hr className='border-[4px] text-[#E3E3E8]' />
                            <div className='px-[30px] flex flex-col py-[30px]'>
                                <h1 className='text-[20px] sm:text-[24px] font-bold pb-[10px]'>Адрес получателя</h1>
                                <input className='max-w-[400px] outline-none w-full pl-[10px] rounded-[6px] h-[48px] border-[1px] border-[#DEDEE2]' placeholder='Город' type="text" /> <br />
                                <input className='max-w-[400px] outline-none w-full pl-[10px] rounded-[6px] h-[48px] border-[1px] border-[#DEDEE2]' placeholder='Улица' type="text" /> <br />
                                <div className='flex items-center gap-[10px]'>
                                    <input className='max-w-[127px] outline-none w-full pl-[10px] rounded-[6px] h-[48px] border-[1px] border-[#DEDEE2]' placeholder='Дом' type="text" />
                                    <input className='max-w-[127px] outline-none w-full pl-[10px] rounded-[6px] h-[48px] border-[1px] border-[#DEDEE2]' placeholder='Корпус' type="number" />
                                    <input className='max-w-[127px] outline-none w-full pl-[10px] rounded-[6px] h-[48px] border-[1px] border-[#DEDEE2]' placeholder='Квартира' type="number" />
                                </div>
                                <input className='max-w-[400px] mt-[20px] outline-none w-full pl-[10px] rounded-[6px] h-[48px] border-[1px] border-[#DEDEE2]' placeholder='Комментарии к доставке' type="text" /> <br />
                            </div>
                            <hr className='border-[4px] text-[#E3E3E8]' />
                            <div className='px-[30px] py-[30px] flex flex-col gap-[15px]'>
                                <h1 className='text-[20px] sm:text-[24px] font-bold'>Способ оплаты</h1>
                                <div className='flex items-center justify-between max-w-[400px] h-[48px] border-[1px] border-[#DEDEE2] rounded-[6px] px-[20px] py-[16px]'>
                                    <div className='flex items-center gap-[15px]'>
                                        <img src="/icons.png" alt="icons" />
                                        <p>Оплата картой</p>
                                    </div>
                                    <input className='w-[24px] h-[24px] cursor-pointer border-[1px] border-[#DEDEE2]' type="radio" id='radio' name='icons' />
                                </div>
                                <div className='flex items-center justify-between max-w-[400px] h-[48px] border-[1px] border-[#DEDEE2] rounded-[6px] px-[20px] py-[16px]'>
                                    <div className='flex items-center gap-[15px]'>
                                        <img src="/icons (1).png" alt="icons" />
                                        <p>Безналичная оплата по счету</p>
                                    </div>
                                    <input className='w-[24px] h-[24px] cursor-pointer border-[1px] border-[#DEDEE2]' type="radio" id='radio' name='icons' />
                                </div>
                                <div className='flex items-center justify-between max-w-[400px] h-[48px] border-[1px] border-[#DEDEE2] rounded-[6px] px-[20px] py-[16px]'>
                                    <div className='flex items-center gap-[15px]'>
                                        <img src="/icons (2).png" alt="icons" />
                                        <p>Оплата курьеру</p>
                                    </div>
                                    <input className='w-[24px] h-[24px] cursor-pointer border-[1px] border-[#DEDEE2]' type="radio" id='radio' name='icons' />
                                </div>
                            </div>
                        </div>
                        <div className='w-full xl:max-w-[940px] 2xl:max-w-[380px] bg-[white] h-[auto] w-full rounded-[6px]'>
                            <div>
                                <h1 className='py-[20px] text-[19px] sm:text-[24px] font-bold pl-[30px]'>Ваш заказ</h1>
                            </div>
                            <hr className='text-[#E3E3E8]' />
                            <div className='flex items-center justify-between px-[30px] py-[20px]'>
                                <p className='text-[16px] sm:text-[20px]'>Товары</p>
                                <p className='text-[16px] sm:text-[20px]'>6</p>
                            </div>
                            <div className='flex items-center justify-between px-[30px] py-[20px]'>
                                <p className='text-[16px] sm:text-[20px]'>Доставка</p>
                                <p className='text-[16px] sm:text-[20px]'>870 ₽ </p>
                            </div>
                            <div className='px-[30px] pb-[20px]'>
                                <input className='w-full py-[13px] px-[20px] text-[18px] rounded-[6px] text-[#55556D] outline-none  border-[1px] border-[#DEDEE2] h-[48px]' placeholder='Промокод' type="text" />
                            </div>
                            <hr className='text-[#E3E3E8]' />
                            <div className=' py-[20px] px-[30px]'>
                                <div className='flex items-center justify-between'>
                                    <p className='text-[16px] sm:text-[20px]'>Итого</p>
                                    <p className='text-[16px] sm:text-[20px]'>23 870 ₽</p>
                                </div>
                                <button className='bg-[#6B59CC] cursor-pointer w-full py-[16px] text-[14px] sm:text-[18px] rounded-[6px] mt-[16px] text-[white]'>
                                    Оформление заказа
                                </button>
                                <p className='w-full text-[14px] sm:text-[16px] pt-[15px] text-[#7A7680] leading-[25px] text-center xl:text-left'>Цена зависит от типа клиента. После регистрации возможна ее корректировка.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Cart2Page