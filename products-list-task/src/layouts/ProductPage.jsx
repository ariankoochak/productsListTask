import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import ShowProductData from "../components/ShowProductData";
export default function ProductPage() {
    const PRODUCT_ID = window.location.href.split("/")[4];
    const [productData, setProductData] = useState({});
    useEffect(() => {
        const api = `https://fakestoreapi.com/products/${PRODUCT_ID}`;
        axios({
            method: "get",
            url: api,
        })
            .then((response) => {
                setProductData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    });
    return (
        <>
            <Navbar selected={"shop"} />
            <ShowProductData productData={productData} />
        </>
    );
}
