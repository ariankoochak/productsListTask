import React from "react";
import summarizeString from "../utils/services/summarizeString";
import { useNavigate } from "react-router-dom";

export default function ProductCard({ productData }) {
    const navigate = useNavigate();
    const handleClickProduct = (id)=>{
        navigate(`/product/${id}`)
    }
    return (
        <div className="product" key={productData.id} onClick={()=>handleClickProduct(productData.id)}>
            <div className="product-image">
                <img src={productData.image} alt={productData.title} loading="lazy"/>
            </div>
            <span className="title">{summarizeString(productData.title,20)}</span>
            <span className="category">{productData.category}</span>
            <span className="price">${productData.price}</span>
        </div>
    );
}
