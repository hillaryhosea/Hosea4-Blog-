import React, { useState } from 'react'
import BlogList from './BlogList';

function Home() {

    const [blogs, setBlog] = useState([
        {Title:"Welcome to my site", Author:" Hosea", Content:"lorem ipsum", id:1},
        {Title:"Article writing", Author:" Hillary", Content:"lorem ipsum", id:2},
        {Title:"New progress update", Author:"Creag", Content:"lorem ipsum", id:3}
    ])

  return (
    <div className='content'>
    <BlogList blogs={blogs} Title="All Blogs"/>
    </div>
  )
}

export default Home;