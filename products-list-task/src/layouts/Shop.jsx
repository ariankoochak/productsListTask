import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import Navbar from "./Navbar";

export default function Shop() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const api = "https://fakestoreapi.com/products";
        axios({
            method: "get",
            url: api,
        })
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const renderProducts = (products) => {
        return products.map((product) => {
            return <ProductCard productData={product} />;
        });
    };
    return (
        <>
            <Navbar />
            <div className="shop">
                <div className="products">{renderProducts(products)}</div>
            </div>
        </>
    );
}
