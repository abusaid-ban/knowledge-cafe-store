import React, { useEffect, useState } from 'react';
import './SideCart.css';

const SideCart = ({readTime}) => {
    const [time,setTime] = useState(0);
    useEffect(()=>{
        const getReadTime = localStorage.getItem("readTime")
        setTime(getReadTime);

    },[readTime])
    return (
        <div className='sideCard card'>
           <h4>Spend time on read:{time}min</h4>
        </div>
    );
};

export default SideCart;