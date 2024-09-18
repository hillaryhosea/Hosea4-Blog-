import React from 'react'

function BlogList({blogs, Title, handleDelete}) {
  return (
    <div className='blog-list'>
    <h2>{Title}</h2>
    {
        blogs.map((blog)=>(
            <div className='blog-preview' key={blog.id}>
                <h2>{ blog.Title}</h2>
                <p>{blog.Author}</p>
                <button onClick={() => handleDelete(blog.id)}> Delete Blog</button>
            </div>
        ))
    }
    </div>
  )
}

export default BlogList;