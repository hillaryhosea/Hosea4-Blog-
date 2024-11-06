import { useState } from "react";
import {useNavigate} from "react-router-dom"
const Creat = () => {

  const [title, setTitle] = useState('');
  const [ body, setBody] = useState('');
  const [ author, setAuthor] = useState ('Hosea');
  const [isloading, setIsloading] = useState(false)
  const navigate = useNavigate();
  
  function handleSubmit (e) {
      e.preventDefault();
      const blog = {title, body, author};
      setIsloading(true)

      fetch('http://localhost:8000/blogs', {
        method:'POST',
        headers:{'content-Type':'Application/json'},
        body: JSON.stringify(blog)
      }) .then(()=>{
        console.log('new blog');
        setIsloading(false)
        navigate("/")
      })
      
  }

  return (
    <div className="creat content">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label> Blog Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle (e.target.value)}
        />
        <label>Blog Body</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          required
        />
        <label>Blog Author</label>
        <select
          value={author}
          onChange={(e)=> setAuthor(e.target.value)}
        >
          <option value="Hosea">Hosea</option>
          <option value="Hillary">Hillary</option>
        </select>
        {!isloading && <button>Add Blog</button>}
        {isloading && <button disabled>Adding blog....</button>}
      </form>

    </div>
  );
};

export default Creat;
