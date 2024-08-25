import React from "react";

export default function ShowProductData({ productData }) {
    return (
        <div className="container">
            <section className="product-page-data">
                <div className="image">
                    <div className="img-container">
                        <img src={productData.image} alt={productData.title} />
                    </div>
                </div>
                <div className="details">
                    <h2 className="product-title">{productData.title}</h2>
                    <span className="product-category">{productData.category}</span>
                    <p className="product-description">{productData.description}</p>
                    <span className="product-price">${productData.price}</span>
                </div>
            </section>
        </div>
    );
}
