import React from "react";
import { Link } from 'react-router-dom';
import striptags from 'striptags';
import Truncate from 'react-truncate'

const ReadMore = props => {
    const {
        id,
        status,
        text_field,
        blog_title,
        image_url,
        date
    } = props.readMore;
    return (
        <div>
            <Link to={`/b/${id}`}>
            <h1>{blog_title}</h1>    
            </Link>
            <h2>{date}</h2>    
            <div>
              <Truncate
              lines={6} ellipsis={
                <span>...<Link to={`/b/${id}`}>Read More</Link></span>
            }>
               {striptags(text_field)} 
            </Truncate>
          </div>
        </div>    
    );
};

export default ReadMore