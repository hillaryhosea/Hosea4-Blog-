import React, { useEffect, useState } from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

function Home() {
  const {datas, error, loading} =useFetch('http://localhost:8000/blogs');
   
  function handleDelete (id){
     const newDatas = datas.filter(data => data.id !== id );
  }

  return (
    <div className='content'>
    {error && <div> {error} </div>}
    {loading && <div> loading... </div>}
   { datas && <BlogList blogs={datas} title="All Blogs" handleDelete={handleDelete} /> }
    </div>
  )
}

export default Home;