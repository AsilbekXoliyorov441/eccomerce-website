import React from 'react'
import { Link } from 'react-router-dom';

const CategoryHero = ({name , number , url , id}) => {
  return (
    <Link to={`single/${id}`} className="flex">
      <img
      width={100}
        src={url}
        alt="Salom"
      />
      <div>
        {name} <br /> {number}
      </div>
    </Link>
  );
}

export default CategoryHero