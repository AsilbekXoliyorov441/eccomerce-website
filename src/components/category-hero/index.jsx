import React from 'react'

const CategoryHero = ({name , number , url}) => {
  return (
    <div className="flex">
      <img
      width={100}
        src={url}
        alt="Salom"
      />
      <div>
        {name} <br /> {number}
      </div>
    </div>
  );
}

export default CategoryHero