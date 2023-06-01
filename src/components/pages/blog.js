import React, { useState, useEffect } from 'react';
import ReadMore from '../blog/read-more';




export default function Blog() {
     const [blogs, setBlogs] = useState([])
     const [filter, setFilter] = useState(null)

     useEffect(() => {filterBlogs();
    }, []);

    const filterBlogs = () => {
        fetch("http://127.0.0.1:5000/blog/get")
            .then((response) => response.json())
            .then((data) => {
                const filterBlogs = data.filter((blog) => blog.status === 'published');
                setBlogs(filterBlogs);
                console.log("you got it bro!", filterBlogs);

            })
            
            .catch((error) => {
                console.log("don't work brah", error);
            }); 
    };

    function getBlogs() {
        console.log("getblogs func")
        return blogs.map((blog) => (
            <ReadMore readMore = {blog} key={blog.id}/>
        ))
    };

    return (
        <div className='blog-container'>
            <div className='blog-items'>
                <h3>{getBlogs()}</h3>
            </div>
        </div>
    );
}