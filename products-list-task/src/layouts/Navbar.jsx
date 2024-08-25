import React from "react";

export default function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h1>Logo</h1>
            </div>
            <div className="pages">
                <ul>
                    <li>Shop</li>
                    <li>Categories</li>
                    <li>Contact us</li>
                    <li>About us</li>
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
