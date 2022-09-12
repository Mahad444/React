import React from "react";
import { Link } from "react-router-dom";
const Bloglist=(props)=>{
    const myBlogs = props.blogs;
    const title =props.title
      return(
        <div className="blog-list">
            <h2>{title}</h2>
{myBlogs.map((blogs)=>(
                <div className="preview" key={blogs.id}>
                <Link to={`/blogs/${blogs.id}`}>
                <h3>{blogs.title}</h3>
                <p>written by:{blogs.author}</p>
            </Link>
            </div>
                
            ))} 
        </div>
    );

}
export default Bloglist;