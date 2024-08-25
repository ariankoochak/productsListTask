import axios from 'axios';
import React, { useEffect, useState } from 'react'
import summarizeString from '../utils/services/summarizeString';
import { useNavigate } from 'react-router-dom';

export default function CategoryCard({categoryName}) {
    const [categoryImageUrl,setCategoryImageUrl] = useState('');
    const navigate = useNavigate();
    useEffect(()=>{
        const api = `https://fakestoreapi.com/products/category/${categoryName}`;
        axios({
            method: "get",
            url: api,
        })
            .then((response) => {
                setCategoryImageUrl(response.data[Math.floor(Math.random()*response.data.length)].image);
            })
            .catch((error) => {
                console.log(error);
            });
    },[categoryName])

    const handleClickCategory = (categoryName) => {
        navigate(`/categories/${categoryName}`);
    };
  return (
      <div className="category" key={categoryName} onClick={()=>handleClickCategory(categoryName)}>
          <div className="product-image">
              <img src={categoryImageUrl} alt={categoryName} loading="lazy" />
          </div>
          <span className="title">
              {summarizeString(categoryName, 20)}
          </span>
      </div>
  );
}
