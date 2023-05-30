import React, { useState, useEffect } from 'react';
import BlogItem from '../blog-item';




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
            <BlogItem item = {blog}/>
        ))
    }

    return (
        <div>
            <h2>Blog content</h2>
                {getBlogs()}
        </div>

    );
}