import React from "react";
import { useState } from "react";
import { Button , Form} from "react-bootstrap"
import { useHistory } from "react-router-dom";

const Create=()=>{
  const history =useHistory();
  const [data,setData]= useState({
    title:"",
    body:"",
    author:"",
  })

  const handleChange =(e)=>{
    const {name,value}= e.target;
    setData((prev) => {
      return {...prev,[name]:value}
    })
  }
   
  const handleSubmit =(e) =>{
    e.preventDefault();

    fetch ('http://localhost:9000/blogs/', {
      method:'Post',
      headers:{'content-type': 'application/json'},
      body:JSON.stringify(data)
  }).then(()=>{
    console.log('new blog has been added')
    history.push('/');
  })
  }

    return(
<Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="blog_title">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" required placeholder="Enter Tiltle"  onChange={handleChange} name='title'/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="body_post">
        <Form.Label>Enter Post</Form.Label>
        <Form.Control as="textarea" placeholder="Type Blog..." rows={3} onChange={handleChange} name="body" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="author">
        <Form.Label>Author</Form.Label>
        <Form.Control type="text" placeholder="Name Of The Author"  onChange={handleChange}/>
      </Form.Group>
    

      <Button variant="primary" type="submit">
        Save Blog
      </Button>
    </Form>
    );
};
  export default Create;