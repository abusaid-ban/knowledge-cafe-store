import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './SingleBlog.css';


const SingleBlog = (props) => {
    const {coverImage,authorImage,authorName,publishDate,readTime,blogTitle}= props.blog;
 const handleMarkReadToCart = props.handleMarkReadToCart;
 const handleBookMarkBtn=props.handleBookMarkBtn;

    
    return (
        <div className="blog-card card mb-2 w-100 m-auto ">
            <div className="blog-image w-100">
                <img className="w-100 h-75" src=
                    {coverImage} alt="" />
            </div>
            <div className="authorDetailsAndReadTime  d-flex justify-content-between m-3">
                <div className="authorImageName d-flex justify-content-space-between align-items-center">
                    <img className='author-image' src={authorImage} alt="" />
                    <div>
                        <h5>{authorName}</h5>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <p>{readTime} min read   <button
               onClick={()=>handleBookMarkBtn(props.blog)}
                 > <FontAwesomeIcon icon={faBookmark} /> </button></p>
            </div>
            <h2 className='fw-800'>{blogTitle}</h2>
            <a onClick={()=>handleMarkReadToCart(readTime)} href="#">Mark as Read</a>
        </div>

    );
};

export default SingleBlog;  