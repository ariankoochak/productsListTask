import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({selected}) {
    const navigate = useNavigate();

    const addSelectedStyle = (title)=>{
        return title.toLowerCase() === selected?.toLowerCase() ? 'selected' : ''
    }
    const handleClickPages = (e)=>{
        let pageName = e.target.textContent.toLowerCase();
        pageName = pageName.split(" ");
        pageName = pageName.join("-")
        navigate(`/${pageName}`)
    }   
    return (
        <nav>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="pages">
                <ul>
                    <li className={addSelectedStyle('shop')} onClick={handleClickPages}>Shop</li>
                    <li className={addSelectedStyle('categories')} onClick={handleClickPages}>Categories</li>
                    <li className={addSelectedStyle('contact us')} onClick={handleClickPages}>Contact us</li>
                    <li className={addSelectedStyle('about us')} onClick={handleClickPages}>About us</li>
                </ul>
            </div>
            <div className="account-and-cart">
                <div className="cart">
                    <span>Cart</span>
                </div>
                <div className="account">
                    <span>My account</span>
                </div>
            </div>
        </nav>
    );
}
