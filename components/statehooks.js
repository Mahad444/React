import React, { useState } from "react";
const Counteer=() =>{
 const [count,setCount] =useState(0);


 const increment =() => {
    setCount(count +1);
 }
 
 
 const decrement=()=>{
    setCount(count -1);
 }

 return(
    <div><h3>this is my counter app</h3>
    <p>The Count is:{count}</p>
    
    <button onClick={increment}>Increment</button>
    <button onClick={decrement}>Decrement</button>
</div>
 );
 }

export default Counteer;
