import React, { useState } from 'react'
import BlogList from './BlogList';

function Home() {

    const [blogs, setBlogs] = useState([
        {Title:"Welcome to my site", Author:"Hosea", Content:"lorem ipsum", id:1},
        {Title:"Article writing", Author:" Hillary", Content:"lorem ipsum", id:2},
        {Title:"New progress update", Author:"Hosea", Content:"lorem ipsum", id:3}
    ])

    function handleDelete (id) {
      const newBlogs = blogs.filter(blog => blog.id !== id);
      setBlogs(newBlogs);
    }

   

  return (
    <div className='content'>
    <BlogList blogs={blogs} Title="All Blogs" handleDelete ={handleDelete}/>
    {/* <BlogList blogs={blogs.filter((blog)=>blog.Author === "Hosea")} Title="Hosea Blogs"/> */}
    </div>
  )
}

export default Home;