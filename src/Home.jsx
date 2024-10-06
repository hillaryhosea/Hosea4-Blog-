import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {

  const {data, error, loading} =useFetch('"http://localhost:8000/blogs"');


   

  return (
    <div className='content'>
    {error && <div> {error} </div>}
    {loading && <div> loading... </div>}
   { data && <BlogList blogs={data} title="All Blogs" /> }
    </div>
  )
}

export default Home;