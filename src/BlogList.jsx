import React from 'react'

function BlogList({blogs, title, handleDelete}) {
  return (
    <div className='blog-list'>
    <h2>{title}</h2>
    {
        blogs.map(blog=>(
            <div className='blog-preview' key={blog.id}>
                <h2>{ blog.title}</h2>
                <p>{blog.author}</p>
                <button> Delete Blog</button>
            </div>
        ))
    }
    </div>
  )
}

export default BlogList;
