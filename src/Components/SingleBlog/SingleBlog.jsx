import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './SingleBlog.css';

const SingleBlog = ({blog,handleBookmark}) => {
    // console.log(props.blog);
    // const { authorName, blogTitle, coverImage, authorImage, readTime, publishDate } = props.blog;
    return (
        <div className="blog-card card  w-100 m-auto col-md-6">
            <div className="blog-image w-100">
                <img className='w-100 ' src=
                    {blog.coverImage} alt="" />
            </div>
            <div className="authorDetailsAndReadTime  d-flex justify-content-between m-3">
                <div className="authorImageName d-flex justify-content-space-between align-items-center">
                    <img className='author-image' src={blog.authorImage} alt="" />
                    <div>
                        <h5>{blog.authorName}</h5>
                        <p>{blog.publishDate}</p>
                    </div>
                </div>
                <p>{blog.readTime} min read   <button onClick={()=>handleBookmark(blog.readTime)}> <FontAwesomeIcon icon={faBookmark} /> </button></p>
            </div>
            <h2 className='fw-800'>{blog.blogTitle}</h2>
            <a href="">Mark as Read</a>
        </div>

    );
};

export default SingleBlog;  