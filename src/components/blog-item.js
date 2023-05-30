import React from "react";

export default function BlogItem(props) {
    const {
        blog_title,
        date,
        text_field,
        image_url
    } = props.item;
    return(
        <div className="blog_info">
            {date}
            {blog_title}
            {text_field}
            {image_url}
        </div>
    )
}