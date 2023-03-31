import React from 'react';
import './SingleBlog.css';

const SingleBlog = (props) => {
    // console.log(props.blog);
    const { authorName, blogTitle, coverImage, authorImage, readTime, publishDate } = props.blog;
    return (
        <div className="blog-card card  w-75 m-auto">
            <div className="blog-image w-100">
                <img className='w-100' src=
                    {coverImage} alt="" />
            </div>
            <div className="authorDetailsAndReadTime  d-flex justify-content-space-between">
                <div className="authorImageName d-flex justify-content-space-between align-items-center">
                    <img className='author-image' src={authorImage} alt="" />
                    <div>
                        <h5>{authorName}</h5>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <p>{readTime} min read </p>
            </div>
            <h2>{blogTitle}</h2>
            <a href="">Mark as Read</a>
        </div>

    );
};

export default SingleBlog;  