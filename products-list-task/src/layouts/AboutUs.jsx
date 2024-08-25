import React from "react";
import Navbar from "./Navbar";

export default function AboutUs() {
    return (
        <>
            <Navbar selected={"About us"} />
            <div className="about-us">
                <h2>About Us</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Officia ipsa amet at? Unde voluptate sequi atque, eum nulla,
                    ad quis eligendi assumenda error autem id, ea officia
                    temporibus quia fuga. Lorem ipsum dolor sit amet,
                    consectetur adipisicing elit. Officia ipsa amet at? Unde
                    voluptate sequi atque, eum nulla, ad quis eligendi assumenda
                    error autem id, ea officia temporibus quia fuga. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit. Officia ipsa
                    amet at? Unde voluptate sequi atque, eum nulla, ad quis
                    eligendi assumenda error autem id, ea officia temporibus
                    quia fuga.
                </p>
            </div>
        </>
    );
}
