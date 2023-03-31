import React, { useEffect, useState } from 'react';
import './SideCart.css';

const SideCart = ({readTime}) => {
    const [time,setTime] = useState(readTime);
    useEffect(()=>{
        const getReadTime = localStorage.getItem("readTime")
        setTime(getReadTime);

    },[readTime])
    return (
        <div>
           <h5>Spend time on read:{time}min</h5>
        </div>
    );
};

export default SideCart;