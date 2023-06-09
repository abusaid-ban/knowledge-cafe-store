import React, { useEffect, useState } from 'react';
import QNA from '../QNA/QNA';
import SingleBlog from '../SingleBlog/SingleBlog';
import { ToastContainer, toast } from 'react-toastify';
import './Blog.css';



const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [carts, setCarts] = useState([]);



    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);
    const handleBookMarkBtn = (blog) => {
        const newCart = [...carts, blog];
        // setCarts(newCart);
        // console.log(blog);
        const exist = carts.find(b => b.id === blog.id);
        if (exist) {
             toast.error("Already have BookMark", { theme: "colored" });
        }
        else{
             toast.success("Added as BookMark",{theme:"colored"})
             setCarts(newCart);
            }
    };
       
       

    const [readTime, setReadTime] = useState(0);

    const handleMarkReadToCart = (readTime) => {
        const previousReadTime = JSON.parse(localStorage.getItem("ReadTime"));
        if (previousReadTime) {
            const sum = previousReadTime + readTime;
            localStorage.setItem("ReadTime", sum);
            setReadTime(sum);
        } else {
            localStorage.setItem("ReadTime", readTime);
            setReadTime(readTime);
        }
    };


    return (
        <div className='main container '>
            <div className="blog-container">
                {
                    blogs.map(blog => <SingleBlog
                        key={blog.id}
                        blog={blog}
                        handleMarkReadToCart={handleMarkReadToCart}
                        handleBookMarkBtn={handleBookMarkBtn}
                    ></SingleBlog>)
                }
                <QNA></QNA>
            </div>
            <div className="side-cart">
                <div className='sideCard card'>
                    <h4>Spend time on read:{readTime}min</h4>

                </div>
                <div className='bookmark-blog card '>
                    <h3 className='fw-800 bolder '>Bookmarked Blogs:{carts.length}</h3>
                    <ul >
                        {carts.map((cart, index) => (
                            <li className='card mb-3 fs-5' key={index}>{cart.blogTitle}</li>
                        ))}
                    </ul>

                </div>
            </div>

        </div>
    );
};

export default Blog;