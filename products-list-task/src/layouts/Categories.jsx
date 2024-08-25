import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";
import CategoryCard from "../components/CategoryCard";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        const api = "https://fakestoreapi.com/products/categories";
        axios({
            method: "get",
            url: api,
        })
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const renderCategories = (categories) => {
        return categories.map((category) => {
            return <CategoryCard categoryName={category} />;
        });
    };
    return (
        <>
            <Navbar selected={"Categories"} />
            <div className="categories">
                    {renderCategories(categories)}
            </div>
        </>
    );
}
