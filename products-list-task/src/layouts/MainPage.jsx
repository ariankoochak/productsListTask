import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
    const navigate = useNavigate();
    useEffect(()=>{
        navigate("/shop")
    },[navigate])
    return (
        <></>
    );
}
