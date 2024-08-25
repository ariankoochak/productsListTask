import React from "react";
import summarizeString from "../utils/services/summarizeString";

export default function ProductCard({ productData }) {
    return (
        <div className="product" key={productData.id}>
            <div className="product-image">
                <img src={productData.image} alt={productData.title} loading="lazy"/>
            </div>
            <span className="title">{summarizeString(productData.title,20)}</span>
            <span className="category">{productData.category}</span>
            <span className="price">${productData.price}</span>
        </div>
    );
}
