import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';

function Home() {

    const [blogs, setBlogs] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)

    function handleDelete (id) {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }

    useEffect (()=>{
    
      setTimeout(() => {
        const fetchData = async () =>{
        
          try{
            const response = await fetch ("http://localhost:8000/blogs");
            if (!response.ok){
              throw new Error("could not fetch data from the end point check the url and try again ");
              
            }
            const result = await response.json();
            setBlogs(result);
            setLoading(false)
            
          } catch (error){
          setError(error.message)
          console.log(error.message);
          
          setLoading(false)
          }
        }
      fetchData();

      }, 1000);
      
    },[]);
   

  return (
    <div className='content'>
    {error && <div> {error} </div>}
    {loading && <div> loading... </div>}
   { blogs && <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} /> }
    </div>
  )
}

export default Home;