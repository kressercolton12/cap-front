import React, { useState, useEffect } from 'react';



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

    return (
        <div>
            <h2>Blog content</h2>
            {blogs.map((blog) => (
                <div key={blog.id}>
                    <h3>{blog.title}</h3>
                    <p>{blog.content}</p>
                </div>
            ))};
        </div>

    );
}