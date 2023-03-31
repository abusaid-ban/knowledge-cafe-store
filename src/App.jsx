import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './Components/Header/Header'
import Blog from './Components/Blog/Blog'
import SideCart from './Components/SideCart/SideCart'
import { useState } from 'react';

function App() {
 const [readTime,setReadTime]=useState("");
  const handleBookmark =(time)=>{
    const previousReadTime = JSON.parse(localStorage.getItem('readTime'));
    if(previousReadTime){
      const sum = previousReadTime + time;
      localStorage.setItem('readTime',sum);
      setReadTime(sum);
    }
    else{
      localStorage.setItem('readTime',time);
      setReadTime(time);
    }
  };
  return (
    <div>
      <div className="App">
     <Header></Header>
    </div>
    <div className="main container ">
      <div className="home-container ">
        <Blog handleBookmark={handleBookmark}></Blog>
      </div>
      <div className="side-cart ">
        <SideCart readTime={readTime}></SideCart>
      </div>
    </div>
    </div>
  )
}

export default App; 
