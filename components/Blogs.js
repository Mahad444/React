import React from "react";
// import BlogDetailTwo from "./Blogdetailstwo";
import useFetchData from "./useFetchData"
import Bloglist from "./Bloglist";

const Blogs = () =>  {
    const{ myBlogs, loading,error}= useFetchData('http://localhost:9000/blogs/');
    
    
    return (
        <div className="Blog">
        {error && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {myBlogs && <Bloglist blogs ={myBlogs} title= "All Blogs"></Bloglist>}
        </div>
        
    );
    
}
export default Blogs;
//     const[myBlogs, setMyBlogs]=useState(() => {
//       return [
//             {id:1, title:"React Library", body:"In this blog we will focus on react", author:"Victor Njoroge"},
//             {id:2, title:"C# language", body:"C# language is a widely used language", author:"Angela Wambua"},
//             {id:3, title:"How to improve your programming skills", body:"", author:"Steve Jobs"},
//             {id:4, title:"PHP Language", body:"PHP is a major programming language Web development", author:"Angelina Jolie"},
            
//         ]
// 