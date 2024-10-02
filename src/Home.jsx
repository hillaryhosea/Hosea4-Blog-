import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';

function Home() {

    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);

    function handleDelete (id) {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }

    useEffect (()=>{
      const fetchData = async () =>{
        
        try{
          const response = await fetch ("http://localhost:8000/blogs");
          if (!response.ok){
            throw new Error("response was not ok");
            
          }
          const result = await response.json();
          setBlogs(result);
          
        } catch (error){
        setError(error)
        }
      }
      
      fetchData();
    },[]);
   

  return (
    <div className='content'>
   { blogs && <BlogList blogs={blogs} Title="All Blogs" handleDelete={handleDelete} /> }
    </div>
  )
}

export default Home;