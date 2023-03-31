import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css';

const Blog = ({handleBookmark}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setBlogs(data));
    },[])
    return (
        <div>
            <div className="blog-container">
            {
                blogs.map(blog=> <SingleBlog 
                    key={blog.id}
                    blog={blog}
                    handleBookmark={handleBookmark}
                    ></SingleBlog>)
            }
            </div>
        </div>
    );
};

export default Blog;