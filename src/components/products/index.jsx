import React from 'react'

const ProductPage = ({ name, price, discount, url, article, rating }) => {
    return (
        <div className='border-[1px] border-[black] bg-[red]'>
            <img
                width={60}
                src={url}
                alt="Salom"
            />

            <div>
                <p className='text-[white] text-[20px]'>{name}</p>
            </div>
        </div>
    )
};

export default ProductPage