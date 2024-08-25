import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios';
import ProductCard from '../components/ProductCard';

export default function ProductsOfCategory() {
    const CATEGORY_NAME = window.location.href.split("/")[4];
    const [productsData,setProductsData] = useState([])
    useEffect(()=>{
     const api = `https://fakestoreapi.com/products/category/${CATEGORY_NAME}`;
     axios({
         method: "get",
         url: api,
     })
         .then((response) => {
             setProductsData(response.data);
         })
         .catch((error) => {
             console.log(error);
         });   
    })
    const renderProducts = (products) => {
        return products.map((product) => {
            return <ProductCard productData={product} />;
        });
    };
  return (
      <>
          <Navbar selected={"categories"} />

          <div className="shop">
              <div className="products">{renderProducts(productsData)}</div>
          </div>
      </>
  );
}
