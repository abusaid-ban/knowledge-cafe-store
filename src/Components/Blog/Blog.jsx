import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css';



const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);
    const handleMarkReadToCart = (blog) => {
        const newCart = [...cart, blog];
        setCart(newCart);
    }

    return (
        <div className='main container'>
            <div className="blog-container">
                {
                    blogs.map(blog => <SingleBlog
                        key={blog.id}
                        blog={blog}
                        handleMarkReadToCart={handleMarkReadToCart}
                    ></SingleBlog>)
                }
            </div>
            <div className="side-cart ">
                <div className='sideCard card'>
                    <h4>Spend time on read:{cart.length }min</h4>
                    
                </div>
                <div className='card'>
                    <h3 className='fw-800 bold'>Bookmarked Blogs:{ }</h3>
                </div>
            </div>

        </div>
    );
};

export default Blog;